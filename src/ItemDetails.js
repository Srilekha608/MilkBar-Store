import React, { useContext } from 'react'
import { CartContext } from './CartContext'
import { Link } from 'react-router-dom'
const ItemDetails = () => {
    const {
        state: { item },
    } = useContext(CartContext);
    return (
        < div style={{height:'525px'}}>
        <div class="card mb-3 my-5 mx-5" style={{ width: '900px', height: '400px' }} >
            {
                item.map(({ name, id, image, price, weight, description ,Ingredients}) => (
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img src={image} class="card-img" alt="..." />
                            <Link to='/menu'><button className=" btn-dark btn-lg border">MainMenu</button></Link>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body text-left text-dark mt-3" style={{fontFamily:'cursive'}}>
                                <h5 class="card-title">{name}</h5>
                                <p className="card-text "><span class="badge badge-warning">Rating:</span> 
                               
4.0<span class="fa fa-star checked"></span>
                                        <span class={`fa fa-star checked`} ></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        </p>
                                <p className="card-text "><span class="badge badge-warning">QTY</span> :{weight}</p>
                                <p className="card-text "><span class="badge badge-warning">MRP</span> : {price} <span>&#8377;</span></p>
                                <p className="card-text"><span class="badge badge-warning">Description</span>: {description}</p>
                                <p className="card-text"><span class="badge badge-warning">Ingredients</span>: {Ingredients}</p>
                               

                                   
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        
        </div>
    )
}

export default ItemDetails