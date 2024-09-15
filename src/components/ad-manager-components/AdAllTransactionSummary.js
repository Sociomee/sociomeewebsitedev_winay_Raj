import React from 'react'
import AdManagerHeader from './AdManagerHeader'
import AdsTopComponents from './AdsTopComponents'
import AdSidebar from './AdSidebar'
import AdTransactionSummaryMenu from './AdTransactionSummaryMenu'

const AdAllTransactionSummary = () => {
    return (
        <>
            <div className='d-flex'>
                <AdSidebar></AdSidebar>
                <div>

                    <AdManagerHeader></AdManagerHeader>

                    <AdsTopComponents></AdsTopComponents>

                    {/* <AdManagerSearch></AdManagerSearch> */}

                    <AdTransactionSummaryMenu></AdTransactionSummaryMenu>

                    <table className="table">
                        <thead>
                            <tr className='ad-tr-bg'>
                                <th scope="col"><input type="checkbox" /></th>
                                <th scope="col">Transaction ID</th>
                                <th scope="col">Transaction Type</th>
                                <th scope="col">Ad Name</th>
                                <th scope="col">Status</th>
                                <th scope="col">Txn Amount</th>
                                <th scope="col">Available Balance</th>
                                <th scope="col">Date & Time </th>
                                <th scope="col">Payment Mode </th>
                                <th scope="col">Debitor</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th><input type="checkbox" /></th>
                                <td>#65416161</td>
                                <td>Brand Awareness (CPV)</td>
                                <td className='img-con'>
                                    <img src="assets/images/story-0.jpg" class="img-fluid max-width-ts" alt="" />
                                    <div className='ts-img-pad'>
                                        <p>New Traffic Ad - Kickstarter</p>
                                        <div className='table-link'>
                                            <span><a href="/">View Charts</a></span>
                                            
                                        </div>
                                    </div>
                                </td>
                                <td><span className='success'>success</span></td>
                                <td>₹5000</td>
                                <td>₹5000</td>
                                <td>08-03-2022 11:09 AM</td>
                                <td>UPI</td>
                                <td>
                                    <span><h5>Union Trust Bank</h5></span>
                                    <span><p>Jason Simpson</p></span>
                                    <span><p>A/C : 51618454651</p></span>
                                </td>
                            </tr>
                            <tr>
                                <th><input type="checkbox" /></th>
                                <td>#65416161</td>
                                <td>Brand Awareness (CPV)</td>
                                <td className='img-con'>
                                    <img src="assets/images/story-0.jpg" class="img-fluid max-width-ts" alt="" />
                                    <div className='ts-img-pad'>
                                        <p>New Traffic Ad - Kickstarter</p>
                                        <div className='table-link'>
                                            <span><a href="/">View Charts</a></span>
                                            
                                        </div>
                                    </div>
                                </td>
                                <td><span className='success'>success</span></td>
                                <td>₹5000</td>
                                <td>₹5000</td>
                                <td>08-03-2022 11:09 AM</td>
                                <td>UPI</td>
                                <td>
                                    <span><h5>Union Trust Bank</h5></span>
                                    <span><p>Jason Simpson</p></span>
                                    <span><p>A/C : 51618454651</p></span>
                                </td>
                            </tr>
                            <tr>
                                <th><input type="checkbox" /></th>
                                <td>#65416161</td>
                                <td>Brand Awareness (CPV)</td>
                                <td className='img-con'>
                                    <img src="assets/images/story-0.jpg" class="img-fluid max-width-ts" alt="" />
                                    <div className='ts-img-pad'>
                                        <p>New Traffic Ad - Kickstarter</p>
                                        <div className='table-link'>
                                            <span><a href="/">View Charts</a></span>
                                            
                                        </div>
                                    </div>
                                </td>
                                <td><span className='success'>success</span></td>
                                <td>₹5000</td>
                                <td>₹5000</td>
                                <td>08-03-2022 11:09 AM</td>
                                <td>UPI</td>
                                <td>
                                    <span><h5>Union Trust Bank</h5></span>
                                    <span><p>Jason Simpson</p></span>
                                    <span><p>A/C : 51618454651</p></span>
                                </td>
                            </tr>
                            <tr>
                                <th><input type="checkbox" /></th>
                                <td>#65416161</td>
                                <td>Brand Awareness (CPV)</td>
                                <td className='img-con'>
                                    <img src="assets/images/story-0.jpg" class="img-fluid max-width-ts" alt="" />
                                    <div className='ts-img-pad'>
                                        <p>New Traffic Ad - Kickstarter</p>
                                        <div className='table-link'>
                                            <span><a href="/">View Charts</a></span>
                                            
                                        </div>
                                    </div>
                                </td>
                                <td><span className='success'>success</span></td>
                                <td>₹5000</td>
                                <td>₹5000</td>
                                <td>08-03-2022 11:09 AM</td>
                                <td>UPI</td>
                                <td>
                                    <span><h5>Union Trust Bank</h5></span>
                                    <span><p>Jason Simpson</p></span>
                                    <span><p>A/C : 51618454651</p></span>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </>
    )
}

export default AdAllTransactionSummary