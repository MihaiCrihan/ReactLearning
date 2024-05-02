import React from "react";

export default function Item(props) {
    return (
        <div className="item-card" >
            <img src={"./img/" + props.item.img} alt="" onClick={() => props.onShowItem(props.item)}/>
            <div className="card-body">
                <h2>{props.item.title}</h2>
                <p>{props.item.description}</p>
                <div className="category">{props.item.category}</div>
                <div className="d-flex justify-content-between">
                    <div className="price">{props.item.price}$</div>
                    <button className="add-to-card" onClick={() => props.onAdd(props.item)}>Add</button>
                </div>
            </div>
        </div>
    )
}