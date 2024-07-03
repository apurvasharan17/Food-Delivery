import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";

// const styleCard={
//         backgroundColor:"#f0f0f0",
// }

const RestaurantCard=(props)=>{
        const { resData } = props;

  const { name, cuisines, costForTwo,cloudinaryImageId, avgRating} =
    resData?.info;

        
       return(
        <div className="res-card" style={
                {backgroundColor:"#f0f0f0"}}>
                        <img 
                        className="res-logo"
                        alt="res-logo"
                        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
                        <h3>{name}</h3>
                        <h4>{cuisines.join(", ")}</h4>
                        <h4>Rating: {avgRating}</h4>
                        <h4>{costForTwo}</h4>
        </div>
       ) 
}


const AppLayout=()=>{
        return(
                <div className="app">
                      <Header/>
                      <Body/>
                </div>
        )
}


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);













































