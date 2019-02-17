import React from 'react'
import { Link as RouterLink } from 'react-router-dom'


const MyLink = props => <RouterLink to={props.screen} {...props} />

export default MyLink
