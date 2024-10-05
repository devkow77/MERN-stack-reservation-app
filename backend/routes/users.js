import { Router } from 'express';
import { validationResult, matchedData, body, checkSchema } from 'express-validator';
import users from '../data.js';
import { createUser } from '../validators/users.js';

const router = Router();

router.post('/auth/register', checkSchema(createUser), (req, res) => {
	const result = validationResult(req);

	if (!result.isEmpty()) {
		return res.status(400).send({ errors: result.array() });
	}

	const data = matchedData(req);

	try {
		const findUserByEmail = users.find((user) => user.email === data.email);
		if (findUserByEmail) throw new Error('Email already in use!');

		const findUserByUsername = users.find((user) => user.username === data.username);
		if (findUserByUsername) throw new Error('Username already in use!');

		users.push({ id: users.length, ...data });
		return res.status(200).send(users);
	} catch (err) {
		return res.status(400).send(err.message);
	}
});

router.post('/auth/login', checkSchema(createUser), (req, res) => {
	const result = validationResult(req);

	if (!result.isEmpty()) {
		return res.status(400).send({ errors: result.array() });
	}

	const data = matchedData(req);

	try {
		const findUser = users.find((user) => user.email === data.email && user.password === data.password);
		if (!findUser) throw new Error('User with provided credentialts not exist!');

		if (findUser.password !== data.password) throw new Error('Wrong password!');

		req.session.user = findUser;

		return res.status(200).send(findUser);
	} catch (err) {
		return res.status(400).send(err);
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
