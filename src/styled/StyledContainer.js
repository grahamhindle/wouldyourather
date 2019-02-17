import styled from "styled-components"
const StyledContainer = styled.div`

  background: ${props=>props.theme.primaryBg};
  min-height: 100vh;
  display: flex;
  justify-content:center;
  align-items: center;
  &:before {
    content: "WOULD YOU RATHER...";
    position: fixed;
    top: 18vh;
    left: 10vw;
    font-size: 5vw;
    color: rgba(255, 255, 255, 0.04);
  }
`
export default StyledContainer