/** @format */

import React from "react"
import {useTranslation} from "react-i18next"
import LayoutSecondary from "../layouts/layoutSecondary"
import bannerImg from "../images/aboutus/banner.jpg"
import {Helmet} from "react-helmet"

export default function AboutUs() {
    const {t} = useTranslation("")
    return (
        <>
            <Helmet>
                <title>About Us | CODOS IT Service</title>
                <meta
                    name="description"
                    content="At Codos we offer Computer maintenance and repair alongside Professionally designed websites on time at a great price that suits your budget.."
                />
            </Helmet>
            <LayoutSecondary bannerImg={bannerImg} pageTitle="About Us">
                <section className="mission section">
                    <div className="container">
                        <div className="row justify-content-center mb-50">
                            <div className="col-lg-10 text-left">
                                {t("aboutUs.brandHistoryStory")
                                    .split("\n")
                                    .map((i, key) => {
                                        return (
                                            <p key={key}>
                                                <span>{i}</span>
                                            </p>
                                        )
                                    })}
                            </div>
                        </div>
                    </div>
                </section>
            </LayoutSecondary>
        </>
    )
}
