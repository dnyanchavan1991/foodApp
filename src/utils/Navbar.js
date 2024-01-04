import React from 'react'
import { Link } from "react-router-dom";
import { LOGO_URL } from './Constant';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const cartItems = useSelector((store)=> store.cart.items)
    console.log('cartItems',cartItems)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className='container'>
                <Link className="navbar-brand w-50" to="/"><img src={LOGO_URL} className="d-inline-block align-top w-25 h-25" alt='food logo'/></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="nav navbar-nav float-md-end">
                        <li className="nav-item active m-2">
                            <Link className="nav-a" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item m-2">
                            <Link className="nav-a" to="/about">About</Link>
                        </li>
                        <li className="nav-item m-2">
                            <Link className="nav-a" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item m-2">
                            <Link className="nav-a" to="/cart">Cart - {cartItems.length} items</Link>
                        </li>
                    </ul>
                    {/* <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
                </div>
            </div>
        </nav>
    )
}

export default Navbar