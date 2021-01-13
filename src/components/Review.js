import React from 'react'

export default function Review({ data }) {
    return data.map((item, index) => {
        return <div key={index} className="row">
            <div className="col-1 d-none d-md-block">
                <img src={item.img} alt={item.name} />
            </div>
            <div className="col">
                <h5>{item.name}</h5>
                <p>{item.text}</p>
            </div>
        </div>
    })
}
