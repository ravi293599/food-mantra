import { menuImage } from "../../Utils/mockData";
import { HiUser } from "react-icons/hi";
import { GiPlainCircle } from "react-icons/gi";
import { TbTriangleFilled } from "react-icons/tb";
import { IoLocation } from "react-icons/io5";
import { GiWallet } from "react-icons/gi";
import { TiMinus } from "react-icons/ti";
import { MdAdd } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import useRestaurantData from "../../Utils/useRestaurantData";
import { Link, useParams } from "react-router-dom";
import { addItems, calculateTotals, clearCart, removeItems } from "../Store/cartSlice";
import { useEffect } from "react";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const total = useSelector((store) => store.cart.amount);
  const dispatch = useDispatch();
  const handleClearCart = () =>{
    dispatch(clearCart());
  }
  // const handleAddItem = (item) =>{
  //   dispatch(addItems(item));
  // }
  // const handleRemoveItem = (item) =>{
  //   dispatch(removeItems(item));
  // }
  useEffect(()=>{
    dispatch(calculateTotals());
  },[cartItems])
  console.log(cartItems);
  //     const restDetails = useRestaurantData();
  //     const {resId} = useParams()
  //    const selectedRest = restDetails?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.filter((el) => el?.info?.id == resId);
  //    const selectRes = selectedRest?.[0]?.info;
  //     const restaurantImage = selectRes?.cloudinaryImageId;
  //     const location = selectRes?.areaName;
  //     const name = selectRes?.name;
  return (
    <>
      {cartItems.length == 0 ? (
        <div className="checkout-empty">
          <img
            alt="empty cart"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
          />
          <h2>Your cart is empty</h2>
          <p className="para">
            You can go to home page to view more restaurants
          </p>
          <Link to="/" className="btn">
            See restaurants near you
          </Link>
        </div>
      ) : (
        <div className="checkout-wrapper">
          <div className="left-section">
            <div className="detail-section active">
              <div className="icon-div">
                <HiUser />
              </div>
              <div className="content-wrap">
                <h3>Account</h3>
                <p>
                  To place your order now, log in to your existing account or
                  sign up.
                </p>
                <div className="btn-wrap">
                  <button className="btn btn-secondary">
                    Have an account?
                    <br /> <span>LOG IN</span>
                  </button>
                  <button className="btn btn-primary">
                    New to Swiggy?
                    <br /> <span>SIGN UP</span>
                  </button>
                </div>
              </div>
              <div className="img-wrap">
                <img
                  alt="img"
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_147,h_140/Image-login_btpq7r"
                />
              </div>
            </div>
            <div className="detail-section">
              <div className="icon-div">
                <IoLocation />
              </div>
              <div className="content-wrap">
                <h3>Delivery address</h3>
              </div>
            </div>
            <div className="detail-section">
              <div className="icon-div">
                <GiWallet />
              </div>
              <div className="content-wrap">
                <h3>Payment</h3>
              </div>
            </div>
          </div>
          {/* <div className="right-section">
            <div className="cart-section">
              <div className="cart-header">
                <div className="cart-details">
                  <img
                    alt=""
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/19/90be450a-78a5-47e7-a689-894c351d64fc_676.jpg"
                  />
                  <div className="item-detail">
                    <h3>Chai Point</h3>
                    <p>Koramangala</p>
                  </div>
                </div>
                <div className="clear-btn"><button className="btn" onClick={handleClearCart}>Clear Cart</button></div>
              </div>
              <div className="cart-body">
                {cartItems.map((item) => (
                  <div className="cart-row amt" key={item?.card?.info?.id}>
                    <span className="item-text">
                      <span
                        className={
                          item?.card?.info?.itemAttribute?.vegClassifier ==
                          "VEG"
                            ? "food-category veg-food"
                            : "food-category"
                        }
                      >
                        <TbTriangleFilled className="non-veg" />
                        <GiPlainCircle className="veg" />
                      </span>
                      <p>
                        {item?.card?.info?.name}
                        <Link>Customize</Link>
                      </p>
                    </span>
                    <span className="quantity-btn">
                      <span className="minus">
                        <TiMinus />
                      </span>
                      <span className="value">1</span>
                      <span className="plus">
                        <MdAdd />
                      </span>
                    </span>
                    <span className="item-value">
                      &#8377;{" "}
                      {item?.card?.info?.defaultPrice / 100 ||
                        item?.card?.info?.price / 100}
                    </span>
                  </div>
                ))}
                <div className="suggestion">
                  <textarea
                    type="text"
                    placeholder="Any suggestions? We will pass it on..."
                  ></textarea>
                </div>
                <div className="checkbox-wrap">
                  <input type="checkbox" />
                  <div>
                    <h5>Opt in for No-contact Delivery</h5>
                    <p>
                      Unwell, or avoiding contact? Please select no-contact
                      delivery. Partner will safely place the order outside your
                      door (not for COD)
                    </p>
                  </div>
                </div>
                <div className="bill-details">
                  <div className="bill-div">
                    <h4>Bill Details</h4>
                  </div>
                  <div className="bill-div">
                    <span className="bill-item">Item Total</span>
                    <span className="bill-value">&#8377; {total}</span>
                  </div>
                  <div className="bill-div">
                    <span className="bill-item">
                      Delivery Fee | 1.4 kms <span className="info">i</span>
                    </span>
                    <span className="bill-value">&#8377; 40</span>
                  </div>
                </div>
                <div className="bill-details">
                  <div className="bill-div">
                    <span className="bill-item">Delivery Tip</span>
                    <span className="bill-value">Add tip</span>
                  </div>
                  <div className="bill-div">
                    <span className="bill-item">
                      Platform fee <span className="info">i</span>
                    </span>
                    <span className="bill-value">&#8377; 10</span>
                  </div>
                  <div className="bill-div">
                    <span className="bill-item">
                      GST and Restaurant Charges <span className="info">i</span>
                    </span>
                    <span className="bill-value">&#8377; 45.20</span>
                  </div>
                </div>
              </div>
              <div className="cart-footer">
                <span className="bill-item">TO PAY</span>
                <span className="bill-value">&#8377; { total+40+10+45.20 }</span>
              </div>
            </div>
            <div className="review">
              <div className="review-div">
                <h4>
                  Review your order and address details to avoid cancellations
                </h4>
                <p>
                  Note: Please ensure your address and order details are
                  correct. This order, if cancelled, is non-refundable.
                </p>
                <button className="anchor-btn">Read policy</button>
              </div>
            </div>
          </div> */}
          <div className="right-section">
            <div className="cart-section">
              <div className="cart-header">
                {/* <img alt={name} src={menuImage + restaurantImage} /> */}
                <Link to="">
                <div className="cart-details">
                  <img
                    alt=""
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/19/90be450a-78a5-47e7-a689-894c351d64fc_676.jpg"
                  />
                  <div className="item-detail">
                    {/* <h3>{name}</h3>
                <p>{location}</p> */}
                    <h3>Chai Point</h3>
                    <p>Koramangala</p>
                  </div>
                </div>
                </Link>
                <div className="clear-btn"><button className="btn" onClick={handleClearCart}>Clear Cart</button></div>
              </div>
              <div className="cart-body">
                {cartItems.map((item) => (
                  <div className="cart-row amt" key={item?.card?.info?.id}>
                    <span className="item-text">
                      <span
                        className={
                          item?.card?.info?.itemAttribute?.vegClassifier ==
                          "VEG"
                            ? "food-category veg-food"
                            : "food-category"
                        }
                      >
                        <TbTriangleFilled className="non-veg" />
                        <GiPlainCircle className="veg" />
                      </span>
                      <p>
                        {item?.card?.info?.name}
                        <Link>Customize</Link>
                      </p>
                    </span>
                    <span className="quantity-btn">
                      <span className="minus" >
                        {/* onClick={handleRemoveItem(item)} */}
                        <TiMinus />
                      </span>
                      <span className="value">{item?.quantity}</span>
                      <span className="plus" >
                        {/* onClick={handleAddItem(item)} */}
                        <MdAdd />
                      </span>
                    </span>
                    <span className="item-value">
                      &#8377;{" "}
                      {item?.card?.info?.defaultPrice / 100 ||
                        item?.card?.info?.price / 100 * item?.quantity}
                    </span>
                  </div>
                ))}
                <div className="suggestion">
                  <textarea
                    type="text"
                    placeholder="Any suggestions? We will pass it on..."
                  ></textarea>
                </div>
                <div className="checkbox-wrap">
                  <input type="checkbox" />
                  <div>
                    <h5>Opt in for No-contact Delivery</h5>
                    <p>
                      Unwell, or avoiding contact? Please select no-contact
                      delivery. Partner will safely place the order outside your
                      door (not for COD)
                    </p>
                  </div>
                </div>
                <div className="bill-details">
                  <div className="bill-div">
                    <h4>Bill Details</h4>
                  </div>
                  <div className="bill-div">
                    <span className="bill-item">Item Total</span>
                    <span className="bill-value">&#8377; {total}</span>
                  </div>
                  <div className="bill-div">
                    <span className="bill-item">
                      Delivery Fee | 1.4 kms <span className="info">i</span>
                    </span>
                    <span className="bill-value">&#8377; 40</span>
                  </div>
                </div>
                <div className="bill-details">
                  <div className="bill-div">
                    <span className="bill-item">Delivery Tip</span>
                    <span className="bill-value">Add tip</span>
                  </div>
                  <div className="bill-div">
                    <span className="bill-item">
                      Platform fee <span className="info">i</span>
                    </span>
                    <span className="bill-value">&#8377; 10</span>
                  </div>
                  <div className="bill-div">
                    <span className="bill-item">
                      GST and Restaurant Charges <span className="info">i</span>
                    </span>
                    <span className="bill-value">&#8377; 45.20</span>
                  </div>
                </div>
              </div>
              <div className="cart-footer">
                <span className="bill-item">TO PAY</span>
                <span className="bill-value">&#8377; { total+40+10+45.20 }</span>
              </div>
            </div>
            <div className="review">
              <div className="review-div">
                <h4>
                  Review your order and address details to avoid cancellations
                </h4>
                <p>
                  Note: Please ensure your address and order details are
                  correct. This order, if cancelled, is non-refundable.
                </p>
                <button className="anchor-btn">Read policy</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Cart;
