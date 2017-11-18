const router = require("express").Router();

let User = require("../models/user");

router.post("/add", (req, res) => {
    let user = new User();
    console.log("\n\n\n" + req.body + "\n\n\n");
    user._id = req.body.name;
    user.name = req.body.name;
    user.password = req.body.password;

    console.log(user.body);

    user.save((err) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect("/");
        }
    })
});

router.get("/user/:id", (req, res) => {
    User.findById(req.params.id, (err, data) => {
        console.log(data.body);
        res.send(data);
    });
});

module.exports = router;