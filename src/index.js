import React from 'react';
import { createRoot } from 'react-dom/client'

import App from './components/App';
import GlobalStyles from './components/GlobalStyles';

const app = document.getElementById('root')
const root = createRoot(app)
root.render(<React.StrictMode>
  <App />
  <GlobalStyles />
</React.StrictMode>)