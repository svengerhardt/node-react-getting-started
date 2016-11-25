let path = require("path");
let express = require("express");
let nunjucks = require("nunjucks");
let logger = require("backend/logger");

let app = express();

/* CONST */

const TEMPLATE_DIR = path.join(__dirname, "/templates");
const ENV = app.get('env');

/* TEMPLATE ENGINE */

app.set("views", TEMPLATE_DIR);
app.set("view engine", "html");

let nunjucks_env = nunjucks.configure(TEMPLATE_DIR, {
    autoescape: true,
    express: app
});

if (ENV === "development") {
    nunjucks_env.addGlobal("ENV_DEV", true);
} else {
    nunjucks_env.addGlobal("ENV_DEV", false);
}

/* ROUTES */

app.use("/", require("backend/routes/app"));
app.use("/public", express.static("public"));
app.use("/api", require("backend/routes/rest"));

logger.info("Environment: " + ENV);
module.exports = app;