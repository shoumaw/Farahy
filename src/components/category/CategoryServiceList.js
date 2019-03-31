import React, { Component } from 'react'
import M from "materialize-css";
import '../../styles/category/categoryServiceList.css';

class CategoryServiceList extends Component {
    componentDidMount() {
      M.AutoInit();
    }
    render() {
        const { services } = this.props;
        console.log(services);


    return(       
          <div class="container"> 
            <div class="row">
                {services && services.map(service => {
                return (
                <div class="col s3 m3 l3 ">
                  <div class="card small service-card">
                    <div class="card-image">
                        <img class="responsive-img" src={service.img} />
                    </div>
                    <div class="card-content">
                      <div>
                          <h4 class="service__card__name"><a href="/explore/app-icon-design/5995-ios-android-app-icon-design" style={{color:'inherit'}}>{service.name}</a></h4>
                      </div>
                      <div class="service__card__details">
                          <div class="service__card__provider">
                              <div class="service__card__provider__metrics">
                              <div class="service__card__provider__recommended">Rating <span class="service__card__provider__recommended__percentage">{service.rating}/5</span></div>
                              </div>
                          </div>
                          <div class="service__card__price">
                              <div class="service__card__amount">{service.price} EGP</div>
                          </div>
                      </div>
                    </div>  
                  </div>
                </div>
                )
                })}
            </div>
        </div>
    )
}
}
export default CategoryServiceList