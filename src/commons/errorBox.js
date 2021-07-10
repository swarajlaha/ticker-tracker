import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'

const ErrorBox = ({ showStatus, wrongTicker }) => {
  const [show, setShow] = useState(showStatus);

  return (
    <>
      {show && <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <p>
         Invalid ticker <b>{wrongTicker}</b> added. Please remove!
        </p>
      </Alert>}
    </>
  )
}

export default ErrorBox