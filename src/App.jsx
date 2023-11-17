import './App.css'
import ShoeCard from './ShoeCard'
import Header from './Header'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Cart from './Cart'
import DetailsCard from './DetailsCard'

function App() {

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{
      path: "/",
      element: <ShoeCard />
    }, {
      path: "/cart",
      element: <Cart />
    },
    {
      path: "/shoe/:shoeId",
      element: <DetailsCard />
    }]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} ></RouterProvider>
  </React.StrictMode>,
)
