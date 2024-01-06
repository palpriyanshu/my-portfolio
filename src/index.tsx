import React from 'react';
import App from "./app/App";

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
// @ts-ignore
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

