/** @format */

import React, {Suspense, CSSProperties} from "react"
import {Link} from "react-router-dom"
import logoNavDark from "../images/logoNavDark.png"
import imgGrey from "../images/CODOS_LOGO_grey.png"
import "../styles/ourAdvantages.css"
import "../styles/service.css"

export default function Service() {
    const bgImgStyle: CSSProperties = {
        background: `url(${imgGrey})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "50%",
        minHeight: "100vh",
        maxHeight: "100vh",
        // opacity: 0.08
    }
    return (
        <>
            <div className="text-content-block" style={bgImgStyle}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="block-inner flex">
                                <div className="content-width rich-text">
                                    <h2>
                                        <b>At </b>CODOS <b>we offer </b>
                                        Computer maintenance and repair
                                        <b> alongside </b>
                                        Professionally designed websites
                                        <b> on time at a great price that suits your budget..</b>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column-content-block" id="codos-services">
                <div className="full-width">
                    <div className="row column-content-wrapper">
                        <div className="item">
                            <div className="block-inner flex">
                                <div>
                                    <h3>IT Maintenance and Repair</h3>
                                    <div style={{minHeight: "100px"}}>
                                        <p style={{color: "#FFFFFF"}}>
                                            Computer Maintenance and Repair, Back Ups, Recovery, Hardware and Software
                                            Installations and Diagnostics, Virus removal - From $85 Per hour.
                                        </p>
                                    </div>
                                    <Link to="/service/it-maintenance-and-repair" className="btn">
                                        Learn more
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="block-inner flex">
                                <div>
                                    <h3>Web Development</h3>
                                    <div style={{minHeight: "100px"}}>
                                        <p style={{color: "#FFFFFF"}}>
                                            Develop Front End using latest standards with HTML5/CSS3 with added
                                            functionality using JavaScript and Vue/React. Develop Back End Restful
                                            service using Node.js and SQL server or Mongo DB databases.
                                        </p>
                                    </div>
                                    <Link to="/service/web-development" className="btn">
                                        Learn more
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="block-inner flex">
                                <div>
                                    <h3>Digital Marketing</h3>
                                    <div style={{minHeight: "100px"}}>
                                        <p style={{color: "#FFFFFF"}}>
                                            Banner Advertising, Email / Marketing, Social Media, Graphics Influencer,
                                            Advertising Targeted Marketing Lists, Social Media Analysis, Search Engine
                                            Optimization (SEO).
                                        </p>
                                    </div>
                                    <Link to="/service/digital-marketing" className="btn">
                                        Learn more
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="block-inner flex">
                                <div>
                                    <h3>Web Hosting and Maintenance</h3>
                                    <div style={{minHeight: "100px"}}>
                                        <p style={{color: "#FFFFFF"}}>
                                            Our hosting services utalize AWS™. At Codos we offer ongoing maintenance of
                                            all our products and services to keep your website up to date and
                                            functioning how you want it to - Starting from $35 per month.
                                        </p>
                                    </div>
                                    <Link to="/service/web-hosting" className="btn">
                                        Learn more
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
