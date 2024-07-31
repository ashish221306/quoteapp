import Image from "next/image";
import Link from "next/link";
import { menulinks, usefulllinks } from "public/data/footer";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="footer container py-2">
                <div className="col">
                    <div>
                        <Link href="/">
                            <a>
                                <span className="mb-2">
                                    <Image
                                        height={80}
                                        width={200}
                                        src="https://crafto.app/public/images/crafto-by-kutumb-logo.svg"
                                    />
                                </span>
                            </a>
                        </Link>
                    </div>
                    <div className="social">
                        <ul>
                            <li>
                                <Link aria-label="facebook" href="https://www.facebook.com/kutumbapp">
                                    <a>
                                        <FaFacebookF />
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/" aria-label="twitter">
                                    <a>
                                        <FaTwitter />
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/" aria-label="instagram">
                                    <a>
                                        <FaInstagram />
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col">
                    <h3 className="smallheading">Menu</h3>
                    <ul>
                        {menulinks.map((a, i) => (
                            <li key={i}>
                                <Link href={a.link}>
                                    <a>{a.text}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col">
                    <h3 className="smallheading">Quick links</h3>
                    <ul>
                        {usefulllinks.map((a, i) => (
                            <li key={i}>
                                <Link href={a.link}>
                                    <a>{a.text}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </footer>
            <div className="sub-footer">
                &copy;copyright 2022-{new Date().getFullYear() + 1} Primetrace Technologies Pvt Ltd
            </div>
        </>
    );
};

export default Footer;
