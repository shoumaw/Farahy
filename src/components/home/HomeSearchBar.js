import React, { Component } from 'react'
import M from "materialize-css";
import '../../styles/home/homeSearchBar.css';

class HomeSearchBar extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
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
    )
  }
}

export default HomeSearchBar