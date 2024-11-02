import { Router } from 'express';
import { checkSchema } from 'express-validator';
import { createUser, loginUser } from '../validators/user.js';
import User from '../schema/user.js';
import { hashPassword, comparePasswords } from '../utils/bcrypt.js';
import { checkDataValidation } from '../middlewares/index.js';

const router = Router();

// Create new user
router.post('/create', checkSchema(createUser), checkDataValidation, async (req, res) => {
	const { data } = req;

	try {
		const findUserByEmail = await User.findOne({ email: data.email });
		if (findUserByEmail) throw new Error('Email already in use!');

		const findUserByUsername = await User.findOne({ username: data.username });
		if (findUserByUsername) throw new Error('Username already in use!');

		const newUser = new User(data);
		newUser.password = await hashPassword(data.password);
		await newUser.save();

		return res.status(200).send(newUser);
	} catch (err) {
		return res.status(400).send(err.message);
	}
});

// Login
router.post('/signin', checkSchema(loginUser), checkDataValidation, async (req, res) => {
	const { data } = req;

	try {
		const findUser = await User.findOne({ email: data.email });
		if (!findUser) throw new Error('User with provided email not exist!');

		if (!comparePasswords(data.password, findUser.password)) throw new Error('Wrong password!');

		req.session.user = findUser;

		return res.status(200).send(findUser);
	} catch (err) {
		return res.status(400).send(err.message);
	}
});

// Get auth status
router.get('/auth/status', (req, res) => {
	return req.session.user ? res.status(200).send(req.session) : res.status(400).send('No auth cookie!');
});

// Logout
router.get('/auth/logout', (req, res) => {
	if (!req.session.user) {
		return res.status(400).send('You must be logged in first!');
	}

	return res.clearCookie('connect.sid').status(200).send('You has been logged out!');
});

export default router;
