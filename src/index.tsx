import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';



const root = document.getElementById('root');

if (root) {
    const rootElement = createRoot(root);

    //console.log(rootElement);
    rootElement.render(
        <StrictMode>
            <App />
        </StrictMode>
    )
    
}


