import React, { Component } from 'react'
import _ from 'lodash'
import ProgressLoader from './ProgressLoader'



class Users extends Component {

  componentDidMount() {
    this.props.getUserData()
  }
  render () {
    
    return (

      <div>

      { this.props.loading
          ? <ProgressLoader />:
        this.props.users.map(user => (
        <div
        style={{
          border: '1px solid blue',
          backgroundColor: 'white',
          margin: '1rem'
        }}
          key={user.id}
          >
          {user.name}
          {user.avatarURL}
          <br/>
          {_.values(user.answers)}
       </div>
      ))}
      </div>
    )
  }
}

export default Users
