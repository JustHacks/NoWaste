import SlidingPanel from "./SlidingPanel";
import Image from "next/image";

import styled from 'styled-components'

const FeatureContainer = styled.div`
display: flex;
align-items: center;
`

const Features = () => (
  <FeatureContainer>
    <div>
      <SlidingPanel name="Carbon Footprints" bgcolor="#f6e576bf" className="tile">
        <img
          src="/imgs/cfoot.png"
          height="200px"
          alt="CarbonFootprints"
        />
      </SlidingPanel>

      <SlidingPanel name="E-shop" bgcolor="#f6c68dbf" className="tile">
        <img src="/imgs/eshop.png" height="150" alt="EShop" />
      </SlidingPanel>
    </div>
    <div>
      <SlidingPanel name="Chat Bot" bgcolor="#b0a3f4bf" className="tile">
        <img
          src="/imgs/chatbot.png"
          height="300px"
          alt="ChatBot"
        />
      </SlidingPanel>
    </div>
    <div>

      <SlidingPanel name="Donate Food" bgcolor="#78b5e2bf" className="tile">
        <img
          src="/imgs/reuse.png"
          height="200px"
          alt="Donatefood"
        />
      </SlidingPanel>

      <SlidingPanel name="Recycle" bgcolor="#8dc37abf" className="tile">
        <img
          src="/imgs/recycle.png"
          height="150px"
          alt="Recycle"
        />
      </SlidingPanel>
    </div>
  </FeatureContainer>
)

export default Features