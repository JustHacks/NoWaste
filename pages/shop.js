import Header from "../components/header";
import Image from "next/image";
import Footer from "../components/footer"; 
import Button from "../components/button"

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
    </Header>

    <div className="content">
        <Image src="/imgs/gogreen.png" width="480px" height="420px" alt="gogreen" />
        <div className="text">
          <h1>Save the <spam>Environment</spam></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cum sequi nesciunt, ipsa amet autem recusandae dolores aliquid ducimus quis quia, repellendus exercitationem consequatur voluptatem aperiam. Fuga quam provident dicta.
          </p>
        </div>
    </div>
    
    <div className="heading">
      <Button>Learn More</Button>
    </div>

    <Footer />

  </>
);

export default Shop;
