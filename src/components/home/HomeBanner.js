import React, { Component } from 'react'
import M from "materialize-css";
import '../../styles/home/homeBanner.css';

class HomeBanner extends Component {
  componentDidMount() {
  }
  render() {
    const { quote, backgroundImg } = this.props;
    const searchBar = this.props.children;

    return (
        <div className="parallax-container valign-wrapper">
          < div className="section">
                <div className="container">
                    <div className="row center">
                        {quote && <h3 className="header col s12 light">{quote}</h3>}
                    </div>
                    {searchBar && <div>{searchBar}</div>}
                </div>
            </div>
            <div className="parallax">
                {backgroundImg &&<img className="responsive-img" src={backgroundImg} alt="Unsplashed background img 2" style={{opacity: 0.11, transform: `translate3d(-50%, 221.745px, 0px)`}}/>}
            </div>
        </div>
    )
  }
}
export default HomeBanner