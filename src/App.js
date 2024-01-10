import React, {lazy, Suspense} from "react";
import Body from "./components/Body";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import {createBrowserRouter, Outlet} from 'react-router-dom';
import Error from "./components/Error";
import Header from "./components/Header";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
import {Provider} from 'react-redux';
import appStore from "./utils/appStore";
// import Groceries from "./components/Groceries";
const Groceries = lazy(()=> import("./components/Groceries"));

const App = () => {
  return (
    <Provider store={appStore}>
    <div>
      <Header />
      <Outlet />
    </div>
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Body />
      },
      {
        path:'/about',
        element:<AboutUs />
      },
      {
        path:'/contact',
        element:<ContactUs />
      },
      {
        path:'/groceries',
        element:<Suspense fallback={<h1>Loading...</h1>} ><Groceries /></Suspense>
      },
      {
        path:'/restaurantmenu/:resid',
        element:<RestaurantMenu />
      },
      {
        path:'/cart',
        element:<Cart />
      }
    ],
    errorElement:<Error />
  }
])

export default appRouter;
