import mongoose from 'mongoose';
import { workerSchema } from './worker.js';

const specialistSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	address: {
		type: String,
		required: true,
		unique: true,
	},
	phoneNumber: {
		type: String,
		required: true,
		unique: true,
		min: 9,
		max: 9,
	},
	workers: {
		type: [workerSchema],
		default: [],
	},
});

const Specialist = mongoose.model('Specialist', specialistSchema);

export default Specialist;
