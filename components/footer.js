import styles from "../styles/components/footer.module.css";
import Link from "next/link"
import Image from "next/image"

const Footer = () => (
  <nav className={styles.nav}>
    <p>© 2021 Nowaste, Inc. All rights reserved.</p>
    <div className={styles.links}>
      <Link href="/https://github.com/JustHacks/NoWaste" target="_blank">
        <Image src="/imgs/github.png" width="40px" height="40px" alt="github" />      
      </Link>
      <Link href="/" target="_blank">
        <Image src="/imgs/twitter.png" width="40px" height="40px" alt="twitter" />      
      </Link>
      <Link href="/" target="_blank">
        <Image src="/imgs/discord.png" width="40px" height="40px" alt="discord" />      
      </Link>
    </div>
  </nav>
);

export default Footer;
