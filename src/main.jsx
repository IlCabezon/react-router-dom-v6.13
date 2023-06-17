// native
import React from 'react'
import ReactDOM from 'react-dom/client'

// routing
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// styles
import './global.css'

// routes
import Root, { loader as rootLoader, action as rootAction } from './routes/root'

// components
import ErrorPage from './error-page'
import Contact, { loader as contactLoader } from './routes/contact'
import Edit, { action as editAction } from './routes/edit'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contact />,
        loader: contactLoader
      },
      {
        path: 'contacts/:contactId/edit',
        element: <Edit />,
        loader: contactLoader,
        action: editAction
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
