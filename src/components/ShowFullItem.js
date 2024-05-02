import React from 'react';

const ShowFullItem = (props) => {
    return (
        <div className='full-item'>
            <img src={"./img/" + props.item.img} alt="" onClick={() => props.onShowItem(props.item)}/>
            <h2>{props.item.title}</h2>
            <p>{props.item.description}</p>
            <div className="category">{props.item.category}</div>
            <div className="price">{props.item.price}$</div>
            <button className="add-to-card" onClick={() => props.onAdd(props.item)}>Add</button>

        </div>
    );
}

export default ShowFullItem;