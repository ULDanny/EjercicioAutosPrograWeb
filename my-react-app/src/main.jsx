import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import NewPost from './routes/NewPost.jsx'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    
  },
  {
    path: "/registro",
    element: <NewPost />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
 
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
 
)
