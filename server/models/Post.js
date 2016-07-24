import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title     : { type: String, required: true },
    text      : { type: String, required: true },
    createdAt : { type: Date }
});

const Post = mongoose.model('Post', PostSchema);