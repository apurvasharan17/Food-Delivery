import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body=()=>{

    const [resList,setResList]=useState([]);
    const [filteredRestaurant,setFilterRestaurant]=useState([]);
    const [searchText, setSearchText]=useState("");

      useEffect(()=>{
        fetchData();
      },[]);

      const fetchData=async ()=>{
        //const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const data=await fetch("https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D12.96340%26lng%3D77.58550%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING");
        const json=await data.json();
        console.log(json);
        console.log(json.data.cards);
        setResList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setFilterRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
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
                                const filteredRestaurant=resList.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                                console.log(filteredRestaurant);
                                setFilterRestaurant(filteredRestaurant);
                                       
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
                            filteredRestaurant.map((restaurant)=>(<Link key={restaurant.info.id}
                                to={"/restaurants/" + restaurant.info.id } > <RestaurantCard  resData={restaurant}/></Link>
                                    
                            ))
                    }
                    </div>
            </div>
    )
}
export default Body;