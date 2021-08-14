import styles from "../styles/components/button.module.css";

const Button = ({ children }) => (
  <>
    <button className={styles.btn}>{children}</button>
  </>
);

export default Button;
