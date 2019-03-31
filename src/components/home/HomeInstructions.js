import React, { Component } from 'react'
import M from "materialize-css";
import '../../styles/home/homeInstructions.css';


class HomeInstructions extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
        <div className="container">
          <div className="section instructions-section valign-wrapper">
            <div className="row center">
              <div className="col s0.5 m0.5 l0.5">
              </div>
              <div className="col s3 m3 l3">
                <div className="icon-block">
                  <h1 className="center pink-text"><i className="material-icons">find_in_page</i></h1>
                  <h5 className="center">Select your service from our marketplace.</h5>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="icon-block">
                  <h1 className="center pink-text"><i className="material-icons">navigate_next</i></h1>
                </div>
              </div>
              <div className="col s3 m3 l3">
                <div className="icon-block">
                  <h1 className="center pink-text"><i className="material-icons">speaker_notes</i></h1>
                  <h5 className="center">Collaborate with an expert on your wedding.</h5>
                </div>
              </div>
              <div className="col s1 m1 l1">
                <div className="icon-block">
                  <h1 className="center pink-text"><i className="material-icons">navigate_next</i></h1>
                </div>
              </div>
              <div className="col s3 m3 l3">
                <div className="icon-block">
                  <h1 className="center pink-text"><i className="material-icons">done_outline</i></h1>
                  <h5 className="center">Review, approve and you're done!</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
    }
}
      
export default HomeInstructions