const router = require("express").Router();

router.route("/").get(function (req, res, next) {
    res.send({
        title: "GeeksforGeeks",
    });
});

module.exports = router;
