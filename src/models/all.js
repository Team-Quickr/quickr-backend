
const mongoose = require('mongoose');

// User
const userSchema = new mongoose.Schema({
    name:   {type: String, required: true, trim: true},
    email:  {type: String, required: true, trim: true},
    pass:   {type: String, required: true, trim: true},
    birth:  {type: String, required: true, trim: true},
    pfp:    [{type: Number, required: true, trim: true}],
    locs:   [{type: String, required: true, trim: true}],     // id array
    badges: [{type: String, required: true, trim: true}],     // id array
});

// Location
const locationSchema = new mongoose.Schema({
    name:   {type: String, required: true, trim: true},
    lat:    {type: Number, required: true},
    lng:    {type: Number, required: true},
    lcnt:   {type: String, required: true, trim: true},
    scnt:   {type: String, required: true, trim: true},
    type:   {type: Number, required: true, trim: true},
    img:    {type: String, required: true},
});

// Badge
const BadgeSchema = new mongoose.Schema({
    name:       {type: String, required: true, trim: true},
    type:       {type: Number, required: true},
    max:        {type: Number, required: true},
    current:    {type: Number, required: true},
});

const User = mongoose.model("User", userSchema);
const Location = mongoose.model("Location", locationSchema);
const Badge = mongoose.model("Badge", BadgeSchema);

module.exports = { User, Location, Badge };
