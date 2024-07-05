import User from "./User";
import UserClass from "./UserClass";
const About=()=>{
    return(
        <div>
            <h1>About</h1>
            <h2>This is Apurva ranjan Sharan</h2>
            <User/>
            <UserClass name={"Apurva"} location={"bangalore"}/>
        </div>
    );
}
export default About;