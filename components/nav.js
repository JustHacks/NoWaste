import Link from "next/link";
import styles from "../styles/Home.module.css";

const Nav = () => (
  <div styles={styles.container}>
  <nav>
    <h1>NoWaste</h1>
    <div className={styles.links}>
      <Link href="/">Home</Link>
      <Link href="/cam">Cam</Link>
      <Link href="/chat">Chat</Link>
      <Link href="/shop">Shop</Link>
    </div>
  </nav>
  </div>
)

export default Nav