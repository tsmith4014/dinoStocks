import { Outlet } from 'react-router-dom'
import './App.css'
import { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import { userAPI } from './utilities'



function App() {
  const[user,setUser]= useState(null)

  const getInfo = async()=>{
    let token=localStorage.getItem("token")
    if (token){
      userAPI.defaults.headers.common["Authorization"] = `Token ${token}`
      let response= await userAPI.get("")
      setUser(response.data.username)
      console.log(token)
    }
  }
useEffect(()=>{
getInfo()
},[])

  return (
    <>
    <NavBar user={user} setUser={setUser}/>
    <Outlet context={{user,setUser}}/>
    
    </>
  )
}

export default App
