import Header from "../components/header";
import Image from "next/image";
import Button from "../components/button";
import Footer from "../components/footer"
import styles from "../styles/Home.module.css";
import camStyles from "../styles/cam.module.css"
import * as tf from '@tensorflow/tfjs';
import * as tmImage from '@teachablemachine/image';

export default function Cam() {
  // Place your functions right below
  const URL = "https://teachablemachine.withgoogle.com/models/qySb78ldV/";

  let model, webcam, labelContainer, maxPredictions;

  // turn on the cammm
  async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    // access the model
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    //webcam settings
    const flip = true; // whether to flip the webcam
    webcam = new tmImage.Webcam(200, 200, flip);
    await webcam.setup(); // request access to the webcam
    await webcam.play();
    window.requestAnimationFrame(loop);

    // append elements to the DOM
    document.getElementById("webcam-container").appendChild(webcam.canvas);
    labelContainer = document.getElementById("label-container");
    for (let i = 0; i < maxPredictions; i++) {
      labelContainer.appendChild(document.createElement("div"));
    }
  }

  async function loop() {
    webcam.update();
    await predict();
    window.requestAnimationFrame(loop);
  }

  // run the webcam image through the image model
  async function predict() {
    const prediction = await model.predict(webcam.canvas);
    for (let i = 0; i < maxPredictions; i++) {
      const classPrediction =
        prediction[i].className + ": " + prediction[i].probability.toFixed(2);
      labelContainer.childNodes[i].innerHTML = classPrediction;

    }
  }

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
        <span onClick={init}>
          <Button type="button" id="startBtn">Start</Button>
        </span>
      </div>

      <div className="single-img">
        <Image
          src="/imgs/bins.png" alt="bins" height="350" width="950"
        />
      </div>

      <div className="heading">
        <h1>Start Recycling</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cum sequi nesciunt, ipsa amet autem recusandae dolores aliquid ducimus quis quia.
          </p>
        <Button>Learn More</Button>
      </div>

      <div className="single-img-one">
        <Image
          src="/imgs/help.png" alt="people helping" width="1400px" height="400px"
        />
      </div>
      <script> src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.3.1/dist/tf.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@teachablemachine/image@0.8/dist/teachablemachine-image.min.js"></script>
      <Footer />
    </div>
  );

}


