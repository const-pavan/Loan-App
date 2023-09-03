import React from 'react'
import useFetchDecision from '../../../Backend/useFetchDecision'
import Button from '../Button/button.component'
import { Link } from 'react-router-dom'

const Outcome = () => {
  const {
    data: desicions,
    desicionError,
    desicionIsPending,
  } = useFetchDecision('http://localhost:3000/desicions')
  const dummyDecision = [
    {
      businessName: 'RK',
      yearEstablished: 2020,
      month: 12,
      netProfitOrLoss: 250000,
      preAssessment: 100,
    },
  ]
  return (
    <>
      {desicionError && <div> {desicionError}</div>}
      {desicionIsPending && <div>Loading....</div>}
      {desicions && (
        <div className='outcome'>
          <p className='title'> Final Outcome</p>
          <div className='desicion'>
            {desicions.map((desicion) => (
              <div className='info'>
                <div className='businessInfo'>
                  <h1>Business Details</h1>
                  <p>Business Name = {desicion.businessName}</p>
                  <p>Year Established = {desicion.yearEstablished}</p>
                  <p>Summary of Profit or Loss = {desicion.netProfitOrLoss}</p>
                </div>
                <p>PreAssessment Value = {desicion.preAssessment}</p>
                <br />
              </div>
            ))}
          </div>
          <div class='submit-button'>
            <Link to='/home'>
              <Button type='submit'>OK</Button>
            </Link>
          </div>
        </div>
      )}
      <h2>Decision engine will give out come</h2>
      {dummyDecision && (
        <div>
          <h3 className='title'> Dummy Outcome</h3>
          <div className='desicion'>
            {dummyDecision.map((desicion) => (
              <div className='info'>
                <div className='businessInfo'>
                  <h1>Business Details</h1>
                  <p>Business Name = {desicion.businessName}</p>
                  <p>Year Established = {desicion.yearEstablished}</p>
                  <p>Summary of Profit or Loss = {desicion.netProfitOrLoss}</p>
                </div>
                <p>PreAssessment Value = {desicion.preAssessment}</p>
                <br />
              </div>
            ))}
          </div>
          <div class='submit-button'>
            <Link to='/home'>
              <Button type='submit'>OK</Button>
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
export default Outcome
