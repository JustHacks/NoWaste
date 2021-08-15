import Header from "../components/header";
import Button from "../components/button";
import Features from "../components/Features";
import Footer from "../components/footer";

import styles from "../styles/Home.module.css";

import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header>
        <div>
          <h1>NoWaste</h1>
          <p>
            An all in one recycling app for everyone to figure out how they can
            help reduce the overflowing landfills in our ecosystem and prevent
            the environment from getting destroyed.{" "}
          </p>
          <Button>Learn More</Button>
        </div>
        <div>
          <Image
            src="/imgs/earth.png"
            width="500px"
            height="420px"
            alt="Earth"
          />
        </div>
      </Header>

      {/* Features */}
      <div className={styles.features}>
        <div className="heading">
          <h1>Features</h1>
          <p>
            NoWaste provides a multitude of ways for people to help reduce waste
            in their communities by recycling, donating, and substituting things.
          </p>
          </div>
        <div className={styles.card}>
          <Features />
        </div>
      </div>
    <Footer />
    </div>
  );
}
