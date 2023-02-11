import React,{ useState } from 'react'
import { createBrowserRouter,RouterProvider,Route,Link,} from "react-router-dom";
import PrimaryLayout from './layouts/PrimaryLayout';
import Home from './pages/Home'
import About from  './pages/About';
import 'boxicons'
import ErrorPage from './pages/ErrorPage';
import Contact from './pages/Contact';

//redux
import { Provider } from 'react-redux';
import { store } from './store/store';
import Products from './pages/Products';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <PrimaryLayout />,
      errorElement: <ErrorPage/>,
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
          path: 'products',
          element: <Products/>,
        },
        {
          path: 'contact',
          element: <Contact/>
        },
      ]
    }
  ]);

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  )
}

export default App
