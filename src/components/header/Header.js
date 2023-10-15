import React, {Component} from 'react';
import '../../App.css'
import logo from "../../img/vnv logo-05.png"
class Header extends Component {
    render() {
        return (
            <div className={"header"}>
                <img className={"logo"} src={logo} alt="Лого"/>
                <ul className={"ul-header"}>
                    <li>SERVICES</li>
                    <li>PROJECTS</li>
                    <li>TEAM</li>
                </ul>
                <button className="animated-button">Замовити</button>
            </div>
        );
    }
}

export default Header;