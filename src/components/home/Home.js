import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import HomeSearchBar from './HomeSearchBar'
import HomeBanner from './HomeBanner'
import HomeInstructions from './HomeInstructions'
import HomeCategoryList from './HomeCategoryList'
import HomeFooter from './HomeFooter'
import M from "materialize-css";

class Home extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    const { categories, auth } = this.props;
    console.log(categories);
    if (!auth.uid) return <Redirect to='/signin' /> 

    return (
      <div>
      <HomeBanner quote="A community of wedding planners, djs and photographers ready for your wedding." backgroundImg ="/img/wedding-background7.jpg">
        <HomeSearchBar/>
      </HomeBanner>
      <HomeInstructions/>
      <HomeBanner quote="Plan the wedding of a lifetime." backgroundImg ="/img/wedding-background4.jpg"/>
      <HomeCategoryList categories={categories}/>
      <HomeBanner quote="A platform to connect with experts."  backgroundImg ="/img/wedding-background1.jpg"/>
      <HomeFooter/>
      </div> 
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    categories: state.firestore.ordered.categories,
    auth: state.firebase.auth,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'categories'},
  ])
)(Home)
