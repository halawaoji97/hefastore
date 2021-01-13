import React from 'react'

export default function Brands({ data }) {
    return (
        <div className="container">
            <div className="row p-5 text-center">
                {
                    data.map((item, index) => {
                        return <div key={index} className="col-md">
                            <img src={item.img} className="img-fluid" alt="cc" />
                        </div>
                    })
                }
            </div>
        </div>
    )
}
