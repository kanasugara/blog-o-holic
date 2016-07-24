import mongoose from "mongoose";

import '../models/PostSchema';

const Post = mongoose.model('Post');

export function listPosts(id) {
    return Post.find();
}

export function createPost(data) {
    const post = new Post({
        title: data.title,
        text: data.text,
        createdAt: new Date()
    });

    return post.save();
}

export function deleteNote(id) {
    return Post.findById(id).remove();
}