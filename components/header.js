import Nav from "../components/nav";
import styles from "../styles/Header.module.css";

const Header = ({ children }) => (
  <div className={styles.gradient}>
    <div className={styles.bg}>
      <div className={styles.cont}>
        <Nav />
        <div className={styles.section}>{children}</div>
      </div>
    </div>
  </div>
);

export default Header;
