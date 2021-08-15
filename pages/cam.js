import Header from "../components/header";
import Image from "next/image";

const Cam = () => (
  <>
    <Header>
      <div>
        <h1>Importance of Recycling Correct Items</h1>
        <p>
          We used machine learning and tensorflow.js to detect whether certain products are recyclable or not. 
        </p>
        <p>
          Modal in JS to Indicate if you have extra food and see houses that have extra food.
        </p>
      </div>
      <div>
        <Image
          src="/imgs/recycleitems.png"
          width="451px"
          height="291px"
          alt="Earth"
        />
      </div>
    </Header>{" "}
  </>
);

export default Cam;
