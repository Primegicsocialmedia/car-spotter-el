import { useParams } from 'react-router-dom';

const cars = [
  { id: 1, name: 'Car 1', price: '$10,000', dealershipId: 1 },
  { id: 2, name: 'Car 2', price: '$15,000', dealershipId: 1 },
  { id: 3, name: 'Car 2', price: '$15,000', dealershipId: 2 },
  { id: 4, name: 'Car 2', price: '$15,000', dealershipId: 2 },
  { id: 5, name: 'Car 2', price: '$15,000', dealershipId: 3 },
  // Add 10 cars per dealership
];

export default function DealershipPage() {
  const { id } = useParams();
  const dealershipCars = cars.filter(car => car.dealershipId === Number(id));

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Cars Available</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dealershipCars.map((car) => (
          <div key={car.id} className="border p-6 rounded-md hover:shadow-lg transition transform hover:scale-105">
            <h2 className="text-xl font-bold">{car.name}</h2>
            <p>{car.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
