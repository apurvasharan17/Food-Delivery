import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


const Body=()=>{

    const [resList,setResList]=useState([]);

    const [searchText, setSearchText]=useState("");

      useEffect(()=>{
        fetchData();
      },[]);

      const fetchData=async ()=>{
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        console.log(json.data.cards);
        setResList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
      }
      //conditional rendering
    //   if(resList.length==0){
    //    return  <Shimmer/>
    //   }
    //OR

    return resList.length==0? <Shimmer/>:(
            <div className="body">
                    <div className="filter">
                        <div className="search">
                            <input type="text" className="search-box" value={searchText} onChange={(e)=>{setSearchText(e.target.value);
                            }}/>
                            <button onClick={()=>{
                               // console.log(searchText);
                                const filteredRestaurant=resList.filter((res)=>res.info.name.includes(searchText));
                                console.log(filteredRestaurant);
                                setResList(filteredRestaurant);
                                       
                            }}>Search</button></div>
                        <button className="filter-btn" onClick={()=>{
                            const filteredList=resList.filter(
                                (res)=>res.info.avgRating>4.5
                            )
                            setResList(filteredList);
                        }}>
                            Top-rated restaurant
                        </button>
                    </div>
                    <div className="res-container">
                    {
                            resList.map((restaurant)=>(
                                    <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                            ))
                    }
                    </div>
            </div>
    )
}
export default Body;