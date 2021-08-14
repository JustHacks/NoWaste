import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <nav>
        <h1>NoWaste</h1>
        <div className={styles.links}>
          <Link href="/">Home</Link>
          <Link href="/">Cam</Link>
          <Link href="/">Chat</Link>
          <Link href="/">Shop</Link>
        </div>
      </nav>
      <div className={styles.home}>
        <div>
          <h1>NoWaste</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cum
            sequi, amet autem recusandae dolores aliquid ducimus quis quia,
            repellendus{" "}
          </p>
        </div>
        <div>Images</div>
      </div>
      <div></div>
    </div>
  );
}
