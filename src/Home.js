import React, { useContext } from 'react'
import Reviews from "./Reviews";
import Carousal from "./Carousal"
import { Link } from "react-router-dom";
import { CartContext } from './CartContext'
import Jellied from './Jellied';

const Home = () => {
    const {
        Frozen,
        cakes, Jellied
    } = useContext(CartContext);
    return (
        <>
            {window.scrollTo(0, 0)}
            <Carousal></Carousal>

            <br></br>
            <div className="py-6">
              <div className="row " >
                    <div className="col-4 pt-3 text-center">
                        <img  height="200px" width="300px"src="https://images.unsplash.com/photo-1564747519847-6414d97fc3b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" />
                        <Link to="/menu/frozen"><h3 className="pt-3" onClick={() => Frozen()}>Frozen Desserts</h3></Link>
                    </div>
                    <div className="col-4 pt-3 text-center">
                        <img height="200px" width="300px" src="https://images.unsplash.com/photo-1557163638-71e3ad2d3a52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" />
                        <Link to="/menu/cakes"><h3 className="pt-3" onClick={() => cakes()}>Cakes</h3></Link>
                    </div>
                    <div className="col-4 pt-3 text-center">
                        <img height="200px" width="300px" src="https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" />
                        <Link to="/menu/jellied"><h3 className="pt-3" onClick={() => Jellied()}>Jellied Desserts</h3></Link>
                    </div>
                </div>
                <hr style={{ borderTop: '2px dashed white' }}></hr>
                <h1 className="text-center" style={{ fontFamily: 'cursive' }}>HAPPY CUSTOMERS!!</h1>
                <Reviews></Reviews>
            </div>
        </>
    )
}

export default Home