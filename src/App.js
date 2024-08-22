import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { WeatherProvider } from "./context/WeatherContext";
import LocationDetails from "./pages/LocationDetails";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";


function App() {
  return (
  <WeatherProvider>
  <Router>
    <div className="flex flex-col justify-between h-screen">
      <Navbar/>
      <main className="container mx-auto px-3 pb-12">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<About/>}></Route>
          <Route path='/notfound' element={<NotFound/>} />
          <Route path="/search" element={<SearchPage/>}/>
          <Route path='/*' element={<NotFound/>} />
          <Route path="/location/:lat/:lon" element={<LocationDetails/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  </Router>  
  </WeatherProvider> 
  );
}

export default App;
