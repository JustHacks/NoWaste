import Header from "../components/header";
import Image from "next/image";

const Shop = () => (
  <>
    <Header>
      <div>
        <h1>Find Eco-friendly shops near you</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cum sequi
          nesciunt, amet autem recusandae dolores aliquid.
        </p>
      </div>
      <div>
        <Image src="/imgs/eco.png" width="609px" height="434px" alt="Earth" />
      </div>
    </Header>{" "}
  </>
);

export default Shop;
