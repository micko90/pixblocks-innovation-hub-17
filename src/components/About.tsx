
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center">O NAS</h2>
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-md">
            <h3 className="section-subtitle text-center mb-6">
              WYPOSAŻAMY KOLEJNE POKOLENIA W CYFROWE MISTRZOSTWO
            </h3>
            <p className="text-gray-700 mb-6">
              W PixBlocks wierzymy, że umiejętności programowania i posługiwania się technologiami są kluczowe dla sukcesu we współczesnym świecie. Jako nowoczesna firma EdTech, naszą misją jest wspieranie uczniów i nauczycieli w zdobywaniu cyfrowych kompetencji niezbędnych do odnalezienia się w dynamicznej rzeczywistości XXI wieku. Współpracujemy ze szkołami, aby edukacja nie tylko spełniała aktualne wymagania, ale także była gotowa na wyzwania przyszłości.
            </p>
            <p className="text-gray-700">
              Nasza autorska platforma PixBlocks rewolucjonizuje lekcje informatyki, oferując dynamiczne i praktyczne podejście do nauki programowania. Ponadto prowadzimy kompleksowe programy mentoringowe i szkoleniowe dla nauczycieli wszystkich przedmiotów, zapewniając im pewność w integrowaniu technologii z programem nauczania. To holistyczne podejście pobudza innowacyjność i rozwija cyfrowe umiejętności niezbędne do kształtowania przyszłości.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
