import React, { useEffect } from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createRoot } from "react-dom/client"; // Correct import statement
import { createBrowserRouter, Outlet, RouterProvider, useNavigate } from "react-router-dom";
import { StrictMode } from "react";
import Header from "./Header";
import Main from "./Main";
import Error from "./Error";
import Footer from "./Footer";
import Contact from "./Contact";
import Login from "./Login";
import Cart from "./Cart";
import Restaurant from "./Restaurant";
import { lazy, Suspense } from "react";
import { useState } from 'react';
import { contentManger } from "./utils/ContentManger";
import { Provider } from 'react-redux';
import { Store } from "./utils/Store";
const Instamart = lazy(() => import("./Instamart"));


function App() {
  const navigate = useNavigate()
  useEffect(() => {
    if (!loginStatus) {
      navigate("/undefined/334353")
    }
  }, [])
  const [userName, setUserName] = useState("Login");
  const [loginStatus, setLoginStatus] = useState(false);
  return (
    <>
      <Provider store={Store}>
        <contentManger.Provider
          value={{
            loginId: userName,
            setUserName,
            loginStatus,
            setLoginStatus,
          }}
        >
          <Header />
          <Outlet />
          <Footer />
        </contentManger.Provider>
      </Provider>
    </>
  );
}

const appLayout = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/:location",
        element: <Main />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/:location/:id",
        element: <Restaurant />,
      },
      {
        path: "/:location/instamart",
        element: (
          <div>
            <Suspense fallback={<div>Loading...</div>}>
              <Instamart />
            </Suspense>
          </div>
        ),
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RouterProvider router={appLayout} />
  </StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
