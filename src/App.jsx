import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './Components/NavBar';
import HomePage from './Components/Pages/HomePage';
import WalkthroughPage from './Components/Pages/WalkthroughPage';
import Model from './Components/Pages/Model';
import Footer from './Components/Footer';
import './App.css'

function App() {
  return (

    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/walkthrough" element={<WalkthroughPage />} />
        <Route path="/model" element={<Model />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
