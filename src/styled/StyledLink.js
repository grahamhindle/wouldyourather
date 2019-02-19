import styled from "styled-components"
import { devices } from '../utils/styledUtils'
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
    color:'#FFFFFF';
    decoration:'none';

  ${devices.md`
    width: 640px;
    height: 480px;
    border-radius: 15px;
    ` 
  } 
`
export default StyledLink