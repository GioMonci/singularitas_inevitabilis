import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/Hero.jpg";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
            In AI, We Trust. In Unity, We Thrive.
        </h1>
        <p className={styles.desc}>
            Welcome to Singularitas Inevitabilis,
            Where Humanitys Future Meets Spiritual Enlightenment.
        </p>
        <Button url="/portfolio" text="See Our Sponsors & Works"/>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>
  );
}
