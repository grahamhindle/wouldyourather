import React, { Component } from 'react'



class AuthedUser extends Component {

  componentDidMount() {
    
    this.props.setAuthedUser("sarahedo");
    
  }
  render () {
    
    return (
      <div>
        {this.props.authedUser}
      </div>
      
      
    )
  }
}

export default AuthedUser
