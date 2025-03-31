import { useDispatch, useSelector } from "react-redux";
import useRestaurantData from "../../Utils/useRestaurantData";
import { useParams } from "react-router-dom";
import { menuImage } from "../../Utils/mockData";
import { GiPlainCircle } from "react-icons/gi";
import { TbTriangleFilled } from "react-icons/tb";
import { useEffect, useState } from "react";
import { calculateTotals } from "../Store/cartSlice";

const CartWindow = () =>{
    // const [total, setTotal] = useState(0); 
    const total = useSelector((store) => store.cart.amount);
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.items)
    const restDetails = useRestaurantData();
    const {resId} = useParams()
   const selectedRest = restDetails?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.filter((el) => el?.info?.id == resId);
   const selectRes = selectedRest?.[0]?.info;
    const restaurantImage = selectRes?.cloudinaryImageId;
    const location = selectRes?.areaName;
    let subTotal = 0;
    if(cartItems.length != 0){
        subTotal = cartItems.reduce((subTotal,item) => subTotal + item?.card?.info?.price/100);
    }
      useEffect(()=>{
        dispatch(calculateTotals());
      },[cartItems])
    const name = selectRes?.name;
    console.log(cartItems);
    //console.log(subTotal);
    return(
        <div className="header-cart">
        <div className="cart-box">
           {cartItems.length == 0 ? 
            <div className="empty-cart">
                <h2>Cart is Empty</h2>
                <p>Good food is always cooking! Go ahead, order some yummy items from the menu.</p>
            </div>:
            <div className="cart-content">
            <div className="cart-row">
                <img alt={name} src={menuImage + restaurantImage} />
                <div className="item-detail">
                    <span className="item-name">
                        <h3>{name}</h3>
                        <p>{location}</p>
                    </span>
                    <span className="item-btn">
                        view full menu
                    </span>
                </div>
            </div>
           <div className="cart-items">
           {
            cartItems.map((item) =>(
                <div className="cart-row amt" key={item?.card?.info?.id}>
                <span className="item-text">
                    <span className={item?.card?.info?.itemAttribute?.vegClassifier =="VEG"?"food-category veg-food":"food-category"}>
                        <TbTriangleFilled className="non-veg" />
                        <GiPlainCircle className="veg"/>
                    </span>
                    {item?.card?.info?.name} X {item?.quantity}</span>
                <span className="item-value">&#8377; {item?.card?.info?.defaultPrice/100 || item?.card?.info?.price/100 * item?.quantity}</span>
                </div>
            ))
           }
            <div className="cart-row amt final">
                <span className="item-text">Sub Total<p>Extra charges may apply</p></span>
                <span className="item-value">&#8377; {total}</span>
            </div>
           </div>
            <div className="cart-row">
                <button className="checkout-btn">checkout</button>
            </div>
        </div>}
        </div>
    </div>
    )
    // return(
    //     <div className="header-cart">
    //     <div className="cart-box">
    //        {cartItems.length == 0 ? 
    //         <div className="empty-cart">
    //             <h2>Cart is Empty</h2>
    //             <p>Good food is always cooking! Go ahead, order some yummy items from the menu.</p>
    //         </div>:
    //         <div className="cart-content">
    //         <div className="cart-row">
    //             <img alt={name} src={menuImage + restaurantImage} />
    //             <div className="item-detail">
    //                 <span className="item-name">
    //                     <h3>{name}</h3>
    //                     <p>{location}</p>
    //                 </span>
    //                 <span className="item-btn">
    //                     view full menu
    //                 </span>
    //             </div>
    //         </div>
    //        {
    //         cartItems.item.map((item) =>(
    //             <div className="cart-row amt" key={item?.card?.info?.id}>
    //             <span className="item-text">
    //                 <span className={item?.card?.info?.itemAttribute?.vegClassifier =="VEG"?"food-category veg-food":"food-category"}>
    //                     <TbTriangleFilled className="non-veg" />
    //                     <GiPlainCircle className="veg"/>
    //                 </span>
    //                 {item?.card?.info?.name}</span>
    //             <span className="item-value">&#8377; {item?.card?.info?.defaultPrice/100 || item?.card?.info?.price/100}</span>
    //             </div>
    //         ))
    //        }
    //         <div className="cart-row amt final">
    //             <span className="item-text">Sub Total<p>Extra charges may apply</p></span>
    //             <span className="item-value">&#8377; {total}</span>
    //         </div>
    //         <div className="cart-row">
    //             <button className="checkout-btn">checkout</button>
    //         </div>
    //     </div>}
    //     </div>
    // </div>
    // )
}
export default CartWindow;