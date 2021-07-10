import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import TickerInputBox from '../components/tickerInputBox'

const InputBox = (props) => {
  return (
    <>
      <Container className="mt-3 mb-0 pb-0">
        <Row>
          <Col>
            <TickerInputBox {...props} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default InputBox
