import { Router } from 'express';
import { createSpecialist } from '../validators/specialist.js';
import { checkDataValidation } from '../middlewares/index.js';
import { checkSchema } from 'express-validator';
import Specialist from '../schema/specialist.js';

const router = Router();

router.get('/', async (req, res) => {
	try {
		const specialists = await Specialist.find();
		if (!specialists) throw new Error('No specialists found!');
		return res.status(200).send(specialists);
	} catch (err) {
		return res.status(400).send(err.message);
	}
});

router.post('/create', checkSchema(createSpecialist), checkDataValidation, async (req, res) => {
	const { data } = req;

	try {
		const findSpecialistByName = await Specialist.findOne({ name: data.name });
		if (findSpecialistByName) throw new Error('Specialist with provided name already exist!');

		const findSpecialistByAddress = await Specialist.findOne({ address: data.address });
		if (findSpecialistByAddress) throw new Error('Specialist with provided address already exist!');

		const findSpecialistByPhoneNumber = await Specialist.findOne({ phoneNumber: data.phoneNumber });
		if (findSpecialistByPhoneNumber) throw new Error('Specialist with provided phone number already exist!');

		const newSpecialist = new Specialist(data);
		await newSpecialist.save();

		return res.status(200).send(newSpecialist);
	} catch (err) {
		return res.status(400).send(err.message);
	}
});

router.delete('/:id', async (req, res) => {
	const {
		params: { id },
	} = req;

	try {
		const findSpecialist = await Specialist.findById(id);
		if (!findSpecialist) throw new Error('Specialist not found!');

		await Specialist.findByIdAndDelete(id);
		return res.status(200).send('Specialist has been deleted!');
	} catch (err) {
		return res.status(400).send(err.message);
	}
});

export default router;
