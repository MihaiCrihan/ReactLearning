import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './css/main.css';

// Используем createRoot вместо ReactDOM.render
const root = createRoot(document.getElementById('root'));
root.render(<App />);