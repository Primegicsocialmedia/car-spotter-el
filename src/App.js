import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import DealershipPage from './pages/DealershipPage';
import DealershipsPage from './pages/DealershipsPage';  // New Dealerships page
import ContactPage from './pages/ContactsPage';  // New Contact page
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dealership/:id" element={<DealershipPage />} />
            <Route path="/dealerships" element={<DealershipsPage />} />  {/* Dealerships route */}
            <Route path="/contact" element={<ContactPage />} />  {/* Contact form route */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


