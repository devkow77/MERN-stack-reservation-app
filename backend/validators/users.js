import { passwordRegex } from '../config.js';

const createUser = {
	email: {
		isEmail: {
			errorMessage: 'Invalid email',
		},
		normalizeEmail: true,
		notEmpty: {
			errorMessage: 'Email is required',
		},
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
		notEmpty: {
			errorMessage: 'Username is required',
		},
	},
	password: {
		isString: true,
		matches: {
			options: passwordRegex,
			errorMessage: 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter and one number',
		},
		notEmpty: {
			errorMessage: 'Password is required',
		},
	},
};

const loginUser = {
	email: {
		isEmail: {
			errorMessage: 'Invalid email',
		},
		normalizeEmail: true,
		notEmpty: {
			errorMessage: 'Email is required',
		},
	},
	password: {
		isString: true,
		notEmpty: {
			errorMessage: 'Password is required',
		},
	},
};

export { createUser, loginUser };
