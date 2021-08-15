import Header from "../components/header";
import Button from "../components/button";
import styles from "../styles/Home.module.css";

import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header>
        <div>
          <h1>NoWaste</h1>
          <p>
            An all in one recycling app for everyone to figure out how they can help reduce the overflowing landfills in our ecosystem and prevent the environment from getting destroyed. {" "}
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
      <div className={styles.features}>
        <h1>Features</h1>
        <p>NoWaste provides a multitude of ways for people to help reduce waste in their communities by recycling, donating, and substituting things.</p>
          <div className={styles.card}>
            <div className={styles.card}>
              <span>Carbon Footprints</span>
              <Image src="/imgs/cfoot.png" width="200px" height="200px" alt="CarbonFootprints"/>
            </div>
            <div className={styles.card}>
              <span>E-shop</span>
              <Image src="/imgs/eshop.png" width="170" height="150" alt="EShop"/>
            </div>
            <div className={styles.card}>
              <span>Chat bot</span>
              <Image src="/imgs/chatbot.png" width="380px" height="300px" alt="ChatBot"/>
            </div>
            <div className={styles.card}>
              <span>Donate food</span>
              <Image src="/imgs/reuse.png" width="200px" height="200px" alt="Donatefood"/>
            </div>
            <div className={styles.card}>
              <span>Recycle</span>
              <Image src="/imgs/recycle.png" width="150px" height="150px" alt="Recycle"/>
            </div>
          </div>
      </div>      
    </div>
  );
}
