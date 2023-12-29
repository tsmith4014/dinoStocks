import { useParams } from "react-router-dom"
import { useEffect,useState } from "react"
import axios from "axios"

const StockDetailPage =() =>{
    const [data, setData]=useState({})
    const {id}=useParams()

    const fetchStockData = async ()=>{
        try {
        let response = await axios.get(`http://127.0.0.1:8000/api/v1/stockmarket/${id}/`)
        setData(response.data)
        }
     catch (error) {
      console.error("Error fetching portfolio:", error);
    }}
    useEffect(() => {
        console.log(id)
      fetchStockData();
    }, []); 
     
    console.log(data)


    return(
        <>
        <h1>Stock Detail Page</h1>
        </>
    )
}

export default StockDetailPage