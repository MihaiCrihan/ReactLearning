import Header from "./components/Header";
import React, {useState} from "react";

function App() {
    const [likes, setLikes] = useState(5)
    const [value, setValue] = useState("text in imput")

    function increment() {
        setLikes(likes + 1);
    }

    function decrement() {
        setLikes(likes - 1);
    }

    return (
        <div className="App">
            <Header title="Reactiv Pizza"/>
            <h1>{likes}</h1>
            <h1>{value}</h1>
            <input
                type="text"
                value={value}
                onChange={event => setValue(event.target.value)}/>
            <button onClick={increment}>Increase</button>
            <button onClick={decrement}> Decrease</button>
        </div>
    );
}

export default App;

