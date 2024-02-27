import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import descriptions from "../dinoDescriptions.jsx"


const dinoImages = {
  "MICRO": "/microraptorcute.jpg",
  "PACHY": "/pachy.jpg",
  "CORY": "/cory.jpg",
  "PTERO": "/ptera.jpg",
  "PLESI": "/pleis.jpg",
  "DILO": "/dilop.jpg",
  "IGUA": "/iguanadon2.jpg",
  "PARA": "/Parasaurolophus.jpg",
  "TRI": "/tricera.jpg",
  "VELO": "/veloc.jpg",
  "SPINO": "/spino.jpg",
  "DEINO": "/Deinonychus.jpg",
  "TREX": "/trex2.jpg",
  "BRACH": "/brachia.jpg",
  "ARCH": "/Archaeopteryx.jpg",
  "ALLO": "/Allosaurus.jpg",
  "STEGO": "/stego.jpg",
  "APTO": "/Apatosaurus.jpg",
  "CARNO": "/Carnotaurus.jpg",
  "ANKY": "/Ankylosaurus.jpg"
}


const StockDetailPage = () => {
  const [data, setData] = useState({})
  const { id } = useParams()

  const fetchStockData = async () => {
    try {
      let response = await axios.get(`/api/v1/stockmarket/${id}/`)
      setData(response.data)
    }
    catch (error) {
      console.error("Error fetching portfolio:", error);
    }
  }
  useEffect(() => {
    fetchStockData();
  }, []);



  return (
    <div className='detail-container'>
      <h1 className="title-dino">{data.name}</h1>
      <div className="content-container">
        <img className='image-dino' src={dinoImages[data.dino_ticker]} />
        <div>
          <p className="description-dino">{descriptions[data.dino_ticker]}</p>
          <div className='iframe-container'>
            <h3 id="dino-ticker">{data.dino_ticker}</h3>
            <iframe className="iframe-dino"
              referrerPolicy="origin"
              src={`https://jika.io/embed/area-chart?symbol=${data.ticker}&selection=one_year&closeKey=close&graphColor=1652f0&textColor=161c2d&backgroundColor=FFFFFF&fontFamily=Nunito`} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StockDetailPage