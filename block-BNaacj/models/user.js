let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: String,
    email: {type: String, lowercase: true},
    age: {type: Number, default: 18},
    password: {type: String, minlength: 5, maxlength: 15},
    createdAt: {type: Date, default: new Date()}
}, {timestamps: true});