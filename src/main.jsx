import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './assets/Routes/Routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 <div className=''>
  <div className='max-w-7xl mx-auto px-10'>
   <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
 </div>
 </div>
)
