import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MobileMenu from '../MobileMenu/MobileMenu'
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/action";
import Logo from '../../images/logo.png'
import pr1 from '../../images/resource/post-thumb-1.jpg'
import pr2 from '../../images/resource/post-thumb-2.jpg'
import pr3 from '../../images/resource/post-thumb-3.jpg'
import { useNavigate } from "react-router-dom";

const Header = (props) => {
    const [searchActive, setSearchState] = useState(false);
    const [cartActive, setCartState] = useState(false);
    const push = useNavigate()

    const SubmitHandler = (e) => {
        e.preventDefault()
        push(`/event?search=${e.target[0].value}`)
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <header className="main-header">
            {/* Header Upper */}
            <div className="header-upper">
                <div className="auto-container">
                    <div className="d-flex justify-content-between align-items-center flex-wrap">

                        <div className="logo-box">
                            <div className="logo"><Link onClick={ClickHandler} to="/home"><img src={'logo.png'} alt="" title="" style={{height: 56}} /></Link></div>
                        </div>

                        <div className="nav-outer">
                            {/* Main Menu */}
                            <nav className="main-menu navbar-expand-md">
                                <div className="navbar-header">
                                    {/* Toggle Button */}
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                </div>

                                <div className="navbar-collapse collapse clearfix" id="navbarSupportedContent">
                                    <ul className="navigation clearfix">
                                        <li className="dropdown">
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li className="dropdown">
                                            <Link to="/about">About us</Link>
                                        </li>
                                        <li className="dropdown"><Link onClick={ClickHandler} to="/event">Find Event</Link>
                                        </li>
                                        <li className="dropdown"><a href='https://event-backend.bisfu.com/admin/event' >My Event</a>
                                        </li>
                                   
                                    </ul>
                                </div>
                            </nav>
                        </div>

                        {/* Main Menu End*/}
                        <div className="outer-box d-flex align-items-center flex-wrap">

                            {/* Search Btn */}
                            <div className="search-box-btn search-box-outer me-2" onClick={() => setSearchState(!searchActive)}><span className="icon fa fa-search"></span></div>

                            {/* Nav Btn */}
                            {/* <div className="nav-btn navSidebar-button" onClick={() => setCartState(!cartActive)}><i className='fi flaticon-shopping-cart'></i></div> */}

                            <div className="appointmeny_button-box">
                                <button onClick={() => window.location.href = 'https://event-backend.bisfu.com/Account/Login?ReturnUrl=%2Fadmin'} className="theme-btn btn-style-one">
                                    <span className="btn-wrap">
                                        <span className="text-one">Login</span>
                                        <span className="text-two">Login</span>
                                    </span>
                                </button>
                            </div>

                            {/* Mobile Navigation Toggler */}
                            <MobileMenu />
                        </div>

                    </div>
                </div>
            </div>
            {/*End Header Upper*/}
            <div className={`${searchActive ? "search-active" : ""}`}>
                <div className="search-popup">
                    <div className="color-layer"></div>
                    <button className="close-search" onClick={() => setSearchState(!searchActive)}><span className="flaticon-cancel-1"></span></button>
                    <form method="post" onSubmit={SubmitHandler}>
                        <div className="form-group">
                            <input type="search" name="search-field" placeholder="Search Here" required="" />
                            <button className="icon fa fa-search fa-fw" type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className={`xs-sidebar-group info-group ${cartActive ? "isActive" : ""}`}>
                <div className="xs-overlay xs-bg-black" onClick={() => setCartState(!cartActive)}></div>
                <div className="xs-sidebar-widget">
                    <div className="sidebar-widget-container">
                        <div className="close-button" onClick={() => setCartState(!cartActive)}>
                            <span className="flaticon-cancel-1"></span>
                        </div>
                        <div className="sidebar-textwidget">
                            <div className="sidebar-info-contents">
                                <div className="content-inner">
                                    <div className="title-box">
                                        <h5>Shopping <span>Bag</span></h5>
                                        <div className="price">$15 from free economy shipping</div>
                                    </div>
                                    <div className="empty-cart-box">
                                        <div className="no-cart">
                                            <span className="icon"><i className='fi flaticon-shopping-cart'></i></span>
                                            No products in cart.
                                        </div>
                                    </div>

                                    <div className="lower-box">
                                        <h5>Popular <span>Suggestions</span></h5>
                                        <div className="post-block">
                                            <div className="inner-box">
                                                <div className="image">
                                                    <img src={pr1} alt="" />
                                                </div>
                                                <h6><Link to="/">Children Event</Link></h6>
                                                <div className="rating">
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                </div>
                                                <div className="price-box">$125</div>
                                                <Link className="theme-btn bag-btn" to="/">add to bag</Link>
                                            </div>
                                        </div>
                                        <div className="post-block">
                                            <div className="inner-box">
                                                <div className="image">
                                                    <img src={pr2} alt="" />
                                                </div>
                                                <h6><Link to="/">Marriage Caremoney</Link></h6>
                                                <div className="rating">
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                </div>
                                                <div className="price-box">$205</div>
                                                <Link className="theme-btn bag-btn" to="/">add to bag</Link>
                                            </div>
                                        </div>
                                        <div className="post-block">
                                            <div className="inner-box">
                                                <div className="image">
                                                    <img src={pr3} alt="" />
                                                </div>
                                                <h6><Link to="/">baby shower</Link></h6>
                                                <div className="rating">
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                </div>
                                                <div className="price-box">$125</div>
                                                <Link className="theme-btn bag-btn" to="/">add to bag</Link>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}

const mapStateToProps = (state) => {
    return {
        carts: state.cartList.cart,
    };
};


export default connect(mapStateToProps, { removeFromCart })(Header);