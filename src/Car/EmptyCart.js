import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
    return (

        <div className="text-center" >
            <img  height="400px"src="" />
            <div className="text-center">
            <h6 >YOUR CART IS EMPTY</h6>
            <p >"MAKE AN ORDER BRFORE IT MELTS"</p>
            <Link to="/cars"> <button className="btn btn-dark btn-md mb-5">BuyNow</button></Link>
            </div>
        </div>
    )

}

export default EmptyCart


////APP.JS////
import React  from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';

import './App.css';
import Navbar  from './Navbar'
import Footer from './Footer'
import Main from './Main'
import Second from './Second'
import Third from './Third'
import Fourth from './Fourth'
import CheckoutPage from './CheckoutPage'



function App() {


    return (
      <>
  
        <Router>
          <Navbar></Navbar>
  
  
          <Route path="/" exact component={Main}></Route>
          <Route path="/cars" exact component={Second}></Route>
          <Route path="/cars/car" exact component={Third}></Route>
          <Route path="/cars/cart" exact component={Fourth}></Route>
          <Route path='/checkout' component={CheckoutPage}></Route>
          <Route path='/EmptyCart' component={CheckoutPage}></Route>
          
     
  
        </Router>
      
        <Footer></Footer>
  
      </>
  
    );
  }
  
  export default App;

  //////index.js////
  import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import 'bootstrap/dist/css/bootstrap.css';
import { MyProvider } from './MyContext';

ReactDOM.render(
  <MyProvider>
    <App></App>
  </MyProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
