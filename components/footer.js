import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const Container = styled.footer`
  height: 648px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-top: -33em;

  p {
    color: white;
  }

  .sm-icons {
    display: flex;
    justify-content: space-around;
    width: 120px;
  }

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 18.81%,
    rgba(15, 144, 109, 0.7) 102.65%,
    #b8d6d1 102.65%,
    #ffffff 102.66%
  );

  .footerTxt {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    padding: 48px;
  }
`;

const Footer = ({ children }) => (
  <Container>
    <div>
      <div>{children}</div>
      <div className="footerTxt">
        <p>© 2021 Nowaste, Inc. All rights reserved.</p>
        <div className="sm-icons">
          <Link
            href="/https://github.com/JustHacks/NoWaste"
            target="_blank"
            passHref
          >
            <Image
              src="/imgs/github.png"
              width="25px"
              height="25px"
              alt="github"
            />
          </Link>

          <Link href="/" target="_blank" passHref>
            <Image
              src="/imgs/twitter.png"
              width="25px"
              height="25px"
              alt="twitter"
            />
          </Link>
          <Link href="/" target="_blank" passHref>
            <Image
              src="/imgs/discord.png"
              width="25px"
              height="25px"
              alt="discord"
            />
          </Link>
        </div>
      </div>
    </div>
  </Container>
);

export default Footer;
