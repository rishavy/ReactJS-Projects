import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import PrivateRoutes from "./utils/PrivateRoutes.jsx";
import Home from "./components/Home.jsx";
import StartScreen from "./components/StartScreen.jsx";

import Convert from "./components/Convert.jsx";
import Remove from "./components/Remove.jsx";
import Search from "./components/Search.jsx";
import Settings from "./components/Settings.jsx";
import Support from "./components/Support.jsx";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, createContext } from "react";

export const AuthContext = createContext();

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        element: <PrivateRoutes />,
        children: [
          {
            path: "/",
            children: [
              {
                path: "/app",
                element: <StartScreen />,
              },
              {
                path: "/app/convert",
                element: <Convert />,
              },
              {
                path: "/app/remove",
                element: <Remove />,
              },
              {
                path: "/app/search",
                element: <Search />,
              },
              {
                path: "/app/settings",
                element: <Settings />,
              },
              {
                path: "/app/support",
                element: <Support />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

const AppWrapper = () => {
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("active")) || false);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <RouterProvider router={appRouter} />
    </AuthContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<AppWrapper />);