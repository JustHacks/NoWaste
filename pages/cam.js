import Header from "../components/header";
import Image from "next/image";

const Cam = () => (
  <>
    <Header>
      <div>
        <h1>Importance of Recycling Correct Items</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cum sequi
          nesciunt, ipsa amet autem recusandae dolores aliquid ducimus quis
          quia, repellendus exercitationem consequatur voluptatem aperiam. Fuga
          quam provident dicta.
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
