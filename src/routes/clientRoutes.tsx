import { RouteObject } from "react-router-dom";
import ClientLayout from "../layouts/ClientLayout";
import Discover from "../pages/client/discover/Discover";
import Browse from "../pages/client/browse/Browse";
import News from "../pages/client/news/News";
import Cart from "../pages/client/cart/Cart";
import Wishlist from "../pages/client/wishlist/Wishlist";
import Account from "../pages/client/account/Account";

const clientRoutes: RouteObject = {
    path: "/",
    element: <ClientLayout />,
    children: [
        {
            index: true,
            element: <Discover />,
        },
        {
            path: "browse",
            element: <Browse />,
        },
        {
            path: "news",
            element: <News />,
        },
        {
            path: "cart",
            element: <Cart />,
        },
        {
            path: "wishlist",
            element: <Wishlist />,
        },
        {
            path: "account",
            element: <Account />,
        },
    ],
};

export default clientRoutes;