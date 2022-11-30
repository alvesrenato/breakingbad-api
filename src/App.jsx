import { BrowserRouter } from "react-router-dom"
import { Header } from "./components/Header/Index"
import { Router } from "./Router"
import "./global.css"
import { Footer } from "./components/Footer/Index"
function App() {
  

  return (
    <BrowserRouter>
        <Header />
        <Router />
        <Footer />
    </BrowserRouter>
  )
}

export default App
