// import ItemList from "./ItemList"
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, decrementQuantity, incrementQuantity, removeItem } from "../utils/cartSlice";
import { CDN_URL, ORDER_TAX, SHIPPING_CHARGE } from "../utils/Constant";
import { useState } from 'react';


const Cart = () => {
    const dispatch = useDispatch();
    // const [subTotal, setSubTotal] = useState(0);
    const cartItems = useSelector((store)=> store.cart.items)
    const orderTotal = cartItems.reduce((total, item) => total + (item.card.info.price*item.card.info.quantity), 0) / 100;
    const total = parseFloat(orderTotal) + parseFloat(SHIPPING_CHARGE) + parseFloat(ORDER_TAX);
    const finalTotal = ` ${parseFloat(total).toFixed(2)}`;
    console.log('final cartItem', orderTotal )
    const handleClearCart = () => {
        dispatch(clearCart())
    }
    const handleRemoveItem = (item) => {
        dispatch(removeItem(item))
    }

    return (
        <div className="cart container text-center mt-4">
            {
                cartItems.length === 0 ? <h5>Your cart is empty, Please add item to the cart</h5> :
                <div className="row">
                    <div className="col-xl-8">
                        {
                            cartItems.map((item) => (
                                <div className="card border shadow-none mt-2" key={item.card.info.id}>
                                    <div className="card-body">
                                        <div className="d-flex align-items-start border-bottom pb-3">
                                            <div className="col-md-2">
                                                <img src={CDN_URL + item.card.info.imageId} className="float-right img-fluid img-thumbnail w-100 rounded rounded" alt="thumnail" />
                                            </div>
                                            <div className="flex-grow-1 text-left overflow-hidden">
                                                <div>
                                                    <h5 className="text-truncate font-size-18"><a href="/" className="text-dark">{item.card.info.name} </a></h5>
                                                    <p className="text-muted mb-0">
                                                        <i className="bx bxs-star text-warning"></i>
                                                        <i className="bx bxs-star text-warning"></i>
                                                        <i className="bx bxs-star text-warning"></i>
                                                        <i className="bx bxs-star text-warning"></i>
                                                        <i className="bx bxs-star-half text-warning"></i>
                                                    </p>
                                                    <p className="mb-0 mt-1"><span className="fw-medium">{item.card.info.description}</span></p>
                                                </div>
                                            </div>
                                            <div className="flex-shrink-0 ms-2">
                                                <ul className="list-inline mb-0 font-size-16">
                                                    <li className="list-inline-item">
                                                        <button onClick={() => handleRemoveItem(item.card.info.id)} className="text-muted px-1 border-0 bg-transparent ">
                                                            <i className="mdi mdi-trash-can-outline text-danger"></i>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="mt-3">
                                                        <p className="text-muted mb-2">Price</p>
                                                        <h5 className="mb-0 mt-2">₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</h5>
                                                    </div>
                                                </div>
                                                <div className="col-md-5">
                                                    <div className="mt-3">
                                                        <p className="text-muted mb-2">Quantity</p>
                                                        <div className="d-inline-flex">
                                                            <div className="input-group align-self-center w-50 mx-auto">
                                                                <div className="input-group-prepend">
                                                                <button className="btn btn-danger" type="button"
                                                                    onClick={() => dispatch(decrementQuantity(item.card.info.id))}
                                                                > - </button>
                                                                </div>
                                                                <input type="text" className="form-control w-50" value={item.card.info.quantity} readOnly />
                                                                <div className="input-group-prepend">
                                                                <button className="btn btn-success" type="button"
                                                                    // onClick={() => dispatch(incrementQuantity(item.card.info.id))}
                                                                    onClick={() => dispatch(incrementQuantity(item.card.info.id))}
                                                                    > + </button>
                                                                </div>
                                                            </div>                                
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="mt-3">
                                                        <p className="text-muted mb-2">Total</p>
                                                        <h5> ₹ {(item.card.info.quantity || 1) * (item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100)}</h5>
                                     
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="col-xl-4">
                        <div className="mt-5 mt-lg-0">
                            <div className="card border shadow-none">
                                <div className="card-header bg-transparent border-bottom py-3 px-4">
                                    <h5 className="font-size-16 mb-0">Order Summary <span className="float-end">#SW0011</span></h5>
                                </div>
                                <div className="card-body p-4 pt-2">

                                    <div className="table-responsive">
                                        <table className="table mb-0">
                                            <tbody>
                                                <tr>
                                                    <td>Sub Total :</td>
                                                    <td className="text-end">₹ {orderTotal}</td>
                                                </tr>
                                                <tr>
                                                    <td>Discount : </td>
                                                    <td className="text-end">₹ 0</td>
                                                </tr>
                                                <tr>
                                                    <td>Shipping Charge :</td>
                                                    <td className="text-end">₹ {SHIPPING_CHARGE}</td>
                                                </tr>
                                                <tr>
                                                    <td>Estimated Tax : </td>
                                                    <td className="text-end">₹ {ORDER_TAX}</td>
                                                </tr>
                                                <tr className="bg-light">
                                                    <th>Total :</th>
                                                    <td className="text-end">
                                                        <span className="fw-bold">
                                                        ₹ {finalTotal}
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className='mt-2 '>
                                        <button className="btn btn-danger mb-2 mx-2" onClick={handleClearCart}>Clear Cart</button>
                                        <button className="btn btn-dark mb-2" >Checkout</button>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Cart