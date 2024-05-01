import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Items from "./components/Items";
import React, {useState} from "react";

const App = () => {
    const [items, setItems] = useState(
        [
            {
                id: 1,
                title: "Margherita Pizza",
                img: "classic-cheese-pizza.jpg",
                description: "Classic Italian pizza with tomato sauce, mozzarella cheese, and fresh basil.",
                category: "Vegetarian",
                price: 9.99,
            },
            {
                id: 2,
                title: "Pepperoni Pizza",
                img: "classic-cheese-pizza2.jpg",
                description: "Delicious pizza topped with pepperoni slices and melted cheese.",
                category: "Meat",
                price: 12.99,
            },
            {
                id: 3,
                title: "Hawaiian Pizza",
                img: "classic-cheese-pizza.jpg",
                description: "A tropical delight featuring ham, pineapple, and mozzarella cheese.",
                category: "Meat",
                price: 11.99,
            },
            {
                id: 4,
                title: "Vegetarian Pizza",
                img: "classic-cheese-pizza3.jpg",
                description: "Loaded with fresh vegetables like bell peppers, onions, and olives.",
                category: "Vegetarian",
                price: 10.99,
            },
            {
                id: 5,
                title: "BBQ Chicken Pizza",
                img: "classic-cheese-pizza1.jpg",
                description: "Tender chicken, BBQ sauce, and red onions on a crispy pizza crust.",
                category: "Meat",
                price: 13.99,
            },
            {
                id: 6,
                title: "Mushroom Pizza",
                img: "classic-cheese-pizza.jpg",
                description: "Savory pizza with a generous topping of mushrooms and melted cheese.",
                category: "Vegetarian",
                price: 10.49,
            },
        ]
    );

    return (
        <div className="app">
            <Header title="React"/>
            <div className="main">
                <Hero/>
                <Items items={items}/>
            </div>
            <Footer/>
        </div>
    );
};

export default App;

