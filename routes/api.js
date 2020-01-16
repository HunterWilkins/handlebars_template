let db = require("../models");

module.exports = function(app) {
    app.get("/api/users/all", function(req, res) {
        db.User.find({}).then(function(dbUser) {
            res.json(dbUser);
        }).catch(err => console.log(err));
    });

    app.post("/api/users/new", function(req, res) {
        db.User.create(req.body).then(function(dbUser) {
            res.json(dbUser);
        }).catch(err => console.log(err));
    });

    app.put("/api/users/update", function(req, res) {
        db.User.findOneAndUpdate({
            id : req.body.id 
        }, {[req.body.field] : req.body.value}).then(function(dbUser) {
            res.json(dbUser);
        }).catch(err => console.log(err));
    });

    app.delete("/api/users/delete", function(req, res) {
        db.User.deleteOne({
            id: req.body.id
        }).then(function(dbUser) {
            res.json(dbUser);
        }).catch(err => console.log(err));
    });
}