import React,{ useState } from 'react'
import { createBrowserRouter,RouterProvider,Route,Link,} from "react-router-dom";
import PrimaryLayout from './layouts/PrimaryLayout';
import Home from './pages/Home'
import About from  './pages/About';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <PrimaryLayout />,
      children: [
        {
          index: true,
          element: <Home/>,
        },
        {
          path: 'about',
          element: <About />,
        },
        {
          path: 'contact',
          element: <h1>Contact</h1>
        },
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
