import React, { Component, useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
// import { loadAllGroupCategorys } from '../../Services/Actions/getAllGroupCategoryAction';

export default function Models() {
    // Media File Preview
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    // LOAD ACTIONS
    // let dispatch = useDispatch();
    // const { allGroupCategory } = useSelector(state => state.getAllGroupCategoryData);
    // useEffect(() => {
    //     dispatch(loadAllGroupCategorys());
    // }, []);
    // LOAD ACTIONS ENDS

    return (
        <>
            <div className="modal fade" id="createGroup" tabIndex="-1" role="dialog" aria-labelledby="createGroupTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Create Group</h5>
                            <a href="#" data-bs-dismiss="modal" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
                        </div>
                        <div className="modal-body">
                            <form className="theme-form">
                                <div className="form-group">
                                    <label>Name </label>
                                    <input type="text" className="form-control" placeholder="Enter your group name" />
                                    <p className="instruction-msg">Max 64 Characters</p>
                                </div>
                                <div className="form-group">
                                    <label>Description</label>
                                    <input type="text" className="form-control" placeholder="Discribe your group" />
                                    <p className="instruction-msg">Max 180 charectors</p>
                                </div>

                                <div className="form-group">
                                    <label>Group Catagory</label>
                                    <select className="form-control">
                                        <option>Choose catagory</option>
                                        {/* {
                                            allGroupCategory.data.successResult.map((val) => {
                                                return <option>{val.name}</option>
                                            })
                                        } */}
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Group Privacy</label>
                                    <select id="inputState" className="form-control">
                                        <option>Choose privacy</option>
                                        <option>Privacy 1</option>
                                        <option>Privacy 2</option>
                                        <option>Privacy 3</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Group Image</label>
                                    <div className="upload-image-blk">
                                        <input type="file" onChange={handleChange} />
                                        <img src={file} className="event-img-prev" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-solid">Save</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="peopleSearch" tabIndex="-1" role="dialog" aria-labelledby="peopleSearchTitle" aria-hidden="true">
                <div className="modal-dialog people-search-model modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="search-people-block">
                                <div className="sp-top-head-blk">
                                    <h5 className="modal-title" id="exampleModalLongTitle">Create Group</h5>
                                    <a href="#" data-bs-dismiss="modal" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
                                </div>
                                <div className="sp-body-block">
                                    <div className="input-search-blk">
                                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="search-svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                        <input type="text" className="form-control" name="search" placeholder="Find Friends..." />
                                    </div>
                                    <ul className="search-people-list">
                                        <li>
                                            <div className="form-check checkbox_animated">
                                                <input type="checkbox" className="form-check-input" id="check-1" />
                                                <label className="form-check-label" htmlFor="check-1">
                                                    <div className="member-new-lt">
                                                        <img src="assets/images/story-2.jpg" />
                                                        <div className="member-new-cont">
                                                            <h4>Kenjomen Norke</h4>
                                                            <p>Joined on 23 Mar 2021</p>
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check checkbox_animated">
                                                <input type="checkbox" className="form-check-input" id="check-2" />
                                                <label className="form-check-label" htmlFor="check-2">
                                                    <div className="member-new-lt">
                                                        <img src="assets/images/story-2.jpg" />
                                                        <div className="member-new-cont">
                                                            <h4>Kenjomen Norke</h4>
                                                            <p>Joined on 23 Mar 2021</p>
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check checkbox_animated">
                                                <input type="checkbox" className="form-check-input" id="check-3" />
                                                <label className="form-check-label" htmlFor="check-3">
                                                    <div className="member-new-lt">
                                                        <img src="assets/images/story-2.jpg" />
                                                        <div className="member-new-cont">
                                                            <h4>Kenjomen Norke</h4>
                                                            <p>Joined on 23 Mar 2021</p>
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check checkbox_animated">
                                                <input type="checkbox" className="form-check-input" id="check-4" />
                                                <label className="form-check-label" htmlFor="check-4">
                                                    <div className="member-new-lt">
                                                        <img src="assets/images/story-2.jpg" />
                                                        <div className="member-new-cont">
                                                            <h4>Kenjomen Norke</h4>
                                                            <p>Joined on 23 Mar 2021</p>
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check checkbox_animated">
                                                <input type="checkbox" className="form-check-input" id="check-5" />
                                                <label className="form-check-label" htmlFor="check-5">
                                                    <div className="member-new-lt">
                                                        <img src="assets/images/story-2.jpg" />
                                                        <div className="member-new-cont">
                                                            <h4>Kenjomen Norke</h4>
                                                            <p>Joined on 23 Mar 2021</p>
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="sp-foot-blk">
                                    <button type="button" className="btn btn-solid">Save</button>
                                    <button type="button" className="btn btn-default ms-2">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
} 
