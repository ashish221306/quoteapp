import nProgress from "nprogress";
import Layout from "../components/layout";
import "../styles/globals.css";
import "nprogress/nprogress.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Router} from "next/router";
function MyApp({ Component, pageProps }) {
    Router.events.on("routeChangeStart", () => {
        nProgress.start();
    });
    Router.events.on("routeChangeComplete", () => {
        nProgress.done();
    });
    Router.events.on("routeChangeError", () => nProgress.done());
    return (
        <Layout>
            <Component {...pageProps} />
            <ToastContainer position="bottom-left" autoClose="600" theme="light"/>
        </Layout>
    );
}

export default MyApp;
