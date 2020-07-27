import React, { useContext } from 'react'
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom'
const Header = () => {
    const { state: { cart } } = useContext(CartContext)
    return (
        <header className="NavImg mr-5" >
            <nav className="navbar navbar-expand-md  navbar-light " >
                <h4 style={{ fontSize: 'xx-large',fontFamily:'cursive',color:'success' }} className="text-white navbar-brand">
                  
                  <img height="40px" src="https://pluspng.com/img-png/ice-cream-png-ice-cream-png-image-512.png" />Milk-Bar Stores</h4>
                <ul className="navbar-nav ml-auto ">
               
                       
                    <Link to="/">
                        <li className="nav-item mr-2">
                            <a className="nav-link  text-white " href="#">Home</a>
                        </li>
                    </Link>
                    <li className="nav-item mr-2">
                        <button type="button" class="btn  btn-link text-white " data-toggle="modal" data-target="#exampleModalLong">
                            About
                    </button>
                        <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title font" id="exampleModalLongTitle"> Milk-Bar Stores</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <h4>Discover and choose our Items</h4>
                                        <p>
                                            Milk-Bar Stores hailed with an urge to craft the finest flavours upbringing
                                            rich and creamy texture for an indulging experience. From fairs,
                                            festivals and parties to “hooray”,” yippee” and “yaay”, take a dose of
                                            Iceberg ice creams and amplify the happiness.
                                            It is all about creating sumptuous treats for everyone, every day and everywhere! And, when buy your desserts
                                            online we can deliver it free of charge direct to your home or via our
                                            new click and collect option*, safely and in full accordance with the UK
                                            Government’s defined social distancing and COVID-19 guidelines and protocols.
                                        Please contact your local participating Retailer for further information.</p>
                                        <p>
                                            *restricted to participating retailers in England only.</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-info" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="nav-item">
                            <button type="button" class="btn btn-link text-white" data-toggle="modal" data-target=".bd-example-modal-lg">Contact Us</button>
                            <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-lg">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title font ml-2" id="exampleModalLongTitle">Milk-Bar Stores</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <h5 class="ml-4">Coronavirus COVID-19 status update</h5>
                                        <p class="ml-4">Please note that whilst plans are underway to maintain
                                        the best service possible during the period of the Coronavirus COVID-19 threat,
          our Customer Care team was already in the process of being re-located.</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    <Link to="/loginpage">
                        <li className="nav-item pr-4">
                            <a className=" nav-link text-white " href="#">Login</a>
                        </li></Link>
                    <Link to="/signup">
                        <li className="pr-4 nav-item">
                        <a className=" nav-link text-white " href="#">SignUp</a>
                        </li></Link>
                    <Link to="/cart">
                        <li className="pr-4 nav-item">
                            <a className=" nav-link text-white font-weight-bold">MyCart({cart.length})</a>
                        </li></Link>
                </ul>
            </nav>
        </header>
    )
}
export default Header;

