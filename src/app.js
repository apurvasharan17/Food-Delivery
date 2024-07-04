import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";

// const styleCard={
//         backgroundColor:"#f0f0f0",
// }
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
                                element:<About/>,
                        },{
                                path:"/contact",
                                element:<Contact/>,
                        },
                ]
                ,
                errorElement:<Error/>,
        },
]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);













































