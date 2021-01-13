import React from 'react'
import Breadcrumb from "elements/Breadcrumb";

export default function PageDetailTitle({ breadcrumb }) {
    return (
        <div className="container spacing-sm">
            <Breadcrumb data={breadcrumb} />
        </div>
    )
}
