/** @format */

import React, {CSSProperties} from "react"
import {useTranslation} from "react-i18next"
import "../styles/featureTable.css"
import "../styles/richtext.css"
import "../styles/whatDoesItCost.css"
import svgTick from "../fonts/svgTick"
export default function FMA() {
    const {t} = useTranslation("")

    const featureTableBgStyle: CSSProperties = {
        minHeight: "100vh",
    }

    const priceCheckBgStyle: CSSProperties = {
        minHeight: "100vh",
        background: "rgba(239,239,239,0.5)",
    }

    return (
        <>
            <section className="section mobile-hide" style={featureTableBgStyle} id="codos-pricing">
                <div className="featured-table-block" style={featureTableBgStyle}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 content-wrapper table-wrapper">
                                <h3 className="text-center my-5">
                                    <b>Website Features</b>
                                </h3>
                                <table className="content-width">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Starter</th>
                                            <th>Essentials</th>
                                            <th>Comprehensive</th>
                                            <th>Premium</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Hosting</td>
                                            <td>{svgTick()}</td>
                                            <td>{svgTick()}</td>
                                            <td>{svgTick()}</td>
                                            <td>{svgTick()}</td>
                                        </tr>
                                        <tr>
                                            <td>Search Engine Optimisation</td>
                                            <td>{svgTick()}</td>
                                            <td>{svgTick()}</td>
                                            <td>{svgTick()}</td>
                                            <td>{svgTick()}</td>
                                        </tr>
                                        <tr>
                                            <td>Mobile Compatibility</td>
                                            <td>{svgTick()}</td>
                                            <td>{svgTick()}</td>
                                            <td>{svgTick()}</td>
                                            <td>{svgTick()}</td>
                                        </tr>
                                        <tr>
                                            <td>Support(Contract Based)</td>
                                            <td></td>
                                            <td>{svgTick()}</td>
                                            <td>{svgTick()}</td>
                                            <td>{svgTick()}</td>
                                        </tr>
                                        <tr>
                                            <td>Digital Marketing</td>
                                            <td></td>
                                            <td></td>
                                            <td>{svgTick()}</td>
                                            <td>{svgTick()}</td>
                                        </tr>
                                        <tr>
                                            <td>Backend</td>
                                            <td></td>
                                            <td></td>
                                            <td>{svgTick()}</td>
                                            <td>{svgTick()}</td>
                                        </tr>

                                        <tr>
                                            <td>Content Management System</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{svgTick()}</td>
                                        </tr>
                                        <tr>
                                            <td>Customisation</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{svgTick()}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section" style={priceCheckBgStyle}>
                <div className="left-title-text-content-block">
                    <div className="container">
                        <div className="row block-content-wrapper">
                            <div className="col-12 col-md-6 title">
                                <h2 style={{fontSize: "4rem"}}> So, what does it cost?</h2>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="rich-text mb-3">
                                    <h3>
                                        At Codos our IT solutions are charged on a per hour, package or per month basis
                                        depending on your needs.
                                    </h3>
                                    <h3 className="mb-3">Our great range of website solutions start from $545 (Inc 15% GST).</h3>
                                </div>

                                <a className="btn-outline" href="/contact">
                                    Talk to us now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
