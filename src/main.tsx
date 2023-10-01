import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MyDataContextProvider } from "./context/MyDataContext";
import Home from "./pages/Home";
import FilmeVerMais from "./pages/FilmeVerMais";
import ErrorPage from "./pages/errorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "filme-ver-mais/:id",
        element: <FilmeVerMais />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <MyDataContextProvider>
            <RouterProvider router={router} />
        </MyDataContextProvider>
    </React.StrictMode>
);
