import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import Aboutus from "./pages/Aboutus"
import Shop from "./pages/Shop"
import Contact from "./pages/Contact"
import ProductPage from "./pages/ProductPage"
import WeatherPage from "./pages/WeatherPage"

const App = () => {
  return (
    <div className="">
      <Header />
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/aboutus" element={< Aboutus />} />
          <Route path="/shop" element={< Shop />} />
          <Route path="/contact" element={< Contact />} />
          <Route path="/weather" element={< WeatherPage />} />
          <Route path="/products/:id" element={< ProductPage />} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App