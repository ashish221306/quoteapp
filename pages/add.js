import Image from "next/image";
import styles from "../styles/login.module.css";
import { useState } from "react";
import { addQuote } from "utils/addquote";
const AddQuote = () => {
    const [image, setimage] = useState("/quote-banner.avif");

    return (
        <div className="container">
            <div class={` ${styles.formcontainer}`}>
                <span className={styles.image}>
                    <Image layout="fill" objectFit="cover" src={image} />
                </span>
                <form onSubmit={e => addQuote(e)}>
                    <div class="content">
                        <h2>Add Quote</h2>
                        <label for="Image">
                            <input
                                onChange={e => setimage(URL.createObjectURL(e.target.files[0]))}
                                required
                                accept="image/*"
                                name="image"
                                type="file"
                                placeholder="username"
                            />
                        </label>

                        <textarea required name="text" type="text" placeholder="Add your quote" />

                        <button>submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddQuote;
