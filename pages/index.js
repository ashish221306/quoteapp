import Button from "@/components/button";
import Image from "next/image";
import styles from "../styles/home.module.css";
const Page = () => {
    return (
        <>
            <div className={`container ${styles.home}`}>
                <Image
                    priority
                    height={200}
                    width={300}
                    src="https://crafto.app/public/images/crafto-by-kutumb-logo.svg"
                />
                <div className="user">
                    <h1>Welcome to Crafto</h1>
                    <p>Craft your design for social media</p>

                    <div className={styles.btngroup}>
                        <Button type="link" link="/add" label="Add quote" />
                        <Button type="link" link="/quotes" label="Explore quotes" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
