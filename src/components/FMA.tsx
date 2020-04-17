/** @format */

import React, {CSSProperties} from "react"
import {useTranslation} from "react-i18next"
import "../styles/featureTable.css"
import "../styles/richtext.css"
import "../styles/whatDoesItCost.css"
export default function FMA() {
    const {t} = useTranslation("")

    const featureTableBgStyle: CSSProperties = {
        minHeight: "100vh",
    }

    const priceCheckBgStyle: CSSProperties = {
        minHeight: "100vh",
        background: "rgba(239,239,239,0.5)",
    }

    const svg = () => {
        return (
            <svg version="1.1" x="0px" y="0px" viewBox="0 0 20.96 16.62" width="21" height="17" xmlSpace="preserve">
                <polygon points="17.81,0 7.44,10.37 3.1,6.04 0,9.13 4.34,13.47 7.49,16.62 10.59,13.52 20.96,3.15 "></polygon>
            </svg>
        )
    }

    return (
        <>
            <section className="section" style={featureTableBgStyle}>
                <div className="featured-table-block" style={featureTableBgStyle}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 content-wrapper table-wrapper">
                                <h3 className="text-center my-5">
                                    <b>Product Features</b>
                                </h3>
                                <table className="content-width">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Essentials</th>
                                            <th>Comprehensive</th>
                                            <th>Premium</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>User Management Platform</td>
                                            <td>{svg()}</td>
                                            <td>{svg()}</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Secure Email Gateway Modules</td>
                                            <td>{svg()}</td>
                                            <td>{svg()}</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Mail Filtering</td>
                                            <td>{svg()}</td>
                                            <td>{svg()}</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Content Control</td>
                                            <td>{svg()}</td>
                                            <td>{svg()}</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Data Loss Prevention</td>
                                            <td>{svg()}</td>
                                            <td>{svg()}</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Email Archive</td>
                                            <td></td>
                                            <td>{svg()}</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Data Migration</td>
                                            <td></td>
                                            <td></td>
                                            <td>{svg()}</td>
                                        </tr>
                                        <tr>
                                            <td>Migration Testing</td>
                                            <td></td>
                                            <td></td>
                                            <td>{svg()}</td>
                                        </tr>
                                        <tr>
                                            <td>Support Desk Queries</td>
                                            <td>{svg()}</td>
                                            <td>{svg()}</td>
                                            <td>{svg()}</td>
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
                                    <h3>Our SMX solutions are charged on a per user, per month basis.</h3>
                                    <h3>
                                        For legacy archive, import and storage costs are priced depending on archive
                                        size.
                                    </h3>
                                </div>

                                <a className="btn-outline" href="/archiving/">
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
