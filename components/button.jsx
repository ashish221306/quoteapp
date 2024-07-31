import Link from "next/link";
import styles from "../styles/button.module.css";
const Button = ({ label, clickhandler, customclass, link, type }) => {
    switch (type) {
        case "link":
            return (
                <Link href={link}>
                    <a className={`btn ${styles.btn} ${customclass}`}> {label}</a>
                </Link>
            );
        default:
            return (
                <button
                    onClick={e => {
                        clickhandler && clickhandler(e);
                    }}
                    className={`btn ${styles.btn} ${customclass}`}
                >
                    {label}
                </button>
            );
    }
};

export default Button;
