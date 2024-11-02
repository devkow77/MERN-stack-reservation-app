import mongoose from 'mongoose';

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
	price: {
		type: Number,
		required: true,
	},
});

const Specialist = mongoose.model('Specialist', specialistSchema);

export default Specialist;
