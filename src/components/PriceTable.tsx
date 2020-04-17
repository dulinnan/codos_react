/** @format */
import React from "react"
import {useTranslation} from "react-i18next"
import "../styles/priceTable.css"

export default function PriceTable() {
    const {t} = useTranslation("")

    const priceTableStyle = {
        backgroundImage: "linear-gradient(to right top,#006497,60%,#ff173b)",
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
                            <div className="col-lg-6">
                                <h2>
                                    <b>Lorem Ipsum</b>
                                </h2>
                            </div>
                            <div className="col-lg-6 col-md-12 text-left rich-text">
                                <ul>
                                    <li>A local Solution for a Global Problem</li>
                                    <li>Detect and block more threats with SMX dual filtering and honeypots</li>
                                    <li>Kill URL based threats before they reach your inboxes</li>
                                    <li>
                                        Automate rules to combat phishing, malware, ransomware and other high-risk email
                                    </li>
                                    <li>Improve time to access email data archive</li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </section>
            <section className="section" style={priceTableStyle}>
                <div className="text-center">
                    <h3 className="text-white">What is Lorem Ipsum?</h3>
                    <h1 className="my-2 text-white">Lorem Ipsum</h1>
                    <h3 className="text-white">Where can I get some?</h3>
                </div>
            </section>
        </>
    )
}
