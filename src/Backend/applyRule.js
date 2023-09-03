
const applyRule =(sheets,business)=>{
    var preAssessment = 20
        var netProfitOrLoss=0, netAssestsValue=0
        var inProfit = false
        var loanAmount = 0
        var count =0
    
        business.map((business)=>{
            loanAmount = parseInt(business.loanAmount)
        })
        sheets.map((sheet)=>{
            netProfitOrLoss = netProfitOrLoss + sheet.profitOrLoss
            netAssestsValue = (netAssestsValue + sheet.assetsValue)
            if (sheet.month>0 && sheet.month<=12){
                inProfit = true
            }
            count++
        })
        var averageAssetsValue = netAssestsValue/count
        if(inProfit){    
            if(netProfitOrLoss>0 && !(averageAssetsValue>loanAmount)){
                    preAssessment = 60
                }
            else if (averageAssetsValue>loanAmount){
                    preAssessment = 100
                }
        }
            
    return preAssessment
}

export default applyRule