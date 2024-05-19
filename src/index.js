import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Creators from './pages/Creators';
import Blog from './pages/Blog';
import Faq from './pages/Faq';
import { Provider } from 'react-redux';
import { Store } from './Store';
import Detail from './pages/Detail';
// import db from "../src/db.json"

const router=createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/creators",
        element: <Creators/>,
      },
      {
        path: "/blog",
        element: <Blog/>,
      },
      {
        path: "/faq",
        element: <Faq/>,
      },
      {
        path: "/detail/:id",
        element: <Detail/>
      }
    ]
  }
])




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <RouterProvider router={router} />
    
  </Provider>
);


