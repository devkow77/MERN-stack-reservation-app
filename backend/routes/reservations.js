import { Router } from 'express';
import { validationResult, matchedData, checkSchema } from 'express-validator';
import { createReservation } from '../validators/reservations.js';
import Reservation from '../schema/reservation.js';

const router = Router();

// Show all user reservations
router.get('/', async (req, res) => {
	if (!req.session.user) {
		return res.status(400).send({ msg: 'You must be logged in first!' });
	}

	try {
		const findReservations = await Reservation.find({ userId: req.session.user._id });

		if (!findReservations) throw new Error('Something went wrong, cannot find reservations!');

		return res.status(200).send({ data: findReservations });
	} catch (err) {
		return res.status(400).send({ msg: err.message });
	}
});

// Create new reservation
router.post('/', checkSchema(createReservation), async (req, res) => {
	if (!req.session.user) {
		return res.status(400).send({ msg: 'You must be logged in first!' });
	}

	const result = validationResult(req);

	if (!result.isEmpty()) {
		return res.status(400).send({ errors: result.array() });
	}

	const data = matchedData(req);

	try {
		const newReservation = await new Reservation({ ...data, userId: req.session.user._id, deadline: new Date(data.deadline) });

		if (!newReservation) throw new Error('Something went wrong, cannot create reservation!');

		await newReservation.save();
		return res.status(200).send({ msg: 'Reservation has been created!', data: newReservation });
	} catch (err) {
		return res.status(400).send({ msg: err.message });
	}
});

// Delete reservation
router.delete('/:id', async (req, res) => {
	if (!req.session.user) {
		return res.status(400).send({ msg: 'You must be logged in first!' });
	}

	const {
		params: { id },
	} = req;

	try {
		const findReservation = await Reservation.findByIdAndDelete(id);

		if (!findReservation) throw new Error('Something went wrong, cannot delete reservation!');

		return res.status(400).send({ msg: 'Reservation has been deleted!', data: findReservation });
	} catch (err) {
		return res.status(400).send({ msg: err.message });
	}
});

// Update reservation
router.patch('/:id', async (req, res) => {
	if (!req.session.user) {
		return res.status(400).send({ msg: 'You must be logged in first!' });
	}

	const {
		params: { id },
	} = req;

	try {
		const updateReservation = await Reservation.findByIdAndUpdate(id, req.body);

		if (!updateReservation) {
			throw new Error('Something went wrong, cannot update reservation!');
		}

		return res.status(200).send({ msg: 'Update reservation', data: updateReservation });
	} catch (err) {
		return res.status(400).send({ msg: err.message });
	}
});

export default router;
