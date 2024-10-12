import { validationResult, matchedData } from 'express-validator';

const checkDataValidation = (req, res, next) => {
	const result = validationResult(req);

	if (!result.isEmpty()) {
		return res.status(400).send({ errors: result.array() });
	}

	const data = matchedData(req);
	req.data = data;

	next();
};

export default checkDataValidation;
