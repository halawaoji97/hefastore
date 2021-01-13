import React from 'react'
import Button from 'elements/Button'
import Logo from 'asset/img/logo_small.png'
import { RootContext } from '../App'


export default function Header(props) {

    const getNavLinkClass = (path) => {
        return props.location.pathname === path ? " active" : "";
    };

    return (
        <RootContext.Consumer>
            {
                (value) => (
                    <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
                        <div className="container">
                            <Button href="/" type="link">
                                <img src={Logo} alt="HefaStore" />
                            </Button>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav text-uppercase mx-auto">
                                    <li className={`nav-item${getNavLinkClass("/")}`}>
                                        <Button className="nav-link" href="/" type="link">
                                            Home
                            </Button>
                                    </li>
                                    <li className={`nav-item${getNavLinkClass("/category")}`}>
                                        <Button className="nav-link" href="/category" type="link">
                                            Category
                            </Button>
                                    </li>
                                    <li className={`nav-item${getNavLinkClass("/designer")}`}>
                                        <Button className="nav-link" href="/designer" type="link">
                                            Designer
                            </Button>
                                    </li>
                                    <li className={`nav-item${getNavLinkClass("/about")}`}>
                                        <Button className="nav-link" href="/about" type="link">
                                            About
                            </Button>
                                    </li>
                                </ul>
                                <Button className="nav-link text-white" href="/cart" type="link">
                                    <i className="fas fa-shopping-cart"></i> My Cart <span>({value.state.totalOrder})</span>
                                </Button>
                            </div>
                        </div>
                    </nav>
                )
            }
        </RootContext.Consumer>
    )
}
