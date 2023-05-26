import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Pages/Main/Main';
import Home from './Components/Home/Home';
import Blog from './Pages/Blog/Blog';
import SignUp from './Pages/SignUp/SignUp';
import Login from './Pages/Login/Login';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import Privateroute from './Components/PrivateRoute/Privateroute';
import Terms from './Pages/Terms/Terms';
import ChefsRecipes from './Pages/ChefsRecipes/ChefsRecipes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: '/chefsRecipe/:id',
        element: <Privateroute><ChefsRecipes></ChefsRecipes></Privateroute>,
        loader: ({params}) => fetch(`https://chefs-recipes-server-subhana0304.vercel.app/chefs/${params.id}`)
      },
      {
        path: "/blog",
        element: <Privateroute><Blog></Blog></Privateroute>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>
      },
      {
        path: "/terms",
        element: <Terms></Terms>
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
