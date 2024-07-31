import Image from "next/image";
import styles from "../styles/quote.module.css";
import Button from "@/components/button";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Page = ({ data }) => {
    const router = useRouter();
    const limit = 10;
    const [array, setArray] = useState([...data]);
    const [currentPage, setCurrentPage] = useState(1);

    function decrement() {
        setCurrentPage(currentPage - 1);
    }
    function increment() {
        setCurrentPage(currentPage + 1);
    }
    useEffect(() => {
        router.push(`?limit=${limit}&offset=${limit * currentPage}`);
    }, [currentPage]);

    return (
        <div className="container">
            <div className={styles.quotes_container}>
                {array.map(q => (
                    <div key={q.id} className={styles.quote}>
                        <div className={styles.content}>
                            {q.mediaUrl && (
                                <Image objectFit="cover" className={styles.img} layout="fill" src={q.mediaUrl} />
                            )}
                            <blockquote className={styles.text}>{q.text}</blockquote>
                        </div>
                        <div className={styles.info}>
                            <cite>- by {q.username}</cite>
                            <span>{new Date(q.createdAt).toDateString()}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.pagination}>
                <Button customclass={currentPage == 1 && "disabled"} clickhandler={e => decrement()} label="Prev" />
                <span>page-{currentPage}</span>
                <Button clickhandler={e => increment()} label="Next" />
            </div>
        </div>
    );
};

export default Page;
export async function getServerSideProps({ req, query }) {
    const { limit, offset } = query;
    const response = await fetch(`${process.env.APP_URL}/api/getQuotes?limit=${limit}&offset=${offset}`, {
        headers: {
            cookie: req.headers.cookie,
        },
    });
    const result = await response.json();
    return {
        props: {
            data: result.data,
        },
    };
}
