
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:   {type: String, required: true},
    email:  {type: String, required: true},
    pass:   {type: String, required: true},
    birth:  {type: Date, required: true},
    pfp:    {type: Uint8Array, required: true},
    locs:   [{type: String, required: true}],     // id array
    badges: [{type: String, required: true}],     // id array
});

module.exports = mongoose.model('User', userSchema);
