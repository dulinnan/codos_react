/** @format */

import React, {CSSProperties} from "react"
import {useTranslation} from "react-i18next"
import "../styles/ourAdvantages.css"
import bannerDemoImg from "../images/banner-demo.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from "react-responsive-carousel"
import logoWhite from "../images/CODOS_LOGO_normal.png"
import liveshowBannerImg from "../images/banner/live-show.jpg"
import {Link} from "react-router-dom"
import "../styles/banner.css"

const bannerOneStyle: CSSProperties = {
    background: `linear-gradient(45deg, rgba(235,227,227,1) 0%, rgba(61,60,60,1) 100%), url(${bannerDemoImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "100vh",
    maxHeight: "100vh",
}
const blinkStyle = {
    animation: "blink 1s steps(1) infinite",
}

const carouselTextStyle: CSSProperties = {
    zIndex: 2000,
}

function defaultBanner() {
    return (
        <>
            <Carousel
                infiniteLoop
                useKeyboardArrows
                autoPlay
                swipeable={false}
                showStatus={false}
                showThumbs={false}
                interval={6000}>
                <section className="section blur-bgimage" style={bannerOneStyle}>
                    <div className="container" style={carouselTextStyle}>
                        <div className="row banner justify-content-center">
                            <div className="col-lg-8 col-md-12">
                                <h1 className="text-center mb-30" style={{fontSize: "10rem", color: "#000000"}}>
                                    <img
                                        className="img-fluid w-75"
                                        style={{verticalAlign: "bottom"}}
                                        src={logoWhite}
                                        alt="CODOS LOGO"
                                    />
                                    <span className="blink-cursor is-hidden-mobile">_</span>
                                </h1>
                                <h2 className="text-white text-center">IT Service</h2>
                            </div>
                        </div>
                    </div>
                </section>
            </Carousel>
        </>
    )
}

export default function Banner() {
    return defaultBanner()
}
