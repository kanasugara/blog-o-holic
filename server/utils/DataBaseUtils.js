import mongoose from "mongoose";

import '../models/Post';

const Post = mongoose.model('Post');

export function setUpConnection() {
    mongoose.connect(`mongodb://localhost/notes`);
}

export function listPosts(id) {
    return Post.find();
}

export function createPost(data) {
    const post = new Post({
        title: data.title,
        mainBg: data.mainBg,
        mainTxt: data.mainTxt,
        optSection: optionalSections,
        createdAt: new Date()
    });

    optArray = [];

    return post.save();

}

export function deleteNote(id) {
    return Post.findById(id).remove();
}