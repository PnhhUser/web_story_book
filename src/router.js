import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Layout from "./layouts/layout";

export default function Router() {
  const routerApp = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    )
  );
  return <RouterProvider router={routerApp} />;
}
