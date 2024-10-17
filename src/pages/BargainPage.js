import { useState } from 'react';
import vehicle1 from '../assets/vehicle1.jpg';
import vehicle2 from '../assets/vehicle2.jpg';
import vehicle3 from '../assets/vehicle3.jpg';
import vehicle4 from '../assets/vehicle4.jpg';
import vehicle5 from '../assets/vehicle5.jpg';
import additionalPhoto1 from '../assets/additional1.jpg';  // Add some additional photos
import additionalPhoto2 from '../assets/additional2.jpg';
import additionalPhoto3 from '../assets/additional3.jpg';

const bargainCars = [
  {
    id: 1, 
    name: 'Bargain Car 1', 
    price: 8500, 
    year: 2020, 
    description: 'A sleek, fuel-efficient car with a modern design.', 
    image: vehicle1, 
    additionalImages: [additionalPhoto1, additionalPhoto2, additionalPhoto3],
  },
  {
    id: 2, 
    name: 'Bargain Car 2', 
    price: 8000, 
    year: 2019, 
    description: 'Compact car with low mileage and great fuel economy.', 
    image: vehicle2, 
    additionalImages: [additionalPhoto1, additionalPhoto2, additionalPhoto3],
  },
  // Add more cars similarly
];

export default function BargainPage() {
  const [selectedCar, setSelectedCar] = useState(null);

  const toggleCarInfo = (carId) => {
    setSelectedCar(selectedCar === carId ? null : carId);  // Toggle the clicked car's info
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-extrabold text-center mb-6">
        <span className="text-yellow-400">🔥 BARGAINS 🔥</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bargainCars.map((car) => (
          <div key={car.id} className="border p-6 rounded-md shadow-lg hover:shadow-xl transition transform hover:scale-105">
            <img src={car.image} alt={car.name} className="w-full h-40 object-cover mb-4 rounded" />
            <h2 className="text-xl font-bold">{car.name}</h2>
            <p>Year: {car.year}</p>
            <p>Price: <span className="text-red-500 font-bold">${car.price}</span></p>
            <button
              className="text-blue-500 underline mt-4"
              onClick={() => toggleCarInfo(car.id)}
            >
              {selectedCar === car.id ? 'Hide Details' : 'View More Details'}
            </button>

            {selectedCar === car.id && (
              <div className="mt-4">
                <p className="text-gray-600 mb-4">{car.description}</p>

                {/* Additional photos */}
                <div className="grid grid-cols-3 gap-2">
                  {car.additionalImages.map((image, idx) => (
                    <img
                      key={idx}
                      src={image}
                      alt={`Additional ${idx + 1}`}
                      className="w-full h-24 object-cover rounded"
                    />
                  ))}
                </div>

                {/* Text area for more details */}
                <textarea
                  className="w-full mt-4 p-2 border rounded-md"
                  rows="4"
                  placeholder="Additional vehicle information or notes..."
                ></textarea>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
