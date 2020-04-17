/** @format */

import React, {Suspense} from "react"
import {useTranslation} from "react-i18next"
import "../styles/ourAdvantages.css"
import "../styles/service.css"
import advantage1Image from "../images/whyCJC/advantage1.png"
import advantage2Image from "../images/whyCJC/advantage2.png"
import advantage3Image from "../images/whyCJC/advantage3.png"
import advantage4Image from "../images/whyCJC/advantage4.png"
import advantage5Image from "../images/whyCJC/advantage5.png"
import advantage6Image from "../images/whyCJC/advantage6.png"
import {Link} from "react-router-dom"
export default function Service() {
    const {t} = useTranslation("")
    return (
        <>
            <div className="text-content-block">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="block-inner flex">
                                <div className="content-width rich-text">
                                    <h2>
                                    <b>At CODOS we </b>
                                        protect your people, your information, and your reputation,
                                        <b> with our world-leading cloud-based email security solutions, that are
                                        government-grade, scalable, and tailored to your business</b>
                                    </h2>
                                    <div className="secondary-content">
                                        <h4>
                                            <span>
                                                Valued online security provider for <strong>Microsoft IP</strong>
                                            </span>
                                            , and NZ <strong>All-of-Government supplier</strong>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <span className="bg-text">CODOS</span>
            </div>
            <div className="column-content-block">
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
                                    <a className="btn" href="/archiving/">
                                        Learn more
                                    </a>
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
                                    <a className="btn" href="/archiving/">
                                        Learn more
                                    </a>
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
                                    <a className="btn" href="/archiving/">
                                        Learn more
                                    </a>
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
                                    <a className="btn" href="/archiving/">
                                        Learn more
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
