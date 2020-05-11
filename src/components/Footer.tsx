/** @format */

import React, {Suspense} from "react"
import {Link} from "react-router-dom"
import {useTranslation} from "react-i18next"
import footerImg from "../images/logoNavLight.png"
import "../fonts/iconfont/iconfont.css"

export default function Footer() {
    const {t} = useTranslation("")
    const copyrightYear = new Date().getFullYear()
    return (
        <>
            <footer className="footer" style={{backgroundColor: "#0D0746"}}>
                <div className="py-50 footer-border">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-12">
                                <div className="mb-5 mb-md-0 text-center text-md-left">
                                    <Link className="footer-brand logo-image" to="/" style={{textDecoration: "none"}}>
                                        <img className="img-fluid mb-10 w-50" src={footerImg} alt="logo of CODOS" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12">
                                <div className="mt-5 mt-lg-0 text-center text-md-left">
                                    <h4 className="mb-4 text-white">{t("footer.links")}</h4>
                                    <ul className="list-unstyled li-space-lg">
                                        <li className="media">
                                            <span className="iconfont icon-square text-red"></span>
                                            <Link className="text-white" to="/about-us">
                                                {t("footer.aboutUs")}
                                            </Link>
                                        </li>
                                        <li className="media">
                                            <span className="iconfont icon-square text-red"></span>
                                            <Link className="text-white" to="/why-choose-cjc">
                                                {t("header.why")}
                                            </Link>
                                        </li>
                                        <li className="media">
                                            <span className="iconfont icon-square text-red"></span>
                                            <Link className="text-white" to="/cooperate">
                                                {t("header.partner")}
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12">
                                <div className="mt-5 mt-lg-0 text-center text-md-left">
                                    <h4 className="mb-4 text-white">{t("footer.documents")}</h4>
                                    <ul className="list-unstyled li-space-lg">
                                        <li className="media">
                                            <span className="iconfont icon-square text-red"></span>
                                            <a
                                                className="text-white"
                                                href="/media/documents/Carrick Just Capital Markets - Client Services Agreement - 22032019.pdf">
                                                {t("contactForm.termsAndConditions")}
                                            </a>
                                        </li>
                                        <li className="media">
                                            <span className="iconfont icon-square text-red"></span>
                                            <a
                                                className="text-white"
                                                href="/media/documents/Carrick Just Capital Markets - Client Services Agreement - 22032019.pdf">
                                                {t("contactForm.privacyPolicy")}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-12">
                                <div className="mt-5 mt-lg-0 text-center text-md-left">
                                    <h4 className="mb-4 text-white">{t("footer.socialMedia")}</h4>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <a href="https://www.facebook.com/Codositservice/">
                                                <span
                                                    className="iconfont icon-facebook text-red"
                                                    style={{fontSize: "2rem"}}></span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-4 pb-3 position-relative">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-5">
                                <p className="text-white text-center text-md-left">
                                    <span className="text-primary">{t("footer.copyrightInfo")}</span> &copy;
                                    {copyrightYear}
                                </p>
                            </div>
                            <div className="col-lg-6 col-md-7">
                                <ul className="list-inline text-center text-md-right">
                                    <li className="list-inline-item mx-lg-3 my-lg-0 mx-2 my-2">
                                        <p className="font-secondary text-white">
                                            Proudly hosted by{" "}
                                            <img className="w-25" src={footerImg} alt="logo of CODOS" />
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
