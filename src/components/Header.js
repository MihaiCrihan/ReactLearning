import React, {useState} from "react";
import logo from "../img/logo.svg";
import {FaCartShopping} from "react-icons/fa6";

const Header = ({title}) => {
    let [cartOpen, setCartOpen] = useState(false)

    return (
        <header>
            <div className="container">
                <img src={logo} className="App-logo" alt="logo" width={74} height={74}/>
                <h4>{title}</h4>
                <ul className="nav">
                    <li>About</li>
                    <li>Contacts</li>
                    <li>Cabinet</li>
                </ul>
                <button
                    className={`shop-cart-btn ${cartOpen && 'active'}`}
                    onClick={() => setCartOpen(cartOpen = !cartOpen)}

                >
                    <FaCartShopping/>
                </button>
                {cartOpen && (
                    <div className="shop-cart">
                        Shop cart
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
