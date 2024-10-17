import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import DealershipPage from './pages/DealershipPage';

import ContactPage from './pages/ContactsPage';
import BargainPage from './pages/BargainPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-r from-red-400 to-white"> {/* Gradient Background */}
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dealership/:id" element={<DealershipPage />} />
          
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/bargains" element={<BargainPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

