import * as React from "react";
import { Link, useParams } from "react-router-dom";
import logo from "../../Assets/Logo.jpg";
import Logo from "../../Assets/logo.svg"
import useOnlineStatus from "../../Utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../../Utils/UserContext";
import { useSelector } from "react-redux";
import CartWindow from "./CartWindow";

const Header = () =>{
    const onlineStatus = useOnlineStatus();
    const {loggedUser} = useContext(UserContext);
    //const restInfo = useRestaurantData(resId);
    const cartItems = useSelector((store) => store.cart.items)
    const totalPrice = 0;
    //console.log(cartItems);
    //console.log(restInfo);
    return(
        <div className="header">
            <div className="logo-container">
                <Link to="/"><img alt="logo" src={Logo} /></Link>
                {/* <Link to="/"><img alt="logo" src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg" /></Link> */}
            </div>
            <div className="navbar">
                <ul>
                    {/* <li>
                        <Link>{onlineStatus ? "✅" : "🔴"} : Online Status</Link>
                    </li> */}
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="cart-link">
                        <Link to="/cart">Cart <span className="cart-value">{cartItems.length}</span>
                        <CartWindow />
                        </Link>
                    </li>
                    {/* <li className="font-bold">
                        {loggedUser}
                    </li>  */}
                </ul>
            </div>
        </div>
    )
}
export default Header;