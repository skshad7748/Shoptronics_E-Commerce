import AccountPage from "@pages/Account.page";
import CartPage from "@pages/Cart.page";
import CheckoutPage from "@pages/Checkout.page";
import HomePage from "@pages/Home.page"; // if default export
import OrderSuccessPage from "@pages/OrderSuccess.page";
import ProductDetailPage from "@pages/ProductDetail.page";
import ShopPage from "@pages/Shop.page";
import SignInPage from "@pages/SignIn.page";
import SignUpPage from "@pages/SignUp.page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { CartProvider } from "./store/cart";

const router = createBrowserRouter([
  { path: "/Shoptronics_E-Commerce", element: <HomePage /> },
  { path: "/shop", element: <ShopPage /> },
  { path: "/product/:slug", element: <ProductDetailPage /> },
  { path: "/cart", element: <CartPage /> },
  { path: "/checkout", element: <CheckoutPage /> },
  { path: "/order-success", element: <OrderSuccessPage /> },
  { path: "/account", element: <AccountPage /> },
  { path: "/signin", element: <SignInPage /> },
  { path: "/signup", element: <SignUpPage /> },
]);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />{" "}
    </CartProvider>
  );
}

export default App;
