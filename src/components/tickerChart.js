import React from 'react'
import { Line } from 'react-chartjs-2'
import { Card, Accordion, Button } from 'react-bootstrap'
import './Modes.css'

const TickerChart = ({ tickerArrays, tab, mode }) => {
  const labelArr = []
  tickerArrays.data.map((td) => {
    labelArr.push(td.date)
  })

  const dataArr = []
  tickerArrays.data.map((td) => {
    dataArr.push(td.close)
  })

  const tickerArrLen = (tickerArrays.data).length

  let openPrice = tickerArrays.data[0].close
  let closePrice = tickerArrays.data[tickerArrLen-1].close
  let borderColorArr = []
  if(openPrice > closePrice) {
    borderColorArr = ['rgba(255, 0, 0, 0.8)']
  } else {
    borderColorArr = ['rgba(0, 128, 0, 0.8)']
  }

  let weekHigh = 0
  for(let i = 0; i < tickerArrLen; i ++) {
    if(tickerArrays.data[i].high > weekHigh) {
      weekHigh = tickerArrays.data[i].high
    }
  }

  let weekLow = tickerArrays.data[0].low
  for(let i = 0; i < tickerArrLen; i ++) {
    if(tickerArrays.data[i].low < weekLow) {
      weekLow = tickerArrays.data[i].low
    }
  }

  let weekAvg = 0
  let sum = 0
  for(let i = 0; i < tickerArrLen; i ++) {
    sum = sum + tickerArrays.data[i].close
  }
  weekAvg = sum / tickerArrLen

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR',
  })

  let timePeriod = ''
  if (tab === 'w') {
    timePeriod = '7'
  } else {
    timePeriod = '30'
  }

  const data = {
    labels: labelArr,
    datasets: [
      {
        label: `Last ${timePeriod} market days | High: ${Math.round(weekHigh * 100)/100} | Low: ${Math.round(weekLow * 100)/100} | Avg: ${Math.round(weekAvg * 100)/100}`,
        data: dataArr,
        borderColor: borderColorArr,
        backgroundColor: borderColorArr,
      },
    ],
  }

  const tickerName = tickerArrays.ticker.toUpperCase()

  let modeClass = 'mode-' + mode

  return (
    <>
      <div className={modeClass}>
        <Card.Header><b>{tickerName}&nbsp;</b>
          <Accordion.Toggle as={Button} variant="outline-info" eventKey="0">
            Chart           
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <div className="chart-container" style={{ height:"auto", width:"50vw"}}>
            <Line data={data} />
          </div>
        </Accordion.Collapse>
      </div>
    </>
  )
}

export default TickerChart
