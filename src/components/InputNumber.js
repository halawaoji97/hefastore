import React, { Component } from 'react'
import { RootContext } from '../App'

export default class InputNumber extends Component {
    render() {
        return (
            <RootContext.Consumer>
                {
                    (value) => (
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" onClick={() => value.dispatch({ type: "MINUS" })}>-</span>
                            </div>
                            <input type="text" className="form-control" placeholder={value.state.stock} readOnly value={`sisa ${value.state.stock}`} style={{ height: 40 }} />
                            <div className="input-group-append">
                                <span className="input-group-text" onClick={() => value.dispatch({ type: "PLUS" })}>+</span>
                            </div>
                        </div>
                    )
                }
            </RootContext.Consumer>
        )
    }
}

