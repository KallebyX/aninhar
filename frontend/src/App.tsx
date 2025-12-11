import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import PreventingAccidents from './pages/PreventingAccidents'
import FirstWeek from './pages/FirstWeek'
import Breastfeeding from './pages/Breastfeeding'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/amamentacao" element={<Breastfeeding />} />
            <Route path="/prevencao-acidentes" element={<PreventingAccidents />} />
            <Route path="/primeira-semana" element={<FirstWeek />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
