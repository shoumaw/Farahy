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
import '../../styles/home/home.css';
import { Layout} from 'antd';

class Home extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    const { Header, Content, Footer } = Layout;
    const { projects, auth, notifications } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 

    return (
      <Layout className="layout">
        <Header>
          <HomeBanner quote="A community of wedding planners, djs and photographers ready for your wedding." backgroundImg ="/img/wedding-background7.jpg">
            <HomeSearchBar/>
          </HomeBanner>
        </Header>
        <Content>
          <HomeInstructions/>
          <HomeBanner quote="Plan the wedding of a lifetime." backgroundImg ="/img/wedding-background4.jpg"/>
          <HomeCategoryList categories={[{img:"/img/wedding-photographer.jpg",type:"Photograpger"},{img:"/img/wedding-dj.jpg",type:"Dj"}]}/>
          <HomeBanner quote="A platform to connect with experts."  backgroundImg ="/img/wedding-background1.jpg"/>
        </Content> 
        <Footer>
          <HomeFooter/>
        </Footer>
      </Layout>
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
)(Home)
