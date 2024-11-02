const createCalendar = {
	specialistId: {
		isString: {
			errorMessage: 'Invalid specialist id',
		},
		notEmpty: {
			errorMessage: 'Specialist id is required',
		},
	},
	data: {
		isArray: {
			errorMessage: 'Invalid data',
		},
		notEmpty: {
			errorMessage: 'Data is required',
		},
		items: {
			date: {
				isString: {
					errorMessage: 'Invalid date',
				},
			},
			workHours: {
				isArray: {
					errorMessage: 'Invalid work hour',
				},
				items: {
					isString: {
						errorMessage: 'Invalid work hour',
					},
				},
			},
			reservedHours: {
				isArray: {
					errorMessage: 'Invalid reserved hour',
				},
				items: {
					isString: {
						errorMessage: 'Invalid reserved hour',
					},
				},
			},
		},
	},
};

const addNewDay = {
	date: {
		isString: {
			errorMessage: 'Invalid date',
		},
		notEmpty: {
			errorMessage: 'Date is required',
		},
	},
	workHours: {
		isArray: {
			errorMessage: 'Invalid work hour, must be array',
		},
		items: {
			isString: {
				errorMessage: 'Invalid work hour, must be string',
			},
		},
		notEmpty: {
			errorMessage: 'Work hours is required',
		},
	},
};

export { createCalendar, addNewDay };
