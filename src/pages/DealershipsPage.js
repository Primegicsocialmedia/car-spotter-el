const dealerships = [
    { id: 1, name: 'Dealership 1', description: 'Top rated dealership' },
    { id: 2, name: 'Dealership 2', description: 'Best deals in town' },
    { id: 2, name: 'Dealership 2', description: 'Best deals in town' },
    { id: 2, name: 'Dealership 2', description: 'Best deals in town' },
    { id: 2, name: 'Dealership 2', description: 'Best deals in town' },
    // Add more dealership objects here
  ];
  
  export default function DealershipsPage() {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Dealerships</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dealerships.map((dealership) => (
            <div key={dealership.id} className="border p-6 rounded-md hover:shadow-lg transition transform hover:scale-105">
              <h2 className="text-xl font-bold">{dealership.name}</h2>
              <p>{dealership.description}</p>
              <button
                onClick={() => window.location.href = `/dealership/${dealership.id}`}
                className="bg-white text-red-500 px-4 py-2 mt-4 rounded"
              >
                View Cars
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  