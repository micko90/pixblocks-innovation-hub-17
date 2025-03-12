
const Clients = () => {
  // Placeholder for client logos
  const clients = Array(8).fill("https://via.placeholder.com/150x80?text=Logo");

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center mb-8">KLIENCI</h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Zaufały nam szkoły i gminy z całej Polski. Dołącz do naszej społeczności edukacyjnej!
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 opacity-70">
          {clients.map((logo, index) => (
            <div key={index} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
              <img src={logo} alt={`Client ${index + 1}`} className="max-h-16" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
