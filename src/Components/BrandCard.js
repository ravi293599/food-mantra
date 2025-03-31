import { Link } from "react-router-dom"
const BrandCard = ({brandData}) =>{
    return(
        <>
        {
            brandData.map((card) => (
                <Link to={card.link} key={card.text}>
                    <div className="best-card" >
                        {card.text}
                    </div>
                </Link>
            ))
        }
        </>
    )
}
export default BrandCard