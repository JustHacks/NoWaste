import Link from "next/link";
import styles from "../styles/Nav.module.css";

const Nav = () => (
  <nav className={styles.nav}>
    <h1>NoWaste</h1>
    <div className={styles.links}>
      <Link href="/" className="active">Home</Link>
      <Link href="/cam">Cam</Link>
      <Link href="/chat">Chat</Link>
      <Link href="/shop">Shop</Link>
    </div>
  </nav>
);

export default Nav;
