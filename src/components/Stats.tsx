
import { Users, BookOpen, CheckCircle } from "lucide-react";

const Stats = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center mb-12">PIXBLOCKS W LICZBACH</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm text-center transition-transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <Users size={48} className="text-pixblocks-purple" />
            </div>
            <div className="stat-number">68 420</div>
            <h3 className="font-semibold text-xl mb-2">Uczniów</h3>
            <p className="text-gray-600">Inspirowanie przyszłych innowatorów i liderów technologii.</p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm text-center transition-transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <BookOpen size={48} className="text-pixblocks-purple" />
            </div>
            <div className="stat-number">824</div>
            <h3 className="font-semibold text-xl mb-2">Nauczycieli</h3>
            <p className="text-gray-600">Wspieranie edukatorów w prowadzeniu dynamicznych, cyfrowych lekcji.</p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm text-center transition-transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <CheckCircle size={48} className="text-pixblocks-purple" />
            </div>
            <div className="stat-number">1 500 000+</div>
            <h3 className="font-semibold text-xl mb-2">Wykonanych Zadań</h3>
            <p className="text-gray-600">Praktyczna, angażująca nauka, która naprawdę ma znaczenie.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
