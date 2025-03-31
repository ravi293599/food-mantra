import React from 'react'
import UserClass from '../Components/UserClass'
import Falana from '../Components/falana'
import User from '../Components/User'

class About extends React.Component{
  constructor(props){
    super(props)
    //console.log("Parent Constructor")
  }
  componentDidMount(){
    //console.log("Parent Component did mount")
  }
  render(){
    //console.log("Parent Render")
    return (
      <div>
        <h1>About Us</h1>
        <h2>&nbsp;</h2>
        <User />
        <h2>&nbsp;</h2>
        {/* <UserClass name={"Rajeev Oberoi"} designation={"Data Scientist"} location={"Goregaon"} /> */}
        <UserClass name={"Ashish Shakiya"} designation={"Front End Developer"} location={"Faridabad"} />
        {/* <Falana /> */}
      </div>
    )
  }
} 
/*const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <h2>&nbsp;</h2>
      <UserClass name={"Rajeev Oberoi"} designation={"Data Scientist"} location={"Goregaon"} />
    </div>
  )
}
*/

export default About
