import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Route/Root.jsx";
import ErrorPage from "./ErrorPage/ErrorPage.jsx";
import Home from "./Pages/Home.jsx";
import SignIn from "./Pages/SignIn.jsx";
import SignUp from "./Pages/SignUp.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import AddCraft from "./Pages/AddCraft.jsx";
import PriverRoute from "./components/PrivetRoute/PriverRoute.jsx";
import CraftSection from "./components/CraftSection/CraftSection.jsx";
import CraftItem from "./Pages/CraftItem.jsx";
import ItemDetails from "./components/ItemDetails/ItemDetails.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/craftitem",
        element : <CraftItem></CraftItem>,
        loader: () => fetch("http://localhost:5000/addcraft"),
      },
      {
        path: "/itemdetails/:id",
        element: <ItemDetails></ItemDetails>,
      },
      {
        path: "/addcraft",
        element: <PriverRoute><AddCraft></AddCraft></PriverRoute>,
      },
      {
        path: "craftsection",
        element: <PriverRoute><CraftSection></CraftSection></PriverRoute>
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
