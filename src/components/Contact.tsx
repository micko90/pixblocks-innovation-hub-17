
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Formularz wysłany",
        description: "Dziękujemy za kontakt. Odezwiemy się wkrótce!",
        variant: "default",
      });
      setFormData({
        name: "",
        email: "",
        organization: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-pixblocks-dark text-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">KONTAKT</h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Gotowy na kolejny krok? Wypełnij formularz poniżej lub skontaktuj się bezpośrednio z naszym Key Account Managerem, aby uzyskać spersonalizowaną pomoc.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-white/10 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6 text-pixblocks-yellow">Formularz kontaktowy</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Imię i nazwisko
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                  placeholder="Jan Kowalski"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                  placeholder="jan.kowalski@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="organization" className="block text-sm font-medium mb-2">
                  Szkoła/Organizacja
                </label>
                <Input
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                  placeholder="Szkoła Podstawowa nr 1"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Wiadomość
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 min-h-[120px]"
                  placeholder="Treść wiadomości..."
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-pixblocks-yellow hover:bg-yellow-500 text-pixblocks-dark"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Wysyłanie..." : "Wyślij"}
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-pixblocks-yellow">Kontakt bezpośredni</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-pixblocks-purple p-3 rounded-full mr-4">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Patrycja Gawryś</h4>
                    <p className="text-gray-300">Key Account Manager</p>
                    <p className="text-white mt-1">Tel: +48 882 631 870</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-pixblocks-purple p-3 rounded-full mr-4">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <p className="text-white mt-1">patrycja.gawrys@pixblocks.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-white/10 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">PixBlocks – Partner Edukacyjny programu „Programowanie Nasz Drugi Język"</h3>
              <p className="text-gray-300 text-sm mb-4">
                PixBlocks z dumą pełni rolę oficjalnego partnera edukacyjnego inicjatywy „Programowanie Nasz Drugi Język". W ramach tego przełomowego programu od sierpnia 2024 roku pomogliśmy 278 szkołom wdrożyć programowanie jako kluczową kompetencję.
              </p>
              <a 
                href="https://razna120lat.pl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-pixblocks-yellow hover:underline text-sm flex items-center"
              >
                Odkryj więcej o tej innowacyjnej inicjatywie
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
