import mongoose from 'mongoose';

const daySchema = new mongoose.Schema({
	date: {
		type: String,
		required: true,
	},
	workHours: {
		type: [String],
		required: true,
	},
	reservedHours: {
		type: [String],
		default: [],
	},
});

const calendarSchema = new mongoose.Schema({
	specialistId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		unique: true,
	},
	data: {
		type: [daySchema],
		default: [],
	},
});

const Calendar = mongoose.model('Calendar', calendarSchema);

export default Calendar;
