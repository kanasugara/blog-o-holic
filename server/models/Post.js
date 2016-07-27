import mongoose from "mongoose";

const Schema = mongoose.Schema;

const	optSectSchema new Schema({
	class	: { type: String, required: true},
	bg		: { type: String, required: true},
	txt 	: { type: String, required: true }
});

const PostSchema = new Schema({
	title		: { type: String, required: true },
	mainBg		: { type: String, required: true},
	mainTxt		: { type: String, required: true },
	optSection	: { type: Array},  //bg1 - img, text, bg2 - color, text bg3 - img.... ////
	createdAt	: { type: Date }
});

const Section = mongoose.model('Section', optSectSchema);
const Post = mongoose.model('Post', PostSchema);

////save optional schema array to temp var then push all in main schema  and .map array in the page