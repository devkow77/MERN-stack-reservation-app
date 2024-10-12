import mongoose from 'mongoose';

export const serviceSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	workTime: {
		type: Number,
		required: true,
	},
});
