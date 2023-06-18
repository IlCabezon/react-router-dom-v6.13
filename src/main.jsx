// native
import React from 'react'
import ReactDOM from 'react-dom/client'

// routing
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// styles
import './global.css'

// routes
import Root, {
  loader as rootLoader,
  action as rootAction
} from './routes/root'

// components
import ErrorPage from './error-page'
import Contact, {
  loader as contactLoader,
  action as contactAction
} from './routes/contact'
import Edit, { action as editAction } from './routes/edit'
import { action as destroyAction } from './routes/destroy'
import Index from './routes/index'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Index />
          },
          {
            path: 'contacts/:contactId',
            element: <Contact />,
            loader: contactLoader,
            action: contactAction
          },
          {
            path: 'contacts/:contactId/edit',
            element: <Edit />,
            loader: contactLoader,
            action: editAction
          },
          {
            path: 'contacts/:contactId/destroy',
            action: destroyAction,
            errorElement: <div>Oops! There was an error</div>
          }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
