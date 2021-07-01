let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: String,
    email: {type: String, lowercase: true},
    age: {type: Number, min: 18, max: 50},
    sports: [String],
    marks: [Number]
}, {timestamps: true});

let User = mongoose.model('User', userSchema);

module.exports = User;