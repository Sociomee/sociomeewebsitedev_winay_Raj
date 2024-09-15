import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Col, Nav, NavItem, Row, TabContent, TabPane } from 'reactstrap'
import classnames from 'classnames'

const BizMenuTab = () => {
  const [currentActiveTab, setCurrentActiveTab] = useState('1')
  //  toggle  active state  for tab 
  //  toggle  active state  for tab 
  const toggle = tab => {
    if (currentActiveTab !== tab) setCurrentActiveTab(tab)
  }
  return (
    <>
      <div className="profile-menu section-t-space">
        <Row className='mt-3'>
          <Col md="12">
            <Nav pills style={{ margin: '1%', }}    >
              <NavItem style={{ background: "rgba(129, 193, 75, 0.2)", marginRight: "15px", borderRadius: "5px" }} >
                <NavLink
                  className={
                    classnames({
                      active: currentActiveTab === '1'
                    })}
                  // onClick={() => { toggle('1') }}
                >

                  <span >All Biz Pages (59)</span>
                </NavLink>
              </NavItem>
              <NavItem style={{ background: "rgba(129, 193, 75, 0.2)", marginRight: "15px", borderRadius: "5px" }}>
                <NavLink
                  className={
                    classnames({
                      active: currentActiveTab === '2'
                    })}
                  // onClick={() => { toggle('2') }}
                >
                  <span>Owned Pages (12)</span>
                </NavLink>
              </NavItem>
              <NavItem style={{ background: "rgba(129, 193, 75, 0.2)", marginRight: "15px", borderRadius: "5px" }}>
                <NavLink
                  className={
                    classnames({
                      active: currentActiveTab === '3'
                    })}
                  // onClick={() => { toggle('3') }}
                >
                  <span>Followed Pages (09)</span>
                </NavLink>
              </NavItem>
              <NavItem style={{ background: "rgba(129, 193, 75, 0.2)", marginRight: "15px", borderRadius: "5px" }}>
                <NavLink
                  className={
                    classnames({
                      active: currentActiveTab === '4'
                    })}
                  //  
                >
                  <span> Media (32)</span>
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={currentActiveTab}>
              <TabPane tabId="1" style={{}} >


              </TabPane>
              <TabPane tabId="2">

              </TabPane>
              <TabPane tabId="3">

              </TabPane>
              <TabPane tabId="4">

              </TabPane>
            </TabContent>
          </Col>
        </Row>

      </div>
    </>
  )
}

export default BizMenuTab