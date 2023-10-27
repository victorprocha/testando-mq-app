import Layout from "../layouts";
import Home from "../pages/home";
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
      ]
    },
    
  ];

  export default routes;