
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen bg-hero-pattern bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-b from-pixblocks-dark/70 to-pixblocks-dark/90"></div>
      <div className="relative h-full container mx-auto px-4 md:px-6 flex flex-col justify-center items-center text-center">
        <div className="animate-fade-up opacity-0" style={{ animationDelay: "0.2s" }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto">
            Wyposażamy Kolejne Pokolenia w <span className="text-pixblocks-purple">Cyfrowe Mistrzostwo</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Innowacyjna platforma edukacyjna, która rewolucjonizuje naukę programowania i rozwija cyfrowe kompetencje.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-pixblocks-purple hover:bg-purple-700 text-white"
              onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Poznaj nasze rozwiązania
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Skontaktuj się z nami
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full bg-white/10 text-white hover:bg-white/20"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ChevronDown size={24} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
