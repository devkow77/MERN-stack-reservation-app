import mongoose from 'mongoose';
import { emailRegex, passwordRegex } from '../config.js';

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true,
		match: [emailRegex, 'Please fill a valid email address'],
	},
	username: {
		type: String,
		required: true,
		unique: true,
		min: 3,
		max: 15,
	},
	password: {
		type: String,
		required: true,
		match: [passwordRegex, 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter and one number'],
	},
});

const User = mongoose.model('User', userSchema);

export default User;
