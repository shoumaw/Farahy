import React, { Component } from 'react'
import M from "materialize-css";
import '../../styles/category/categorySearchFilters.css';

class CategorySearchFilters extends Component {
    componentDidMount() {
      M.AutoInit();
    }
    render() {
   
    return(           
            <div class="container">
                <form class="row search-filters-row">
                    <div class="input-field col s3 m3 l3 ">
                        <select class="search-filters-select">
                            <option value="" disabled selected>Choose your category</option>
                            <option value="1">Photographers</option>
                            <option value="2">Djs</option>
                            <option value="3">Wedding Planners</option>
                            <option value="4">Wedding Cakes</option>
                            <option value="5">Wedding Decorations</option>
                            <option value="6">Catering</option>
                            <option value="7">Wedding Dresses</option>
                            <option value="8">Wedding Venues</option>
                        </select>
                            <label>Category</label>
                    </div>
                    <div class="col s2 m2 l2">
                    <div class="flexed"><label >Price</label></div>
                        <div class="flexed row">
                            <div class="col s6 m6 l6"><input maxlength="4" placeholder="MIN" size="8" type="text"/></div>
                            <div class="col s6 m6 l6"><input maxlength="4" placeholder="MAX" size="8" type="text"/></div>
                        </div>
                    </div>
                    <div class="col s2 m2 l2">
                    <div class="flexed"><label>Location</label></div>
                    <div class="flexed">
                        <select class="search-filters-select">
                            <option value="">Anywhere</option>
                            <option value="CA">Cairo</option>
                            <option value="AL">Alexandria</option>
                            <option value="SS">Sharm El Sheikh</option>
                            <option value="HU">Hurghada</option>
                            <option value="GO">El Gouna</option>
                            <option value="AS">Asuit</option>
                            <option value="LU">Luxor</option>
                            <option value="AN">Aswan</option>
                        </select>
                    </div>
                    </div>
                    <div class="col s2 m2 l2">
                    <div class="flexed"><label>Sort by</label></div>
                    <div class="flexed">
                        <select class="search-filters-select">
                            <option value="relevance">Relevance</option>
                            <option value="most_delivered">Jobs Done</option>
                            <option value="recommended">Recommended</option>
                            <option value="recent">Newest</option>
                            <option value="price_desc">High Price</option>
                            <option value="price_asc">Low Price</option>
                        </select>
                    </div>
                    </div>
                    <div class="col s2 m2 l2">
                    <button class="btn waves-effect waves-light button-search" type="submit" name="action">Search
                        <i class="material-icons right">search</i>
                    </button>
                    </div>
                </form>
            </div>
    )
}
}
export default CategorySearchFilters
