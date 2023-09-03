import './App.css'
import { Routes, Route } from 'react-router-dom'
import Authentication from './Frontend/Route/Authentication/authentication.route'
import Navigation from './Frontend/Route/Navigation/navigation.route'
import Home from './Frontend/Route/Home/home.route'
import LoanApplication from './Frontend/Route/LoanApplication/loan-application.route'
import GetBalance from './Frontend/Route/GetBalance/get-balance.route'
import FinalOutCome from './Frontend/Route/Outcome/finaloutcome.route'
function App() {
  return (
    <Routes>
      <Route index element={<Authentication />} />
      <Route path='/' element={<Navigation />}>
        <Route path='home' element={<Home />} />
        <Route path='form' element={<LoanApplication />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='balancesheet' element={<GetBalance />} />
        <Route path='outcome' element={<FinalOutCome />} />
      </Route>
    </Routes>
  )
}

export default App
