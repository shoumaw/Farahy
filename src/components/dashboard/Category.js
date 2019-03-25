import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import M from "materialize-css";
import '../../styles/category.css';

class Category extends Component {
  componentDidMount() {
    // Auto initialize all the things!
    M.AutoInit();
  }
  render() {
    const { projects, auth, notifications } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 

    return (
        <body am-grid class="responsive" smock>
            <div className="container">
                <div class="hero__headings">
                    <h1 class="hero__headings__main">Service Title</h1>
                    <h4 class="hero__headings__secondary">Service Quote</h4>
                </div>
            </div>
            <div class="container">
                <div class="container--fluid">
                    <div class="search-filters__visibility-toggle is-hidden-small-up" data-role="search_filters_visibility_toggle_container">
                        <a class="th-underline" data-role="search_filters_visibility_toggle" href="">
                            <span data-role="search_filters_visibility_toggle_label">Hide search filters</span>
                            <div class="search-filters__arrow hot-icon__arrow-down flipped" data-role="search_filters_visibility_toggle_arrow"></div>
                        </a>
                    </div>
                    <div class="search-filters" data-role="search_filters">
                        <form class="row has-validation">
                            <div class="col s3 m3 l3 search-filters__filter search-filters__filter--wide">
                            <div class="flexed"><label class="search__filters--filter__label" for="category_filter">Category</label></div>
                            <div class="flexed">
                                <select class="search-filters__select" id="category_filter" name="filter[category]">
                                    <option value="https://studio.envato.com/explore/logo-design-branding">Logo Design &amp; Branding</option>
                                    <option value="https://studio.envato.com/explore/design-graphics">Design &amp; Graphics</option>
                                    <option value="https://studio.envato.com/explore/wordpress">WordPress</option>
                                    <option value="https://studio.envato.com/explore/websites-programming">Websites &amp; Programming</option>
                                    <option value="https://studio.envato.com/explore/ecommerce-cms-development">Ecommerce &amp; CMS Development</option>
                                    <option selected="selected" value="https://studio.envato.com/explore/mobile-apps">Mobile &amp; Apps</option>
                                    <option value="https://studio.envato.com/explore/app-design">&nbsp;&nbsp;&nbsp;&nbsp;App Design</option>
                                    <option value="https://studio.envato.com/explore/app-development">&nbsp;&nbsp;&nbsp;&nbsp;App Development</option>
                                    <option value="https://studio.envato.com/explore/mobile-design-development">&nbsp;&nbsp;&nbsp;&nbsp;Mobile Design &amp; Development</option>
                                    <option value="https://studio.envato.com/explore/app-icon-design">&nbsp;&nbsp;&nbsp;&nbsp;App Icon Design</option>
                                    <option value="https://studio.envato.com/explore/content-writing">Content &amp; Copywriting</option>
                                    <option value="https://studio.envato.com/explore/business-online-marketing">Online Marketing</option>
                                    <option value="https://studio.envato.com/explore/video-animation">Video &amp; Animation</option>
                                    <option value="https://studio.envato.com/explore/audio">Audio</option>
                                </select>
                            </div>
                            </div>
                            <div class="col s3 m3 l3 search-filters__filter search-filters__filter--wide">
                            <div class="flexed"><label class="search__filters--filter__label" for="price_filter_min">Price</label></div>
                            <div class="flexed row">
                                <div class="col s4 m4 l4 search-filters__price--min"><input class="search-filters__price__input" id="price_filter_min" maxlength="4" name="filter[min_price]" placeholder="50" size="8" type="text"/></div>
                                <div class="col s4 m4 l4 search-filters__price--max"><input class="search-filters__price__input" id="price_filter_max" maxlength="4" name="filter[max_price]" placeholder="2000" size="8" type="text"/></div>
                                <div class="col s4 m4 l4 button-wrapper"><button class=" search-filters__price__submit button--no-padding button-search pink white-text" name="filter_price_submit"><span class="svg__search search-filters__price__submit__icon"><i className="material-icons">search</i></span></button></div>
                            </div>
                            </div>
                            <div class="col s2 m2 l2 search-filters__filter">
                            <div class="flexed"><label class="search__filters--filter__label" for="turnaround_filter">Turnaround</label></div>
                            <div class="flexed">
                                <select class="search-filters__select" id="turnaround_filter" name="filter[turnaround]">
                                    <option value="">Any</option>
                                    <option value="1">1 day or less</option>
                                    <option value="2">2 days or less</option>
                                    <option value="3">3 days or less</option>
                                    <option value="4">4 days or less</option>
                                    <option value="5">5 days or less</option>
                                    <option value="6">6 days or less</option>
                                    <option value="7">7 days or less</option>
                                    <option value="8">8 days or less</option>
                                    <option value="9">9 days or less</option>
                                    <option value="10">10 days or less</option>
                                    <option value="11">11 days or less</option>
                                    <option value="12">12 days or less</option>
                                    <option value="13">13 days or less</option>
                                    <option value="14">14 days or less</option>
                                </select>
                            </div>
                            </div>
                            <div class="col s2 m2 l2 search-filters__filter">
                            <div class="flexed"><label class="search__filters--filter__label" for="location_filter">Location</label></div>
                            <div class="flexed">
                                <select class="search-filters__select" id="location_filter" name="filter[location]">
                                    <option value="">Anywhere</option>
                                    <option value="AR">Argentina</option>
                                    <option value="BD">Bangladesh</option>
                                    <option value="BY">Belarus</option>
                                    <option value="BG">Bulgaria</option>
                                    <option value="CA">Canada</option>
                                    <option value="CZ">Czech Republic</option>
                                    <option value="HU">Hungary</option>
                                    <option value="IN">India</option>
                                    <option value="ID">Indonesia</option>
                                    <option value="IL">Israel</option>
                                    <option value="IT">Italy</option>
                                    <option value="LT">Lithuania</option>
                                    <option value="MK">Macedonia</option>
                                    <option value="MY">Malaysia</option>
                                    <option value="MD">Moldova</option>
                                    <option value="MA">Morocco</option>
                                    <option value="NG">Nigeria</option>
                                    <option value="PK">Pakistan</option>
                                    <option value="PL">Poland</option>
                                    <option value="PT">Portugal</option>
                                    <option value="RO">Romania</option>
                                    <option value="RU">Russia</option>
                                    <option value="RS">Serbia</option>
                                    <option value="SG">Singapore</option>
                                    <option value="ES">Spain</option>
                                    <option value="LK">Sri Lanka</option>
                                    <option value="CH">Switzerland</option>
                                    <option value="TH">Thailand</option>
                                    <option value="TR">Turkey</option>
                                    <option value="UA">Ukraine</option>
                                    <option value="AE">United Arab Emirates</option>
                                    <option value="GB">United Kingdom</option>
                                    <option value="US">United States of America</option>
                                </select>
                            </div>
                            </div>
                            <div class="col s2 m2 l2 search-filters__filter">
                            <div class="flexed"><label class="search__filters--filter__label" for="sorting">Sort by</label></div>
                            <div class="flexed">
                                <select class="search-filters__select" id="sorting" name="sorting[method]">
                                    <option value="relevance">Relevance</option>
                                    <option value="most_delivered">Jobs Done</option>
                                    <option value="recommended">Recommended</option>
                                    <option value="recent">Newest</option>
                                    <option value="price_desc">High Price</option>
                                    <option value="price_asc">Low Price</option>
                                </select>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
                <div class="container container--fluid" data-role="search_results"> 
                    <div class="row">
                        <div class="col s3 m3 l3 service__card" data-role="service-card-with-gallery">
                            <div class="service__card__gallery">
                                <div class="service__card__prev-button" data-role="prev-image"><i class="service__card__prev-button__image svg__prev--inverse"></i></div>
                                <div class="service__card__next-button" data-role="next-image"><i class="service__card__next-button__image svg__next--inverse"></i></div>
                                <div class="service__card__loading is-hidden" data-role="loading-animation"></div>
                                <a class="service__card__gallery__link" href="/explore/app-icon-design/5995-ios-android-app-icon-design"><img class="service__card__gallery__image" data-gallery-urls="[&quot;//microlancer.lancerassets.com/v2/services/64/2b7440f88f11e681b9850b6c2eb25c/service_card_Icon01.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/64/15a250f88f11e6bb872726cd4bbdc0/service_card_Icon02.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/64/15c960f88f11e6a4055dbd319e37c6/service_card_Icon03.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/64/21d750f88f11e6ab87bfac99b0ef7e/service_card_Icon04.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/64/200290f88f11e6b7f6096d67ed2d6d/service_card_Icon05.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/64/211400f88f11e6af117fbe5439b73f/service_card_Icon06.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/65/550020f88f11e6bb058bc35af899a3/service_card_Icon07.jpg&quot;]" data-role="service-image" src="//microlancer.lancerassets.com/v2/services/64/2b7440f88f11e681b9850b6c2eb25c/service_card_Icon01.jpg"/></a>
                            </div>
                            <div class="service__card__text service__card__text--no-category">
                                <h4 class="service__card__name"><a href="/explore/app-icon-design/5995-ios-android-app-icon-design">iOS / Android App Icon Design</a></h4>
                            </div>
                            <div class="service__card__details">
                                <div class="service__card__provider">
                                    <div class="service__card__provider__name"><a href="/users/CvLd_Design">CvLd_Design</a></div>
                                    <div class="service__card__provider__metrics">
                                    <div class="service__card__provider__recommended"><span class="service__card__provider__recommended__percentage">100%</span> Recommended </div>
                                    <div class="service__card__provider__jobs-done"><span class="service__card__jobs-done__count">82</span> Jobs done</div>
                                    </div>
                                </div>
                                <div class="service__card__price">
                                    <div class="service__card__amount">$60</div>
                                    <div class="service__card__turnaround"><span class="service__card__turnaround__days">5</span> days</div>
                                </div>
                            </div>
                        </div>
                        <div class="col s3 m3 l3  service__card" data-role="service-card-with-gallery">
                            <div class="service__card__gallery">
                                <div class="service__card__prev-button" data-role="prev-image"><i class="service__card__prev-button__image svg__prev--inverse"></i></div>
                                <div class="service__card__next-button" data-role="next-image"><i class="service__card__next-button__image svg__next--inverse"></i></div>
                                <div class="service__card__loading is-hidden" data-role="loading-animation"></div>
                                <a class="service__card__gallery__link" href="/explore/app-design/7205-mobile-application-ui-designing"><img class="service__card__gallery__image" data-gallery-urls="[&quot;//microlancer.lancerassets.com/v2/services/45/d22d62ecb043d0acc7e34e5981b0e0/service_card_OneWallet-iOS-App.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/f3/27955854fe4442bbf2244b700ca0b7/service_card_Language-App-UI-iOS.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/83/0fc74bf9ea4ffe9ec9c3b345dc40a3/service_card_Food-Delivery-iOS-App.jpg&quot;]" data-role="service-image" src="//microlancer.lancerassets.com/v2/services/45/d22d62ecb043d0acc7e34e5981b0e0/service_card_OneWallet-iOS-App.jpg"/></a>
                            </div>
                            <div class="service__card__text service__card__text--no-category">
                                <h4 class="service__card__name"><a href="/explore/app-design/7205-mobile-application-ui-designing">Mobile Application UI Designing</a></h4>
                            </div>
                            <div class="service__card__details">
                                <div class="service__card__provider">
                                    <div class="service__card__provider__name"><a href="/users/ubrain">ubrain</a></div>
                                    <div class="service__card__provider__metrics">
                                    <div class="service__card__provider__recommended"><span class="service__card__provider__recommended__percentage">100%</span> Recommended </div>
                                    <div class="service__card__provider__jobs-done"><span class="service__card__jobs-done__count">137</span> Jobs done</div>
                                    </div>
                                </div>
                                <div class="service__card__price">
                                    <div class="service__card__amount">$290</div>
                                    <div class="service__card__turnaround"><span class="service__card__turnaround__days">6</span> days</div>
                                </div>
                            </div>
                        </div>
                        <div class="col s3 m3 l3  service__card" data-role="service-card-with-gallery">
                            <div class="service__card__gallery">
                                <div class="service__card__prev-button" data-role="prev-image"><i class="service__card__prev-button__image svg__prev--inverse"></i></div>
                                <div class="service__card__next-button" data-role="next-image"><i class="service__card__next-button__image svg__next--inverse"></i></div>
                                <div class="service__card__loading is-hidden" data-role="loading-animation"></div>
                                <a class="service__card__gallery__link" href="/explore/app-icon-design/402-high-detailed-style-icon-for-ios-android-and-os-x"><img class="service__card__gallery__image" data-gallery-urls="[&quot;//microlancer.lancerassets.com/v2/services/ba/ca62a0434c11e6a933994706e5f7a7/service_card__original_Aquarium.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/a2/e63ae0238511e8993d595bbb132413/service_card_large__original_Aquarium.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/67/9d52902c6611e8b536cb7f9e1d5527/service_card_Screen-Stash.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/1f/c91c70128a11e7a9a1891fb924b668/service_card_Styled.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/19/14a560129511e7bfae7b37580aa714/service_card_Wheel_of_fortune.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/7a/bc8b20c1a911e785ef6977011807ea/service_card_Cookie-Crunch.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/02/8c95d0758811e88f3f2fc15521cad6/service_card_Fish_for_money.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/21/dd3410c10d11e79fc37f98c7c9ba6b/service_card_22days.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/a3/66c560436811e6b52db120e1bd6580/service_card__original_Pocket_Mirrror.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/0f/7efc20c10f11e7946b75ac565906fe/service_card_galaxy_bowling.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/dd/411300c1aa11e78d6ebf56dd761331/service_card_solitaire.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/e5/dffce0d7ab11e6a030af4f12d264f1/service_card_Baloons_Wallpaper.jpg&quot;]" data-role="service-image" src="//microlancer.lancerassets.com/v2/services/ba/ca62a0434c11e6a933994706e5f7a7/service_card__original_Aquarium.jpg"/></a>
                            </div>
                            <div class="service__card__text service__card__text--no-category">
                                <h4 class="service__card__name"><a href="/explore/app-icon-design/402-high-detailed-style-icon-for-ios-android-and-os-x">High Detailed Style Icon for IOS, Android and OS X </a></h4>
                            </div>
                            <div class="service__card__details">
                                <div class="service__card__provider">
                                    <div class="service__card__provider__name"><a href="/users/Northwood">Northwood</a></div>
                                    <div class="service__card__provider__metrics">
                                    <div class="service__card__provider__recommended"><span class="service__card__provider__recommended__percentage">100%</span> Recommended </div>
                                    <div class="service__card__provider__jobs-done"><span class="service__card__jobs-done__count">56</span> Jobs done</div>
                                    </div>
                                </div>
                                <div class="service__card__price">
                                    <div class="service__card__amount">$300</div>
                                    <div class="service__card__turnaround"><span class="service__card__turnaround__days">7</span> days</div>
                                </div>
                            </div>
                        </div>
                        <div class="col s3 m3 l3  service__card" data-role="service-card-with-gallery">
                            <div class="service__card__gallery">
                                <div class="service__card__prev-button" data-role="prev-image"><i class="service__card__prev-button__image svg__prev--inverse"></i></div>
                                <div class="service__card__next-button" data-role="next-image"><i class="service__card__next-button__image svg__next--inverse"></i></div>
                                <div class="service__card__loading is-hidden" data-role="loading-animation"></div>
                                <a class="service__card__gallery__link" href="/explore/app-icon-design/5816-flat-style-icon-ios-android"><img class="service__card__gallery__image" data-gallery-urls="[&quot;//microlancer.lancerassets.com/v2/services/aa/42e6e0f89b11e78a3ab16c37e5804d/service_card_Dropbeat.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/83/02e1606fe811e895654949720f490b/service_card_Cookingbook.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/5f/98c7707dff11e7bcc67b5486029a4b/service_card_color.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/ee/530600b74e11e79290613246d210b0/service_card_Mawjod.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/9e/370bd0436e11e6aa2c6942391f25c0/service_card__original_manga360.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/f5/7cdce09c4b11e6a3c62d52faed121d/service_card_Light-Flow.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/13/f8b800d7ad11e6b19c95f12894bec5/service_card_talnts.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/9e/9b24d0436e11e680fbe142f3c1a67c/service_card__original_Vigomusic.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/74/b6f630436e11e68998bb6e2f327219/service_card__original_qhd.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/75/eba8d0437211e68998bb6e2f327219/service_card__original_portal.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/97/74b310436e11e6a1a13b2e4be61c22/service_card__original_leadpilot.jpg&quot;]" data-role="service-image" src="//microlancer.lancerassets.com/v2/services/aa/42e6e0f89b11e78a3ab16c37e5804d/service_card_Dropbeat.jpg"/></a>
                            </div>
                            <div class="service__card__text service__card__text--no-category">
                                <h4 class="service__card__name"><a href="/explore/app-icon-design/5816-flat-style-icon-ios-android">Flat Style Icon IOS/Android</a></h4>
                            </div>
                            <div class="service__card__details">
                                <div class="service__card__provider">
                                    <div class="service__card__provider__name"><a href="/users/Northwood">Northwood</a></div>
                                    <div class="service__card__provider__metrics">
                                    <div class="service__card__provider__recommended"><span class="service__card__provider__recommended__percentage">98%</span> Recommended </div>
                                    <div class="service__card__provider__jobs-done"><span class="service__card__jobs-done__count">52</span> Jobs done</div>
                                    </div>
                                </div>
                                <div class="service__card__price">
                                    <div class="service__card__amount">$150</div>
                                    <div class="service__card__turnaround"><span class="service__card__turnaround__days">7</span> days</div>
                                </div>
                            </div>
                        </div>
                        <div class="col s3 m3 l3 service__card" data-role="service-card-with-gallery">
                            <div class="service__card__gallery">
                                <div class="service__card__prev-button" data-role="prev-image"><i class="service__card__prev-button__image svg__prev--inverse"></i></div>
                                <div class="service__card__next-button" data-role="next-image"><i class="service__card__next-button__image svg__next--inverse"></i></div>
                                <div class="service__card__loading is-hidden" data-role="loading-animation"></div>
                                <a class="service__card__gallery__link" href="/explore/app-icon-design/2405-simple-app-icon"><img class="service__card__gallery__image" data-gallery-urls="[&quot;//microlancer.lancerassets.com/v2/services/21/3b5300436611e69fce61006d53e4fc/service_card__original_envato-05.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/d6/6dbef0428c11e693ff5d877faad1e1/service_card_icon-01-1390965260.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/d6/736440428c11e6bd61dfcb6c86eca8/service_card_icon-02-1390957397.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/d6/6dbef0428c11e6af247b778aaa15bf/service_card_icon-03-1390968689.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/d6/764a70428c11e69a79f18a5909f16d/service_card_icon-04-1390964999.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/d6/7f4b20428c11e68b3c413a9e99d33f/service_card_icon-05-1390965237.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/d6/88c100428c11e6abbfad0b1334a648/service_card_icon-06-1390956183.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/d6/7957b0428c11e68cc6e3063d272a7f/service_card_icon-07-1390967747.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/d6/7d4f50428c11e68aa8438131cd1efd/service_card_icon-08-1390967755.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/d6/842d20428c11e69bf2e9ae3ea909a4/service_card_icon-09-1390965037.jpg&quot;]" data-role="service-image" src="//microlancer.lancerassets.com/v2/services/21/3b5300436611e69fce61006d53e4fc/service_card__original_envato-05.jpg"/></a>
                            </div>
                            <div class="service__card__text service__card__text--no-category">
                                <h4 class="service__card__name"><a href="/explore/app-icon-design/2405-simple-app-icon">Simple App Icon</a></h4>
                            </div>
                            <div class="service__card__details">
                                <div class="service__card__provider">
                                    <div class="service__card__provider__name"><a href="/users/8z">8z</a></div>
                                    <div class="service__card__provider__metrics">
                                    <div class="service__card__provider__recommended"><span class="service__card__provider__recommended__percentage">100%</span> Recommended </div>
                                    <div class="service__card__provider__jobs-done"><span class="service__card__jobs-done__count">32</span> Jobs done</div>
                                    </div>
                                </div>
                                <div class="service__card__price">
                                    <div class="service__card__amount">$105</div>
                                    <div class="service__card__turnaround"><span class="service__card__turnaround__days">3</span> days</div>
                                </div>
                            </div>
                        </div>
                        <div class="col s3 m3 l3 service__card" data-role="service-card-with-gallery">
                            <div class="service__card__gallery">
                                <div class="service__card__prev-button" data-role="prev-image"><i class="service__card__prev-button__image svg__prev--inverse"></i></div>
                                <div class="service__card__next-button" data-role="next-image"><i class="service__card__next-button__image svg__next--inverse"></i></div>
                                <div class="service__card__loading is-hidden" data-role="loading-animation"></div>
                                <a class="service__card__gallery__link" href="/explore/mobile-design-development/6827-conversion-to-responsive-web-design"><img class="service__card__gallery__image" data-gallery-urls="[&quot;//microlancer.lancerassets.com/v2/services/bb/4de720432311e689e3b39f90cde41f/service_card__original_showcase-3.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/bb/455ba0432311e6ab6951d775eb728a/service_card__original_showcase-2.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/cb/a42f30432311e6ab69d5ddb99d8a55/service_card__original_showcase-1.jpg&quot;]" data-role="service-image" src="//microlancer.lancerassets.com/v2/services/bb/4de720432311e689e3b39f90cde41f/service_card__original_showcase-3.jpg"/></a>
                            </div>
                            <div class="service__card__text service__card__text--no-category">
                                <h4 class="service__card__name"><a href="/explore/mobile-design-development/6827-conversion-to-responsive-web-design">Conversion to Responsive Web Design</a></h4>
                            </div>
                            <div class="service__card__details">
                                <div class="service__card__provider">
                                    <div class="service__card__provider__name"><a href="/users/tinyamasisurum0">tinyamasisurum0</a></div>
                                    <div class="service__card__provider__metrics">
                                    <div class="service__card__provider__recommended"><span class="service__card__provider__recommended__percentage">100%</span> Recommended </div>
                                    <div class="service__card__provider__jobs-done"><span class="service__card__jobs-done__count">27</span> Jobs done</div>
                                    </div>
                                </div>
                                <div class="service__card__price">
                                    <div class="service__card__amount">$350</div>
                                    <div class="service__card__turnaround"><span class="service__card__turnaround__days">7</span> days</div>
                                </div>
                            </div>
                        </div>
                        <div class="col s3 m3 l3 service__card" data-role="service-card-with-gallery">
                            <div class="service__card__gallery">
                                <div class="service__card__prev-button" data-role="prev-image"><i class="service__card__prev-button__image svg__prev--inverse"></i></div>
                                <div class="service__card__next-button" data-role="next-image"><i class="service__card__next-button__image svg__next--inverse"></i></div>
                                <div class="service__card__loading is-hidden" data-role="loading-animation"></div>
                                <a class="service__card__gallery__link" href="/explore/app-icon-design/1222-ios-android-web-app-icon-design-2d-3d"><img class="service__card__gallery__image" data-gallery-urls="[&quot;//microlancer.lancerassets.com/v2/services/c5/78ad80434a11e69055dd85464f988d/service_card__original_travel_icon.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/c5/899d70434a11e69bcf7dbc1138f06f/service_card__original_battery_icon.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/6e/7e0d7042d911e69085415148d5485d/service_card_finger_icon-1390966487.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/22/d07ec042b211e6abbfad0b1334a648/service_card_usb_icon-1390972347.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/1f/ab22e042b211e69bf2e9ae3ea909a4/service_card_foot_icon-1390972261.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/1f/ab22e042b211e6bd61dfcb6c86eca8/service_card_coffee_icon-1390969472.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/1f/af419042b211e69a79f18a5909f16d/service_card_foot_reader_icon-1390969461.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/1f/c6e84042b211e68b3c413a9e99d33f/service_card_i_soup-1390969490.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/1f/ef30c042b211e69c664bc5ffc430eb/service_card_icook-1390969522.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/23/83c93042b211e68b183541e72484dc/service_card_twitter-1390972049.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/6e/718a5042d911e690c1e10b8c155235/service_card_swimming_pool_icon-1390966497.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/66/3a78a042e911e69111251820f7f78a/service_card_monster_icon-1390972043.jpg&quot;]" data-role="service-image" src="//microlancer.lancerassets.com/v2/services/c5/78ad80434a11e69055dd85464f988d/service_card__original_travel_icon.jpg"/></a>
                            </div>
                            <div class="service__card__text service__card__text--no-category">
                                <h4 class="service__card__name"><a href="/explore/app-icon-design/1222-ios-android-web-app-icon-design-2d-3d">iOS / Android / Web App Icon Design (2D/3D)</a></h4>
                            </div>
                            <div class="service__card__details">
                                <div class="service__card__provider">
                                    <div class="service__card__provider__name"><a href="/users/Zomorsky">Zomorsky</a></div>
                                    <div class="service__card__provider__metrics">
                                    <div class="service__card__provider__recommended"><span class="service__card__provider__recommended__percentage">94%</span> Recommended </div>
                                    <div class="service__card__provider__jobs-done"><span class="service__card__jobs-done__count">29</span> Jobs done</div>
                                    </div>
                                </div>
                                <div class="service__card__price">
                                    <div class="service__card__amount">$250</div>
                                    <div class="service__card__turnaround"><span class="service__card__turnaround__days">5</span> days</div>
                                </div>
                            </div>
                        </div>
                        <div class="col s3 m3 l3 service__card" data-role="service-card-with-gallery">
                            <div class="service__card__gallery">
                                <div class="service__card__prev-button" data-role="prev-image"><i class="service__card__prev-button__image svg__prev--inverse"></i></div>
                                <div class="service__card__next-button" data-role="next-image"><i class="service__card__next-button__image svg__next--inverse"></i></div>
                                <div class="service__card__loading is-hidden" data-role="loading-animation"></div>
                                <a class="service__card__gallery__link" href="/explore/app-icon-design/898-app-icon-design"><img class="service__card__gallery__image" data-gallery-urls="[&quot;//microlancer.lancerassets.com/v2/services/a7/cc3120425111e6a7029dc43936be7d/service_card_icon1-1390962220.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/a8/44bc80425111e697db450948dd245e/service_card_icon2-1390962239.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/d0/8e14f0425311e69bf139091c383d1d/service_card_icon3-1390962177.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/aa/d29350425111e6a16adf9ba694d7a7/service_card_icon4-1390958213.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/aa/c10720425111e6bdc7795570356c50/service_card_icon5-1390962239.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/aa/a764a0425111e6af9329c8353ca4de/service_card_icon6-1390962182.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/f1/907820425111e6a8d1c76425ec83b6/service_card_icon7-1390957706.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/a5/6f0740425111e6a0a7817a7a17259e/service_card_icon8-1390962181.jpg&quot;]" data-role="service-image" src="//microlancer.lancerassets.com/v2/services/a7/cc3120425111e6a7029dc43936be7d/service_card_icon1-1390962220.jpg"/></a>
                            </div>
                            <div class="service__card__text service__card__text--no-category">
                                <h4 class="service__card__name"><a href="/explore/app-icon-design/898-app-icon-design">App Icon Design</a></h4>
                            </div>
                            <div class="service__card__details">
                                <div class="service__card__provider">
                                    <div class="service__card__provider__name"><a href="/users/SwirlVector">SwirlVector</a></div>
                                    <div class="service__card__provider__metrics">
                                    <div class="service__card__provider__recommended"><span class="service__card__provider__recommended__percentage">100%</span> Recommended </div>
                                    <div class="service__card__provider__jobs-done"><span class="service__card__jobs-done__count">40</span> Jobs done</div>
                                    </div>
                                </div>
                                <div class="service__card__price">
                                    <div class="service__card__amount">$50</div>
                                    <div class="service__card__turnaround"><span class="service__card__turnaround__days">1</span> day</div>
                                </div>
                            </div>
                        </div>
                        <div class="col s3 m3 l3 service__card" data-role="service-card-with-gallery">
                            <div class="service__card__gallery">
                                <div class="service__card__prev-button" data-role="prev-image"><i class="service__card__prev-button__image svg__prev--inverse"></i></div>
                                <div class="service__card__next-button" data-role="next-image"><i class="service__card__next-button__image svg__next--inverse"></i></div>
                                <div class="service__card__loading is-hidden" data-role="loading-animation"></div>
                                <a class="service__card__gallery__link" href="/explore/app-design/10281-mobile-app-interface-for-ios-and-android-design"><img class="service__card__gallery__image" data-gallery-urls="[&quot;//microlancer.lancerassets.com/v2/services/47/7a1980d22411e8bf3a251ff981f882/service_card_iphonex3-2.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/20/a984001fb611e998a51ff1a949331e/service_card_Ghost.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/21/53a6b01fb611e994ca17f40fff0ec9/service_card_boaster.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/ee/b444c0675611e883e7d97f53bae644/service_card_Scene.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/54/3c8ff0cdfb11e7aa8fdf32291d3bd9/service_card_spoot.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/02/0ce890321211e7a394f172312c989d/service_card_free-perspective-app-mockup2.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/62/2fc7600df011e780052bab940d5ecb/service_card_Remomo.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/b5/e88250434f11e69a3a2b9bcb05afa4/service_card__original_1.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/91/32b8b0676f11e6948573efdbb6a66c/service_card_ma5.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/4f/66d970676f11e68ea37d764f84f527/service_card_ma3.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/26/5d06000e0711e78599536a78d27563/service_card_prizefight2.jpg&quot;]" data-role="service-image" src="//microlancer.lancerassets.com/v2/services/47/7a1980d22411e8bf3a251ff981f882/service_card_iphonex3-2.jpg"/></a>
                            </div>
                            <div class="service__card__text service__card__text--no-category">
                                <h4 class="service__card__name"><a href="/explore/app-design/10281-mobile-app-interface-for-ios-and-android-design">Mobile App interface for iOS and Android design</a></h4>
                            </div>
                            <div class="service__card__details">
                                <div class="service__card__provider">
                                    <div class="service__card__provider__name"><a href="/users/idesignera">idesignera</a></div>
                                    <div class="service__card__provider__metrics">
                                    <div class="service__card__provider__recommended"><span class="service__card__provider__recommended__percentage">100%</span> Recommended </div>
                                    <div class="service__card__provider__jobs-done"><span class="service__card__jobs-done__count">23</span> Jobs done</div>
                                    </div>
                                </div>
                                <div class="service__card__price">
                                    <div class="service__card__amount">$280</div>
                                    <div class="service__card__turnaround"><span class="service__card__turnaround__days">3</span> days</div>
                                </div>
                            </div>
                        </div>
                        <div class="col s3 m3 l3 service__card" data-role="service-card-with-gallery">
                            <div class="service__card__gallery">
                                <div class="service__card__prev-button" data-role="prev-image"><i class="service__card__prev-button__image svg__prev--inverse"></i></div>
                                <div class="service__card__next-button" data-role="next-image"><i class="service__card__next-button__image svg__next--inverse"></i></div>
                                <div class="service__card__loading is-hidden" data-role="loading-animation"></div>
                                <a class="service__card__gallery__link" href="/explore/app-development/10016-website-to-android-app-with-push-notificaiton"><img class="service__card__gallery__image" data-gallery-urls="[&quot;//microlancer.lancerassets.com/v2/services/69/7d1ab0435011e69a3a2b9bcb05afa4/service_card__original_website2android.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/57/eb8030431311e6af054d9336542d20/service_card__original_Screenshot_2014-02-21-10-43-26_1_.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/5c/1fdb10431311e68906573e898cd66d/service_card__original_Screenshot_2014-02-21-10-44-13_1_.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/5b/fd10d0431311e6b0133d02078ea3ec/service_card__original_Screenshot_2014-02-21-10-45-16_1_.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/5b/fa2aa0431311e6b6793d1d21d210bf/service_card__original_Screenshot_2014-02-21-10-45-16_1_.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/61/890c70431311e6bce86b5b922bf61e/service_card__original_Screenshot_2014-02-21-10-44-36_1_.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/61/adab70431311e6a04b01f01bd81d2a/service_card__original_Screenshot_2014-02-21-10-44-27_1_.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/61/b54c90431311e6af054d9336542d20/service_card__original_Screenshot_2014-02-21-10-43-32_1_.jpg&quot;]" data-role="service-image" src="//microlancer.lancerassets.com/v2/services/69/7d1ab0435011e69a3a2b9bcb05afa4/service_card__original_website2android.jpg"/></a>
                            </div>
                            <div class="service__card__text service__card__text--no-category">
                                <h4 class="service__card__name"><a href="/explore/app-development/10016-website-to-android-app-with-push-notificaiton">Website to Android  App with Push Notificaiton</a></h4>
                            </div>
                            <div class="service__card__details">
                                <div class="service__card__provider">
                                    <div class="service__card__provider__name"><a href="/users/itechnotion">itechnotion</a></div>
                                    <div class="service__card__provider__metrics">
                                    <div class="service__card__provider__recommended"><span class="service__card__provider__recommended__percentage">83%</span> Recommended </div>
                                    <div class="service__card__provider__jobs-done"><span class="service__card__jobs-done__count">48</span> Jobs done</div>
                                    </div>
                                </div>
                                <div class="service__card__price">
                                    <div class="service__card__amount">$80</div>
                                    <div class="service__card__turnaround"><span class="service__card__turnaround__days">2</span> days</div>
                                </div>
                            </div>
                        </div>
                        <div class="col s3 m3 l3 service__card" data-role="service-card-with-gallery">
                            <div class="service__card__gallery">
                                <div class="service__card__prev-button" data-role="prev-image"><i class="service__card__prev-button__image svg__prev--inverse"></i></div>
                                <div class="service__card__next-button" data-role="next-image"><i class="service__card__next-button__image svg__next--inverse"></i></div>
                                <div class="service__card__loading is-hidden" data-role="loading-animation"></div>
                                <a class="service__card__gallery__link" href="/explore/app-design/45265-premium-web-mobile-app-ui-ux-design"><img class="service__card__gallery__image" data-gallery-urls="[&quot;//microlancer.lancerassets.com/v2/services/22/7e7900437411e699641b6b0f362bd4/service_card__original_App-Design-01.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/22/c2adf0437411e6b85bf700dd26443b/service_card__original_App-Design-02.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/22/bfeed0437411e69d2341103cd5c66e/service_card__original_App-Design-03.jpg&quot;]" data-role="service-image" src="//microlancer.lancerassets.com/v2/services/22/7e7900437411e699641b6b0f362bd4/service_card__original_App-Design-01.jpg"/></a>
                            </div>
                            <div class="service__card__text service__card__text--no-category">
                                <h4 class="service__card__name"><a href="/explore/app-design/45265-premium-web-mobile-app-ui-ux-design">Premium Web &amp; Mobile App UI/UX Design</a></h4>
                            </div>
                            <div class="service__card__details">
                                <div class="service__card__provider">
                                    <div class="service__card__provider__name"><a href="/users/WhiteX">WhiteX</a></div>
                                    <div class="service__card__provider__metrics">
                                    <div class="service__card__provider__recommended"><span class="service__card__provider__recommended__percentage">100%</span> Recommended </div>
                                    <div class="service__card__provider__jobs-done"><span class="service__card__jobs-done__count">12</span> Jobs done</div>
                                    </div>
                                </div>
                                <div class="service__card__price">
                                    <div class="service__card__amount">$300</div>
                                    <div class="service__card__turnaround"><span class="service__card__turnaround__days">14</span> days</div>
                                </div>
                            </div>
                        </div>
                        <div class="col s3 m3 l3 service__card" data-role="service-card-with-gallery">
                            <div class="service__card__gallery">
                                <div class="service__card__prev-button" data-role="prev-image"><i class="service__card__prev-button__image svg__prev--inverse"></i></div>
                                <div class="service__card__next-button" data-role="next-image"><i class="service__card__next-button__image svg__next--inverse"></i></div>
                                <div class="service__card__loading is-hidden" data-role="loading-animation"></div>
                                <a class="service__card__gallery__link" href="/explore/app-design/4519-high-end-mobile-application-ui-design-ios-android"><img class="service__card__gallery__image" data-gallery-urls="[&quot;//microlancer.lancerassets.com/v2/services/37/fdedc0e4fc11e8b47617c3c977478d/service_card_service_cover.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/c4/7d5600e4fc11e8b3c989d772475274/service_card_croydon_app.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/fb/032920e4fc11e8ba015bf4d531ab67/service_card_ux_chinaclassifieds.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/0b/5d68d0e4fd11e8b3c989d772475274/service_card_metronom_watch.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/0f/2d83a0e4fd11e88586b59250da2db1/service_card_pair_it.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/9f/1020d0433911e6a00003c7a14c1d3b/service_card__original_odyssey_ui.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/16/a94150e4fd11e8b3c989d772475274/service_card_metronom_ui.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/1f/7ec2a0e4fd11e8a5c1c16a4395f2d8/service_card_china_classifieds.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/ba/9428b0435211e6b34f1b0908aafc70/service_card__original_appinion.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/a5/e899a0433911e69c629d10531f6383/service_card__original_spillit_ui.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/7b/64da00431511e6adda5f049698cd83/service_card__original_s_main.jpg&quot;,&quot;//microlancer.lancerassets.com/v2/services/69/fc85b0431511e6857f5716a622aba6/service_card__original_xploro_concept.jpg&quot;]" data-role="service-image" src="//microlancer.lancerassets.com/v2/services/37/fdedc0e4fc11e8b47617c3c977478d/service_card_service_cover.jpg"/></a>
                            </div>
                            <div class="service__card__text service__card__text--no-category">
                                <h4 class="service__card__name"><a href="/explore/app-design/4519-high-end-mobile-application-ui-design-ios-android">High-End Mobile Application UI  Design  ( iOS / Android )</a></h4>
                            </div>
                            <div class="service__card__details">
                                <div class="service__card__provider">
                                    <div class="service__card__provider__name"><a href="/users/Zomorsky">Zomorsky</a></div>
                                    <div class="service__card__provider__metrics">
                                    <div class="service__card__provider__recommended"><span class="service__card__provider__recommended__percentage">92%</span> Recommended </div>
                                    <div class="service__card__provider__jobs-done"><span class="service__card__jobs-done__count">18</span> Jobs done</div>
                                    </div>
                                </div>
                                <div class="service__card__price">
                                    <div class="service__card__amount">$500</div>
                                    <div class="service__card__turnaround"><span class="service__card__turnaround__days">3</span> days</div>
                                </div>
                            </div>
                        </div>
                        </div>
                </div>
        </body>
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
)(Category)
