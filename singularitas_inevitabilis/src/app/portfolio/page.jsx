import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const Portfolio = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.selectTitle}>See our Sponsors, Website Creation, and How to Apply</h1>
            <div className={styles.items}>
                <Link href="/portfolio/Sponsors" className={styles.item}>
                    <span className={styles.title}>Sponsors</span>
                </Link>
                <Link href="/portfolio/Website_Creation" className={styles.item}>
                    <span className={styles.title}>Web Creation</span>
                </Link>
                <Link href="/portfolio/Apply_Now" className={styles.item}>
                    <span className={styles.title}>Apply Now</span>
                </Link>
            </div>
        </div>
    );
};

export default Portfolio;
