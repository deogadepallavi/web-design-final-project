import { Component } from "react";
import { MenuData } from "./MenuData";
import logofootball from "../images/logofootball.jpg";

import "./NavbarStyles.css";

class Navbar extends Component {

    state = { clicked: false };
    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }
    render() {
        return (
            <nav className="NavbarItems">
            <img className = "logo__pic" src={logofootball} alt="logo image of football" />
                <h1 className="logo">
                    Football World Cup 2022
                </h1>
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "gg-close" : "gg-menu-grid-o"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuData.map((item, index) => {
                        return (
                            <li key={index}>
                                <button
                                    className={item.cName}
                                    onClick={() => this.props.onchangeComponent(item.component)}
                                >
                                    {item.title}
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        );
    }
}

export default Navbar;