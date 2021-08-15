import Header from "../components/header";
import Button from "../components/button";
import SlidingPanel from "../components/SlidingPanel";
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
          <SlidingPanel name="Carbon Footprints">
            <Image
              src="/imgs/cfoot.png"
              width="200px"
              height="200px"
              alt="CarbonFootprints"
            />
          </SlidingPanel>

          <SlidingPanel name="E-shop">
            <Image src="/imgs/eshop.png" width="170" height="150" alt="EShop" />
          </SlidingPanel>

          <SlidingPanel name="Chat Bot">
            <Image
              src="/imgs/chatbot.png"
              width="380px"
              height="300px"
              alt="ChatBot"
            />
          </SlidingPanel>

          <SlidingPanel name="Donate Food">
            <Image
              src="/imgs/reuse.png"
              width="200px"
              height="200px"
              alt="Donatefood"
            />
          </SlidingPanel>

          <SlidingPanel name="Recycle">
            <Image
              src="/imgs/recycle.png"
              width="150px"
              height="150px"
              alt="Recycle"
            />
          </SlidingPanel>
        </div>
      </div>
    </div>
  );
}
