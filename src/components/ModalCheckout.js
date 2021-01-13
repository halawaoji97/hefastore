import React from 'react'
import CheckoutImg from 'asset/img/sukses_checkout.png'
import Button from 'elements/Button'

export default function ModalCheckout() {
    return (
        <div className="modal checkout-modal fade" id="checkoutModal" tabindex="-1" aria-labelledby="checkoutModalLabel"
            aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body text-center">
                        <img src={CheckoutImg} className="mb-5" alt="sukses_checkout" />
                        <h3>Checkout berhasil</h3>
                        <p>Anda akan mendapatkan barang anda <br /> dalam beberapa hari</p>
                        <Button type="link" href="/" className="btn mt-3"
                            data-dismiss="modal">Home</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
