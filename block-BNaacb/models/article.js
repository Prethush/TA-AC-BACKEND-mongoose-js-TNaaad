let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let article = new Schema({
    title: String,
    author: String,
    published: Date,

});