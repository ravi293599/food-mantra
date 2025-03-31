import BrandCard from "./BrandCard"

const BestPlace = ({brandData}) =>{
    return(
        <div className="home-wrapper">
            {
                brandData.map((brand) =>(
                    <div className="best-place" key={brand?.card?.card?.title}> 
                        <h2 className="title">{brand?.card?.card?.title}</h2>
                        <div className="best-place-wrapper">
                            <BrandCard brandData={brand?.card?.card?.brands} />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default BestPlace