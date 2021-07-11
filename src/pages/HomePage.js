import React, { useState, useEffect } from 'react'
import axios from 'axios'
import InputBox from '../containers/inputBox'
import TimePeriodTab from '../containers/timePeriodTab'
import MainMarquee from '../marquee/mainMarquee'
import ErrorPage from '../pages/ErrorPage'

const HomePage = (mode) => {
  const [ticker, setTicker] = useState('Enter ticker...')
  const [tickerData, setTickerData] = useState([])
  const [tickerDataMo, setTickerDataMo] = useState([])
  const [errMsg, setErrMsg] = useState('')

  useEffect(() => {
    const storedTicker = localStorage.getItem('tickerNames')
    setTicker(storedTicker)
    fetchTickerData(storedTicker)
    fetchTickerDataMonth(storedTicker)
  }, [])

  const tickerChangeHandler = (e) => {
    setTicker(String(e.target.value).toUpperCase())
  }

  const config = {
    'api-key': process.env.REACT_APP_APIKEY,
  }

  const fetchTickerData = (tickerName) => {
    axios
      .get(
        `${process.env.REACT_APP_BASEURL}?tickers=${tickerName}`,
        { headers: config },
      )
      .then((res) => {
        let resData = res.data
        setTickerData(resData)
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error)
          console.log(error.response)
          setErrMsg(error.response.data.message)
        }
      })
  }

  const tickerAddHandler = () => {
    if (ticker.length !== 0) {
      localStorage.setItem('tickerNames', ticker)
      fetchTickerData(ticker)
      fetchTickerDataMonth(ticker)
    }
  }

  const fetchTickerDataMonth = (tickerName) => {
    try {
      axios
        .get(
          `${process.env.REACT_APP_BASEURL}?tickers=${tickerName}&time_period=30d`,
          { headers: config },
        )
        .then((res) => {
          let resDataMo = res.data
          setTickerDataMo(resDataMo)
        })
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <>
      {errMsg !== '' ? (
        (<ErrorPage errMsg={errMsg} />)
      ) : (
        <>
          <MainMarquee />
          <InputBox
            tickerChangeHandler={tickerChangeHandler}
            tickerAddHandler={tickerAddHandler}
            ticker={ticker}
            tickerData={tickerData}
          />
          <TimePeriodTab
            tickerData={tickerData}
            tickerDataMo={tickerDataMo}
            mode={mode}
          />
        </>
      )}
    </>
  )
}

export default HomePage