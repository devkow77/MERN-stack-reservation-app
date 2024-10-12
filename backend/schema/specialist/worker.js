import mongoose from 'mongoose';
import { serviceSchema } from './service.js';

export const workerSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	services: {
		type: [serviceSchema],
		default: [],
	},
});
