import Header from "../components/header";
import Image from "next/image";
import Button from "../components/button";
import styles from "../styles/Home.module.css";
import camStyles from "../styles/cam.module.css"

export default function Cam() {
  return (
    <div>
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
    </Header>
 
		<div className={camStyles.cam}>
			<h1>Cam</h1>
			<div className={camStyles.camDisplay} id="webcam-container"></div>
			<div className={camStyles.labelContainer} id="label-container"></div>
			<Button type="button" onclick="init()" id="startBtn">Start</Button>
		</div>
    
      <div className="heading">
          <h1>Start Recycling</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cum sequi nesciunt, ipsa amet autem recusandae dolores aliquid ducimus quis quia.
          </p>
          <Button>Learn More</Button>
        </div>


  </div>
  
  );

}


