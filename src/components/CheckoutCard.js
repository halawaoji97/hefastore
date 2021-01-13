import React from 'react'

export default function CheckoutCard() {
    return (
        <div className="col-lg-5">
            <div className="card rounded-0 detail-checkout">
                <div className="card-body">
                    <h5 className="card-title">
                        Informasi Biaya
                            </h5>
                    <div className="row mb-3">
                        <div className="col">
                            <h6 className="m-0">Jeans Pubb</h6>
                            <small>2 items</small>
                        </div>
                        <div className="col d-flex justify-content-end">
                            <h6 className="m-0 align-self-center text-success">IDR. 240.000</h6>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <h6 className="m-0">Jeans Pubb</h6>
                            <small>2 items</small>
                        </div>
                        <div className="col d-flex justify-content-end">
                            <h6 className="m-0 align-self-center text-success">IDR. 240.000</h6>
                        </div>
                    </div>

                    <hr />

                    <div className="row mb-3">
                        <div className="col">
                            <h6 className="m-0">Courier</h6>
                            <small>JNT Express</small>
                        </div>
                        <div className="col d-flex justify-content-end">
                            <h6 className="m-0 align-self-center text-success">IDR. 210.000</h6>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <h6 className="m-0">Tax</h6>
                            <small>Negara 20%</small>
                        </div>
                        <div className="col d-flex justify-content-end">
                            <h6 className="m-0 align-self-center text-success">IDR. 840.000</h6>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <h6 className="m-0">Eid promo</h6>
                            <small>10% off</small>
                        </div>
                        <div className="col d-flex justify-content-end">
                            <h6 className="m-0 align-self-center text-danger">-IDR. 40.000</h6>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <h6 className="m-0">Total Harga</h6>
                        </div>
                        <div className="col d-flex justify-content-end">
                            <h6 className="m-0 align-self-center text-primary">IDR. 240.000</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <button type="button" className="btn btn-block">Cancel</button>
                </div>
                <div className="col">
                    <button type="button" className="btn btn-warning text-white btn-block" data-toggle="modal"
                        data-target="#checkoutModal">Checkout</button>
                </div>
            </div>
        </div>
    )
}
