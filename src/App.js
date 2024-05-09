import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Items from "./components/Items";
import React, {useEffect, useState} from "react";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";
import Notification from "./components/Notification";

const App = () => {
    const [items, setItems] = useState(
        [
            {
                id: 1,
                title: "Margherita Pizza",
                img: "classic-cheese-pizza.jpg",
                description: "Classic Italian pizza with tomato sauce, mozzarella cheese, and fresh basil.",
                category: "vegetarian",
                price: 9.99,
            },
            {
                id: 2,
                title: "Pepperoni Pizza",
                img: "classic-cheese-pizza2.jpg",
                description: "Delicious pizza topped with pepperoni slices and melted cheese.",
                category: "meat",
                price: 12.99,
            },
            {
                id: 3,
                title: "Hawaiian Pizza",
                img: "classic-cheese-pizza.jpg",
                description: "A tropical delight featuring ham, pineapple, and mozzarella cheese.",
                category: "meat",
                price: 11.99,
            },
            {
                id: 4,
                title: "Vegetarian Pizza",
                img: "classic-cheese-pizza3.jpg",
                description: "Loaded with fresh vegetables like bell peppers, onions, and olives.",
                category: "vegetarian",
                price: 10.99,
            },
            {
                id: 5,
                title: "BBQ Chicken Pizza",
                img: "classic-cheese-pizza1.jpg",
                description: "Tender chicken, BBQ sauce, and red onions on a crispy pizza crust.",
                category: "meat",
                price: 13.99,
            },
            {
                id: 6,
                title: "Mushroom Pizza",
                img: "classic-cheese-pizza.jpg",
                description: "Savory pizza with a generous topping of mushrooms and melted cheese.",
                category: "vegetarian",
                price: 10.49,
            },
        ]
    );

    const [fullItem, setFullItem] = useState({})
    const [showFullItem, setShowFullItem] = useState(false)
    const [notification, setNotification] = useState({
        type: '',
        text: ''
    })
    const [currentItems, setCurrentItems] = useState(items)
    const [orders, setOrders] = useState([])

    useEffect(() => {
        if (notification.text) {
            const timer = setTimeout(() => {
                setNotification(prevState => ({ ...prevState, text: '' }));
            }, 20000);

            // Clean up the timer when the component unmounts or when notification changes
            return () => clearTimeout(timer);
        }
    }, [notification.text]);

    const addToOrder = (item) => {
        let isInArray = false
        orders.forEach(el => {
            if (el.id === item.id) {
                isInArray = true
            }
        })
        if (!isInArray) {
            setOrders([...orders, item])
        }

        setNotification({
            type: 'success',
            text: 'Item was added to cart successfully.'
        });
    }

    const deleteOrder = (id) => {
        setOrders(orders.filter(el => el.id !== id))
    }

    const onShowItem = (item) => {
        setFullItem(item)
        setShowFullItem(!showFullItem)
    }

    const chooseCategory = (category) => {
        setCurrentItems(items.filter(el => el.category === category))

        if (category === 'all') {
            setCurrentItems(items)
        }
    }

    return (
        <div className="app">
            <Header title="React" orders={orders} onDelete={deleteOrder}/>
            <div className="main">
                <Hero/>
                <Categories chooseCategory={chooseCategory}/>
                <Items onShowItem={onShowItem} items={currentItems} onAdd={addToOrder}/>
            </div>
            {showFullItem && (
                <ShowFullItem item={fullItem} onAdd={addToOrder} onShowItem={onShowItem}/>
            )}
            {notification.text && (
                <Notification notificationText={notification.text} notificationType={notification.type}/>
            )}
            <Footer/>
        </div>
    );


};

export default App;

