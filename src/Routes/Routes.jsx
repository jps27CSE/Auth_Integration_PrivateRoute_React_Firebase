import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../components/Login/Login";
import SignUp from "../components/Sign-up/SignUp";
import Profile from "../components/Profile/Profile";
import PrivateRoute from "../Provider/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
