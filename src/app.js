import React from "react";
import {lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
//import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";

// const styleCard={
//         backgroundColor:"#f0f0f0",
// }
const About=lazy(()=>import("./components/About.js"));
const AppLayout=()=>{
        return(
                <div className="app">
                      <Header/>
                      <Outlet />
                </div>
        );
};
const appRouter=createBrowserRouter([
        {
                path:"/",
                element:<AppLayout/>,
                children:[{
                                path:"/",
                                element:<Body/>,

                           },
                        {
                                path:"/about",
                                element:<Suspense fallback={<h1>ABout us is Loading</h1>}><About/></Suspense>,
                        },{
                                path:"/contact",
                                element:<Contact/>,
                        },{
                                path:"/restaurants/:resId",
                                element:<RestaurantMenu/>
                        }
                ]
                ,
                errorElement:<Error/>,
        },
]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);













































