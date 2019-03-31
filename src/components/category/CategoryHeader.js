import React, { Component } from 'react'
import '../../styles/category/categoryHeader.css';


const CategoryHeader = (props) => {   
    return (  
    <div className="parallax-container valign-wrapper"> 
        <div className="container">
            <div>
                <h1>Wedding Venues</h1>
                <h4>Find your dream location</h4>
            </div>
        </div>
        <div className="parallax darken-overlay">
            <img className="responsive-img" src="/img/wedding-background7.jpg" alt="Unsplashed background img 2" style={{opacity: 0.11, transform: `translate3d(-50%, 221.745px, 0px)`}}/>        </div>
    </div>
    )
}
export default CategoryHeader