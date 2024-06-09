import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Layout from "./layouts/layout";
import Shop from "./pages/ShopPage/shop";
import Cart from "./pages/CartPage/cart";
import Login from "./pages/LoginPage/login";
import DetailProduct from "./pages/detailProduct";

export default function Router() {
  const routerApp = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="shop" element={<Shop />} />

          <Route path="shop/detail-product/:id" element={<DetailProduct />} />

          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="login" element={<Login />} />
      </>
    )
  );
  return <RouterProvider router={routerApp} />;
}
