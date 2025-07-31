import React from 'react';

const HomePage: React.FC = () => {
  const sections = [
    {
      title: "Primera Generación",
      description: "Descubre los 150 Pokémon originales de Kanto que iniciaron esta increíble aventura. Desde Bulbasaur hasta Mew, explora las criaturas que capturaron los corazones de millones de entrenadores alrededor del mundo.",
      image: "public/first-generation.jpg"
    },
    {
      title: "Historia",
      description: "Sumérgete en la rica historia del mundo Pokémon, desde sus humildes comienzos en 1996 hasta convertirse en la franquicia de medios más exitosa de todos los tiempos. Conoce cómo Satoshi Tajiri creó este universo fantástico.",
      image: "/public/history.jpg"
    },
    {
      title: "Pokémones Iniciales",
      description: "Conoce a Bulbasaur, Charmander y Squirtle, los tres compañeros iniciales que han acompañado a entrenadores novatos en su primera aventura. Cada uno representa un tipo elemental diferente y una personalidad única.",
      image: "public/collection-pokemon-all-removebg.png"
    },
    {
      title: "Legendarios",
      description: "Explora los míticos Pokémon legendarios como Articuno, Zapdos, Moltres, Mew y Mewtwo. Estas criaturas extraordinarias poseen poderes únicos y son consideradas los más raros y poderosos de todos.",
      image: "public/mythical-creatures-banners-vertical.jpg"
    }
  ];

  return (
    <div className="pokemon-bg min-h-screen">
      <div className="pokemon-overlay min-h-screen py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="section-card rounded-2xl p-8 shadow-2xl">
            <div className="space-y-12">
              {sections.map((section, index) => (
                <div 
                  key={section.title}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className="flex-1 space-y-4">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                      {section.title}
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                  
                  <div className="flex-1 lg:max-w-md">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-64 object-cover bg-[#22bf66] rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;