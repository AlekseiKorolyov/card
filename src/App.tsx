
import './App.css'
import styled from "styled-components";
import {StyledBtn} from "./components/Button.styled.tsx";
import {myTheme} from "./styles/Theme.styled.tsx";
import {StyledH1, StyledP} from "./styles/Styled.tsx";

function App() {

  return (
    <>
      <Card>
          <img src={"src/images/Rectangle.png"}  alt={"desert"}/>
          <StyledH1>Headline</StyledH1>
          <StyledP>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</StyledP>
          <ButtonBox>
              <StyledBtn color={myTheme.colors.primary} btnType={"primary"}>See more</StyledBtn>
              <StyledBtn btnType={"outlined"}>Save</StyledBtn>
          </ButtonBox>


      </Card>
    </>
  )
}

export default App


const Card = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: baseline;
    border: none;
    width: 300px;
    height: 350px;
    border-radius: 15px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
`

const ButtonBox = styled.div`
    display: flex;
    gap: 10px;
    height: 50px;
    width: 280px;
`