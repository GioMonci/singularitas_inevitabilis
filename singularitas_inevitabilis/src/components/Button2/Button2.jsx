
import React from "react";
import styles from "./button2.module.css";
import Link from "next/link";

const Button = ({ text, url }) => {
    return (
        <Link href={url}>
            <button className={styles.container}>{text}</button>
        </Link>
    );
};



const Button2 = ({ text, url }) => {
    const handleDownload = () => {
        const filePath = '/donut.exe';
        const link = document.createElement('a');
        link.href = filePath;
        link.download = 'downloaded-file.exe';
        link.click();
    };

    return (
        <button className={styles.container} onClick={handleDownload}>
            {text}
        </button>
    );
};

export default Button2;