import { Router } from 'express';
import { checkSchema } from 'express-validator';
import { createReservation } from '../validators/reservations.js';
import User from '../schema/user/user.js';
import { checkAuthSession, checkDataValidation } from '../middlewares/index.js';

const router = Router();

// Show all user reservations
router.get('/', checkAuthSession, async (req, res) => {
	try {
		const findReservations = await User.findById(req.session.user._id).populate('reservations');

		if (!findReservations) throw new Error('Something went wrong, cannot find reservations!');

		return res.status(200).send({ data: findReservations.reservations });
	} catch (err) {
		return res.status(400).send({ msg: err.message });
	}
});

// Create new reservation
router.post('/', checkAuthSession, checkSchema(createReservation), checkDataValidation, async (req, res) => {
	const {
		data,
		session: {
			user: { _id },
		},
	} = req;

	try {
		const newReservation = await User.findByIdAndUpdate(_id, {
			$push: { reservations: { ...data, deadline: new Date(data.deadline) } },
		});

		if (!newReservation) throw new Error('Something went wrong, cannot create reservation!');

		await newReservation.save();
		return res.status(200).send({ msg: 'Reservation has been created!', data: newReservation });
	} catch (err) {
		return res.status(400).send({ msg: err.message });
	}
});

// Delete reservation
router.delete('/:id', checkAuthSession, async (req, res) => {
	const {
		params: { id },
	} = req;

	try {
		const findUser = await User.findById(req.session.user._id);
		findUser.reservations = findUser.reservations.filter((reservation) => reservation._id.toString() !== id);

		const updatedUser = await findUser.save();

		if (!findUser) throw new Error('Something went wrong, cannot find user!');

		return res.status(200).send({ msg: 'Reservation has been deleted!', data: updatedUser.reservations });
	} catch (err) {
		return res.status(400).send({ msg: err.message });
	}
});

// Update reservation
router.patch('/:id', checkAuthSession, async (req, res) => {
	const {
		params: { id },
		session: {
			user: { _id },
		},
	} = req;

	try {
		const findUser = await User.findById(_id);
		if (!findUser) throw new Error('Something went wrong, cannot find user!');

		const findReservation = findUser.reservations.find((reservation) => reservation._id.toString() === id);
		if (!findReservation) throw new Error('Something went wrong, cannot find reservation!');

		findReservation.date = new Date(req.body.date);
		const updateUser = await findUser.save();

		return res.status(200).send({ msg: 'Update reservation', data: updateUser.reservations });
	} catch (err) {
		return res.status(400).send({ msg: err.message });
	}
});

export default router;
