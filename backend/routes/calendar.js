import { Router } from 'express';
import Calendar from '../schema/calendar.js';
import { checkDataValidation, checkAuthSession } from '../middlewares/index.js';
import { checkSchema } from 'express-validator';
import { addNewDay, createCalendar } from '../validators/calendar.js';

const router = Router();

// Create new calendar
router.post('/create', checkAuthSession, checkSchema(createCalendar), checkDataValidation, async (req, res) => {
	const {
		data,
		session: {
			user: { _id },
		},
	} = req;

	try {
		const calendarExist = await Calendar.findOne({ specialistId: _id });
		if (calendarExist) throw new Error('You already have a calendar! To create a new one, please delete your old one!');

		const newCalendar = new Calendar(data);
		await newCalendar.save();

		return res.status(200).send(newCalendar);
	} catch (err) {
		return res.status(400).send(err.message);
	}
});

// Add new day to calendar
router.patch('/add', checkAuthSession, checkSchema(addNewDay), checkDataValidation, async (req, res) => {
	const {
		data,
		session: {
			user: { _id },
		},
	} = req;

	try {
		const updatedCalendar = await Calendar.findOneAndUpdate({ specialistId: '671e9b3fb9e045e0d78ae9d6' }, { $push: { data: data } }, { new: true });

		if (!updatedCalendar) throw new Error('Operation not allowed! Calendar not found!');

		return res.status(200).send(updatedCalendar);
	} catch (err) {
		return res.status(400).send(err.message);
	}
});

router.patch('/update', checkAuthSession, async (req, res) => {
	return res.status(200).send('update calendar');
});

// delete calendar by specialist id
router.delete('/delete/:id', checkAuthSession, async (req, res) => {
	const {
		params: { id },
	} = req;
	try {
		const findCalendar = await Calendar.findOne({ specialistId: id });
		if (!findCalendar) throw new Error('Cannot delete! Calendar not found!');

		await findCalendar.deleteOne();

		return res.status(200).send('Calendar has been deleted!');
	} catch (err) {
		return res.status(200).send(err.message);
	}
});

export default router;
