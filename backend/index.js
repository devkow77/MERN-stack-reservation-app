import express from 'express';
import { PORT } from './config.js';
import 'dotenv/config.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import router from './routes/index.js';
import mongoose from 'mongoose';

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		saveUninitialized: false,
		resave: false,
		cookie: {
			maxAge: 1000 * 60 * 2,
		},
	})
);
app.use(router);

mongoose
	.connect(process.env.MONGODB_URL)
	.then(() => {
		console.log('Connected to MongoDB');
		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`);
		});
	})
	.catch((err) => {
		console.log(err);
	});
