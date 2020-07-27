import React from 'react'
import Header from './Header'
import LoginPage from './LoginPage'
import Footer from './Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from "./Home";
import SignUp from './SignUp';
import Menu from './Menu'
import ItemDetails from './ItemDetails'
import CheckoutPage from './CheckoutPage'
import Cart from './Cart'

import Jellied  from './Jellied'
import Cakes from './Cakes'
import Frozen from './Frozen'

function HomePage() {
    return (
        <>
            <Router>
                <div className="container-fluid ">
                    <Header></Header>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/loginpage" component={LoginPage}></Route>
                    <Route path="/signup" component={SignUp}></Route>
                    <Route path="/menu" exact component={Menu}></Route>
                    <Route path='/checkout' component={CheckoutPage}></Route>
                    <Route path='/cart' component={Cart}></Route>
                    <Route path='/menu/jellied' component={Jellied}></Route>
                    <Route path='/menu/cakes' component={Cakes}></Route>
                    <Route path='/menu/frozen' component={Frozen}></Route>
                    <Route path='/menu/itemdetails' component={ItemDetails}></Route>
                    <Footer></Footer>
                </div>
            </Router>
        </>
    )
}
export default HomePage