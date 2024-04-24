import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./features/store/store.js";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import * as Pages from "./pages/imports.js";
import { AuthLayout, Layout } from "./components/index.js";

/*const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        path=""
        element={
            <Pages.Home />
        }
      />
      <Route
        path="login"
        element={
          <AuthLayout authentication={false}>
            <Pages.Login />
          </AuthLayout>
        }
      />
      <Route
        path="add-post"
        element={
          <AuthLayout authentication>
            <Pages.AddPost />
          </AuthLayout>
        }
      />
      <Route
        path="posts"
        element={
          <AuthLayout authentication>
            <Pages.AllPosts />
          </AuthLayout>
        }
      />
      <Route
        path="edit-post/:slug"
        element={
          <AuthLayout authentication>
            <Pages.EditPost />
          </AuthLayout>
        }
      />
      <Route
        path="posts/:slug"
        element={
          <AuthLayout authentication>
            <Pages.Post />
          </AuthLayout>
        }
      />
      <Route
        path="signup"
        element={
          <AuthLayout authentication={false}>
            <Pages.SignUp />
          </AuthLayout>
        }
      />
    </Route>
  )
);*/
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Pages.Home />,
        },
        {
            path: "/login",
            element: (
                <AuthLayout authentication={false}>
                    <Pages.Login />
                </AuthLayout>
            ),
        },
        {
            path: "/signup",
            element: (
                <AuthLayout authentication={false}>
                    <Pages.SignUp />
                </AuthLayout>
            ),
        },
        {
            path: "/all-posts",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <Pages.AllPosts />
                </AuthLayout>
            ),
        },
        {
            path: "/add-post",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <Pages.AddPost />
                </AuthLayout>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <Pages.EditPost />
                </AuthLayout>
            ),
        },
        {
            path: "/post/:slug",
            element: <Pages.Post />,
        },
    ],
},
])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
