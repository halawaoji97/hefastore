import React from 'react'
import Button from 'elements/Button'
import HandleStock from './HandleStock'
import formatNumber from 'utils/formatNumber'

export default function ProductDetail({ data }) {
    return data.map((product, index) => {
        return <section key={index} className="single-product">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <figure className="figure">
                            <img src={product.img} className="figure-img img-fluid" alt={product.name} />
                            <figcaption className="figure-caption d-flex justify-content-between product-thumbnail-container">
                                {
                                    product.preview.map((item, index) => {
                                        return <Button key={index} href="#" type="link">
                                            <img src={item.img} alt={product.name} />
                                        </Button>
                                    })
                                }
                            </figcaption>
                        </figure>
                    </div>

                    <div className="col-lg-4">
                        <h3>{product.name}</h3>
                        <p className="text-muted">IDR.{" "}{formatNumber(product.price)}</p>
                        <HandleStock />

                        <div className="btn-product d-flex direction-row justify-content-around ">
                            <Button isPrimary isLarge classNameName="btn text-white" href={`/properties/:${product.id}`} type="link">
                                Add to chart
                        </Button>
                            <Button isSecondary isLarge classNameName="btn text-white" href="#" type="link">
                                Add to wishlist
                        </Button>
                        </div>

                        <div className="design-by">
                            <h5>Design by</h5>
                            <div className="row">
                                <div className="col-2">
                                    <img src={product.designer} alt={product.name_designer} />
                                </div>
                                <div className="col">
                                    <h4>{product.name_designer}</h4>
                                    <p>{product.followers}k<span> followers</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    }
    )
}
