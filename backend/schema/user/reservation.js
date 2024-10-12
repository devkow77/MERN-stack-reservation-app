import mongoose from 'mongoose';

export const reservationSchema = new mongoose.Schema({
	specialist: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
	service: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	date: {
		type: Date,
		required: true,
	},
	realised: {
		type: Boolean,
		default: false,
	},
});
