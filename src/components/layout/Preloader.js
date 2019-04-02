import React, { Component } from 'react';


class Preloader extends Component {
    componentDidMount() {
      this.interval = setInterval(() => this.props.preloaderTimerCallback(), 1000);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }

    render() {
      return (
<div className="component center">
    <img className="responsive-img circle"style={{height:'500px',width:'auto',padding:'0px'}} src="/img/logo.jpg" alt="Farha logo"/>
    <div>
    <div class="preloader-wrapper big active">
      <div class="spinner-layer spinner-red">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div><div class="gap-patch">
          <div class="circle"></div>
        </div><div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
</div>
    </div>
</div>      
)
      }
    }
    export default Preloader