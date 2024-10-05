import { Router } from 'express';
import usersRouter from './users.js';

const router = Router();

router.get('/', (req, res) => {
	return res.status(200).send('Home Page');
});

router.use('/api/users', usersRouter);

export default router;
