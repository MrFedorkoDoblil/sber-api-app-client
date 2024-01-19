import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Clients from './modules/clients/index.tsx';
import ClientContent from './modules/clients/components/ClientContent.tsx';
import Option1 from './modules/clients/components/Option1.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    
    element: <App/>,
    children:[
      {
        path:"clients",
        element: <Clients/>,

        children: [
          {
            path:"client-content",
            element: <ClientContent/>
          },
          {
            path: 'option2',
            element: <Option1/>
          }
        ]
      }
    ]
  },
],
{
  // basename: '/clients/client-content'
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
