import mongoose from "mongoose";
import config from '../config.json';
import '../models/Post';

const Post = mongoose.model('Post');

export function setUpConnection() {
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}

export function listPosts(data) {
    return Post.find().sort({ createdAt: -1 });
}
export function listOnePost(id) {
    return Post.findById(id);
}
export function editOnePost(id) {
    return Post.findById(id);
}
export function saveEditedPost(newData) {
    const editedPost = {         
        title: newData.title,
        mainBg: newData.mainBg,
        mainTxt: newData.mainTxt,
        editedAt: new Date()
    };
    return Post.findOneAndUpdate({ _id : newData.id }, { $set: editedPost });
}
export function createPost(data) {
    const post = new Post({
        title: data.title,
        mainBg: data.mainBg,
        mainTxt: data.mainTxt,
        createdAt: new Date()
    });
    return post.save();
}

export function deletePost(id) {
    return Post.findById(id).remove();
}