import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Category from './components/category/Category'
import Home from './components/home/Home'
import Preloader from './components/layout/Preloader'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {showProgressBar: true};
  }
  preloaderTimerCallback = () => {
    this.setState({
      showProgressBar:false
    });
  }
  render() {
    return (
      <BrowserRouter>
      {!this.state.showProgressBar?
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/category/:id' component={Category} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
          </Switch>
        </div>
        :
        <div className="App">
          <Switch>
            <Route exact path='/' render = {() => <Preloader preloaderTimerCallback={this.preloaderTimerCallback}/>} />
          </Switch>
        </div>
      }       
      </BrowserRouter>
    );
  }
}

export default App;
