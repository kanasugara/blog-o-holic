import mongoose from "mongoose";
import config from '../config.json';
import '../models/Post';

const Post = mongoose.model('Post');

export function setUpConnection() {
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}

export function listPosts(data) {
    return Post.find();
}
export function listOnePost(id) {
    return Post.findById(id);
}

export function editOnePost(id) {
    return Post.findById(id);
}

export function createPost(data) {
    const post = new Post({
        title: data.title,
        mainBg: data.mainBg,
        mainTxt: data.mainTxt,
        // optSection: optionalSections,
        createdAt: new Date()
    });
    return post.save();
}

export function deletePost(id) {
    return Post.findById(id).remove();
}