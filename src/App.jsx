import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home.jsx";
import Favorites from "./pages/Favorites.jsx";
import NotFound from "./pages/NotFound.jsx";
import DetailProduct from './pages/DetailProduct.jsx';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:book" element={<DetailProduct />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
