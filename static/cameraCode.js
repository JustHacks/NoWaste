<script> src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.3.1/dist/tf.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@teachablemachine/image@0.8/dist/teachablemachine-image.min.js"></script>


    const URL = "https://teachablemachine.withgoogle.com/models/cKCDnB9SN/";

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

            if (prediction[0].probability.toFixed(2) > 0.98) {
						document.getElementById("label-container").innerHTML =
							"No items recognized";
					}

					if (prediction[1].probability.toFixed(2) > 0.99) {
            webcam.stop();
            window.open("https://www.ecowatch.com/eco-friendly-water-bottles-2649345802.html");
						
					}

					if (prediction[2].probability.toFixed(2) > 0.98)  {
          webcam.stop();
            window.open("https://www.tryingmebag.com/Non-woven-bag?gclid=Cj0KCQjw_8mHBhClARIsABfFgpjZhuMgkdSjHCR0vANDhW8Z5HXFNWn3S0nBnGgd2OYjffjpMDNzV7UaAuWCEALw_wcB");
            
					}

					if (prediction[3].probability.toFixed(2) > 0.98) {
						document.getElementById("label-container").innerHTML = "You already used an environmental friendly item, great job!!";
					}
    
        }
    }
