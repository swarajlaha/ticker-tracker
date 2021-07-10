import React from 'react'
import {
  InputGroup,
  FormControl,
  Button,
  ButtonGroup,
  DropdownButton,
  Dropdown,
} from 'react-bootstrap'
import { Link } from 'react-scroll'

const TickerInputBox = (props) => {
  return (
    <>
      <InputGroup className="mb-3">
        <FormControl
          value={props.ticker}
          aria-label="Ticker input box"
          aria-describedby="basic-addon2"
          onChange={(e) => props.tickerChangeHandler(e)}
        />
        <InputGroup.Append>
          <Button variant="outline-success" onClick={props.tickerAddHandler}>
            <b>Add</b>
          </Button>
          <DropdownButton
            as={ButtonGroup}
            title="Added Stocks"
            id="bg-nested-dropdown"
            variant="outline-info"
            drop="right"
          >
            &nbsp;<u>Added: {props.tickerData.length}</u>
            {props.tickerData.map((item) => (
              <Link activeClass="active" to={item.ticker} spy={true} smooth={true}>
                <Dropdown.Item eventKey="1">{item.ticker}</Dropdown.Item>
              </Link>
            ))}
          </DropdownButton>
        </InputGroup.Append>
      </InputGroup>
    </>
  )
}

export default TickerInputBox
