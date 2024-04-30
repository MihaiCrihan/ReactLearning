import React from "react";
import logo from "../img/logo.svg";

class Header extends React.Component {
    render() {
        return (
            <div>
                <h4>{this.props.title}</h4>
                <img src={logo} className="App-logo" alt="logo" width={74} height={74}/>
            </div>
        )
    }
}

export default Header;