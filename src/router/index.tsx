import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";

const router = createBrowserRouter(routes);

const Router = () => <RouterProvider router={router}></RouterProvider>;

export default Router;
