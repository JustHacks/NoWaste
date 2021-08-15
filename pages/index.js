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

      <div className="content">
      <Image src="/imgs/inspo.png" width="576px" height="297px" alt="Earth" />
        <div className="text">
          <h1>Inspiration</h1>
          <p>
We throw out over 2 billion tons of household waste a year globally. That's more than 60 tons of waste every second. So we need to pusha more waste-free living!
          </p>
        </div>
      </div>

      <div className="content">
        <div className="text">
          <h1>How NoWaste Helps?</h1>
          <p>By providing information and resources on how to recycle items and items that are recyclable for a more sustainable living!
          </p>
        </div>
        <Image src="/imgs/helpus.png" width="576px" height="297px" alt="Earth" />
      </div>

        <div className="heading">
          <h1>Contribute</h1>
          <p>
            NoWaste is an open source project, feel free to Contribute to our project and help to make our world a better place.
          </p>
          <Button>Github</Button>
        </div>

    <Footer />
    </div>
  );
}
