import mongoose from 'mongoose';

const createReservation = {
	place: {
		isString: {
			errorMessage: 'Place must be a string',
		},
		notEmpty: {
			errorMessage: 'Place is required',
		},
	},
	price: {
		isNumeric: {
			errorMessage: 'Price must be a number',
		},
		notEmpty: {
			errorMessage: 'Price is required',
		},
	},
	workTime: {
		isNumeric: {
			errorMessage: 'Work time must be a number',
		},
		notEmpty: {
			errorMessage: 'Work time is required',
		},
	},
	deadline: {
		isString: {
			errorMessage: 'Deadline must be a date',
		},
		notEmpty: {
			errorMessage: 'Deadline is required',
		},
	},
};

export { createReservation };
