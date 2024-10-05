const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

const createUser = {
	email: {
		isEmail: {
			errorMessage: 'Invalid email',
		},
		normalizeEmail: true,
	},
	username: {
		isString: {
			errorMessage: 'Invalid username',
		},
		isLength: {
			options: {
				min: 3,
				max: 15,
			},
			errorMessage: 'Username must be between 3 and 15 characters',
		},
	},
	password: {
		isString: {
			errorMessage: 'Username must be between 3 and 15 characters',
		},
		matches: {
			options: passwordRegex,
			errorMessage: 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter and one number',
		},
	},
};

export { createUser };
