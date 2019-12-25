import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
    return (
        <Menu {...props}>
            <a className="menu-item" href="/">
                Home
            </a>

            <a className="menu-item" href="/Coffee">
                Coffee
            </a>

            <a className="menu-item" href="/Code">
                Code
            </a>

            <a className="menu-item" href="/Creatine">
                Creatine
            </a>
            <a className="menu-item" href="/Contact">
                Contact
            </a>
            <a className="menu-item" href="/Creator">
                Creator
            </a>
        </Menu>
    );
};