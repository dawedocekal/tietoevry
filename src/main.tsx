import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { GlobalStyles } from '@mui/material';

import Homepage from './app/pages/homepage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <GlobalStyles
      styles={{
        body: {
          backgroundColor: '#f0efef',
          fontFamily: "'Roboto Condensed', sans-serif",
          fontSize: 14,
        },
      }}
    />
    <Homepage />
  </StrictMode>
);
