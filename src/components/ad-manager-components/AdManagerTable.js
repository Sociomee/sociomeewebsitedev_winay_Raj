import React from 'react'
import AdManagerMenu from './AdManagerMenu'

const AdManagerTable = () => {
    return (
        <>
            <AdManagerMenu></AdManagerMenu>

            <table className="table">
                <thead>
                    <tr className='ad-tr-bg'>
                        <th scope="col"><input type="checkbox" /></th>
                        <th scope="col">Sr. No.</th>
                        <th scope="col">Off/On</th>
                        <th scope="col">Ad Name</th>
                        <th scope="col">Ad ID</th>
                        <th scope="col">Ad Type</th>
                        <th scope="col">Total Impressions</th>
                        <th scope="col">Total Reach</th>
                        <th scope="col">Click</th>
                        <th scope="col">View</th>
                        <th scope="col">Lead</th>
                        <th scope="col">Total Amount spent</th>
                        <th scope="col">Daily Budget </th>
                        <th scope="col">Over all Budget</th>
                        <th scope="col">Start Date & Time </th>
                        <th scope="col">Ending Date & Time </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th><input type="checkbox" /></th>
                        <th scope="row">13</th>
                        <td>
                            <label class="switch">
                                <input type="checkbox"/>
                                    <span class="slider round"></span>
                            </label>
                        </td>
                        <td className='img-con'>
                            <img src="assets/images/story-0.jpg" class="img-fluid max-width" alt="" />
                            <div>
                                <p>New Traffic Ad - Kickstarter</p>
                                <div className='table-link'>
                                    <span><a href="/">View Charts</a></span>
                                    <span><a href="/">Duplicate</a></span>
                                </div>
                            </div>
                        </td>
                        <td>#65416161</td>
                        <td>Brand Awareness (CPV)</td>
                        <td>954</td>
                        <td>654</td>
                        <td>150</td>
                        <td>65</td>
                        <td>---</td>
                        <td>₹5000</td>
                        <td>₹500</td>
                        <td>₹9597</td>
                        <td>08-03-2022 11:09 AM</td>
                        <td>08-03-2022 11:09 AM</td>
                    </tr>
                    <tr>
                        <th><input type="checkbox" /></th>
                        <th scope="row">12</th>
                        <td>
                            <label class="switch">
                                <input type="checkbox"/>
                                    <span class="slider round"></span>
                            </label>
                        </td>
                        <td className='img-con'>
                            <img src="assets/images/story-0.jpg" class="img-fluid max-width" alt="" />
                            <div>
                                <p>New Traffic Ad - Kickstarter</p>
                                <div className='table-link'>
                                    <span><a href="/">View Charts</a></span>
                                    <span><a href="/">Duplicate</a></span>
                                </div>
                            </div>
                        </td>
                        <td>#65416161</td>
                        <td>Brand Awareness (CPV)</td>
                        <td>954</td>
                        <td>654</td>
                        <td>150</td>
                        <td>65</td>
                        <td>---</td>
                        <td>₹5000</td>
                        <td>₹500</td>
                        <td>₹9597</td>
                        <td>08-03-2022 11:09 AM</td>
                        <td>08-03-2022 11:09 AM</td>
                    </tr>
                    <tr>
                        <th><input type="checkbox" /></th>
                        <th scope="row">11</th>
                        <td>
                            <label class="switch">
                                <input type="checkbox"/>
                                    <span class="slider round"></span>
                            </label>
                        </td>
                        <td className='img-con'>
                            <img src="assets/images/story-0.jpg" class="img-fluid max-width" alt="" />
                            <div>
                                <p>New Traffic Ad - Kickstarter</p>
                                <div className='table-link'>
                                    <span><a href="/">View Charts</a></span>
                                    <span><a href="/">Duplicate</a></span>
                                </div>
                            </div>
                        </td>
                        <td>#65416161</td>
                        <td>Brand Awareness (CPV)</td>
                        <td>954</td>
                        <td>654</td>
                        <td>150</td>
                        <td>65</td>
                        <td>---</td>
                        <td>₹5000</td>
                        <td>₹500</td>
                        <td>₹9597</td>
                        <td>08-03-2022 11:09 AM</td>
                        <td>08-03-2022 11:09 AM</td>
                    </tr>
                    <tr>
                        <th><input type="checkbox" /></th>
                        <th scope="row">10</th>
                        <td>
                            <label class="switch">
                                <input type="checkbox"/>
                                    <span class="slider round"></span>
                            </label>
                        </td>
                        <td className='img-con'>
                            <img src="assets/images/story-0.jpg" class="img-fluid max-width" alt="" />
                            <div>
                                <p>New Traffic Ad - Kickstarter</p>
                                <div className='table-link'>
                                    <span><a href="/">View Charts</a></span>
                                    <span><a href="/">Duplicate</a></span>
                                </div>
                            </div>
                        </td>
                        <td>#65416161</td>
                        <td>Brand Awareness (CPV)</td>
                        <td>954</td>
                        <td>654</td>
                        <td>150</td>
                        <td>65</td>
                        <td>---</td>
                        <td>₹5000</td>
                        <td>₹500</td>
                        <td>₹9597</td>
                        <td>08-03-2022 11:09 AM</td>
                        <td>08-03-2022 11:09 AM</td>
                    </tr>
                    <tr>
                        <th><input type="checkbox" /></th>
                        <th scope="row">9</th>
                        <td>
                            <label class="switch">
                                <input type="checkbox"/>
                                    <span class="slider round"></span>
                            </label>
                        </td>
                        <td className='img-con'>
                            <img src="assets/images/story-0.jpg" class="img-fluid max-width" alt="" />
                            <div>
                                <p>New Traffic Ad - Kickstarter</p>
                                <div className='table-link'>
                                    <span><a href="/">View Charts</a></span>
                                    <span><a href="/">Duplicate</a></span>
                                </div>
                            </div>
                        </td>
                        <td>#65416161</td>
                        <td>Brand Awareness (CPV)</td>
                        <td>954</td>
                        <td>654</td>
                        <td>150</td>
                        <td>65</td>
                        <td>---</td>
                        <td>₹5000</td>
                        <td>₹500</td>
                        <td>₹9597</td>
                        <td>08-03-2022 11:09 AM</td>
                        <td>08-03-2022 11:09 AM</td>
                    </tr>
                    <tr>
                        <th><input type="checkbox" /></th>
                        <th scope="row">8</th>
                        <td>
                            <label class="switch">
                                <input type="checkbox"/>
                                    <span class="slider round"></span>
                            </label>
                        </td>
                        <td className='img-con'>
                            <img src="assets/images/story-0.jpg" class="img-fluid max-width" alt="" />
                            <div>
                                <p>New Traffic Ad - Kickstarter</p>
                                <div className='table-link'>
                                    <span><a href="/">View Charts</a></span>
                                    <span><a href="/">Duplicate</a></span>
                                </div>
                            </div>
                        </td>
                        <td>#65416161</td>
                        <td>Brand Awareness (CPV)</td>
                        <td>954</td>
                        <td>654</td>
                        <td>150</td>
                        <td>65</td>
                        <td>---</td>
                        <td>₹5000</td>
                        <td>₹500</td>
                        <td>₹9597</td>
                        <td>08-03-2022 11:09 AM</td>
                        <td>08-03-2022 11:09 AM</td>
                    </tr>
                    <tr>
                        <th><input type="checkbox" /></th>
                        <th scope="row">7</th>
                        <td>
                            <label class="switch">
                                <input type="checkbox"/>
                                    <span class="slider round"></span>
                            </label>
                        </td>
                        <td className='img-con'>
                            <img src="assets/images/story-0.jpg" class="img-fluid max-width" alt="" />
                            <div>
                                <p>New Traffic Ad - Kickstarter</p>
                                <div className='table-link'>
                                    <span><a href="/">View Charts</a></span>
                                    <span><a href="/">Duplicate</a></span>
                                </div>
                            </div>
                        </td>
                        <td>#65416161</td>
                        <td>Brand Awareness (CPV)</td>
                        <td>954</td>
                        <td>654</td>
                        <td>150</td>
                        <td>65</td>
                        <td>---</td>
                        <td>₹5000</td>
                        <td>₹500</td>
                        <td>₹9597</td>
                        <td>08-03-2022 11:09 AM</td>
                        <td>08-03-2022 11:09 AM</td>
                    </tr>
                    <tr>
                        <th><input type="checkbox" /></th>
                        <th scope="row">6</th>
                        <td>
                            <label class="switch">
                                <input type="checkbox"/>
                                    <span class="slider round"></span>
                            </label>
                        </td>
                        <td className='img-con'>
                            <img src="assets/images/story-0.jpg" class="img-fluid max-width" alt="" />
                            <div>
                                <p>New Traffic Ad - Kickstarter</p>
                                <div className='table-link'>
                                    <span><a href="/">View Charts</a></span>
                                    <span><a href="/">Duplicate</a></span>
                                </div>
                            </div>
                        </td>
                        <td>#65416161</td>
                        <td>Brand Awareness (CPV)</td>
                        <td>954</td>
                        <td>654</td>
                        <td>150</td>
                        <td>65</td>
                        <td>---</td>
                        <td>₹5000</td>
                        <td>₹500</td>
                        <td>₹9597</td>
                        <td>08-03-2022 11:09 AM</td>
                        <td>08-03-2022 11:09 AM</td>
                    </tr>
                    <tr>
                        <th><input type="checkbox" /></th>
                        <th scope="row">5</th>
                        <td>
                            <label class="switch">
                                <input type="checkbox"/>
                                    <span class="slider round"></span>
                            </label>
                        </td>
                        <td className='img-con'>
                            <img src="assets/images/story-0.jpg" class="img-fluid max-width" alt="" />
                            <div>
                                <p>New Traffic Ad - Kickstarter</p>
                                <div className='table-link'>
                                    <span><a href="/">View Charts</a></span>
                                    <span><a href="/">Duplicate</a></span>
                                </div>
                            </div>
                        </td>
                        <td>#65416161</td>
                        <td>Brand Awareness (CPV)</td>
                        <td>954</td>
                        <td>654</td>
                        <td>150</td>
                        <td>65</td>
                        <td>---</td>
                        <td>₹5000</td>
                        <td>₹500</td>
                        <td>₹9597</td>
                        <td>08-03-2022 11:09 AM</td>
                        <td>08-03-2022 11:09 AM</td>
                    </tr>
                    <tr>
                        <th><input type="checkbox" /></th>
                        <th scope="row">4</th>
                        <td>
                            <label class="switch">
                                <input type="checkbox"/>
                                    <span class="slider round"></span>
                            </label>
                        </td>
                        <td className='img-con'>
                            <img src="assets/images/story-0.jpg" class="img-fluid max-width" alt="" />
                            <div>
                                <p>New Traffic Ad - Kickstarter</p>
                                <div className='table-link'>
                                    <span><a href="/">View Charts</a></span>
                                    <span><a href="/">Duplicate</a></span>
                                </div>
                            </div>
                        </td>
                        <td>#65416161</td>
                        <td>Brand Awareness (CPV)</td>
                        <td>954</td>
                        <td>654</td>
                        <td>150</td>
                        <td>65</td>
                        <td>---</td>
                        <td>₹5000</td>
                        <td>₹500</td>
                        <td>₹9597</td>
                        <td>08-03-2022 11:09 AM</td>
                        <td>08-03-2022 11:09 AM</td>
                    </tr>
                    <tr>
                        <th><input type="checkbox" /></th>
                        <th scope="row">3</th>
                        <td>
                            <label class="switch">
                                <input type="checkbox"/>
                                    <span class="slider round"></span>
                            </label>
                        </td>
                        <td className='img-con'>
                            <img src="assets/images/story-0.jpg" class="img-fluid max-width" alt="" />
                            <div>
                                <p>New Traffic Ad - Kickstarter</p>
                                <div className='table-link'>
                                    <span><a href="/">View Charts</a></span>
                                    <span><a href="/">Duplicate</a></span>
                                </div>
                            </div>
                        </td>
                        <td>#65416161</td>
                        <td>Brand Awareness (CPV)</td>
                        <td>954</td>
                        <td>654</td>
                        <td>150</td>
                        <td>65</td>
                        <td>---</td>
                        <td>₹5000</td>
                        <td>₹500</td>
                        <td>₹9597</td>
                        <td>08-03-2022 11:09 AM</td>
                        <td>08-03-2022 11:09 AM</td>
                    </tr>
                    <tr>
                        <th><input type="checkbox" /></th>
                        <th scope="row">2</th>
                        <td>
                            <label class="switch">
                                <input type="checkbox"/>
                                    <span class="slider round"></span>
                            </label>
                        </td>
                        <td className='img-con'>
                            <img src="assets/images/story-0.jpg" class="img-fluid max-width" alt="" />
                            <div>
                                <p>New Traffic Ad - Kickstarter</p>
                                <div className='table-link'>
                                    <span><a href="/">View Charts</a></span>
                                    <span><a href="/">Duplicate</a></span>
                                </div>
                            </div>
                        </td>
                        <td>#65416161</td>
                        <td>Brand Awareness (CPV)</td>
                        <td>954</td>
                        <td>654</td>
                        <td>150</td>
                        <td>65</td>
                        <td>---</td>
                        <td>₹5000</td>
                        <td>₹500</td>
                        <td>₹9597</td>
                        <td>08-03-2022 11:09 AM</td>
                        <td>08-03-2022 11:09 AM</td>
                    </tr>
                    <tr>
                        <th><input type="checkbox" /></th>
                        <th scope="row">1</th>
                        <td>
                            <label class="switch">
                                <input type="checkbox"/>
                                    <span class="slider round"></span>
                            </label>
                        </td>
                        <td className='img-con'>
                            <img src="assets/images/story-0.jpg" class="img-fluid max-width" alt="" />
                            <div>
                                <p>New Traffic Ad - Kickstarter</p>
                                <div className='table-link'>
                                    <span><a href="/">View Charts</a></span>
                                    <span><a href="/">Duplicate</a></span>
                                </div>
                            </div>
                        </td>
                        <td>#65416161</td>
                        <td>Brand Awareness (CPV)</td>
                        <td>954</td>
                        <td>654</td>
                        <td>150</td>
                        <td>65</td>
                        <td>---</td>
                        <td>₹5000</td>
                        <td>₹500</td>
                        <td>₹9597</td>
                        <td>08-03-2022 11:09 AM</td>
                        <td>08-03-2022 11:09 AM</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default AdManagerTable