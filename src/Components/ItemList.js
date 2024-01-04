// import { Link } from "react-router-dom"
import { CDN_URL } from "../utils/Constant"
import { useDispatch } from "react-redux"
import { addItem } from "../utils/cartSlice";
import veg from '../veg.png'
import nonVeg from '../nonveg.png'

const ItemList = ({items}) => {
    const dispatch = useDispatch();
    const handleAddItem = (item) =>{
        // dispatch(addItem(item))
        dispatch(addItem({ info: item.card.info, quantity: 1 }));
    }
    return (
        <div className="itemList">
            {/* <h1 className="itemListHeading"> Item List</h1> */}
            <div className="row m-0">
                    {
                        items.map((item) => (
                            <div className="col-md-12 px-0 border-top" key={item.card.info.id}>
                                <div className="row p-3 border-bottom gold-members">
                                    <div className="media col-md-9">
                                        {item.card?.info?.isVeg ? (
                                            <img width={20} className="food__img mx-1" src={veg} alt="Veg"/>
                                            ) : (
                                            <img width={20} className="food__img mx-1" src={nonVeg} alt="Nonveg" />
                                        )}
                                        <div className="media-body">

                                            <h6 className="mb-1">{item.card.info.name} </h6>
                                            <p className="text-muted mb-0">Rs.{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</p>
                                            <p className="text-muted mb-0">{item.card.info.description}</p>

                                        </div>
                                    </div>
                                    <div className="col-md-3 d-flex align-content-right flex-wrap w-100">
                                        {/* { item.card.info.imageId  ?  */}
                                            <img src={CDN_URL + item.card.info.imageId} className="float-right img-fluid img-thumbnail w-50 rounded" alt="..." /><button className="btn btn-secondary btn-sm position-absolute" onClick={() => handleAddItem(item)}>ADD </button>
                                            {/* // : <p> {item.card.info.nextAvailableAtMessage}</p> 
                                        // } */}
                                    </div>
                                </div>
                            </div>
                        ))    
                    }
                </div>
        </div>
    )
}

export default ItemList