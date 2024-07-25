import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { ThemeProvider, createTheme} from '@mui/material/styles'

import { Provider } from 'react-redux'
import store from './store.mjs'

import {ChakraProvider} from "@chakra-ui/react"

const theme = createTheme({
  palette: {
    mode: 'light', // You can switch to 'dark' for a dark theme
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
