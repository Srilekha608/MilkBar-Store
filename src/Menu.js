import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'
import Collapse from './Collapse'


const Menu = () => {
    const {
        state: { desserts, cart },
        additem,
        Item,Ingredients
    } = useContext(CartContext);
    return (
        <>
            <div className="container mt-8" >
                <div className="row">
                    {desserts.map(({ name, id, image, price, weight, incart,Ingredients }, index) => (

                        <div class="cardclass card mt-3 mx-2 my-2 col-xl-3 col-lg-6  col-3 mt-2 mb-3 pt-3" style={{ width: '100rem' }}>
                           

                            <Link to="/menu/itemdetails"> <img src={image} onClick={() => Item(index)} height="200px" className="card-img-top " /></Link>
                            <div className="card-body">
                                <Link to='/menu/itemdetails'><h5 className="card-title " onClick={() => Item(index)}>{name}</h5></Link>
                                <div className="d-flex justify-content-between">
                                <p className="card-text "><span class="badge badge-warning">QTY</span> :{weight}</p>
                             
                                  
                               
                                <p className="card-text "><span className="badge badge-warning">MRP</span> : {price} <span>&#8377;</span></p>
                                </div>





                                <div className="d-flex justify-content-between">
                                    <button className="btn btn-primary btn-sm" disabled={incart == "true" ? true : false} onClick={() => additem(index)} >Add To Cart</button>

                                    <Link to='/menu/itemdetails'> <button className="btn btn-primary btn-sm"onClick={() => Item(index)} >Ingredients</button></Link>

                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </>
    )
}
export default Menu