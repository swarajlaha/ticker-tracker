import React from 'react'
import TickerCard from '../components/tickerCard'
import { Container, Row, Col } from 'react-bootstrap'
import ErrorBox from '../commons/errorBox'

const TickerCards = ({ tickerData, tickerDataMo, tab, mode }) => {
  return (
    <>
      <div style={{ height: 'auto', maxHeight: '600px', overflowX: 'auto' }}>
        <Container className="mt-1" style={{ textAlign: 'center' }}>
          <Row>
            <Col sm="1"></Col>
            {tab === 'w' ? (
              <Col sm="10">
                {tickerData.map((td) =>
                  td.data.length !== 0 ? (
                    <TickerCard tickerArrays={td} tab={tab} mode={mode} />
                  ) : (
                    <ErrorBox showStatus={true} wrongTicker={td.ticker} />
                  ),
                )}
              </Col>
            ) : (
              <Col sm="10">
                {tickerDataMo.map((td) =>
                  td.data.length !== 0 ? (
                    <TickerCard tickerArrays={td} tab={tab} mode={mode} />
                  ) : (
                    <ErrorBox showStatus={true} wrongTicker={td.ticker} />
                  ),
                )}
              </Col>
            )}
            <Col sm="1"></Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default TickerCards
