import React, { Component, createContext } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './css/bootstrap.css';
import './css/style.css';
import Homepage from 'scenes/Homepage';
import SingleProduct from 'scenes/SingleProduct';
import CartPage from 'scenes/CartPage';

export const RootContext = createContext()
const Provider = RootContext.Provider

export default class App extends Component {
  state = {
    stock: 20,
    totalOrder: 1
  }

  dispatch = (action) => {
    if (action.type === 'MINUS') {
      this.setState({
        stock: this.state.stock + 1,
        totalOrder: this.state.totalOrder - 1
      })
    }
    if (action.type === 'PLUS') {
      return this.setState({
        stock: this.state.stock - 1,
        totalOrder: this.state.totalOrder + 1
      })
    }
  }

  render() {
    return (
      <Provider value={{
        state: this.state,
        dispatch: this.dispatch
      }}>
        <div className="app">
          <Router>
            <Route exact path="/" component={Homepage}></Route>
            <Route path="/properties/:name" component={SingleProduct}></Route>
            <Route path="/cart" component={CartPage}></Route>
          </Router>
        </div>
      </Provider>
    )
  }
}
