import React from "react";
import { FaTrash } from "react-icons/fa6";


export default function Order(props) {
    return (
        <div className="order d-flex">
            <img src={"./img/" + props.order.img} alt="" width={80}/>
            <div>{props.order.title}</div>
            <div className="price">{props.order.price}$</div>
            <button className="delete-from-card" onClick={() => props.onDelete(props.order.id)}>
                <FaTrash />
            </button>
        </div>
    )
}