const createSpecialist = {
	name: {
		isString: {
			errorMessage: 'Invalid name',
		},
		notEmpty: {
			errorMessage: 'Name is required',
		},
	},
	address: {
		isString: {
			errorMessage: 'Invalid address',
		},
		notEmpty: {
			errorMessage: 'Address is required',
		},
	},
	phoneNumber: {
		isString: {
			errorMessage: 'Invalid phone number',
		},
		notEmpty: {
			errorMessage: 'Phone number is required',
		},
		isLength: {
			options: {
				min: 9,
				max: 9,
			},
			errorMessage: 'Phone number must be 9 digits',
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

export { createSpecialist };
