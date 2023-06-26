import React from 'react';
import { createRoot } from 'react-dom/client';
import Content from './components/Content';

// import style
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(<Content/>);