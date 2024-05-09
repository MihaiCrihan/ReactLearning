import React from 'react';
import {FaXmark} from "react-icons/fa6";

const ShowFullItem = (props) => {
    return (
        <div className="modal-overlay" onClick={() => props.onShowItem(props.item)}>
            <div className='full-item-modal'>
                <img src={"./img/" + props.item.img} alt=""/>
                <div className="card-body">
                    <h2>{props.item.title}</h2>
                    <p>{props.item.description}</p>
                    <div className="category">{props.item.category}</div>
                    <div className="price">{props.item.price}$</div>
                    <button className="add-to-card" onClick={() => props.onAdd(props.item)}>Add</button>
                </div>
                <FaXmark className="close-modal" onClick={() => props.onShowItem(props.item)}/>
            </div>
        </div>
    );
}

export default ShowFullItem;