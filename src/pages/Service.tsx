/** @format */

import React, {useState} from "react"
import "../components/i18n"
import {Helmet} from "react-helmet"
import LayoutSecondary from "../layouts/layoutSecondary"
import bannerImg from "../images/platform/banner.jpg"
import {Link} from "react-router-dom"
import svgTick from "../fonts/svgTick"

interface Props {
    highlightString: number
}

const itMaintenance = () => {
    return (
        <>
            <Helmet>
                <title>IT Maintenance | CODOS IT Service</title>
                <meta
                    name="description"
                    content="At Codos we offer a full range of digital solutions for your business."
                />
            </Helmet>
            <h4 className="mb-30">
                <b>IT Maintenance And Repair</b>
            </h4>
            <div className="bg-gray p-5 mb-60">
                <div className="row justify-content-center mb-10">
                    <div className="col-lg-12 text-left">
                        <h5 className="text-dark mb-20">
                            At Codos we offer a full range of IT maintenance and repair solutions for your business, we
                            also offer free quotes on our great range of services including:
                        </h5>

                        <div>
                            <p className="text-dark text-left">{svgTick()} IT Consulting</p>
                            <p className="text-dark text-left">{svgTick()} Office set up’s</p>
                            <p className="text-dark text-left">{svgTick()} Computer maintenance, builds and repair</p>
                            <p className="text-dark text-left">
                                {svgTick()} Hardware and Software Installations and Diagnostics
                            </p>
                            <p className="text-dark text-left">{svgTick()} Virus removal</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
const digitalMarketing = () => {
    return (
        <>
            <Helmet>
                <title>Digital Marketing | CODOS IT Service</title>
                <meta
                    name="description"
                    content="At Codos we offer a full range of digital solutions for your business."
                />
            </Helmet>
            <h4 className="mb-30">
                <b>Digital Marketing</b>
            </h4>
            <div className="bg-gray p-5 mb-60">
                <div className="row justify-content-center mb-10">
                    <div className="col-lg-12 text-left">
                        <h5 className="text-dark mb-20">
                            At Codos we offer a full range of Digital Marketing solutions for your business, we also
                            offer free quotes on our great range of services including:
                        </h5>

                        <div>
                            <p className="text-dark text-left">{svgTick()} Banner Advertising</p>
                            <p className="text-dark text-left">{svgTick()} Email / Marketing</p>
                            <p className="text-dark text-left">{svgTick()} Social Media</p>
                            <p className="text-dark text-left">{svgTick()} Graphics Influencer Advertising</p>
                            <p className="text-dark text-left">{svgTick()} Targeted Marketing Lists</p>
                            <p className="text-dark text-left">{svgTick()} Social Media Analysis</p>
                            <p className="text-dark text-left">{svgTick()} Search Engine Optimization (SEO)</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const webHosting = () => {
    return (
        <>
            <Helmet>
                <title>Web Hosting | CODOS IT Service</title>
                <meta
                    name="description"
                    content="At Codos we offer a full range of digital solutions for your business."
                />
            </Helmet>
            <h4 className="mb-30 ">
                <b>Web Hosting and Maintenance</b>
            </h4>
            <div className="bg-gray p-5 mb-60">
                <div className="row justify-content-center mb-10">
                    <div className="col-lg-12 text-left">
                        <h5 className="mb-20 text-highlight">Our hosting services utilize AWS™.</h5>

                        <div>
                            <p className="text-dark text-left">
                                Amazon Web Services (AWS) is the world’s most comprehensive and broadly adopted cloud
                                platform, offering over 175 fully featured services from data centres globally. Millions
                                of customers—including the fastest-growing start-ups, largest enterprises, and leading
                                government agencies—are using AWS to lower costs, become more agile, and innovate
                                faster’. Codos also offers maintenance on all our website packages to make sure your
                                website is preforming how you want it to.{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const webDevelopment = () => {
    return (
        <>
            <Helmet>
                <title>Web Development | CODOS IT Service</title>
                <meta
                    name="description"
                    content="At Codos we offer a full range of digital solutions for your business."
                />
            </Helmet>
            <h4 className="mb-30">
                <b>Web Development</b>
            </h4>

            <div className="bg-gray p-5 mb-60">
                <div className="row justify-content-center mb-10">
                    <div className="col-lg-12 text-left">
                        <h5 className="text-highlight">Starter</h5>
                        <p className="text-dark text-left">
                            Our Starter package is a great option whether your starting out and want to have an online
                            presence or upgrading from your old site and want a fresh look. The website features one
                            static page - that is all your information displayed on a main page, it also features a
                            mobile platform that works in with its desktop counterpart. Included in this package we
                            optimize your website to be displayed through services like Google (SEO), and we have the
                            website hosted utilizing AWS.
                        </p>
                    </div>
                </div>
                <div className="row justify-content-center mb-10">
                    <div className="col-lg-12 text-left">
                        <h5 className="text-highlight">Essentials</h5>
                        <p className="text-dark text-left">
                            Our Essentials package is designed to take your company to that next step not only do you
                            get a professionally designed website, mobile website, SEO and hosted, we optimize your
                            website further and can link it into digital marketing platforms such as google ads or any
                            other social media that you would like to company integrated. This package also comes with
                            up to three static pages that are Home, About us and a Contact us portal that are displayed
                            on their own individual page this means more content can be displayed on separate pages
                            giving your clients a website they can navigate with ease.
                        </p>
                    </div>
                </div>
                <div className="row justify-content-center mb-10">
                    <div className="col-lg-12 text-left">
                        <h5 className="text-highlight">Comprehensive</h5>
                        <p className="text-dark text-left">
                            Our Comprehensive package is great for small to medium sized businesses that either want a
                            fresh look from their existing website or want to start new and have the ability to access
                            and update information on the website as they see fit (back end). Comprehensive features up
                            to five custom pages including Home, Contact us, About us and whatever you decide works for
                            your business. As well as this it comes with a mobile platform, optimized for SEO, hosted
                            and we provide digital marketing including social media, google linking and logo creation.
                        </p>
                    </div>
                </div>
                <div className="row justify-content-center mb-10">
                    <div className="col-lg-12 text-left">
                        <h5 className="text-highlight">Premium</h5>
                        <p className="text-dark text-left">
                            At Codos we specialize in creating custom websites our Premium package is great for small,
                            medium or larger businesses that want to create a custom built website from the ground up.
                            We work closely with you to develop both front and back ends of the website to suit your
                            business needs we also create a Content Management System (CMS) for you to update or modify
                            your website as you require. Premium includes up to eight pages including Home and seven
                            others that work for your business. We also work closely with you to develop digital
                            marketing that is specific to your business and needs. Included in this plan you can have
                            your website hosted on a server of your choice or come with us utilizing AWS. SEO and a
                            mobile platform are also included.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

function platformContent(id: number) {
    if (id == 0) {
        return <>{itMaintenance()}</>
    }
    if (id == 1) {
        return <>{webDevelopment()}</>
    }
    if (id == 2) {
        return <>{digitalMarketing()}</>
    }
    if (id == 3) {
        return <>{webHosting()}</>
    }
}

function sideBar(id: number) {
    const fundsDict = [
        {id: 0, router: "it-maintenance-and-repair", content: "IT Maintenance and Repair", style: "border-bottom"},
        {id: 1, router: "web-development", content: "Web Development", style: "border-bottom"},
        {id: 2, router: "digital-marketing", content: "Digital Marketing", style: "border-bottom"},
        {id: 3, router: "web-hosting", content: "Web Hosting and Maintenance", style: "border-bottom"},
    ]
    if (id === 0 || id === 1 || id === 2 || id === 3) {
        fundsDict[id].style = "active border-bottom"
    }
    const listSidebar = fundsDict.map(fundsDictItem => (
        <li key={fundsDictItem.id} className={fundsDictItem.style}>
            <Link to={`/service/${fundsDictItem.router}`} className="d-block font-primary text-dark p-4">
                {fundsDictItem.content}
            </Link>
        </li>
    ))
    return <>{listSidebar}</>
}

export default function Service({highlightString}: Props) {
    return (
        <>
            <LayoutSecondary bannerImg={bannerImg} pageTitle="At CODOS We Are Offering">
                <section className="section">
                    <div className="container">
                        <div className="row">
                            <aside className="col-lg-4 order-lg-1 order-2">
                                <ul className="service-menu pl-0 border mb-50">{sideBar(highlightString)}</ul>
                            </aside>
                            <div className="col-lg-8 order-lg-2 order-1">{platformContent(highlightString)}</div>
                        </div>
                    </div>
                </section>
            </LayoutSecondary>
        </>
    )
}
