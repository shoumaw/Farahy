import React, { Component } from 'react'
import M from "materialize-css";

class HomeBanner extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    const { quote, backgroundImg } = this.props;
    const searchBar = this.props.children;

    return (
        <div class="parallax-container valign-wrapper">
          < div class="section">
                <div class="container">
                    <div class="row center">
                        {quote && <h3 class="header col s12 light">{quote}</h3>}
                    </div>
                    {searchBar && <div>{searchBar}</div>}
                </div>
            </div>
            <div class="parallax">
                {backgroundImg &&<img className="responsive-img" src={backgroundImg} alt="Unsplashed background img 2" style={{opacity: 0.11, transform: `translate3d(-50%, 221.745px, 0px)`}}/>}
            </div>
        </div>
    )
  }
}
export default HomeBanner