import React from 'react'
import './header.css'
import SideBar from "../sidebar/sidebar.js";
import "../sidebar/sidebar.css";
import {Route} from 'react-router-dom'


class Header extends React.Component {

    render() {
        return (
            <div id="top-navigation">

                <div id="site-burger">
                    <SideBar pageWrapId={"page-wrap"} outerContainerId={"top-navigation"}/>
                </div>

                <div id='site-name'>
                    <h1 id="site-name">
                        Coffee Code & Creatine
                    </h1>
                </div>


            </div>
        );
    }
}

export default Header;