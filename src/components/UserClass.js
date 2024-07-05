//class based component are normal javascript class
import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
       // console.log(props);
       this.state={ //state variable(useState)
        //count:0,
        //named:"Apurva",
        //count2:2,
        userInfo:{
            name:"Dummy",
            following:"Default",
            avatar_url:"",

        }
       }
    }
    async componentDidMount(){//called exactly after the component is rendered
        //console.log("Component didMount");
        const data=await fetch("https://api.github.com/users/apurvasharan17");
        const json=await data.json();
        console.log(json);

        this.setState({
            userInfo:json,
        })



       }


    render(){
        return(<div className="user-card">
            <img src={this.state.userInfo.avatar_url}/>
            <h2>Name:{this.state.userInfo.name}</h2>
            {/* <h2>Count:{this.state.count}</h2>
            <button onClick={()=>{
                //never update state variable directly
                this.setState({
                    count:this.state.count+1,
                })
            }}>Count Inc</button> */}
            {/*<h2>Count2:{this.state.count2}</h2>*/}
            <h3>following:{this.state.userInfo.following}</h3>
            
            <h4>Contact: ranjan.apurva2017@gmail.com</h4>
        </div>
        );
    }
}
export default UserClass;