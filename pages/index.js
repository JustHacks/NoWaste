import Header from "../components/header";
import styles from "../styles/Home.module.css";
import Button from "../components/button";

import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header>
        <div>
          <h1>NoWaste</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cum
            sequi, amet autem recusandae dolores aliquid ducimus quis quia,
            repellendus{" "}
          </p>
          <Button>Learn More</Button>
        </div>
        <div>
          <Image
            src="/imgs/earth.png"
            width="563px"
            height="465px"
            alt="Earth"
          />
        </div>
      </Header>
    </div>
  );
}
