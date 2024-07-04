import { useState } from "react";
import { Link } from "react-router-dom";
const Header=()=>{
        const [btn,setBtn]=useState("Login");
        return(
                <div className="header">
                        <div className="logo">
                                <img src="https://png.pngtree.com/template/20191014/ourmid/pngtree-pin-food-delivery-map-location-delivery-logo-concept-image_318151.jpg"></img>
                        </div>
                        <div className="nav-items">
                                <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/about">About Us</Link></li> 
                                        <li><Link to="/contact">Contact Us</Link></li> 
                                        <li>Cart</li> 
                                        <li><button className="login"
                                        onClick={()=>{
                                               btn=="Login"?setBtn("Logout"):setBtn("Login");
                                        }}>{btn}</button></li>                  
                                        
                                </ul>

                        </div>
                </div>
        )
}
export default Header;