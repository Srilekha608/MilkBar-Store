import React, { useContext } from 'react'
import { MyContext } from '../MyContext';
import Hooks from '../Hooks'
const Counter = ({  quantity, index }) => {
    const {Increment,Decrement}=useContext(MyContext)
    return (

        <div className="row  align-items-center mt-1 ">
            {<button onClick={() => Decrement(index)}
               disabled={quantity==1?true:false} className="btn btn-primary m-2">-</button>}
            <div className=" card p-2 text-center" style={{
                height: '39px',
                width: '50px'
            }}>{quantity}</div>
            <button onClick={() => Increment(index)}
                className="btn btn-primary m-2">+</button>
        </div>

    )
}
export default Counter;