import React from 'react'
class falana extends React.Component{
    constructor(props){
        super(props)
        console.log("Falana constructor")
    }
    componentDidMount(){
        console.log("Falana Component Did mount calling")
    }
    render(){
        console.log("Falana render")
        return(
            <h1>Falana</h1>
        )
    }
}
export default falana