import Header from "../components/header";
import Image from "next/image";
import Button from "components/button";
import Footer from "../components/footer"; 

const Chat = () => (
  <>
    <Header>
      <div>
        <h1>Chat Bot</h1>
        <p>
          You can use NoWaste’s chatbot to learn more about recycling and get answers to questions like how many people recycle in a day.
        </p>
        <Button>Start</Button>
      </div>
      <div>
        <Image src="/imgs/bot.png" width="450px" height="500px" alt="bot" />
      </div>
    </Header>

     <div className="single-img-one">
        <Image src="/imgs/chat.png" width="800px" height="800px" alt="chat" />
    </div>

    <div className="single-img">
        <Image src="/imgs/circles.png" width="1100px" height="500px" alt="circles" />
    </div>

    <Footer />
  </>
);

export default Chat;
