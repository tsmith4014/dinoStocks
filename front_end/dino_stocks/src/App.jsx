import { Outlet } from 'react-router-dom'
import './App.css'
import { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import { userAPI } from './utilities'



function App() {
  const [user, setUser] = useState(null)
  const [portfolioValue, setPortfolioValue] = useState()
  const [buyingPower, setBuyingPower] = useState()

  const getInfo = async () => {
    let token = localStorage.getItem("token")
    if (token) {
      userAPI.defaults.headers.common["Authorization"] = `Token ${token}`
      let response = await userAPI.get("")
      let currentPortfolioValue = 0
      for (let share of response.data.portfolio.shares) {
        currentPortfolioValue += share.current_price * share.shares
      }
      setPortfolioValue(currentPortfolioValue)
      setBuyingPower(response.data.portfolio.money)
      setUser(response.data.username)
    }
  }
  useEffect(() => {
    getInfo()
  }, [])

  return (
    <>
      <NavBar user={user} setUser={setUser} portfolioValue={portfolioValue} buyingPower={buyingPower} />
      <Outlet context={{ user, setUser }} />

    </>
  )
}

export default App
