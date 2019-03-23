import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import M from "materialize-css";
import '../../styles/dashboard.css';
import $ from "jquery";

class Dashboard extends Component {
  componentDidMount() {
    // Auto initialize all the things!
    M.AutoInit();
    $("#inpt_search").on('focus', function () {
      $(this).parent('label').addClass('active');
    });
    
    $("#inpt_search").on('blur', function () {
      if($(this).val().length == 0)
        $(this).parent('label').removeClass('active');
    });
  }
  render() {
    const { projects, auth, notifications } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 

    return (
      <body>
        <div id="index-banner" class="parallax-container">
          <div class="section no-pad-bot">
            <div class="container">
              <br></br>
              <h1 class="header center teal-text text-lighten-2" style={{fontWeight: "italic"}}> </h1>
              <div class="row center">
                <h3 class="header col s12 light">A community of wedding planners, djs and photographers ready for your wedding</h3>
              </div>
              <br></br>
              <form class="search" action="">
                <input type="search" placeholder="Search here..." required/>
                <button type="submit">Search</button>
              </form>  
            </div>
          </div>
          <div class="parallax"><img className="responsive-img" src="/img/wedding-background7.jpg" alt="Unsplashed background img 1" style={{opacity: 0.1, transform: `translate3d(-50%, 221.745px, 0px)`}}/></div>
        </div>
        <div class="container">
          <div class="section">
            <div class="row">
              <div class="col s12 m4">
                <div class="icon-block">
                  <h2 class="center pink-text"><i className="material-icons">find_in_page</i></h2>
                  <h5 class="center">Select your service from our marketplace.</h5>
                </div>
              </div>

              <div class="col s12 m4">
                <div class="icon-block">
                  <h2 class="center pink-text"><i className="material-icons">speaker_notes</i></h2>
                  <h5 class="center">Collaborate with an expert on your wedding.</h5>
                </div>
              </div>

              <div class="col s12 m4">
                <div class="icon-block">
                  <h2 class="center pink-text"><i className="material-icons">done_outline</i></h2>
                  <h5 class="center">Review, approve and you're done!</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="parallax-container valign-wrapper">
          <div class="section no-pad-bot">
            <div class="container">
              <div class="row center">
                <h3 class="header col s12 light">Plan the wedding of a lifetime</h3>
              </div>
            </div>
          </div>
          <div class="parallax"><img className="responsive-img" src="/img/wedding-background4.jpg" alt="Unsplashed background img 2" style={{opacity: 0.11, transform: `translate3d(-50%, 221.745px, 0px)`}}/></div>
        </div>
        <div class="container">
          <div class="section">
            <div class="row">
              <div class="col s12 center">
                <h3><i class="mdi-content-send brown-text"></i></h3>
                <h3 className="teal-text text-lighten-2">Popular Categories</h3>
                <h5 class="center-align ">From wedding planners to photographers, we've got what you need</h5>                
              </div>
            </div>
            <div class="row center">
            <div class="col s12 m6 l3">
                <div class="card">
                  <div class="card-image">
                    <img className="responsive-img" src="/img/wedding-photographer.jpg"/>
                    <a className="center-align" href="#">Photographers</a>
                  </div>
                </div>	
              </div>
              <div class="col s12 m6 l3">
                <div class="card">
                  <div class="card-image">
                    <img className="responsive-img" src="/img/wedding-planner.jpg"/>
                    <a className="center-align" href="#">Wedding Planners</a>
                  </div>
                </div>	
              </div>
              <div class="col s12 m6 l3">
                <div class="card">
                  <div class="card-image">
                    <img className="responsive-img" src="/img/wedding-dj.jpg"/>
                    <a className="center-align" href="#">Djs</a>
                  </div>
                </div>	
              </div>
              <div class="col s12 m6 l3">
                <div class="card">
                  <div class="card-image">
                    <img className="responsive-img" src="/img/wedding-cake.jpg"/>
                    <a className="center-align" href="#">Wedding Cakes</a>
                  </div>
                </div>	
              </div>
            </div>
            <div class="row center">
              <div class="col s12 m6 l3">
                <div class="card">
                  <div class="card-image">
                    <img className="responsive-img" src="/img/wedding-dress.jpg"/>
                    <a className="center-align" href="#">Wedding Dress Designers</a>
                  </div>
                </div>	
              </div>
              <div class="col s12 m6 l3">
                <div class="card">
                  <div class="card-image">
                    <img className="responsive-img" src="/img/wedding-venue.jpg"/>
                    <a className="center-align" href="#">Wedding Venues</a>
                  </div>
                </div>	
              </div>
              <div class="col s12 m6 l3">
                <div class="card">
                  <div class="card-image">
                    <img className="responsive-img" src="/img/wedding-decorations.jpg"/>
                    <a className="center-align" href="#">Wedding Decorations</a>
                  </div>
                </div>	
              </div>
              <div class="col s12 m6 l3">
                <div class="card">
                  <div class="card-image">
                    <img className="responsive-img" src="/img/wedding-food.jpg"/>
                    <a className="center-align" href="#">Cooks</a>
                  </div>
                </div>	
              </div>
            </div>            
          </div>
        </div>   
        <div class="parallax-container valign-wrapper">
          <div class="section no-pad-bot">
            <div class="container">
              <div class="row center">
                <h3 class="header col s12 light">A platform to connect with experts.</h3>
              </div>
            </div>
          </div>
          <div class="parallax"><img className="responsive-img" src="/img/wedding-background1.jpg" alt="Unsplashed background img 3" style={{opacity: 0.1, transform: `translate3d(-50%, 221.745px, 0px)`}}/></div>
        </div> 
        <footer class="page-footer teal">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Contact us</h5>
                <p class="grey-text text-lighten-4">Lorem ipsum dolor sit amet.</p>
              </div>
              <div class="col l3 s12">
                <h5 class="white-text">Settings</h5>
                <ul>
                  <li><a class="white-text" href="#!">Link 1</a></li>
                  <li><a class="white-text" href="#!">Link 2</a></li>
                  <li><a class="white-text" href="#!">Link 3</a></li>
                  <li><a class="white-text" href="#!">Link 4</a></li>
                </ul>
              </div>
              <div class="col l3 s12">
                <h5 class="white-text">Connect</h5>
                <ul>
                  <li><a class="white-text" href="#!">Link 1</a></li>
                  <li><a class="white-text" href="#!">Link 2</a></li>
                  <li><a class="white-text" href="#!">Link 3</a></li>
                  <li><a class="white-text" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            Made by <a class="brown-text text-lighten-3">Ali Shouman</a>
            </div>
          </div>
        </footer>                    
      </body>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects', orderBy: ['createdAt', 'desc']},
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}
  ])
)(Dashboard)
