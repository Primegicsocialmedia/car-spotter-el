import { useState } from 'react';
import vehicle1 from '../assets/vehicle1.jpg';  // Add vehicle images in src/assets folder
import vehicle2 from '../assets/vehicle2.jpg';
import vehicle3 from '../assets/vehicle3.jpg';

const dealerships = [
  { id: 1, name: 'Nates Car Sales', image: vehicle1 },
  { id: 2, name: 'Queesns auto', image: vehicle2 },
  { id: 3, name: 'Max Car Sales', image: vehicle3 },
  { id: 3, name: 'Max Car Sales', image: vehicle3 },
  { id: 3, name: 'Max Car Sales', image: vehicle3 },
  { id: 3, name: 'Max Car Sales', image: vehicle3 },
  { id: 3, name: 'Max Car Sales', image: vehicle3 },
  { id: 3, name: 'Max Car Sales', image: vehicle3 },
  { id: 3, name: 'Max Car Sales', image: vehicle3 },
  { id: 3, name: 'Max Car Sales', image: vehicle3 },
  { id: 3, name: 'Max Car Sales', image: vehicle3 },
  { id: 3, name: 'Max Car Sales', image: vehicle3 },
  // Add 10 dealerships here
];

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDealerships = dealerships.filter((dealership) =>
    dealership.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <input
        type="text"
        placeholder="Search for Dealerships"
        className="border p-2 w-full mb-4"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDealerships.map((dealership) => (
          <div
            key={dealership.id}
            className="border p-6 rounded-md hover:shadow-lg transition transform hover:scale-105 animate-slideIn"
            onClick={() => window.location.href = `/dealership/${dealership.id}`}
          >
            <img src={dealership.image} alt={dealership.name} className="w-full h-40 object-cover rounded-md mb-4" />
            <h2 className="text-2xl font-bold">{dealership.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
