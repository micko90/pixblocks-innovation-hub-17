
import { Monitor, Users } from "lucide-react";

const Solutions = () => {
  return (
    <section id="solutions" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center mb-12">ROZWIĄZANIE</h2>
        
        {/* Platform */}
        <div className="mb-16 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 bg-pixblocks-purple p-8 text-white flex items-center justify-center">
              <Monitor size={120} />
            </div>
            <div className="md:w-3/5 p-8">
              <h3 className="text-2xl font-bold mb-4 text-pixblocks-dark">PLATFORMA PIXBLOCKS</h3>
              <p className="text-gray-700 mb-4">
                PixBlocks to coś więcej niż narzędzie edukacyjne – to cały ekosystem stworzony z myślą o rozwijaniu cyfrowej innowacyjności. Nasza autorska platforma zapewnia uczniom dostęp do unikalnego programu nauczania i światowej klasy treści, opartych na sprawdzonej metodologii, specjalnie zaprojektowanej dla dzieci i młodzieży w wieku od 7 do 18 lat.
              </p>
              <h4 className="text-lg font-semibold mb-2">Co wyróżnia naszą platformę?</h4>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                <li>Nauka dostosowana do wieku – materiały opracowane z myślą o uczniach szkół podstawowych i średnich.</li>
                <li>Zgodność z Podstawą Programową – w pełni zintegrowana z krajową podstawą programową.</li>
                <li>Różnorodność języków programowania – obejmuje programowanie blokowe, Pythona i inne języki.</li>
                <li>Zaawansowana analityka – dostarcza nauczycielom szczegółowe dane w czasie rzeczywistym.</li>
                <li>Motywująca grywalizacja – przekształca naukę w interaktywną przygodę.</li>
              </ul>
              <p className="text-gray-700 italic">
                Z PixBlocks nauka cyfrowych umiejętności to nie tylko teoria – to praktyczne mistrzostwo, które przygotowuje do sukcesu w XXI wieku.
              </p>
            </div>
          </div>
        </div>
        
        {/* Mentoring Program */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:order-2 md:w-2/5 bg-pixblocks-purple p-8 text-white flex items-center justify-center">
              <Users size={120} />
            </div>
            <div className="md:order-1 md:w-3/5 p-8">
              <h3 className="text-2xl font-bold mb-4 text-pixblocks-dark">PROGRAM MENTORSKI</h3>
              <p className="text-gray-700 mb-4">
                Choć platforma PixBlocks stanowi fundament naszej oferty, wierzymy, że to nauczyciele są prawdziwymi katalizatorami innowacji. Dlatego stworzyliśmy kompleksowy program szkoleniowy i mentoringowy, skierowany do całych Rad Pedagogicznych.
              </p>
              <h4 className="text-lg font-semibold mb-2">Przykładowe sesje webinarowe:</h4>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                <li>Wykorzystanie najnowszych technologii w klasie</li>
                <li>Integracja AI w celu wzbogacenia doświadczeń edukacyjnych</li>
                <li>Etyczne aspekty korzystania z technologii</li>
                <li>Tworzenie angażujących i dynamicznych lekcji</li>
              </ul>
              <p className="text-gray-700 italic">
                Dzięki udziałowi w tych sesjach na żywo nauczyciele mogą stale rozwijać swoje kompetencje i przekształcać swoje klasy w nowoczesne, innowacyjne środowiska nauki.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
