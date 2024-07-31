import Link from "next/link";
import { nav } from "public/data/nav";
import { useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoTriangleDown } from "react-icons/go";

const Header = () => {
    useEffect(() => {
        const header = document.getElementById("header");
        const closemenu = () => header?.classList.remove("active");
        const ltr = window.addEventListener("scroll", closemenu);
        return () => {
            window.removeEventListener(scroll, ltr);
        };
    }, []);

    return (
        <header id="header" className="header container">
            <Link href="/">
                <a className="brand">Crafto</a>
            </Link>

            <div onClick={e => e.currentTarget.parentElement.classList.toggle("active")} className="navbtn">
                <GiHamburgerMenu color="#000" size={20} />
            </div>
            <nav>
                <ul>
                    {nav.map(el => (
                        <li
                            onClick={e =>
                                e.currentTarget.parentElement.parentElement.parentElement.classList.remove("active")
                            }
                            key={Math.random()}
                        >
                            <Link href={el.link} style={{ direction: "flex", alignItems: "center" }}>
                                <a
                                    onClick={e => {
                                        if (el.dropdown) {
                                            e.preventDefault();
                                        }
                                    }}
                                >
                                    {el.text}
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
