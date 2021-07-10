import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'

const ErrorPage = ({ errMsg }) => {
  return (
    <>
      <Container>
        <Row className='mt-5'>
          <Col xs={2}></Col>
          <Col xs={8}>
            <Card bg='dark' border='light' text='white' style={{textAlign: 'center'}}>
              <Card.Body><h3>Oops! <br />{errMsg} <br /> Please try again later...</h3></Card.Body>
            </Card>
          </Col>
          <Col xs={2}></Col>
        </Row>
      </Container>
    </>
  )
}

export default ErrorPage
