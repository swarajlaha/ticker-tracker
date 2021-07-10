import React from 'react'
import TickerTable from './tickerTable'
import TickerChart from './tickerChart'
import { Accordion } from 'react-bootstrap'

const TickerCard = ({ tickerArrays, tab, mode }) => {
  return (
    <>
      <>
        <div>
          <Accordion defaultActiveKey="0" className="mt-3">
            <TickerChart tickerArrays={tickerArrays} tab={tab} mode={mode} />
            <TickerTable tickerArrays={tickerArrays} mode={mode} />
          </Accordion>
        </div>
      </>
    </>
  )
}

export default TickerCard
