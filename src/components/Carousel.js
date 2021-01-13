import React from 'react'
import Carousel1 from 'asset/img/slideshow/1.png'

export default function Carousel() {
    return (
        <div id="carouselExampleControls" className="carousel slide mt-5" data-ride="carousel">
            <div className="carousel-inner">
                <div className="container">
                    <div className="carousel-item active">
                        <div className="row pt-5 justify-content-center">
                            <div className="col-9 col-sm-4 col-md-6 col-lg-5">
                                <h1 className="mb-4">Special Eid Lebaran</h1>
                                <p className="mb-4">Jadikan hari pertama lebaranmu meriah & memorable</p>
                                <a href="#" className="btn text-white btn-warning">Get It Now</a>
                            </div>
                            <div className="col-3 col-sm-6 col-md-4 col-lg-4 offset-1 d-none d-sm-block">
                                <img src={Carousel1} className="img-fluid" alt="product-1" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row pt-5 justify-content-center">
                            <div className="col-9 col-sm-4 col-md-6 col-lg-5">
                                <h1 className="mb-4">Special Eid Lebaran</h1>
                                <p className="mb-4">Jadikan hari pertama lebaranmu meriah & memorable</p>
                                <a href="#" className="btn text-white btn-warning">Get It Now</a>
                            </div>
                            <div className="col-3 col-sm-6 col-md-4 col-lg-4 offset-1 d-none d-sm-block">
                                <img src={Carousel1} className="img-fluid" alt="product-1" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" role="button" data-slide="prev" type="link" href="#carouselExampleControls">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" role="button" data-slide="next" type="link" href="#carouselExampleControls">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>

        </div>
    )
}
