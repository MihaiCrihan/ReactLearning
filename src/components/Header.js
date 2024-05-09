import React, {useState} from "react";
import logo from "../img/logo.svg";
import Order from "./Order";
import {FaCartShopping} from "react-icons/fa6";
import Item from "./Item";

const Header = (props) => {
    let [cartOpen, setCartOpen] = useState(false)
    let sum = 0

    return (
        <header>
            <div className="container">
                <img src={logo} className="App-logo" alt="logo" width={74} height={74}/>
                <h4>{props.title}</h4>
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
                    <span className="cart-count-badge">
                        {props.orders.length}
                    </span>
                </button>
                {cartOpen && (
                    <div className={`shop-cart ${!props.orders.length ? 'empty' : ''}`}>
                        {props.orders.length ? (
                            props.orders.map((el) => (
                                <Order onDelete={props.onDelete} key={el.id} order={el}/>
                            ))
                        ) : (
                            <div>Empty cart</div>
                        )}

                        {props.orders.forEach(el => {
                            sum += Number.parseFloat(el.price);
                        })}

                        {props.orders.length > 0 && (
                            <div>Total sum: {new Intl.NumberFormat().format(sum)}</div>
                        )}
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
