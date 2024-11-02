import mongoose from 'mongoose';
import { emailRegex } from '../config.js';

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true,
		min: 3,
		max: 15,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		match: [emailRegex, 'Invalid email'],
	},
	password: {
		type: String,
		required: true,
	},
	phoneNumber: {
		type: String,
		required: true,
		min: 9,
		max: 9,
	},
});

const User = mongoose.model('User', userSchema);

export default User;
