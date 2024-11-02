import { Router } from 'express';
import usersRouter from './users.js';
import reservationsRouter from './reservations.js';
import specialistRouter from './specialist.js';
import calendarRouter from './calendar.js';

const router = Router();

router.get('/', (req, res) => {
	return res.status(200).send('Home Page');
});

router.use('/api/users', usersRouter);
router.use('/api/reservations', reservationsRouter);
router.use('/api/specialist', specialistRouter);
router.use('/api/calendar', calendarRouter);

export default router;
