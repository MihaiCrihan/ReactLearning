import React, {useState} from 'react';

const Categories = (props) => {
    const [categories, setCategories] = useState([
        {
            id: 'all',
            name: 'All'
        },
        {id: 'vegetarian', name: 'Vegetarian'},
        {id: 'meat', name: 'Meat'}
    ])

    return (
        <div className="categories">
            {categories.map(el => (
                <div className="chip" key={el.id} onClick={() => props.chooseCategory(el.id)}> {el.name}</div>
            ))}
        </div>
    );
}

export default Categories;