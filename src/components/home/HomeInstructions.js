import React, { Component } from 'react'
import M from "materialize-css";

class HomeInstructions extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
        <div class="container">
          <div class="section">
            <div class="row">
              <div class="col s3 m3 l3">
                <div class="icon-block">
                  <h2 class="center pink-text"><i className="material-icons">find_in_page</i></h2>
                  <h5 class="center">Select your service from our marketplace.</h5>
                </div>
              </div>
              <div class="col s1 m1 l1">
                <div class="icon-block">
                  <h2 class="center pink-text"><i className="material-icons">navigate_next</i></h2>
                </div>
              </div>
              <div class="col s3 m3 l3">
                <div class="icon-block">
                  <h2 class="center pink-text"><i className="material-icons">speaker_notes</i></h2>
                  <h5 class="center">Collaborate with an expert on your wedding.</h5>
                </div>
              </div>
              <div class="col s1 m1 l1">
                <div class="icon-block">
                  <h2 class="center pink-text"><i className="material-icons">navigate_next</i></h2>
                </div>
              </div>
              <div class="col s3 m3 l3">
                <div class="icon-block">
                  <h2 class="center pink-text"><i className="material-icons">done_outline</i></h2>
                  <h5 class="center">Review, approve and you're done!</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
    }
}
      
export default HomeInstructions