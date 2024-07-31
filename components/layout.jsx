import Footer from "./footer";
import Header from "./header";
import Loader from "./loader";

const Layout = ({ children }) => {
    return (
        <>
            {/* <Loader /> */}
            <Header />
            <main className="main">{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
