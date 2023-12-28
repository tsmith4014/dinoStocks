import { Outlet } from 'react-router-dom'
import './App.css'
import { useEffect, useState } from 'react'
import NavBar from './components/NavBar'



function App() {
  const[user,setUser]= useState(null)

  const getInfo = async()=>{
    let token=localStorage.getItem("token")
    if (token){
      api.defaults.headers.common["Authorization"] = `Token ${token}`
      let response= await api.get("info/")
      setUser(response.data.username)
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
