import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import { Dropdown} from 'react-materialize';


class SignedInLinks extends Component{
  componentDidMount() {
}

render(){
  return (
    <div>
      <ul className="right">
        <Dropdown trigger={<li><NavLink to='/create' className='pink-text'>Browse</NavLink></li>} options={{belowOrigin: true, hover: true}}>
            <a href="#!">Photographers</a>
            <a href="#!">Wedding Planners</a>
            <a href="#!">Djs</a>
            <a href="#!">Wedding Cakes</a>
            <a href="#!">Catering</a>
            <a href="#!">Wedding Venues</a>
            <a href="#!">Wedding Dresses</a>
            <a href="#!">Wedding Decorations</a>
        </Dropdown>
        <li><a className="pink-text" onClick={this.props.signOut}>Log Out</a></li>
        <li><NavLink to='/' className="btn btn-floating pink lighten-1">
          {this.props.profile.initials}
        </NavLink></li>
      </ul>
    </div>
  )
}
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
