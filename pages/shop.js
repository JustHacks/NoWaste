import Header from "../components/header";
import Image from "next/image";
import Footer from "../components/footer"; 
import Button from "../components/button";

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

    <div className="single-btn">
      <Button>Allow Location Access</Button>
    </div>

     <div className="single-img-one">
        <Image src="/imgs/shop.png" width="700px" height="800px" alt="shop" />
    </div>

    <div className="content">
        <Image src="/imgs/gogreen.png" width="480px" height="420px" alt="gogreen" />
        <div className="text">
          <h1>Save the <spam>Environment</spam></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cum sequi nesciunt, ipsa amet autem recusandae dolores aliquid ducimus quis quia, repellendus exercitationem consequatur voluptatem aperiam. Fuga quam provident dicta.
          </p>
        </div>
    </div>
    
    <div className="single-btn">
      <Button>Learn More</Button>
    </div>

    <Footer />

  </>
);

export default Shop;

// //var axios = require('axios');

// var config = {
//   method: 'get',
//   url: 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum of Contemporary Art Australia&inputtype=textquery&fields=formatted_address,name,rating,opening_hours,geometry&key=YOUR_API_KEY',
//   headers: { }
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });
