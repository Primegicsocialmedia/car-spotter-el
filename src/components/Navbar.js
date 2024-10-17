import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {


  return (
    <nav className="bg-red-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          <Link to="/">Car Spotter</Link>
        </h1>
        <div className="flex space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/bargains" className="hover:underline">Bargains</Link> {/* New Bargain Link */}
          
       
        </div>
      </div>
    </nav>
  );
}
