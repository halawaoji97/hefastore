import React, { Component } from 'react'
import Header from 'components/Header'
import Carousel from 'components/Carousel'
import Brands from 'components/Brands'
import landingPage from '../json/landingPage.json'
import Special from 'components/Special'
import Designer from 'components/Designer'
import Footer from 'components/Footer'

export default class Homepage extends Component {
    componentDidMount() {
        window.title = "Hefa Store | Home"

        window.scrollTo(0, 0)
    }
    render() {
        return (
            <>
                <Header {...this.props}></Header>
                <Carousel />
                <section className="brands">
                    <Brands data={landingPage.brands} />
                </section>
                <Special data={landingPage.special} />
                <Designer data={landingPage.designer} />
                <Footer />
            </>
        )
    }
}

