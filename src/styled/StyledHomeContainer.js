import styled from "styled-components"
import { devices } from '../utils/styledUtils'

const StyledMovieContainer = styled.section`
  background: ${props => props.theme.secondaryBg};
  width: 100%;
  height: 100vh;
  flex:1,

  ${devices.md`
    width: 640px;
    height: 480px;
    border-radius: 15px;
    ` 
  } 
`

export default StyledMovieContainer