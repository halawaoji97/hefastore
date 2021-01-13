import React from 'react'
import Button from 'elements/Button'

export default function Designer({ data }) {
    return data.map((designer, index) => {
        return <div key={index} className="designer p-5">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3>{designer.title}</h3>
                        <p>{designer.subheading}</p>
                    </div>
                </div>
                <div className="row">
                    {
                        designer.items.map((item, index) => {
                            return <div key={index} className="col-6 col-sm-3 text-center">
                                <figure className="figure">
                                    <img src={item.img} className="figure-img img-fluid rounded" alt={item.alt} />
                                    <figcaption className="figure-caption text-center">
                                        <h5>{item.name}</h5>
                                        <p>{item.profesi}</p>
                                    </figcaption>
                                </figure>
                            </div>
                        })
                    }
                </div>

                <div className="row text-center">
                    <div className="col">
                        <Button type="link" href="#">See all our designer</Button>
                    </div>
                </div>
            </div>
        </div>
    })
}
