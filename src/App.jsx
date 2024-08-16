import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home.jsx";
import Search from "./pages/Search.jsx";
import Favorites from "./pages/Favorites.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
