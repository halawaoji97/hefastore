import React from 'react'
import Address from './Address'
import CheckoutCard from './CheckoutCard'
import Footer from './Footer'
import ModalCheckout from './ModalCheckout'

export default function ShoppingCart({ data }) {
    return (
        <>
            <section className="checkout">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-6">
                            <h4 className="mb-4">Your Items</h4>
                            {
                                data.map((item, index) => {
                                    return <div key={index} className="row mb-4">
                                        <div className="col-2">
                                            <img src={item.img} alt={item.name} />
                                        </div>
                                        <div className="col-4">
                                            <h5 className="m-0">J{item.name}</h5>
                                            <p className="m-0">IDR.{" "}{item.price}</p>
                                        </div>
                                        <div className="col-4">
                                            <button type="button" className="btn btn-sm">
                                                <i className="fas fa-minus-circle"></i>
                                            </button>
                                            <span className="mx-2">20</span>
                                            <button type="button" className="btn btn-sm btn-success">
                                                <i className="fas fa-minus-circle"></i>
                                            </button>
                                        </div>
                                        <div className="col-2 text-right">
                                            <button type="button" className="btn btn-sm btn-danger">
                                                <i className="fas fa-times-circle"></i>
                                            </button>
                                        </div>
                                    </div>
                                })
                            }
                            <Address />
                        </div>
                        <CheckoutCard />
                    </div>
                </div>
            </section>
            <ModalCheckout />
            <Footer />
        </>
    )
}
