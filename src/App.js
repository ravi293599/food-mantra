import React, { lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client"
import Header from "./Components/Header";
import Body from "./Components/Body";
import Home from "./Pages/Home";
//import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./Pages/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import UserContext from "../Utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./Store/appStore";
import Cart from "./Components/Cart";

const About = lazy(() => import("./Pages/About"))

const AppLayout = () =>{
    const[userName, setUserName] = useState();
    useEffect(()=>{
        //calling our API for authetication of user on the basis of username and password
        const data = {
            name: "Krishana Murthy"
        }
        setUserName(data.name);
    },[])
    return(
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedUser : userName}}>
                <div className="app">
                    <Header />
                <div className="body">
                    <Outlet />
                </div>
                </div>
            </UserContext.Provider>
        </Provider>
    )
}
const browserRouter = createBrowserRouter([
    {
        path : '/',
        element: <AppLayout />,
        children: [
            {
                path : '/',
                element: <Home />
            },
            {
                path : '/about',
                element: <About />
            },
            {
                path : '/contact',
                element: <Contact />
            },
            {
                path : '/cart',
                element: <Cart />
            },
            {
                path: '/restaurant/:resId',
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={browserRouter} />);