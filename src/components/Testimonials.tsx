
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    content: "Z aplikacji PixBlocks korzystam od 2020 roku. Doskonale sprawdzała się podczas nauczania zdalnego, obecnie wciąż wspiera mnie w pracy w zakresie nauczania programowania. Skonstruowana jest w przemyślany sposób, a zawarte w niej treści mają porządek pozwalający rozsądnie dozować uczniom kolejne zagadnienia. Nauka programowania z aplikacją PixBlocks przychodzi uczniom z reguły łatwo.",
    author: "Jolanta Olejniczak",
    position: "Szkoła podstawowa nr 2 w Obornikach Śląskich"
  },
  {
    content: "Aplikacji PixBlocks korzystam od kilku lat. Nauka programowania przychodzi uczniom bardzo łatwo, pracują z ogromnym zaangażowaniem. Nauczycielowi do gustu przypadnie możliwość sprawdzania postępów uczniów na własnym koncie czy przydzielania konkretnych zadań do wykonania. Kursy 14-18 pozwalają rozpocząć wspaniałą przygodę z językiem Python.",
    author: "Maria Rzadkowolska",
    position: "Szkoła podstawowa nr 205 w Łodzi"
  },
  {
    content: "Praca z aplikacją PixBlocks ułatwia nauczanie programowania w szkole, bardzo dobrze sprawdza się na lekcjach informatyki w klasach 4-6 i 7-8. Aplikacja jest przyjazna, łatwa w obsłudze – zarówno ze strony nauczyciela, jak i ucznia. Moi uczniowie bardzo chętnie wykonują zaproponowane w aplikacji zadania, a ja mam pewność, że realizuję podstawę programową w tym zakresie.",
    author: "Emilia Bukowska",
    position: "Szkoła Podstawowa w Kiszewie"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center mb-12">OPINIE</h2>
        
        <div className="relative py-10">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
            onSelect={(index) => setActiveIndex(index)}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="p-6 h-full flex flex-col border border-gray-200 hover:shadow-lg transition-shadow">
                      <div className="mb-4 text-pixblocks-purple">
                        <Quote size={32} />
                      </div>
                      <p className="text-gray-700 italic mb-6 flex-grow">{testimonial.content}</p>
                      <div>
                        <p className="font-semibold text-pixblocks-dark">{testimonial.author}</p>
                        <p className="text-gray-600 text-sm">{testimonial.position}</p>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex items-center justify-center mt-8">
              <CarouselPrevious className="relative static mr-2 bg-white border-pixblocks-purple text-pixblocks-purple hover:bg-pixblocks-purple hover:text-white" />
              <div className="flex gap-2 mx-4">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => document.querySelector<HTMLElement>(`.embla__slide:nth-child(${idx + 1})`)?.click()}
                    className={cn(
                      "w-3 h-3 rounded-full transition-all",
                      activeIndex === idx ? "bg-pixblocks-purple" : "bg-gray-300"
                    )}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
              <CarouselNext className="relative static ml-2 bg-white border-pixblocks-purple text-pixblocks-purple hover:bg-pixblocks-purple hover:text-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
