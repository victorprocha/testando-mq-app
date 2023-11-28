import Layout from "../layouts";
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
          path: "/products/:categories",
          element: <Products/>,
        },

        {
          path: "/product-detail/:id",
          element: <ProductDetail/>,
        },

      ]
    },
    
  ];

  export default routes;