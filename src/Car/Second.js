import React, { useContext } from 'react';
import Navbar from './Navbar';
import { MyContext } from './MyContext'
import { Link } from 'react-router-dom';

const Second = () => {
    const { state:{cars} ,handleThirdPage,addtocart}= useContext(MyContext)
    return (
        <>
            <div className="">
             
                <div className="row" >
                    <div class="col-md-3 mt-3 border" style={{ height: '550px' }}>


                    </div>
                    <div className="col-9">
                        <div className="row">

                            {cars.map(({img,carName,Price}, i) => (
                                
                                    <div class="cardclass card mt-3 mx-2 my-2 p-3 boder-dark" style={{ width: '20rem' }}>
                                        <div class="ribbon">
                                            <span class="text-white bg-dark">Most Popular</span></div>
                                        <img class="card-img-top h1" height="150px" src={img} alt="Card image cap"></img>
                                        <div class="card-body">
                                            <h5 class="card-title">{carName}</h5>
                                            <hr />
                                        </div>
                                        <div class="row">
                                            <div class="col-xl-8">
                                                <h5>Price:<p>{Price}</p></h5>
                                               
                                            </div>
                                            <div class="col-xl-12">
                                                <Link to="/cars/car"> <button class="btn btn-success" onClick={() => handleThirdPage(i)} >ViewDetails</button></Link>
                                                <Link to="/cars/cart"> <button class="btn btn-success" onClick={() => addtocart(i)}> Add to Cart</button></Link>
                                            </div>
                                        </div>

                                    </div>
                                
                            ))
                        }
                            

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Second;