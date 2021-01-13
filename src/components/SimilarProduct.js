import React from 'react'

export default function SimilarProduct({ data }) {
    return (
        <section className="similar-product">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3>Similar Product</h3>
                        <p>Pakaian pelengkap product diatas</p>
                    </div>
                </div>
                <div className="row">
                    {
                        data.map((item, index) => {
                            return <div key={index} className="col-sm-4">
                                <figure className="figure">
                                    <img src={item.img} className="figure-img img-fluid" alt={item.name} />
                                    <figcaption className="figure-caption">
                                        <div className="row">
                                            <div className="col">
                                                <h4>{item.name}</h4>
                                                <p>{item.match}</p>
                                            </div>
                                            <div className="col justify-content-end align-self-center d-flex">
                                                <p>{item.price}</p>
                                            </div>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    )
}
