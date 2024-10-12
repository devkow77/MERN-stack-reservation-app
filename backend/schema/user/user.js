import mongoose from 'mongoose';
import { emailRegex } from '../../config.js';
import { reservationSchema } from './reservation.js';

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
		match: [emailRegex, 'Please fill a valid email address'],
	},
	password: {
		type: String,
		required: true,
	},
	phoneNumber: {
		type: String,
		required: true,
		unique: true,
		min: 9,
		max: 9,
	},
	reservations: {
		type: [reservationSchema],
		default: [],
	},
	favourites: {
		type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Specialist' }],
		default: [],
	},
});

const User = mongoose.model('User', userSchema);

export default User;
