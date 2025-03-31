import Header from "../Components/Header"

const Contact = () =>{
    return(
        <div>
            <h1>Contact Us</h1>
            <form>
                <input type="text" placeholder="Enter your username" />
                <input type="text" placeholder="Enter your password" />
                <button>Submit</button>
            </form>
        </div>
    )
}
export default Contact