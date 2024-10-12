const createReservation = {
	specialist: {
		isString: {
			errorMessage: 'Specialist must be a string',
		},
		notEmpty: {
			errorMessage: 'Specialist is required',
		},
	},
	address: {
		isString: {
			errorMessage: 'Address must be a string',
		},
		notEmpty: {
			errorMessage: 'Address is required',
		},
	},
	service: {
		isString: {
			errorMessage: 'Service must be a string',
		},
		notEmpty: {
			errorMessage: 'Service is required',
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
	date: {
		isString: {
			errorMessage: 'Date must be a date',
		},
		notEmpty: {
			errorMessage: 'Date is required',
		},
	},
};

export { createReservation };
