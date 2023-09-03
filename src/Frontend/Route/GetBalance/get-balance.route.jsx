import { Outlet, Link } from 'react-router-dom'
import React, { useState } from 'react'
import useFetchDecision from '../../../Backend/useFetchDecision'
import applyRule from '../../../Backend/applyRule'
import requestDecision from '../../../Backend/requestDecision'
import Table from '../../Components/Table'
import Button from '../../Components/Button/button.component'
const GetBalance = () => {
  const dummysheet = [
    {
      year: 2020,
      month: 12,
      profitOrLoss: 250000,
      assetsValue: 1234,
    },
    {
      year: 2020,
      month: 11,
      profitOrLoss: 1150,
      assetsValue: 5789,
    },
    {
      year: 2020,
      month: 10,
      profitOrLoss: 2500,
      assetsValue: 22345,
    },
    {
      year: 2020,
      month: 9,
      profitOrLoss: -187000,
      assetsValue: 223452,
    },
  ]

  const {
    data: sheets,
    balanceSheetError,
    balanceSheetIsPending,
  } = useFetchDecision('http://localhost:3000/sheet')
  const {
    data: business,
    businessError,
    businessIsPending,
  } = useFetchDecision('  http://localhost:3000/business')

  const [isComplete, setIsComplete] = useState(false)
  const requestOutcome = () => {
    var preAssessment = applyRule(sheets, business)
    requestDecision(business, sheets, preAssessment)
    setIsComplete(true)
  }
  return (
    <div className='authentication-container'>
      <>
        {balanceSheetError && <div> {balanceSheetError}</div>}
        {balanceSheetIsPending && <div>Loading....</div>}
        {sheets && (
          <div>
            <p> Review Balance Sheet</p>
            <Table sheet={sheets} />
            <div class='submit-button'>
              {!isComplete && (
                <Button type='submit' onClick={requestOutcome}>
                  Submit Application
                </Button>
              )}
              {isComplete && (
                <Link to='/outcome'>
                  <Button type='submit'>Continue</Button>
                </Link>
              )}
            </div>
          </div>
        )}

        <div className='balanceSheet'>
          <h2>BalanceSheet will featch from The accounting provider.</h2>
          <p> Review Dummy Balance Sheet</p>
          <Table sheet={dummysheet} />
          <Link to='/outcome'>
            <Button type='submit'>Continue</Button>
          </Link>
        </div>
      </>
      <Outlet />
    </div>
  )
}

export default GetBalance
