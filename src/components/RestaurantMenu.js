import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";


const RestaurantMenu=()=>{
    const [resInfo,setResInfo]=useState(null);

    //const { resId}=useParams();

    const { resId }=useParams();
    // console.log(useParams());

     useEffect(()=>{
        fetchMenu();
     },[]);
     const fetchMenu=async ()=>{
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=" + resId + "&catalog_qa=undefined&submitAction=ENTER");
        const json=await data.json();
        console.log(json);
        console.log(json.data.cards[2].card.card.info.name);
        setResInfo(json.data);
        // console.log(resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
     }
    //  if(resInfo==null) return <Shimmer/>;
    
    return resInfo==null?(<Shimmer/>):(
        <div className="menu">
            <h1>{resInfo.cards[2].card.card.info.name}</h1>
            <hr></hr>
            <h3>Cuisines: {resInfo.cards[2].card.card.info.cuisines.join(",")}</h3>
            <h3>{resInfo.cards[2].card.card.info.costForTwoMessage}</h3>
            
            <h2>Menu</h2>
            <ul>
            {resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card.card.itemCards.map((item)=><li key={item.card.info.id}>{item.card.info.name} - Rs. {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>)}
            
            </ul>
        </div>
    );
};
export default RestaurantMenu;