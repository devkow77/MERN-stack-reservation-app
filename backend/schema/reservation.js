import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
	place: {
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
	deadline: {
		type: String,
		required: true,
	},
});

const Reservation = mongoose.model('Reservation', reservationSchema);

export default Reservation;
