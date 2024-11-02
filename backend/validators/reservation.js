const createReservation = {
	specialistId: {
		isString: {
			errorMessage: 'Invalid specialist id',
		},
		notEmpty: {
			errorMessage: 'Specialist id is required',
		},
	},
	userId: {
		isString: {
			errorMessage: 'Invalid user id',
		},
		notEmpty: {
			errorMessage: 'User id is required',
		},
	},
	date: {
		isString: {
			errorMessage: 'Invalid date',
		},
		notEmpty: {
			errorMessage: 'Date is required',
		},
	},
	price: {
		isNumeric: {
			errorMessage: 'Invalid price',
		},
		notEmpty: {
			errorMessage: 'Price is required',
		},
	},
};

export { createReservation };
