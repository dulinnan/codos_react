/** @format */

import React from "react"
import {Helmet} from "react-helmet"
import Contacts from "../components/Contacts"
import {useTranslation} from "react-i18next"
import {Link} from "react-router-dom"
import "../components/i18n"
import LayoutSecondary from "../layouts/layoutSecondary"
import bannerImg from "../images/help/banner.jpg"
import pdfSVG from "../images/help/pdf.svg"
import "../styles/help.css"
import {number} from "prop-types"

interface Props {
    highlightString: number
}

function helpContent(id: number) {
    if (id === 0) {
        return (
            <>
                <Helmet>
                    <title>Contact | CODOS IT Service</title>
                    <meta name="description" content="Get in touch" />
                </Helmet>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mb-30">
                            <Contacts />
                        </div>
                    </div>
                </div>
            </>
        )
    }

    if (id === 1) {
        return (
            <>
                <Helmet>
                    <title>Legal Documents | CODOS IT Service</title>
                    <meta name="description" content="CODOS Legal Documents" />
                </Helmet>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-30">
                            <li className="list-inline-item mx-lg-4 my-lg-0 mx-2 my-2">
                                <a style={{color: "#000000"}} href="/media/documents/terms-and-conditions.pdf">
                                    <div className="pdf-download">
                                        <img src={pdfSVG} className="img-fluid w-25" alt="CODOS Terms and Conditions" />
                                        <h5 className="pl-3">Terms and Conditions</h5>
                                    </div>
                                </a>
                            </li>
                        </div>
                        <div className="col-lg-6 mb-30">
                            <li className="list-inline-item mx-lg-4 my-lg-0 mx-2 my-2">
                                <a style={{color: "#000000"}} href="/media/documents/privacy-policy.pdf">
                                    <div className="pdf-download">
                                        <img src={pdfSVG} className="img-fluid w-25" alt="CODOS Privacy Policy" />
                                        <h5 className="pl-3">Privacy Policy</h5>
                                    </div>
                                </a>
                            </li>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

function sideBar(id: number, t: any) {
    const helpDict = [
        {id: 0, router: "contact", content: "Contact Us", style: "border-bottom"},
        {id: 1, router: "documents", content: t("help.documentTitle"), style: "border-bottom"},
    ]
    if (id === 0 || id === 1) {
        helpDict[id].style = "active border-bottom"
    }
    const listSidebar = helpDict.map(helpDictItem => (
        <li key={helpDictItem.id} className={helpDictItem.style}>
            <Link to={`/${helpDictItem.router}`} className="d-block font-primary text-dark p-4">
                {helpDictItem.content}
            </Link>
        </li>
    ))
    return <>{listSidebar}</>
}

export default function Help({highlightString}: Props) {
    const {t, i18n} = useTranslation("")
    return (
        <>
            <LayoutSecondary bannerImg={bannerImg} pageTitle="Contact Us">
                <section className="section">
                    <div className="container">
                        <div className="row">
                            <aside className="col-lg-4">
                                <ul className="service-menu pl-0 border mb-50">{sideBar(highlightString, t)}</ul>
                            </aside>
                            <div className="col-lg-8">{helpContent(highlightString)}</div>
                        </div>
                    </div>
                </section>
            </LayoutSecondary>
        </>
    )
}
