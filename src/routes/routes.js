
const express = require('express');
const router = express.Router();
const User = require("../models/users");

// GET, PUT, POST, DELETE, UPDATE -> CRUD
// res.json() instead of res.send()

// Api
router.get("/api/users", (req, res) => res.send('All Users'));

// Sign up
router.post("/api/signup", async (req, res) => {
    try {
        const {name, email, pass, birth, pfp, locs, badges} = req.body;
        let user = new User({name, email, pass, birth, pfp, locs, badges});
        user = await user.save();
        res.json(user);
    } catch(err) {
        res.status(500).json({error: err.message});
    }
});

// Sign in
router.post("/api/signin", async (req, res) => {
    try {
        const {email, pass} = req.body;
        const user = await User.findOne({email});

        if(!user)
            return res.status(400).json({msg: "User with this email doesn't exist"});
        if(pass != user.pass)
            return res.status(400).json({msg: "Incorrect password"});

        res.json(user);
    } catch(err) {
        res.status(500).json({error: err.message});
    }
});

module.exports = router;
