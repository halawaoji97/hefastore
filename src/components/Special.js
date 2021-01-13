import React from 'react'
import Button from 'elements/Button'
import formatNumber from 'utils/formatNumber'

export default function Special({ data }) {
    return data.map((category, index1) => {
        return <section className="special bg-light p-5" key={`category-${index1}`}>
            <div className="container">
                <div className="row mb-3">
                    <div className="col">
                        <h3>{category.title}</h3>
                        <p>{category.subheading}</p>
                    </div>
                </div>
                <div className="row">
                    {
                        category.items.map((item, index2) => {
                            return <div key={`category-1-${index1}-item-${index2}`} className="col-6 col-sm-4 col-md-3 col-lg-2">
                                <figure className="figure ">
                                    <div className="figure-img">
                                        <img src={item.img} className="figure-img img-fluid rounded" alt={item.alt} />

                                        <Button href={`/properties/${item.name}`} className="d-flex justify-content-center" type="link">
                                            <img src={category.iconDetail} className="align-self-center" alt="detail" />
                                        </Button>

                                    </div>
                                    <figcaption className="figure-caption text-center">
                                        <h5>{item.name}</h5>
                                        <p>IDR.{" "}{formatNumber(item.price)}</p>
                                    </figcaption>
                                </figure>
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    })
}
