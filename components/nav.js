import Link from "next/link";
import styles from "../styles/Nav.module.css";
import { useRouter } from "next/router";
import styled from "styled-components";

const DownPointy = styled.div`
  background: #0f906d;
  display: inline-block;
  height: 90px;
  position: absolute;
  margin-left: 4px;
  top: -20px;
  width: 80px;
  z-index: 1;

  &:before {
    border-top: 35px solid #0f906d;
    border-left: 40px solid transparent;
    border-right: 40px solid transparent;
    content: "";
    height: 0;
    left: 0;
    position: absolute;
    top: 90px;
    width: 0;
  }
`;

const LinkWithPointy = ({ children, ...props }) => {
  const router = useRouter();
  if (router.asPath === props.href) {
    return (
      <>
        <DownPointy />
        <span style={{ zIndex: 2, position: "relative", top: -6 }}>
          {children}
        </span>
      </>
    );
  } else {
    return (
      <span style={{ zIndex: 2, position: "relative", top: -6 }}>
        {children}
      </span>
    );
  }
};

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <h1>NoWaste</h1>
      <div className={styles.links}>
        <LinkWithPointy href="/">
          <Link href="/">Home</Link>
        </LinkWithPointy>
        <LinkWithPointy href="/cam">
          <Link href="/cam">Cam</Link>
        </LinkWithPointy>
        <LinkWithPointy href="/chat">
          <Link href="/chat">Chat</Link>
        </LinkWithPointy>
        <LinkWithPointy href="/shop">
          <Link href="/shop">Shop</Link>
        </LinkWithPointy>
      </div>
    </nav>
  );
};

export default Nav;
