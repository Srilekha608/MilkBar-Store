import React from 'react'
import { Link } from "react-router-dom";

const Carousal = () => {
    return (
        <>

            <div id="carouselExampleIndicators" class="carousel slide col-sm-10 m-auto border p-1" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">

                        <img src="https://images.unsplash.com/photo-1572501322283-bdbe6d4dad6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" class="d-block w-100" height="450px" alt="...1" />
                        <div class="carousel-caption d-none d-md-block">
                            <h4 class="font">FROZEN DESSERTS</h4>
                            <p>I Melt into moments of bliss.</p>
                            <Link to='/menu'>
                        <button className=" btn-dark btn-lg border">Check Our Menu</button></Link>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" height="450px" class="d-block w-100" alt="...2" />
                        <div class="carousel-caption d-none d-md-block">
                            <h4 class="font">JELLIED DESSERTS</h4>
                            <p>I Melt into moments of bliss.</p>
                            <Link to='/menu'>
                        <button className=" btn-dark btn-lg border">Check Our Menu</button></Link>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://images.unsplash.com/photo-1506095619733-3c3ea98fb968?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" height="450px" class="d-block w-100" alt="...3" />
                        <div class="carousel-caption d-none d-md-block">
                            <h4 class="font">CAKES</h4>
                            <p>I Melt into moments of bliss..</p>
                            <Link to='/menu'>
                        <button className=" btn-dark btn-lg border">Check Our Menu</button></Link>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </>
    )
}

export default Carousal
