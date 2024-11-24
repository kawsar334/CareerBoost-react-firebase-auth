
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home";
import NotFound from './pages/Error';
import Login from './pages/Layout/Login';
import Register from './pages/Layout/Register';
import Dashboard from './pages/Layout/Dashboard';
import Details from './pages/Layout/Details';
import Profile from './pages/Layout/Profile';
import { AuthContext, AuthProvider } from './Auth/AuthProvider';
import ProtectedRoute from './ProtectedRoute';
import RedirectIfLoggedIn from './Redirect';
import ForgotPassword from './pages/ForgotPssword';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,

        },
        {
          path: "/details/:id",
          element: <ProtectedRoute> <Details /></ProtectedRoute>,

        },
        {
          path: "/profile",
          element: <ProtectedRoute> <Profile /> </ProtectedRoute>,

        },
        {
          path: "/dashboard",
          element: <ProtectedRoute> <Dashboard /> </ProtectedRoute>,

        },
        {
          path: "/login",
          element: <RedirectIfLoggedIn> <Login /> </RedirectIfLoggedIn>,

        },
        {
          path: "/register",
          element: <Register />,

        },
        {
          path: "/forgot-password",
          element: <ForgotPassword />,

        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    }
  ]);

  return (
    <AuthProvider>

      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;


