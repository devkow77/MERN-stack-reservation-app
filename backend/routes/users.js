import { Router } from 'express';
import { validationResult, matchedData, checkSchema } from 'express-validator';
import { createUser, loginUser } from '../validators/users.js';
import User from '../schema/user.js';

const router = Router();

router.post('/auth/register', checkSchema(createUser), async (req, res) => {
	const result = validationResult(req);

	if (!result.isEmpty()) {
		return res.status(400).send({ errors: result.array() });
	}

	const data = matchedData(req);

	try {
		const findUserByEmail = await User.findOne({ email: data.email });
		if (findUserByEmail) throw new Error('Email already in use!');

		const findUserByUsername = await User.findOne({ username: data.username });
		if (findUserByUsername) throw new Error('Username already in use!');

		const newUser = new User(data);
		await newUser.save();

		return res.status(200).send(newUser);
	} catch (err) {
		return res.status(400).send(err.message);
	}
});

router.post('/auth/login', checkSchema(loginUser), async (req, res) => {
	const result = validationResult(req);

	if (!result.isEmpty()) {
		return res.status(400).send({ errors: result.array() });
	}

	const data = matchedData(req);

	try {
		const findUser = await User.findOne({ email: data.email });
		if (!findUser) throw new Error('User with provided email not exist!');

		if (findUser.password !== data.password) throw new Error('Wrong password!');

		req.session.user = findUser;

		return res.status(200).send(findUser);
	} catch (err) {
		return res.status(400).send(err.message);
	}
});

router.get('/auth/status', (req, res) => {
	return req.session.user ? res.status(200).send(req.session) : res.status(400).send('No auth cookie!');
});

router.get('/auth/logout', (req, res) => {
	if (!req.session.user) {
		return res.status(400).send('You must be logged in first!');
	}

	return res.clearCookie('connect.sid').status(200).send('You has been logged out!');
});

export default router;
