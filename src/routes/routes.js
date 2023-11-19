
const express = require('express');
const router = express.Router();
const models = require("../models/all");

// Sign up
router.post("/api/signup", async (req, res) => {
    try {
        const {name, email, pass, birth, pfp, locs, badges} = req.body;
        let user = new models.User({name, email, pass, birth, pfp, locs, badges});
        user = await user.save();
        res.json(user);
    } catch(err) { res.status(500).json({error: err.message}); }
});

// Sign in
router.post("/api/signin", async (req, res) => {
    try {
        const {email, pass} = req.body;
        const user = await models.User.findOne({email});

        if(!user)
            return res.status(400).json({msg: "User with this email doesn't exist"});
        if(pass != user.pass)
            return res.status(400).json({msg: "Incorrect password"});

        res.json(user);
    } catch(err) { res.status(500).json({error: err.message}); }
});

// Location get from id
router.get("/api/loc_get", async (req, res) => {
    try {
        const { _id } = req.body;
        const loc = await models.Location.findOne({_id});

        if(!loc)
            return res.status(400).json({msg: "Location doesn't exit"});
        
        res.json(loc);
    } catch(err) { res.status(500).json({error: err.message}); }
});

// Locations get all
router.get("/api/loc_getall", async (req, res) => {
    res.json(await models.Location.find({}));
});

// Badge get from id
router.get("/api/badge_get", async (req, res) => {
    try {
        const { _id } = req.body;
        const badge = await models.Badge.findOne({_id});

        if(!badge)
            return res.status(400).json({msg: "Badge doesn't exit"});
        
        res.json(badge);
    } catch(err) { res.status(500).json({error: err.message}); }
});

// Badges get all
router.get("/api/badge_getall", async (req, res) => {
    res.json(await models.Badge.find({}));
});

/**
 * 
 * // Location get from radius, origin and radius
    router.get("/api/loc_inradius", async (req, res) => {
        try{
            const { olat, olng, radius } = req.body;
        
            const query = {
                lat: { $lte: olat + radius * 0.009 },
                lng: { $lte: olng + radius * 0.013 }
            };

            res.json(await models.Location.find(query));
            
        } catch(err) { res.status(500).json({error: err.message}); }
    });
 * 
 */

// Secret api
router.post("/api/secret/addloc", async (req, res) => {
    try {
        const {name, lat, lng, lcnt, scnt, type, img} = req.body;
        let loc = new models.Location({name, lat, lng, lcnt, scnt, type, img});
        loc = await loc.save();
        res.json(loc);
    } catch(err) { res.status(500).json({error: err.message}); }
});

module.exports = router;
