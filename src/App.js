import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Pages/Home";
import Construction from "./components/Pages/Construction";
import HomeImprovement from "./components/Pages/HomeImprovement";
import Offers from "./components/Pages/Offers";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="construction" element={<Construction />}/>
        <Route path="home-improvement" element={<HomeImprovement />}/>
        <Route path="offers" element={<Offers />}/>
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
