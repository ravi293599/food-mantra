import { useEffect } from "react";
import React from "react";
const User = () => {
    useEffect(()=>{
       const myInterval =  setInterval(()=>{
            console.log("Interval Called")
        },1000);
        return(() => clearInterval(myInterval))
    },[]);
    return(
        <div className="user-card">
            <h2>Name: Rahul Saxena</h2>
            <h3>Position: Developer</h3>
            <h4>Location: Delhi</h4>
        </div>
    )
}
export default User