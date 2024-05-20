import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Pages/Header.jsx";
import MainBody from "./components/Pages/MainBody.jsx";
import Footer from "./components/Pages/Footer.jsx";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ResApp from "./components/Pages/ResApp.jsx";
import { Quotes } from "./components/Pages/Quotes.jsx";
import Foods from "./components/Pages/Foods.jsx";
import { FoodDetails } from "./components/Pages/FoodDetails.jsx";
import Contacts from "./components/Pages/Contacts.jsx";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainBody />,
      },
      {
        path: "quotes",
        element: <Quotes />,
      },
      {
        path: "restaurants",
        element: <ResApp />,
      },
      {
        path: "foods",
        element: <Foods />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
      {
        path: "fooddetails/:id",
        element: <FoodDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);