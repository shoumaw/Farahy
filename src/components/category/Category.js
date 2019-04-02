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
    const { weddingVenues, auth } = this.props;
    console.log(weddingVenues);

    if (!auth.uid) return <Redirect to='/signin' /> 

    return (
      <div>
        <CategoryHeader/>
        <CategorySearchFilters/>
        <CategoryServiceList services={weddingVenues}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    weddingVenues: state.firestore.ordered.weddingVenues,
    auth: state.firebase.auth,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props)=>{
    //console.log(props)
  return [
    { 
      collection: 'categories',
      doc: "Nt2XJutFFOrqh3WqYn14",
      subcollections: [
        {
          collection : 'weddingVenues'
        }
      ],
      storeAs: "weddingVenues"
    },
  ]}
  )
)(Category)
