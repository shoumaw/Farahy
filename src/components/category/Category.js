import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import CategoryHeader from './CategoryHeader'
import CategorySearchFilters from './CategorySearchFilters'
import CategoryServiceList from './CategoryServiceList';


class Category extends Component {
  render() {
    const { services, auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 

    return (
      <div>
        <CategoryHeader/>
        <CategorySearchFilters/>
        <CategoryServiceList services={services}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    services: state.firestore.ordered.services,
    auth: state.firebase.auth,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'services'},
  ])
)(Category)
