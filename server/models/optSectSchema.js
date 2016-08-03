import mongoose from "mongoose";

const Schema = mongoose.Schema;

const optSectSchema new Schema({
	class	: { type: String, required: true},
	bg		: { type: String, required: true},
	txt 	: { type: String, required: true }
});

const Section = mongoose.model('Section', optSectSchema);

////save optional schema array to temp var then push all in main schema  and .map array in the page