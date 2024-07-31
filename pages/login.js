import React from "react";
import styles from "../styles/login.module.css";
import { authenticate } from "utils/login";
import Image from "next/image";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
const Login = () => {
    const router = useRouter();
    const loginuser = async e => {
        const data = await authenticate(e);
        if (data.token) {
            toast.success("Logged in successfully");
            router.push("/");
        }
    };
    return (
        <div className="container">
            <div class={` ${styles.formcontainer}`}>
                <span className={styles.image}>
                    <Image layout="fill" objectFit="cover" src="/quote-banner.avif" />
                </span>
                <form onSubmit={e => loginuser(e)}>
                    <div class="content">
                        <h2>Login</h2>
                        <label for="username">
                            <input name="username" type="text" placeholder="username" />
                        </label>
                        <label for="OTP">
                            <input name="otp" type="text" placeholder="OTP" />
                        </label>

                        <button>Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
export async function getServerSideProps({ req }) {
    if (req.cookies["x-token"]) {
        toast.success("already loggedin");
        return {
            redirect: {
                permanent: false,
                destination: req.headers.referer ? req.headers.referer.split(process.env.APP_URL)[1] : "/quotes",
            },
        };
    } else {
        return {
            props: {},
        };
    }
}
