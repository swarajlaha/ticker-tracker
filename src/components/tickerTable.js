import React from 'react'
import { Card, Accordion, Button, Table } from 'react-bootstrap'
import './Modes.css'

const TickerTable = ({ tickerArrays, mode }) => {
  const formatter = (value) => {
    let formattedValue
    if(value) {
      formattedValue = Math.round(value * 100) / 100
    }
    return formattedValue
  }

  let modeClass = 'mode-' + mode

  return (
    <>
      <div className={modeClass}>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="outline-success" eventKey="1">
            Table
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <div
              className="mt-3 scrollbarstyle style-2"
              style={{
                height: 'auto',
                width: '50vw',
                overflowX: 'auto',
              }}
            >
              <Table bordered style={{color: 'dodgerblue'}}>
                <thead>
                  <tr>
                    <th></th>
                    {tickerArrays.data.map((td) => (
                      <th>{td.date}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>O</td>
                    {tickerArrays.data.map((td) => (
                      <td>{formatter(td.open)}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>H</td>
                    {tickerArrays.data.map((td) => (
                      <td>{formatter(td.high)}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>L</td>
                    {tickerArrays.data.map((td) => (
                      <td>{formatter(td.low)}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>C</td>
                    {tickerArrays.data.map((td) => (
                      <td>{formatter(td.close)}</td>
                    ))}
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </div>
    </>
  )
}

export default TickerTable
