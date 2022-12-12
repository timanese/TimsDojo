// use express router to create a router 
const router = require('express').Router();
let User = require('../models/user.model');

// get request route
// Using find function from mongoose, it will get all user object and return it in a json
router.route('/').get((req, res) => {
    User.find().then(users => res.json(users)).catch(err => res.status(400).json('Error: ' + err))
});


// post request
// used to add a user to the mongoDB
router.route('/add').post((req, res) => {
    const username = req.body.username;


    const newUser = new User({ username });

    // Save user to the database mongoDB Atlas db
    newUser.save().then(() => res.json("User added!")).catch(() => res.status(400).json('Error: ' + err));
});

module.exports = router;
