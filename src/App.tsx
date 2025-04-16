import { Home } from "./page/home"
import "./App.css"
import camada from "./assets/Camada.png"

function App() {
  return (
    <div className="App">
      <div className="BackgroundDecorations">
        <img src={camada} alt="camada" className="CamadaImage" />
        <div className="BlueCircle topRight"></div>
        <div className="BlueCircle bottomLeft"></div>
      </div>
      <Home />
    </div>
  )
}

export default App
