import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root, {loader as rootLoader, action as rootAction } from './routes/root.jsx'
import ErrorPage from './error-page.jsx'
import Contact, {
  loader as contactLoader} from './routes/contact.jsx'
import EditContact, {
  action as editAction} from "./routes/edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader:rootLoader,
    errorElement: <ErrorPage />,
    action: rootAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
