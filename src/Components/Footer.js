import { Link } from "react-router-dom";
import { menuImage } from "../../Utils/mockData";
import logo from "../../Assets/Logo.jpg"
import { TiSocialLinkedin,TiSocialFacebook,TiSocialTwitter } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { FaPinterest } from "react-icons/fa6";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { useState } from "react";

const Footer = ({footerLink,footerCity}) =>{
    const[showCity, setShowCity] = useState(false);
    //console.log(footerLink);
    //console.log(footerCity);
    const cityHandler = () =>{
        setShowCity(!showCity);
    }
    const cities = footerCity?.card?.card?.cities;
    return(
        <div className="footer-wrapper">
            <div className="row main-footer">
                <div className="footer-col">
                <Link to="/"><img alt="logo" src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg" /></Link>
                <p className="para">© 2024 Swiggy Limited</p>
                </div>
                <div className="footer-col">
                <p className="subtitle">Company</p>
                <div className="footer-link">
                    <Link href="#" className="anchor">About Us</Link>
                    <Link href="#" className="anchor">Swiggy Corporate</Link>
                    <Link href="#" className="anchor">Careers</Link>
                    <Link href="#" className="anchor">Team</Link>
                    <Link href="#" className="anchor">Swiggy One</Link>
                    <Link href="#" className="anchor">Swiggy Instamart</Link>
                    <Link href="#" className="anchor">Swiggy Dineout</Link>
                    <Link href="#" className="anchor">Swiggy Genie</Link>
                </div>
                </div>
                <div className="footer-col">
                <p className="subtitle">Contact us</p>
                <div className="footer-link">
                    <Link href="#" className="anchor">Help & Support</Link>
                    <Link href="#" className="anchor">Partner with us</Link>
                    <Link href="#" className="anchor">Ride with us</Link>
                </div>
                <p className="subtitle second">Legal</p>
                <div className="footer-link">
                    <Link href="#" className="anchor">Terms & Conditions</Link>
                    <Link href="#" className="anchor">Cookie Policy</Link>
                    <Link href="#" className="anchor">Privacy Policy</Link>
                </div>
                </div>
                <div className="footer-col">
                <p className="subtitle">Available in:</p>
                <div className="footer-link">
                    {
                        cities.filter((item,index)=> index<=5).map((city)=>
                            (
                                <Link href={city.link} key={city.text} className="anchor">{city.text}</Link>
                            ))
                    }
                </div>
                <div className="rest-city" onClick={cityHandler}>
                    {cities.length} cities <span>{showCity?<MdOutlineKeyboardArrowUp />:<MdOutlineKeyboardArrowDown />}</span>
                </div>
                </div>
                <div className="footer-col">
                <p className="subtitle">Life at Swiggy</p>
                <div className="footer-link">
                    <Link href="#" className="anchor">Explore with Swiggy</Link>
                    <Link href="#" className="anchor">Swiggy News</Link>
                    <Link href="#" className="anchor">Snackables</Link>
                </div>
                <p className="subtitle second">Social Links</p>
                <div className="social-icons">
                    <a href="#"><TiSocialLinkedin /></a>
                    <a href="#"><SlSocialInstagram /></a>
                    <a href="#"><TiSocialFacebook /></a>
                    <a href="#"><FaPinterest /></a>
                    <a href="#"><TiSocialTwitter /></a>
                </div>
                </div>
            </div>
            <div className="row footer-cta">
                <h4>{footerLink?.card?.card?.title}</h4>
                <div className="footer-cta-wrap">
                    <Link to={footerLink?.card?.card?.iosAppLink}><img width="" src={menuImage + footerLink?.card?.card?.iosAppImage} /></Link>
                    <Link to={footerLink?.card?.card?.androidAppLink}><img width="" src={menuImage + footerLink?.card?.card?.androidAppImage} /></Link>
                </div>
            </div>
            {
                showCity && <div className="row footer-city">
                    <p className="subtitle">Other cities that we deliver:</p>
                <div className="city-wrapper">
                    <ul>
                        {
                            cities.filter((city, index) => index<=172).map((city)=>(
                                <Link to={city.link} key={city.text}><li>{city.text}</li></Link>
                            ))
                        }
                    </ul>
                    <ul>
                        {
                            cities.filter((city, index) => index>172&&index<=344).map((city)=>(
                                <Link to={city.link} key={city.text}><li>{city.text}</li></Link>
                            ))
                        }
                    </ul>
                    <ul>
                        {
                            cities.filter((city, index) => index>344&&index<=516).map((city)=>(
                                <Link to={city.link} key={city.text}><li>{city.text}</li></Link>
                            ))
                        }
                    </ul>
                    <ul>
                        {
                            cities.filter((city, index) => index>516).map((city)=>(
                                <Link to={city.link} key={city.text}><li>{city.text}</li></Link>
                            ))
                        }
                    </ul>
                </div>
            </div>
            }
        </div>
    )
}
export default Footer