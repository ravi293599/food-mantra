import { menuImage } from "../../Utils/mockData";
import { useState } from "react"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const MOVE_COUNT = 1
const MAX_RIGHT_CLICK_VALUE = 4
const MAX_LEFT_CLICK_VALUE = -2

const WhatInYourMindCarousel = ({ data }) => {
    const title = data?.card?.card?.header?.title
    const slides = data?.card?.card?.imageGridCards?.info
    if (!slides?.length) return

    const [currentSlide, setCurrentSlide] = useState(0);
    const [style, setStyle] = useState({})

    const nextSlide = () => {
        if (currentSlide < MAX_RIGHT_CLICK_VALUE) {
            if (currentSlide < 0) {
                setCurrentSlide(1);
                setStyle({ transform: `translateX(-${currentSlide * 10}%)` })
            }
            else {
                setCurrentSlide((prev) => prev + MOVE_COUNT);
                setStyle({ transform: `translateX(-${currentSlide * 10}%)` })
            }
        }
    };

    const prevSlide = () => {
        if (currentSlide > MAX_LEFT_CLICK_VALUE) {
            setCurrentSlide((prev) => prev - MOVE_COUNT);
            setStyle({ transform: `translateX(-${currentSlide * 10}%)` })
        }
    };

    return <div className="carousel-container">
        <div className="carousel-header">
            {title}
            <span className="scroll-arrow">
            <span className="arrow-left circle" onClick={prevSlide}><FaArrowLeft /></span>
                <span className="arrow-right circle" onClick={nextSlide}><FaArrowRight /></span>
            </span>
        </div>
        <div className="carousel">
            <div className="carousel-inner" style={style}>
                {slides.map(({ imageId }) => (
                    <div className="slide"  key={imageId}>
                         <img src={menuImage + imageId}></img>
                        {/* <div className="image">
                           
                        </div> */}
                    </div>))}
            </div>
        </div>
    </div>
}

export default WhatInYourMindCarousel