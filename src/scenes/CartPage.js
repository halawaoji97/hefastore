import React, { Component } from 'react'
import PageDetailTitle from 'components/PageDetailTitle'
import shoppingCart from 'json/shoppingCart.json'
import ShoppingCart from 'components/ShoppingCart'

export default class CartPage extends Component {
    render() {
        const breadcrumb = [
            { pageTitle: "Home", pageHref: "" },
            { pageTitle: "Shopping Cart", pageHref: "" }
        ]
        return (
            <>
                <div className="container cart-header">
                    <div className="row mt-5 mb-3 text-center">
                        <div className="col">
                            <h3>Your Cart</h3>
                            <p>Pastikan barang anda terbaya lunas</p>
                        </div>
                    </div>
                </div>
                <PageDetailTitle breadcrumb={breadcrumb} />
                <ShoppingCart data={shoppingCart.your_cart} />
            </>
        )
    }
}
