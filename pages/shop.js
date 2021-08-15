import Header from "../components/header";
import Image from "next/image";

const Shop = () => (
  <>
    <Header>
      <div>
        <h1>Find Eco-friendly shops near you</h1>
        <p>
          We utilized the google maps API for Eco-friendly shop search to narrow down and locate recycling centers and food donating/receiving places in your local community.
        </p>
      </div>
      <div>
        <Image src="/imgs/eco.png" width="609px" height="434px" alt="Earth" />
      </div>
    </Header>{" "}
  </>
);

export default Shop;
