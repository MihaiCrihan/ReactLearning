import React from "react";
import Item from "./Item"

export default function Items(props) {
    return (
        <div className="item">
            {props.items.map((el) => (
                <Item onShowItem={props.onShowItem} key={el.id} item={el} onAdd={props.onAdd}/>
            ))}
        </div>
    )
}