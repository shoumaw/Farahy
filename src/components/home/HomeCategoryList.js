import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/home/homeCategoryList.css';

const HomeCategoryList = (props) => {
    const { categories } = props;

    return (        
        <div>
            <div className="section category-section valign-wrapper">
                <div className="row valign-wrapper">
                    <div className="col s4">
                        <h3><i className="mdi-content-send brown-text"></i></h3>
                        <h3 className="pink-text center-align">Popular Categories</h3>
                        <h5 className="center-align">From wedding planners to photographers, we've got what you need</h5>                
                    </div>
                    <div className="col s8">
                        <div className="row">
                        { categories && categories.map(category => {
                        return (
                            <div className="col s3">
                                <Link to={'/category/' + category.id} key={category.id}>
                                    <div className="card very-small category-list-card">
                                        <div className="card-image category-list-card-image">
                                            <img className="responsive-img" src={category.img}/>
                                        </div>
                                        <div class="card-content center category-card-content">
                                            <a className="category-list-card-link" href="#">{category.type}</a>
                                        </div>    
                                    </div>	
                                </Link>
                            </div>
                            )
                        })} 
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
  }

export default HomeCategoryList