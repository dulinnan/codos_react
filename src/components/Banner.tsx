/** @format */

import React, {CSSProperties} from "react"
import {useTranslation} from "react-i18next"
import "../styles/ourAdvantages.css"
import bannerDemoImg from "../images/banner-demo.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from "react-responsive-carousel"

import liveshowBannerImg from "../images/banner/live-show.jpg"
import {Link} from "react-router-dom"
import "../styles/banner.css"

const bannerOneStyle: CSSProperties = {
    background: `linear-gradient(45deg, rgba(0,74,137,1) 0%, rgba(30,162,201,1) 100%), url(${bannerDemoImg})`,
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
                        <div className="row banner">
                            <div className="col-lg-8 col-md-12">
                                <h1 className="text-white text-left" style={{fontSize: "4rem"}}>
                                    <b>CODOS</b>
                                    <span className=" blink-cursor is-hidden-mobile">_</span>
                                </h1>
                                <h3 className="section-title text-white banner-title text-left">
                                    At Codos we offer Computer maintenance and repair alongside Professionally designed
                                    websites on time at a great price that suits your budget..
                                </h3>
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
