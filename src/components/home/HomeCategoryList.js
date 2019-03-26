import React, { Component } from 'react'
import M from "materialize-css";

const HomeCategoryList = (props) => {
    const { categories } = props;

    return (        
        <div class="container">
            <div class="section">
                <div class="row">
                    <div class="col s12 center">
                        <h3><i class="mdi-content-send brown-text"></i></h3>
                        <h3 className="pink-text">Popular Categories</h3>
                        <h5 class="center-align ">From wedding planners to photographers, we've got what you need</h5>                
                    </div>
                </div>
                <div class="row center">
                { categories && categories.map(category => {
                return (
                    <div class="col s12 m6 l3">
                        <div class="card">
                            <div class="card-image">
                                <img className="responsive-img" src={category.img}/>
                                <a className="center-align" href="#">{category.type}</a>
                            </div>
                        </div>	
                    </div>
                    )
                })} 
                </div>
            </div>
        </div>
    )
  }

export default HomeCategoryList