/** @format */
import React from "react"
import {useTranslation} from "react-i18next"
import "../styles/priceTable.css"
import topReviewsLogo from "../images/top-reviews-logo.png"

export default function PriceTable() {
    const {t} = useTranslation("")

    const priceTableStyle = {
        backgroundImage: "linear-gradient(45deg, rgba(235,227,227,1) 0%, rgba(61,60,60,1) 100%)",
        minHeight: "100vh",
        minWeight: "100vw",
        display: "flex",
        // flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
    }

    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="row" style={{alignItems: "top"}}>
                        <div className="col-lg-4">
                            <h2>
                                <b>Why Codos</b>
                            </h2>
                        </div>
                        <div className="col-lg-4 text-left ">
                            <a href="https://www.topreviews.co.nz/best-web-design-christchurch/#15_CODOS_IT_Service">
                                <span>Top 15 Best Web Design Services</span>
                                <img src={topReviewsLogo} alt="" style={{width: "60%"}} />
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-12 text-left rich-text">
                            <ul>
                                <li>New Zealand owned and operated. </li>
                                <li>Skilled Professionals in the IT industry.</li>
                                <li>Competitive price.</li>
                                <li>Latest technology.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section" style={priceTableStyle}>
                <div className="text-center">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <h1 className="mt-2 mb-5 text-white">
                                "Give your business the competitive edge and stand out from your competition."
                            </h1>
                            <h2 className="my-2 text-white">Talk to us today.</h2>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
