const express = require("express");
const app = express();

const xsenv = require("@sap/xsenv");
const xssec = require("@sap/xssec");
const passport = require("passport");

const services = xsenv.getServices({
    uaa: { tag: "xsuaa" }
});

passport.use("JWT", new xssec.JWTStrategy(services.uaa));
app.use(passport.initialize());
app.use(passport.authenticate("JWT", {
    session: false
}));

const { retrieveJwt } = require("@sap/cloud-sdk-core");

const { Candidate } = require("./generated/sfo-data-service");

function getCandidates(req) {
    return Candidate.requestBuilder()
        .getAll()
        .filter(Candidate.COUNTRY.equals('US'), Candidate.ZIP.notEquals(null))
        .select(Candidate.FIRST_NAME, Candidate.LAST_NAME, Candidate.CITY, Candidate.ZIP)
        .execute({
            destinationName: process.env.apiDest,
            jwt: retrieveJwt(req)
        });
};

app.get("/", function (req, res) {
    res.status(200).send('<html><head></head><body><a href="/srv/candidates">Candidates</a></body></html>');
});

app.get("/srv/candidates", function (req, res) {
    if (req.authInfo.checkScope("uaa.user")) {
        getCandidates(req)
            .then(candidates => {
                res.status(200).json(candidates);
            })
            .catch(error => {
                res.status(500).send(error.message);
            });
    } else {
        res.type("text/plain").status(403).send("Unauthorized");
    }
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.info("Listening on http://localhost:" + port);
});
