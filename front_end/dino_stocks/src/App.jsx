import { Outlet } from 'react-router-dom'
import './App.css'
import { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import { userAPI } from './utilities'



function App() {
  const [user, setUser] = useState(null)
  const [userData, setUserData] = useState()
  const [portfolioValue, setPortfolioValue] = useState()
  const [buyingPower, setBuyingPower] = useState()

  const refreshUserData = async () => {
    await getInfo(); // This will fetch the latest user data and update userData
    getValues(); // This will update portfolioValue and buyingPower based on the latest userData
  };

  const getInfo = async () => {
    let token = localStorage.getItem("token")
    if (token) {
      userAPI.defaults.headers.common["Authorization"] = `Token ${token}`
      let response = await userAPI.get("")
      console.log("now has a user")
      setUserData(response.data)
      setUser(response.data.email)
    }
  }

  const getValues = () => {
    if (userData) {
      let currentPortfolioValue = 0
      for (let share of userData.portfolio.shares) {
        currentPortfolioValue += share.current_price * share.shares
      }
      setPortfolioValue(currentPortfolioValue)
      setBuyingPower(userData.portfolio.money)
    }
  }
  useEffect(() => {
    getInfo()
  }, [])

  useEffect(() => {
    getValues()
  }, [userData])

  return (
    <>

      <NavBar user={user} setUser={setUser} portfolioValue={portfolioValue} buyingPower={buyingPower} />
      <Outlet context={{ user, setUser, portfolioValue, refreshUserData }} />

    </>
  )
}

export default App
