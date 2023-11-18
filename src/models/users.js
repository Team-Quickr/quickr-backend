
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:   {type: String, required: true, trim: true},
    email:  {type: String, required: true, trim: true},
    pass:   {type: String, required: true, trim: true},
    birth:  {type: String, required: true, trim: true},
    pfp:    [{type: Number, required: true, trim: true}],
    locs:   [{type: String, required: true, trim: true}],     // id array
    badges: [{type: String, required: true, trim: true}],     // id array
});

const User = mongoose.model("User", userSchema);
module.exports = User;
