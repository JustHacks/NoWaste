import styled from "styled-components";

const Section = styled.section`
background:#daefd580;
	border-radius: .5em;


  display: inline-block;
  overflow: hidden;
  margin-left: 10px;

  img {
    width: 350px;
    height: 270px;
    display: inline-block;
  }

  .slide {
    position: relative;
    display: inline-block;
    overflow: hidden;
  }
  .slide img {
    display: inline-block;
    vertical-align: middle;
  }
  .slide-content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    background-color: ${(props) => props.bgcolor};
    color: #ffffff;
    transition: transform 0.3s ease;
    -webkit-transition: transform 0.3s ease;
  }

  .slide:hover .slide-content {
    transform: translate(0, 0);
    -webkit-transform: translate(0, 0);
  }

  .slide-bottom .slide-content {
    transform: translate(0, 100%);
    -webkit-transform: translate(0, 100%);
  }
`;

const SlidingPanel = ({ name, children, bgcolor = "purple" }) => (
  <Section bgcolor={bgcolor}>
    <div className="slide slide-bottom">
      <div className="slide-content">{name}</div>
      {children}
    </div>
  </Section>
);

export default SlidingPanel;
