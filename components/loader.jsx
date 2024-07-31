import { useRouter } from "next/router";

const Loader = () => {
    const router = useRouter();
    router.events?.on("routeChangeStart", () => {
        document.querySelector(".loader").style.display = "flex";
    });
    router.events?.on("routeChangeComplete", () => {
        document.querySelector(".loader").style.display = "none";
    });

    return <div className="loader">Please wait loading...</div>;
};

export default Loader;
