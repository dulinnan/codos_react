/** @format */

import React from "react"
import {useTranslation} from "react-i18next"

import "../fonts/iconfont/iconfont.css"

export default function Contacts() {
    const {t} = useTranslation("")

    return (
        <>
            <section className="contact-blue mb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="p-5 box-shadow contact-form">
                            <form method="POST" action="https://formspree.io/contact@codos.co.nz" className="row">
                                <div className="col-lg-12">
                                    <h3 className="section-title mb-0">{t("contactForm.contactForm")}</h3>
                                    <h5 className="text-dark mb-10">{t("contactForm.contactGreeting")}</h5>
                                    <address className="text-center">
                                        <span className="iconfont iconfont-custom icon-hotelphone"></span>
                                        <a className="text-dark" href="tel:00640210427652">
                                            +64 21 042 7652
                                        </a>
                                        <br />
                                        <span className="iconfont iconfont-custom icon-Email"></span>
                                        <a className="text-dark" href="mailto:contact@codos.co.nz">
                                            contact@codos.co.nz
                                        </a>
                                        <br />
                                        <span className="iconfont iconfont-custom icon-address"></span>Mon-Fri 9am-5pm
                                    </address>
                                </div>
                                <div className="col-lg-6">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="form-control"
                                        placeholder={t("contactForm.contactName")}
                                        required
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        id="email"
                                        placeholder={t("contactForm.contactEmail")}
                                        required
                                    />
                                </div>
                                <div className="col-lg-12">
                                    <input
                                        type="text"
                                        name="subject"
                                        id="subject"
                                        className="form-control"
                                        placeholder={t("contactForm.contactSubject")}
                                        required
                                    />
                                </div>
                                <div className="col-lg-12">
                                    <textarea
                                        className="form-control p-2"
                                        name="message"
                                        id="message"
                                        placeholder={t("contactForm.contactMessage")}
                                        required
                                        style={{minHeight: "5rem"}}></textarea>
                                </div>
                                <div className="col-lg-12">
                                    <button className="btn-outline" type="submit" value="send">
                                        {t("contactForm.contactSubmit")}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
