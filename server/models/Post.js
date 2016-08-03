import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PostSchema = new Schema({
	title		: { type: String, required: true },
	mainBg		: { type: String, required: true},
	mainTxt		: { type: String, required: true },
	optSection	: { type: Array},  //bg1 - img, text, bg2 - color, text bg3 - img.... ////
	createdAt	: { type: Date }
});


const Post = mongoose.model('Post', PostSchema);