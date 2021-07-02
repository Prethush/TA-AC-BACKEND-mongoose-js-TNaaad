let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let articleSchema = new Schema({
    title: {type: String, uppercase: true, required: true},
    description: {type: String, lowercase: true, required: true},
    tags: [String],
    likes: {type: Number, default: 0},
    author: Schema.Types.ObjectId,
    comments: String
}, {timestamps: true});

module.exports = mongoose.model('Article', articleSchema);