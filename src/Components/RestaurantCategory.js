// import React, { useState } from 'react'
import ItemList from './ItemList';
const RestaurantCategory = (props) => {
    const { data, showItems, setShowIndex } = props;
    const handleClick = () => {
        // setShowItems(!showItems)
        setShowIndex();
    };
    return (
        <div className='col-md-12 mb-1'>
            <div className='d-flex' onClick={handleClick}>
                <h6 className="p-3 m-0 bg-light w-100">{data.title} <small className="text-black-50">{data.itemCards.length} ITEMS</small> </h6>
            </div>
            { showItems && <ItemList items={data.itemCards}></ItemList>}
        </div>

    )
}

export default RestaurantCategory