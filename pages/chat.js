import Header from "../components/header";
import Image from "next/image";
import Button from "components/button";

const Chat = () => (
  <>
    <Header>
      
      <div>
        <h1>Chat Bot</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cum sequi
          nesciunt, amet autem recusandae dolores aliquid.
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
