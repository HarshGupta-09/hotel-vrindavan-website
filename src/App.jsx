import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Rooms from "./pages/Rooms";
import Restaurant from "./pages/Restaurant";
import MarriageGarden from "./pages/MarriageGarden";
import BanquetHall from "./pages/BanquetHall";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";


function App() {
  return (
      <div>
    <Navbar/>
         <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/restaurant" element={<Restaurant />} />
      <Route path="/marriage-garden" element={<MarriageGarden />} />
      <Route path="/banquet-hall" element={<BanquetHall />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
      </div>
   
    
  );
}

export default App;
