import Nav from "../components/nav";
import styles from "../styles/Header.module.css";

const Header = ({ children }) => (
  <div className={styles.cont}>
    <div className={styles.bg}>
      <Nav />
      <div className={styles.section}>{children}</div>
    </div>
  </div>
);

export default Header;
