import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import '@styles/_global.scss'
import Clients from './modules/clients/index.tsx';
import Transactions from './modules/transactions/index.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    
    element: <App/>,
    children:[
      {
        path:"clients",
        element: <Clients/>,
      },
      {
        path: 'transactions',
        element: <Transactions/>
      }
    ]
  },
],
{
  basename: undefined
});

const queryClient = new QueryClient({
defaultOptions: {
  queries: {
    refetchOnWindowFocus: false,
  }
}
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
