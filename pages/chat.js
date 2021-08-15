import Header from "../components/header";
import Image from "next/image";
import Button from "components/button";

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
        <Image src="/imgs/bot.png" width="300px" height="350px" alt="Earth" />
      </div>
    </Header>{" "}
  </>
);

export default Chat;
