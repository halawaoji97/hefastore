import React from 'react'
import FB from '../asset/img/social/fb.png'
import IG from '../asset/img/social/ig.png'
import Twitter from '../asset/img/social/twitter.png'
import Button from 'elements/Button'
import Logo from 'asset/img/logo_small.png'

export default function Footer() {
    const getNavLinkClass = (path) => {
        return window.location.pathname === path ? " active" : ""
    }
    return (
        <footer className="border-top p-5">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-1">
                        <a href="#">
                            <img src={Logo} alt="logo" />
                        </a>
                    </div>
                    <div className="col-3 text-right">
                        <Button type="link" href="#">
                            <img src={FB} alt="logo" />
                        </Button>
                        <Button type="link" href="#">
                            <img src={IG} alt="logo" />
                        </Button>
                        <Button type="link" href="#">
                            <img src={Twitter} alt="logo" />
                        </Button>
                    </div>
                </div>
                <div className="row mt-3 justify-content-between">
                    <div className="col-5">
                        <p>
                            All Right Reserved by Hefa Store Copyright 2020
                    </p>
                    </div>
                    <div className="col-6 link-footer justify-content-between">
                        <nav className="nav text-gray">
                            <ul className="ml-auto">
                                <li className={`nav-item${getNavLinkClass("/jobs")}`}>
                                    <Button className="nav-link" href="/jobs" type="link">
                                        Jobs
                            </Button>
                                </li>
                                <li className={`nav-item${getNavLinkClass("/developers")}`}>
                                    <Button className="nav-link" href="/developers" type="link">
                                        Developer
                            </Button>
                                </li>
                                <li className={`nav-item${getNavLinkClass("/terms")}`}>
                                    <Button className="nav-link" href="/terms" type="link">
                                        Terms
                            </Button>
                                </li>
                                <li className={`nav-item${getNavLinkClass("/privacypolicy")}`}>
                                    <Button className="nav-link pr-0" href="/privacypolicy" type="link">
                                        Privacy Policy
                                    </Button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    )
}
