import React, { useState, useEffect } from 'react'
import Marquee from 'react-fast-marquee'
import axios from 'axios'

const MainMarquee = () => {

  const [indexCPArr, setIndexCPArr] = useState([])

  const stockExIndex = '^NSEI,^BSESN,^AMZI,NDAQ,ETH-INR,BTC-INR'

  const config = {
    'api-key': process.env.REACT_APP_APIKEY
  }

  useEffect(() => {
    try {
      axios
        .get(
          `${process.env.REACT_APP_BASEURL}?tickers=${stockExIndex}`,
          { headers: config },
        )
        .then((res) => {
          let resData = res.data
          setIndexCPArr(resData)
        })
    } catch (e) {
      console.log(e)
    } finally {
    }
  }, [])

  let cpArr = []
  for(let i = 0; i < indexCPArr.length; i ++) {
    let lastEle = indexCPArr[i].data.length - 1
    cpArr.push(indexCPArr[i].data[lastEle].close)
  }
console.log(cpArr[4])
  return (
    <>
      <Marquee speed='70' pauseOnHover='true' style={{fontWeight: 'bold', fontSize: '1.2em', color: '#CACFD2'}} className='mt-3'>
        NSE: {Math.round(cpArr[0] * 100) / 100} | BSE: {Math.round(cpArr[1] * 100) / 100} | NYSE: {Math.round(cpArr[2] * 100) / 100} | NASDAQ: {Math.round(cpArr[3] * 100) / 100} | ETH-INR: {Math.round(cpArr[4] * 100) / 100} | BTC-INR: {Math.round(cpArr[5] * 100) / 100}
      </Marquee>
    </>
  )
}

export default MainMarquee