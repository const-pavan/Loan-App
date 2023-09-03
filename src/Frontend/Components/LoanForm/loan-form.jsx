import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/button.component'
import FormInput from '../FormInput/form-input.component'
const LoanForm = () => {
  const [businessName, setBusinessName] = useState('')
  const [yearEstablished, setYearEstablished] = useState('')
  const [loanAmount, setLoanAmount] = useState('')
  const [accountProvider, setAccountProvider] = useState('Xero')
  const [isComplete, setIsComplete] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const business = {
      businessName,
      yearEstablished,
      loanAmount,
      accountProvider,
    }

    fetch('http://localhost:3000/business', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(business),
    }).then(() => {
      console.log('Added')
      setIsComplete(true)
    })
  }

  return (
    <div className='sign-up-container'>
      <div className='group'>
        <h2>Loan Application</h2>
        <form class='loanApplication' onSubmit={handleSubmit}>
          <div class='businessName'>
            <FormInput
              className='form-input'
              type='text'
              required
              placeholder='Name of Business'
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
            />
          </div>
          <div class='yearEstablished'>
            <FormInput
              className='form-input'
              required
              type='number'
              placeholder='Year Established'
              value={yearEstablished}
              onChange={(e) => setYearEstablished(e.target.value)}
            />
          </div>
          <div class='loanAmount'>
            <FormInput
              type='number'
              className='form-input'
              required
              placeholder='Enter loan amount'
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
            />
          </div>
          <div class='accountProvider'>
            <label>Select an Accounting provider</label>
            <br />
            <select
              class='select'
              className='form-input'
              value={accountProvider}
              onChange={(e) => setAccountProvider(e.target.value)}
            >
              <option value='0'>Xero</option>
              <option value='1'>MYOB</option>
            </select>
          </div>
          <div class='buttons-container'>
            {!isComplete && (
              <Button type='submit'>Request Balance Sheet</Button>
            )}
            {isComplete && (
              <Link to='/balanceSheet'>
                <Button type='submit'>Get BalanceSheet</Button>
              </Link>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}
export default LoanForm
