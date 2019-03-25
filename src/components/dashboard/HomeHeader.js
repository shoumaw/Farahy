import React, { Component } from 'react'
import M from "materialize-css";
import '../../styles/homeHeader.css';

class HomeHeader extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
          <div className="parallax-container">
            <div className="container">
              <br></br>
              <h1 className="center teal-text text-lighten-2" style={{fontWeight: "italic"}}> </h1>
              <div className="row center">
                <h3 className="header col s12 light">A community of wedding planners, djs and photographers ready for your wedding</h3>
              </div>
              <br></br>
              <nav className="nav-search center">
                <div class="nav-wrapper pink">
                  <form className="search">
                    <div class="input-field">
                      <input className="search" type="search" placeholder="Search here..." required/>
                      <label className="label-icon" for="search"><i class="material-icons">search</i></label>
                      <i className="material-icons">close</i>
                    </div>
                  </form>
                </div>
              </nav> 
            </div>
          <div className="parallax"><img className="responsive-img" src="/img/wedding-background7.jpg" alt="Header Wedding Background" style={{opacity: 0.1, transform: `translate3d(-50%, 221.745px, 0px)`}}/></div>
        </div>
    )
  }
}

export default HomeHeader