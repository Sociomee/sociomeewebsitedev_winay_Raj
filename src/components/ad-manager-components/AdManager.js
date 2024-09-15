import React from 'react'
import AdManagerHeader from './AdManagerHeader'
import AdManagerSearch from './AdManagerSearch'
import AdManagerTable from './AdManagerTable'
import AdPausd from './AdPausd'
import './Ads.css'
import AdSidebar from './AdSidebar'
import AdsTopComponents from './AdsTopComponents'

const AdManager = () => {

  return (
    <>
      <div className='d-flex'>
        <AdSidebar></AdSidebar>
        <div>

          <AdManagerHeader></AdManagerHeader>

          <AdsTopComponents></AdsTopComponents>

          <AdManagerSearch></AdManagerSearch>

          <AdManagerTable></AdManagerTable>

        </div>
      </div>
    </>
  )
}

export default AdManager