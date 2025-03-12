
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center mb-12">CENNIK</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-pixblocks-purple text-white">
                    <TableHead className="font-semibold text-white">Pakiet</TableHead>
                    <TableHead className="font-semibold text-white">0-100 Uczniów</TableHead>
                    <TableHead className="font-semibold text-white">101-300 Uczniów</TableHead>
                    <TableHead className="font-semibold text-white">301-500 Uczniów</TableHead>
                    <TableHead className="font-semibold text-white">Powyżej 501 Uczniów</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Platforma</TableCell>
                    <TableCell>Skontaktuj się</TableCell>
                    <TableCell>4500 zł brutto</TableCell>
                    <TableCell>6500 zł brutto</TableCell>
                    <TableCell>Skontaktuj się</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Mentoring</TableCell>
                    <TableCell>Skontaktuj się</TableCell>
                    <TableCell>3500 zł netto</TableCell>
                    <TableCell>5000 zł netto</TableCell>
                    <TableCell>Skontaktuj się</TableCell>
                  </TableRow>
                  <TableRow className="bg-gray-50">
                    <TableCell className="font-bold">Platforma + Mentoring</TableCell>
                    <TableCell>Skontaktuj się</TableCell>
                    <TableCell>5000 zł netto</TableCell>
                    <TableCell>7500 zł netto</TableCell>
                    <TableCell>Skontaktuj się</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div className="p-6">
              <p className="text-gray-700 text-sm">
                Każdy pakiet jest dostosowany do unikalnych potrzeb Twojej szkoły, zapewniając kompleksowe doświadczenie cyfrowej edukacji. Aby uzyskać szczegółowe informacje o cenach i możliwościach personalizacji, skontaktuj się z naszym zespołem.
              </p>
              <div className="mt-4 text-center">
                <Button 
                  className="bg-pixblocks-purple hover:bg-purple-700"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Skontaktuj się w sprawie oferty
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
