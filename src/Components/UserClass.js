import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            Experience : 2,
            userInfo: {
                name: "Ashish Shakya",
                id: "068996",
                avatar_url: "",
                bio: "Developer",
                html_url: "",
                login: "",
                repos_url: "",
            }
        }
        //console.log("Constructor");
    }
    async componentDidMount(){
        //console.log("Component Did mount calling")
        const data = await fetch("https://api.github.com/users/ravi293599");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo:json
        })
    }
    componentDidUpdate(){
        console.log("Component did Update");
    }
    componentWillUnmount(){
        console.log("Component Will Unmount");
    }
    render(){
        //console.log("Render")
        return(
            <div className="user-card">
            <img width={150} src={this.state.userInfo.avatar_url} />
            <h2>Name: {this.state.userInfo.name}</h2>
            <h3>Employee ID: {this.state.userInfo.id}</h3>
            <h3>Position: {this.props.designation}</h3>
            <h4>Location: {this.props.location}</h4>
            <h5>Experience: {this.state.Experience}</h5>
            <h6>Details: {this.state.userInfo.bio}</h6>
            <button onClick={() =>{
                this.setState(
                    {Experience: this.state.Experience + 1}
                )
            }}>Increase the Experience</button>
            </div>
        )
    }
}
export default UserClass