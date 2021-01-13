import Header from 'components/Header'
import PageDetailTitle from 'components/PageDetailTitle'
import Review from 'components/Review'
import ProductDetail from 'components/ProductDetail'
import React, { Component } from 'react'
import singleProduct from '../json/singleProduct.json'
import ReactHtmlParser from "react-html-parser";
import SimilarProduct from 'components/SimilarProduct'
import Footer from 'components/Footer'

export default class SingleProduct extends Component {

    componentDidMount() {
        window.title = 'Single Product'

        window.scrollTo(0, 0)
    }

    render() {
        const breadcrumb = [
            { pageTitle: "Category", pageHref: "" },
            { pageTitle: "Single Product", pageHref: "" }
        ]
        return (
            <>
                <Header {...this.props} />
                <PageDetailTitle breadcrumb={breadcrumb} />
                <ProductDetail data={singleProduct.product_detail}></ProductDetail>
                <section className="product-description p-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link active" id="description-tab" data-toggle="tab" href="#description"
                                            role="tab" aria-controls="description" aria-selected="true">Description</a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link" id="review-tab" data-toggle="tab" href="#review" role="tab"
                                            aria-controls="review" aria-selected="false">Review</a>
                                    </li>
                                </ul>
                                <div className="tab-content p-3" id="myTabContent">
                                    <div className="tab-pane product-review fade show active" id="description" role="tabpanel"
                                        aria-labelledby="description-tab">
                                        {ReactHtmlParser(singleProduct.description)}
                                    </div>
                                    <div className="tab-pane fade product-review" id="review" role="tabpanel"
                                        aria-labelledby="review-tab">
                                        <Review data={singleProduct.review} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <SimilarProduct data={singleProduct.similar_product} />
                <Footer />
            </>
        )
    }
}
