import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
	specialistId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
	},
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
	},
	date: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
});

const Reservation = mongoose.model('Reservation', reservationSchema);

export default Reservation;
