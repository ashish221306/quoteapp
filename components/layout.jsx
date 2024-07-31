import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className="main">{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
