/** @format */

import React, {lazy, Suspense} from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/styles.css"
import "./styles/foundation.css"
import App from "./pages/App"
import Service from "./pages/Service"
import HelpPage from "./pages/Help"
import NotFound from "./pages/404"
import WebFont from "webfontloader"
import ScrollToTop from "./components/ScrollToTop"
import "react-app-polyfill/ie9"
import "react-app-polyfill/stable"
import * as serviceWorker from "./serviceWorker"

WebFont.load({
    google: {
        families: ["Lato", "sans-serif"],
    },
})

const AboutUsComponent = lazy(() => import("./pages/AboutUs"))
const AboutUsPage = () => {
    return (
        <Suspense fallback={null}>
            <AboutUsComponent />
        </Suspense>
    )
}

ReactDOM.render(
    <Router>
        <ScrollToTop>
            <Switch>
                <Route path="/" exact component={App} />
                <Route
                    exact
                    path="/service/it-maintenance-and-repair"
                    render={props => <Service {...props} highlightString={0} />}
                />
                <Route
                    exact
                    path="/service/web-development"
                    render={props => <Service {...props} highlightString={1} />}
                />
                <Route
                    exact
                    path="/service/digital-marketing"
                    render={props => <Service {...props} highlightString={2} />}
                />
                <Route exact path="/service/web-hosting" render={props => <Service {...props} highlightString={3} />} />
                <Route exact path="/contact" render={props => <HelpPage {...props} highlightString={0} />} />
                <Route exact path="/documents" render={props => <HelpPage {...props} highlightString={1} />} />

                <Route path="/about-us" exact component={AboutUsPage} />

                <Route path="/404" component={NotFound} />
                <Route path="*" component={NotFound} />
                <Route component={NotFound} />
            </Switch>
        </ScrollToTop>
    </Router>,
    document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
