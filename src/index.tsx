import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Box} from "@mui/material";
import {Colors} from "./const/colors";
import {LocalizationProvider} from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <LocalizationProvider dateAdapter={AdapterDayjs}>

      <Box sx={{
          backgroundColor: Colors.Background,
          color: Colors.Font,
          minHeight: '100vh'
      }}>
          <App />

      </Box>
      </LocalizationProvider>
  </React.StrictMode>
);
