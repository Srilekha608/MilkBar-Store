import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'


const Cakes = () => {
    const {
        state: { cakes },
      addCitem,
        Citem,Item
    } = useContext(CartContext);
    return (
        <>
        <div className="container mt-4" >
            <div className="row">
                {cakes.map(({ name, id, image, price, weight, incart }, index) => (
                  <div class="cardclass card mt-3 mx-2 my-2 col-xl-3 col-lg-6  col-3 mt-2 mb-3 pt-3" style={{ width: '100rem' }}>
                  <div class="ribbon">
                     <span class="text-white bg-dark">Cakes</span></div>
                            <Link to='/menu/itemdetails'><img src={image} height="200px" onClick={() => Citem(index)} class="card-img-top " /></Link>
                            <div className="card-body">
                                <Link to='/menu/itemdetails'> <h5 className="card-title " onClick={() => Citem(index)}>{name}</h5></Link>
                                <div className="d-flex justify-content-between">
                                <p className="card-text "><span class="badge badge-warning">QTY</span> :{weight}</p>
                                    <p className="card-text "><span class="badge badge-warning">MRP</span> : {price} <span>&#8377;</span></p>
                                </div>
                                <div className="d-flex justify-content-between">
                                <button disabled={incart == "true" ? true : false} className="btn btn-primary btn-sm" onClick={() => addCitem(index)}>BuyNow</button>
                                <Link to='/menu/itemdetails'> <button className="btn btn-primary btn-sm"onClick={() => Item(index)} >Ingredients</button></Link>
                            </div>
                            </div>

                        </div>

                
                ))
                }
            </div>
        </div>

</>
    )
            }
export default Cakes