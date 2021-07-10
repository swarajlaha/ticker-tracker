import React from 'react'
import { Container, Tab, Row, Col, Nav, Spinner } from 'react-bootstrap'
import TickerCards from './tickerCards'

const TimePeriodTab = ({ tickerData, tickerDataMo, mode }) => {
  return (
    <>
      <Container className="mb-0 pb-0">
        <Row>
          <Col>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row className="mt-3">
                <Col sm={1}>
                  <Nav
                    variant="pills"
                    className="flex-column"
                    style={{ width: '50%', textAlign: 'center' }}
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="first">Week</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Month</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={11}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      {tickerData.length === 0 ? (
                        <div className="d-flex justify-content-center">
                          <Spinner
                            animation="border"
                            variant="primary"
                          ></Spinner>
                        </div>
                      ) : (
                        <TickerCards
                          tickerData={tickerData}
                          tab={'w'}
                          mode={mode}
                        />
                      )}
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      {tickerDataMo.length === 0 ? (
                        <div className="d-flex justify-content-center">
                          <Spinner
                            animation="border"
                            variant="primary"
                          ></Spinner>
                        </div>
                      ) : (
                        <TickerCards
                          tickerDataMo={tickerDataMo}
                          tab={'m'}
                          mode={mode}
                        />
                      )}
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default TimePeriodTab
