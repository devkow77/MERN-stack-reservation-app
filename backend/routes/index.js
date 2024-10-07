import { Router } from 'express';
import usersRouter from './users.js';
import reservationsRouter from './reservations.js';

const router = Router();

router.get('/', (req, res) => {
	return res.status(200).send('Home Page');
});

router.use('/api/users', usersRouter);
router.use('/api/reservations', reservationsRouter);

export default router;
