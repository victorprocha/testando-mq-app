import LayoutAuth from "../layouts/auth";
import Layout from "../layouts/mostruario";
import Login from "../pages/auth/login";
import Signup from "../pages/auth/signup";
import Home from "../pages/home";
import ProductDetail from "../pages/product-detail";
import Products from "../pages/products";


const routes = [
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        
        {
          path: "/products",
          element: <Products/>,
        },

        {
          path: "/products/:categories",
          element: <Products/>,
        },

        {
          path: "/product-detail/:id",
          element: <ProductDetail/>,
        },

      ]
    },
    {
      path: 'auth',
      element: <LayoutAuth/>,
      children:[
        {
          path: 'login',
          element: <Login/>,
        },

        {
          path: 'signup',
          element: <Signup/>,
        }

      ]
    }
    
  ];

  export default routes;