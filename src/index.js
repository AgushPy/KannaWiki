import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './routes/App';
import '@styles/global.css';
import 'bootstrap';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab='home' />);