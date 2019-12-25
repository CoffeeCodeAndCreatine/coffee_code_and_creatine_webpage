import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {Route, Link, BrowserRouter as Router} from 'react-router-dom'
import HomePage from './home_page/homePage'
import CoffeePage from './coffee_page/coffeePage'
import CodePage from './code_page/codePage'
import CreatinePage from './creatine_page/creatinePage'
import CreatorPage from './creator_page/creatorPage'
import ContactPage from './contact_page/contactPage'


const routing = (
    <Router>
        <div>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/Coffee" component={CoffeePage}/>
            <Route exact path="/Code" component={CodePage}/>
            <Route exact path="/Creatine" component={CreatinePage}/>
            <Route exact path="/Creator" component={CreatorPage}/>
            <Route exact path="/Contact" component={ContactPage}/>
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'))