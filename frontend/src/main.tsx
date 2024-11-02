import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Navbar, Footer } from '../components/index.ts';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Navbar />
		<App />
		<Footer />
	</StrictMode>
);
