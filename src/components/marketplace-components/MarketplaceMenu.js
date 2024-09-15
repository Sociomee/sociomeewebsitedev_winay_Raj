import React,{Component, useState} from 'react'; 
import { NavLink } from "react-router-dom";

export default function MarketplaceMenu() { 
    
    return (
      <>
        <div className="marketplace-menu">
            <div className="row">
                <div className="col-md-7">
                    <ul className="mp-left-menu">
                        <li>
                            <NavLink to="/Marketplace">All (506)</NavLink>
                        </li>
                        <li>
                            <NavLink to="/MpPending">Aproval Pending (132)</NavLink>
                        </li>
                        <li>
                            <NavLink to="/MpSale">On Sale (156)</NavLink>
                        </li>
                        <li>
                            <NavLink to="/MpSold">Sold (121)</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="col-md-5">
                    <ul className="mp-right-btns">
                        <li>
                        <div className="search-box-mp">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon iw-16 icon-light"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            <input type="text" className="form-control search-type" placeholder="find friends..." />
                        </div>
                        </li>
                        <li>
                            <NavLink to="/MpSell" className="mp-sell-btn">+ Sell</NavLink>
                        </li>
                        <li>
                            <a href="#" className="mp-filter-btn" data-bs-toggle="modal" data-bs-target="#mpfiltermodel"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-16 ih-16"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Models */}

        <div className="modal fade" id="mpfiltermodel" tabIndex="-1" role="dialog" aria-labelledby="mpfiltermodelTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Filter Products</h5>
                    <a href="#" data-bs-dismiss="modal" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
                </div>
                <div className="modal-body">
                    <div className="mp-filter-blk">
                        <form className="theme-form">
                            <div className="form-group">
                                <label>Within (km)</label>
                                <select id="inputState" className="form-control">
                                    <option>Select</option>
                                    <option>5 KM</option>
                                    <option>10 KM</option>
                                    <option>15 KM</option>
                                    <option>20 KM</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Location</label>
                                <input type="text" className="form-control" placeholder="Search Location"/>
                            </div>
                            <div className="form-group">
                                <label>Price</label>
                                <div className="row">
                                    <div className="col-2">
                                        <select id="inputState" className="form-control">
                                            <option>$</option>
                                            <option>€</option>
                                            <option>₹</option>
                                        </select>
                                    </div>
                                    <div className="col-5">
                                        <input type="text" className="form-control" placeholder="Min amount..."/>
                                    </div>
                                    <div className="col-5">
                                        <input type="text" className="form-control" placeholder="Max amount..."/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Select Categories</label>
                                <ul className="mp-cat-list">
                                    <li>
                                        <div>
                                            <input className="checkbox_animated form-check-input" type="checkbox" id="Electronic"/>
                                            <label className="form-check-label" htmlFor="Electronic">Electronic</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <input className="checkbox_animated form-check-input" type="checkbox" id="Furniture"/>
                                            <label className="form-check-label" htmlFor="Furniture">Furniture</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <input className="form-check-input checkbox_animated" type="checkbox" id="ToyBaby"/>
                                            <label className="form-check-label" htmlFor="ToyBaby">Toy & Baby</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <input className="form-check-input checkbox_animated" type="checkbox" id="Grocery"/>
                                            <label className="form-check-label" htmlFor="Grocery">Grocery</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <input className="form-check-input checkbox_animated" type="checkbox" id="Fashin"/>
                                            <label className="form-check-label" htmlFor="Fashin">Fashin</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <input className="form-check-input checkbox_animated" type="checkbox" id="Appliances"/>
                                            <label className="form-check-label" htmlFor="Appliances">Appliances</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="form-group">
                                <div className="mp-btns-filters-blk">
                                    <a href="#" className="btn btn-default">Reset</a>
                                    <a href="#" className="btn btn-primary">Apply</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {/* <div className="modal-footer">
                    <button type="button" className="btn btn-solid" data-bs-dismiss="modal" aria-label="Close">OK</button>
                </div> */}
                </div>
            </div>  
        </div>
      </>
    );
} 