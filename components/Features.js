import styled from "styled-components"

const Container = styled.div`
.posts{
	max-width: 840px;
	margin:0 auto;
}


div {
    display: grid;
    grid-template-columns: repeat(auto-fill, 40px [col-start]);
    grid-auto-columns: 40px;
    grid-auto-rows: 40px;
    justify-content: center;
}
.tile{
	background:#daefd580;
	border-radius: .5em;
	margin:8px;
	display:flex;
	justify-content:center;
	align-items:center;
   text-decoration: none;
   grid-column: auto/span 5;
   grid-row: auto/span 5;
   display: flex;
   position: relative;
   cursor: pointer;
	background-repeat: no-repeat;
   background-position: center;
	color: transparent;
	transition: .3s linear;
}


#tile-one{background-image: url("https://34b6fddf-0210-4fc2-8398-0f77ac992229.id.repl.co/_next/image?url=%2Fimgs%2Fcfoot.png&w=256&q=75");
	background-size: contain;
}
#tile-two {background-image: url("https://34b6fddf-0210-4fc2-8398-0f77ac992229.id.repl.co/_next/image?url=%2Fimgs%2Fchatbot.png&w=384&q=75");}
#tile-three{background-image: url("https://34b6fddf-0210-4fc2-8398-0f77ac992229.id.repl.co/_next/image?url=%2Fimgs%2Freuse.png&w=256&q=75");}
#tile-four{background-image: url("https://34b6fddf-0210-4fc2-8398-0f77ac992229.id.repl.co/_next/image?url=%2Fimgs%2Feshop.png&w=256&q=75");}
#tile-five{background-image: url("https://34b6fddf-0210-4fc2-8398-0f77ac992229.id.repl.co/_next/image?url=%2Fimgs%2Frecycle.png&w=256&q=75");}


@media screen and (min-width: 840px){
#tile-one{
	grid-column: auto/span calc(4 + 1 + 1);
	grid-row: auto/span calc(5 + 1 + 1);
   margin-left: calc(30px * 1);
   margin-top: calc(20px * 1);
}

#tile-two {
    grid-column: auto/span calc(7 + 1 );
    grid-row: auto/span calc(9 + 1 + 3);
    margin-top: calc(30px * 2);
}

#tile-three{
	grid-column: auto/span calc(6 + 1 );
   grid-row: auto/span calc(7 + 1 );
	margin-bottom: 30px;
}

#tile-four{
	grid-column: auto/span calc(5 + 1 );
	grid-row: auto/span calc(4 + 1 + 2);
}

#tile-five{
	grid-column: auto/span calc(5 + 1 );
	grid-row: auto/span calc(5 + 1 );
	margin-top: -10px;
}

}

@media screen and (max-width: 840px){
	.posts{
		width:100vw;
		display: flex;
		flex-wrap: wrap;
	}
	
.tile{
	height:240px;
	width: 200px;
}
	#tile-two,#tile-three,#tile-four {
		background-size: contain;
	}	
}

#tile-one:hover,
#tile-two:hover,
#tile-three:hover,
#tile-four:hover,
#tile-five:hover{
	background: rgba(255,210,3,50%);
	color: black;
}
`

const Features = () => {
  return (
    <Container>
      <div class="posts">
        <a id="tile-one" className="tile"><h3>Carbon Footprints</h3></a>
        <a id="tile-two" className="tile"><h3>Chat bot</h3></a>
        <a id="tile-three" className="tile"><h3>Donate leftovers</h3></a>
        <a id="tile-four" className="tile"><h3>E-shop</h3></a>
        <a id="tile-five" className="tile"><h3>Recycle</h3></a>
      </div>
    </Container>
  )
}

export default Features