import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements,Route, RouterProvider } from "react-router-dom";
import Home from './components/Home/Home.jsx'
import Resume from './components/Resume/Resume.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element = {<Home />} />
      <Route path="resume" element = {<Resume />} />

    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
