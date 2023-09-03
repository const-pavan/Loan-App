const requestDecision = (business, sheets, preAssessment) => {
  var desicions = null
  var netProfitOrLoss = 0
  sheets.map((sheet) => {
    netProfitOrLoss = netProfitOrLoss + sheet.profitOrLoss
  })
  business.map((business) => {
    var businessName = business.businessName
    var yearEstablished = business.yearEstablished
    desicions = {
      businessName,
      yearEstablished,
      netProfitOrLoss,
      preAssessment,
    }
  })
  fetch('http://localhost:3000/desicions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(desicions),
  }).then(() => {
    console.log('Added')
  })
}

export default requestDecision
