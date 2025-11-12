import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/page"
import './App.css'
import CatalogPage from "./pages/catalog/page"
import AboutPage from "./pages/about/page"
import ContactPage from "./pages/contact/page"
import PartDetailPage from "./pages/catalog/[id]/page"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalo" element={<CatalogPage />} />
        <Route path="/abou" element={<AboutPage />} />
        <Route path="/contac" element={<ContactPage />} />
        <Route path="/catalog/:id" element={<PartDetailPage />} />
      </Routes>
    </Router>
  )
}

export default App
