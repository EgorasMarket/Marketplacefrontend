import Home from "../Pages/Home/Home";
import DashboardHome from "../App/AppPages/DashboardHome";
import { Store03Icon } from "hugeicons-react";
import { Coins01Icon } from "hugeicons-react";
import { Wallet02Icon } from "hugeicons-react";
import { BorderFullIcon } from "hugeicons-react";
import { WorkHistoryIcon } from "hugeicons-react";
import { UserGroupIcon } from "hugeicons-react";
import DashboardWallets from "../App/AppPages/DashboardWallets";
import DashboardMarket from "../App/AppPages/DashboardMarket";
import ProductDetailPage from "../Pages/Market/ProductDetailPage";
import ProductCheckoutPage from "../Pages/Market/ProductCheckoutPage";
import DashboardEarn from "../App/AppPages/DashboardEarn";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import DashboardOrders from "../App/AppPages/DashboardOrders";
import DashboardTransactions from "../App/AppPages/DashboardTransactions";
import DashboardReferral from "../App/AppPages/Referral/DashboardReferral";
// import DashboardStaking from "../App/AppPages/DashboardStaking";

// =========================================================
// =========================================================
// =========================================================
// ==================== icons import  =======================
import { Home06Icon } from "hugeicons-react";
// ==================== icons import  =======================
// =========================================================
// =========================================================
// =========================================================

const routes = [
  { name: "Home", path: "", component: <Home />, layout: "/" },
  { name: "Login", path: "login", component: <Login />, layout: "/" },
  { name: "Signup", path: "register", component: <Signup />, layout: "/" },
  {
    name: "Home",
    path: "home",
    icon: <Home06Icon size={24} className="DashboardNav_body_1_icon" />,
    component: <DashboardHome />,
    layout: "/app",
  },
  // {
  //   name: "404 Not Found",
  //   path: "*",
  //   component: <NotFoundComponent />,
  //   layout: "/",
  // },
  //
  //
  {
    name: " Marketplace",
    path: "market",
    icon: <Store03Icon size={24} className="DashboardNav_body_1_icon" />,
    component: <DashboardMarket />,
    layout: "/app",
  },
  {
    name: "ProductDetail",
    path: "market/productdetail/:id/:name",
    icon: <Store03Icon size={24} className="DashboardNav_body_1_icon" />,
    component: <ProductDetailPage />,
    layout: "/app",
  },
  {
    name: "Checkout",
    path: "market/product/detail/:id/:count/:name/checkout",
    icon: <Store03Icon size={24} className="DashboardNav_body_1_icon" />,
    component: <ProductCheckoutPage />,
    layout: "/app",
  },
  {
    name: "Earn",
    path: "earn",
    icon: <Coins01Icon size={24} className="DashboardNav_body_1_icon" />,
    component: <DashboardEarn />,
    layout: "/app",
  },
  {
    name: " Wallet",
    path: "wallet",
    icon: <Wallet02Icon size={24} className="DashboardNav_body_1_icon" />,
    component: <DashboardWallets />,
    layout: "/app",
  },
  {
    name: " Orders",
    path: "orders",
    icon: <BorderFullIcon size={24} className="DashboardNav_body_1_icon" />,
    component: <DashboardOrders />,
    layout: "/app",
  },

  {
    name: " Transactions",
    path: "transaction",
    icon: <WorkHistoryIcon size={24} className="DashboardNav_body_1_icon" />,
    component: <DashboardTransactions />,
    layout: "/app",
  },
  {
    name: " Referral",
    path: "referral",
    icon: <UserGroupIcon size={24} className="DashboardNav_body_1_icon" />,
    component: <DashboardReferral />,
    layout: "/app",
  },
];

export { routes };
