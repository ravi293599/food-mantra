import {useEffect, useState} from 'react';
import { FaStar } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { TbTriangleFilled } from "react-icons/tb";
import { menuImage,restaurantDetails } from "../../Utils/mockData";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { RiStarSLine } from "react-icons/ri";
import RestaurantPopup from './RestaurantPopup';
import {useDispatch, useSelector} from "react-redux";
import { addItems, removeItems } from "../Store/cartSlice";
const Accordian = ({title,size,content,vegOrNonVeg,BestSeller}) =>{
    const [isActive, setIsActive] = useState(false)
    const [selectId, setSelectId] = useState(null);
    const [showPopup, setShowpopup] = useState(false);
    const [items,setItems] = useState([]);
    // const handleAccordian = () =>{
    //     setIsActive(!isActive);
    // }
    const dispatch = useDispatch()
    const cartItems = useSelector((store) => store.cart.items);
    const handleAddItem = (item) =>{
        dispatch(addItems(item));
    }
    const handleRemoveItem = (item) =>{
        dispatch(removeItems(item));
    }
    const popupHandler = (id) =>{
        setShowpopup(!showPopup);
        setSelectId(id)
    }
    //console.log(selectId);
    const closePopUp = () =>{
        setShowpopup(false);
        // setSelectId(null);
    }
    // console.log(selectId);
    // const dataMaterial = resMenuData.filter((item) => item.card.card.itemCards);
    // useEffect(()=>{
    //     setItems(dataMaterial);
    // },[])
    
    //console.log(items)
    //console.log(resMenuData);
    let filterable = vegOrNonVeg;
    let vegFilter = content.filter((item)=>item?.card?.info?.itemAttribute?.vegClassifier == "VEG");
    let nonvegFilter = content.filter((item)=>item?.card?.info?.itemAttribute?.vegClassifier == "NONVEG");
    let filterContent = filterable == "VEG"? vegFilter : nonvegFilter;
    let finalContent = filterable == null ? content: filterContent;
    finalContent = BestSeller?finalContent.filter((item)=> item?.card?.info?.isBestseller == true):finalContent;
    //console.log(content)
    return(
        <>
            {
                finalContent.length > 0 && <div className="accordian" key={title}>
                <div className="title-section"><span className='accordian-upper' onClick={() => setIsActive(!isActive)}>{title}&nbsp;({finalContent.length})<span className={isActive?"accordian-btn active":"accordian-btn"}></span></span>
                {isActive && <div className='body-section'>
                <div className="card-wrapper" >
                    {   
                       finalContent.map((att, index)=>
                        <div className="card" key={att?.card?.info?.id}>
                       <div className="left">
                           <span className='menu-details'>
                               <span className={att?.card?.info?.itemAttribute?.vegClassifier =="VEG"?"food-category veg-food":"food-category"}>
                                       <TbTriangleFilled className="non-veg" />
                                       <FaCircle className="veg"/>
                               </span>
                               {
                                   att?.card?.info?.isBestseller ? <span className='bestseller'>
                                   <RiStarSLine /> Bestseller
                                  </span>:""
                               }
                           </span>
                           <h3>{att?.card?.info?.name}</h3>
                           {/* <p><span className='rupee'></span> {att?.card?.info?.price/100}</p> */}
                           {att?.card?.info?.offerTags?<span className='price-with-disc'><p><span className='rupee'></span> {att?.card?.info?.price/100}</p>{att?.card?.info?.offerTags[0]?.title?<p className='menu-discount'><BiSolidPurchaseTag />{att?.card?.info?.offerTags[0]?.title +" "+ att?.card?.info?.offerTags[0]?.subTitle}</p>:""}</span>:<p><span className='rupee'></span> {att?.card?.info?.defaultPrice / 100 ||
                        att?.card?.info?.price / 100}</p>}
                           {/* <p>{att?.card?.info?.itemAttribute?.vegClassifier}</p> */}
                           {att?.card?.info?.ratings?.aggregatedRating?.rating ? <p className='menu-rating'><FaStar className="rating" /> <span className="rating-text">{att?.card?.info?.ratings?.aggregatedRating?.rating}</span> ({att?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})</p>: ""}
                           <p className='menu-description'>{att?.card?.info?.description}</p>
                       </div>
                       <div className={att?.card?.info?.category.includes("LATE NIGHT SPECIALS")?"right late-night-special":"right"}>
                           <img alt={att?.card?.info?.name} src={menuImage + att?.card?.info?.imageId} onClick={()=>popupHandler(index)} />
                           <div className="add-btn">
                               {}
                               {cartItems.find(item => item?.card?.info?.id === att?.card?.info?.id)?
                               <span className='add-remove-btn'>
                               <span className='remove-btn' onClick={()=>handleRemoveItem(att)}>-</span>
                               <span className='quantity'>{cartItems.find(item => item?.card?.info?.id === att?.card?.info?.id).quantity}</span>
                               <span className='addition-btn' onClick={()=>handleAddItem(att)}>+</span>
                              </span>:
                              att?.card?.info?.category.includes("LATE NIGHT SPECIALS")?<span className='next-availability'>{att?.card?.info?.nextAvailableAtMessage}</span>:<button className="btn pick-btn" onClick={()=>handleAddItem(att)}>add</button>
                               }
                               <p>Customisable</p>
                           </div>
                       </div>
                   </div>
                            )
                        }
                        {showPopup && <RestaurantPopup data={finalContent[selectId]?.card?.info} closePopUp={closePopUp} />}
                    </div>
                </div>}
                </div>
                
            </div>
            }
        </>
    )
}
export default Accordian;



