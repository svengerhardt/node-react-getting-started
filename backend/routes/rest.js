let express = require("express");
let request = require("request-promise");

let router = express.Router();

router.get("/stickers/:query", (req, res) => {

    var options = {
        uri: "http://api.giphy.com/v1/stickers/search?q=" + req.params.query + "&api_key=dc6zaTOxFJmzC",
        json: true
    };

    request(options).then(result => res.status(200).json(result)).catch((error) => {
        return res.status(error.statusCode).json(error);
    });

});

module.exports = router;