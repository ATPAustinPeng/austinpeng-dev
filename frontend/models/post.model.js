const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: { type: String, required: true }, // title of the blog
    description: { type: String, required: true }, // short sentence description
    content: { type: String, required: true }, // markdown content
    date: { type: String, required: true }, // will be of the form mm/dd/yy/hh/mm/ss, posts will not necessarily use all the data
    lengthOfRead: { type: Number, required: true }, // a single number in minutes
    tags: { type: [String], required: true }, // all tags begin with a hashtag
}, {
    timestamps: true,
});

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

module.exports = Post;
