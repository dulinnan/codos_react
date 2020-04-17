/** @format */

import React, {Suspense, useState, useRef, useEffect} from "react"
import {useTranslation} from "react-i18next"
import {Link} from "react-router-dom"
import logoNavDark from "../images/logoNavDark.png"
import logoNavLight from "../images/logoNavLight.png"
import "../styles/header.css"

export default function Header() {
    const {t, i18n} = useTranslation("")
    const [collapseStatus, setCollapseStatus] = useState("collapse navbar-collapse")
    const [dropdownServicesStatus, setDropdownServicesStatus] = useState("dropdown-menu")
    const [dropdownProductsStatus, setDropdownProductsStatus] = useState("dropdown-menu")
    const [dropdownPlatformsStatus, setDropdownPlatformsStatus] = useState("dropdown-menu")
    const [dropdownLoginStatus, setDropdownLoginStatus] = useState("dropdown-menu")
    const [dropdownI18nStatus, setDropdownI18nStatus] = useState("dropdown-menu")
    const [searchFormStatus, setSearchFormStatus] = useState("search-form")
    const [ariaExpanded, setAriaExpanded] = useState(false)
    const [navBackground, setNavBackground] = useState(false)
    const navRef = useRef(navBackground)
    navRef.current = navBackground
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 50
            if (navRef.current !== show) {
                setNavBackground(show)
            }
        }
        document.addEventListener("scroll", handleScroll)
        return () => {
            document.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const handleNavCollapse = () => {
        if (collapseStatus.includes("show")) {
            setCollapseStatus("collapse navbar-collapse")
            setAriaExpanded(false)
        } else {
            setCollapseStatus("collapse navbar-collapse show")
            setAriaExpanded(true)
        }
    }

    const handleServicesCollapse = () => {
        if (dropdownServicesStatus.includes("show")) {
            setDropdownServicesStatus("dropdown-menu")
            setAriaExpanded(false)
        } else {
            setAriaExpanded(true)
            setDropdownServicesStatus("dropdown-menu show")
            setDropdownPlatformsStatus("dropdown-menu")
            setDropdownProductsStatus("dropdown-menu")
            setDropdownLoginStatus("dropdown-menu")
            setDropdownI18nStatus("dropdown-menu")
        }
    }
    const handlePlatformsCollapse = () => {
        if (dropdownPlatformsStatus.includes("show")) {
            setDropdownPlatformsStatus("dropdown-menu")
            setAriaExpanded(false)
        } else {
            setDropdownPlatformsStatus("dropdown-menu show")
            setAriaExpanded(true)
            setDropdownServicesStatus("dropdown-menu")
            setDropdownProductsStatus("dropdown-menu")
            setDropdownLoginStatus("dropdown-menu")
            setDropdownI18nStatus("dropdown-menu")
        }
    }
    const handleProductsCollapse = () => {
        if (dropdownProductsStatus.includes("show")) {
            setDropdownProductsStatus("dropdown-menu")
            setAriaExpanded(false)
        } else {
            setDropdownProductsStatus("dropdown-menu show")
            setAriaExpanded(true)
            setDropdownServicesStatus("dropdown-menu")
            setDropdownPlatformsStatus("dropdown-menu")
            setDropdownLoginStatus("dropdown-menu")
            setDropdownI18nStatus("dropdown-menu")
        }
    }
    const handleLoginCollapse = () => {
        if (dropdownLoginStatus.includes("show")) {
            setDropdownLoginStatus("dropdown-menu")
            setAriaExpanded(false)
        } else {
            setDropdownLoginStatus("dropdown-menu show")
            setAriaExpanded(true)
            setDropdownServicesStatus("dropdown-menu")
            setDropdownPlatformsStatus("dropdown-menu")
            setDropdownProductsStatus("dropdown-menu")
            setDropdownI18nStatus("dropdown-menu")
        }
    }

    const handleSearchForm = () => {
        searchFormStatus.includes("open") ? setSearchFormStatus("search-form") : setSearchFormStatus("search-form open")
    }

    return (
        <>
            <header className={`nav-fixed-top ${navBackground ? "nav-dark box-shadow" : "nav-light"}`}>
                <div className="navigation">
                    <div className="container-lg">
                        <nav className="navbar navbar-expand-lg nav-flex">
                            <Link className="nav-item nav-logo-mobile" to="/">
                                {/* <img src={logoImage} alt="logo" height="60px" /> */}
                                <img
                                    className={`${navBackground ? "nav-logo-dark" : "nav-logo-light"} py-2`}
                                    src={logoNavDark}
                                    height="50px"
                                    alt="logo of CJC"
                                />
                                <img
                                    className={`${navBackground ? "nav-logo-light" : "nav-logo-dark"} py-2`}
                                    src={logoNavLight}
                                    height="50px"
                                    alt="logo of CJC"
                                />
                            </Link>
                            <div className="nav-flex">
                                <button
                                    className="navbar-toggler nav-item nav-toggler-mobile"
                                    type="button"
                                    aria-expanded={ariaExpanded}>
                                    <span onClick={handleNavCollapse}>
                                        <svg viewBox="0 0 100 80" width="40" height="32">
                                            <rect width="80" height="6" fill="#0D0746"></rect>
                                            <rect y="30" width="80" height="6" fill="#0D0746"></rect>
                                            <rect y="60" width="80" height="6" fill="#0D0746"></rect>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                            <div className={collapseStatus} id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link to="/about-us" className="nav-link">
                                            {t("header.aboutUs")}
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/why-choose-cjc" className="nav-link">
                                            {t("header.why")}
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link to="/help/qna" className="nav-link">
                                            {t("header.help")}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}
