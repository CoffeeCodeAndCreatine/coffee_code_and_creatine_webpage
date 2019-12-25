import React from 'react'
import './homePage.css'
import Header from '../shared/header/header'
import Footer from '../shared/footer/footer'
import {Route} from 'react-router-dom'

class HomePage extends React.Component {
    constructor() {
        super();
        this.state = {

        };

    }



    render() {
        return (
            <main id="home-container" >
                <Header/>
                <container id="hc">
                    <div id={"spacer"}></div>
                    <div id="home-mission">
                        <div id={"top-text"}>
                            <text>
                                Coffee Code & Creatine
                            </text>
                        </div>
                    </div>
                    <div id="bottom-text">
                        <text>
                            Where Programming & Product Reviews <br/> Meets Protein & Powerlifting
                            <br/><br/>
                            and coffee...
                            <br/>
                            lots and lots of coffee
                        </text>
                    </div>
                    <div id={"blue"}></div>
                    <div id={"top-coffee"}>

                    </div>
                    <div id={"blue"}></div>
                    <div id={"top-code"}>

                    </div>
                    <div id={"blue"}></div>
                    <div id={"top-creatine"}>

                    </div>
                    <div id={"blue"}></div>


                </container>
                <Footer/>
            </main>
        )
    }
}

export default HomePage