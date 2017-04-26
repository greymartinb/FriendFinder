const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


app.listen(process.env.PORT || 9001, function() {
	process.env.PORT == undefined? console.log("App listening on Port 9001"):console.log("App listening on PORT: " + process.env.PORT);
});