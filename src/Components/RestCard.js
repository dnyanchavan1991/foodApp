// import React from "react";
import { CDN_URL } from '../utils/Constant'

const RestCard = (props) => {
    const { restData } = props;
    // console.log("restData.name")
    // console.log(props)

    return(
            <div className="card bg-white rounded overflow-hidden shadow-sm h-100">
                {/* <div className='card-image '> */}
                    <img src={CDN_URL + restData.cloudinaryImageId} className="card-img-top img-responsive w-100 h-50" alt="..." />
                {/* </div> */}
                <div className="card-body p-4">
                    <h5 className="card-title text-dark">{restData.name}</h5>
                    <p className="card-text text-secondary">{restData.cuisines.join(' , ')}</p>
                    <p className="card-text text-secondary">{restData.avgRating} | <span className='font-weight-bold'>{restData.costForTwo}</span> </p>
                    <p className="card-text text-secondary">{restData.locality}</p>
                    {/* <Link to={} className="btn btn-primary">View Menu</Link> */}
                </div>
            </div>
    )
}

export const withPromotedLabel = () => {
    return (props) => {
        return (
            <div>
                <div class="member-plan position-absolute"><span class="badge badge-dark">Promoted</span></div>
                <RestCard {...props}/>
            </div>
        )
    }
}
export default RestCard;