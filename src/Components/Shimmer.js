const Shimmer = () =>{
    return(
        <div className="shimmer-container">
             {Array(20).fill(1).map((el, i) =>
                    <div className="shimmer-card" key={i}></div>
                )}
        </div>
    )
}

export default Shimmer