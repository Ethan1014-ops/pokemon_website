import React, { useState } from 'react';
import { Target, MapPin, Clock, Star, X } from 'lucide-react';

const CatchGuide: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const catchItems = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Pokéballs",
      description: "Dispositivos esféricos para capturar Pokémon salvajes",
      details: {
        types: [
          { name: "Pokéball", rate: "1x", description: "La Pokéball estándar. Efectividad básica para capturar Pokémon." },
          { name: "Super Ball", rate: "1.5x", description: "Mayor probabilidad de captura que la Pokéball normal." },
          { name: "Ultra Ball", rate: "2x", description: "La Pokéball más efectiva disponible comercialmente." },
          { name: "Master Ball", rate: "100%", description: "Captura cualquier Pokémon sin fallar. Extremadamente rara." }
        ],
        tips: ["Debilita al Pokémon primero", "Usa movimientos que no lo derroten", "Las Pokéballs son más efectivas por la noche"]
      }
    },
    {
      icon: <MapPin className="w-8 h-8 text-green-600" />,
      title: "Ubicaciones Especiales",
      description: "Lugares específicos donde encontrar Pokémon únicos",
      details: {
        types: [
          { name: "Safari Zone", rate: "Variado", description: "Zona especial con Pokémon raros. Solo se pueden usar Safari Balls." },
          { name: "Cuevas", rate: "Común", description: "Pokémon de tipo Roca y algunos raros como Zubat." },
          { name: "Agua", rate: "Común", description: "Pokémon acuáticos. Necesitas Surf o Caña." },
          { name: "Hierba Alta", rate: "Común", description: "La mayoría de Pokémon salvajes aparecen aquí." }
        ],
        tips: ["Safari Zone para Pokémon raros", "Rutas específicas para cada especie", "Algunos solo aparecen en ciertas horas"]
      }
    },
    {
      icon: <Clock className="w-8 h-8 text-yellow-600" />,
      title: "Momento Perfecto",
      description: "El timing correcto aumenta las probabilidades de captura",
      details: {
        types: [
          { name: "HP Bajo", rate: "+50%", description: "Pokémon con HP rojo son más fáciles de capturar." },
          { name: "Estados Alterados", rate: "+30%", description: "Dormir, paralizar o congelar facilita la captura." },
          { name: "Bayas", rate: "+20%", description: "Las bayas calman al Pokémon y mejoran las probabilidades." },
          { name: "Hora del Día", rate: "Variado", description: "Algunos Pokémon son más activos de día o de noche." }
        ],
        tips: ["Estados alterados facilitan la captura", "HP bajo aumenta probabilidades", "Usa bayas para calmar al Pokémon"]
      }
    },
    {
      icon: <Star className="w-8 h-8 text-blue-500" />,
      title: "Pokémon Legendarios",
      description: "Estrategias especiales para los Pokémon más poderosos",
      details: {
        types: [
          { name: "Preparación", rate: "Esencial", description: "Lleva muchas Ultra Balls y objetos curativos." },
          { name: "Movimientos de Estado", rate: "Crítico", description: "Dormir o paralizar es fundamental." },
          { name: "Falso Golpe", rate: "Recomendado", description: "Deja al Pokémon con 1 HP sin derrotarlo." },
          { name: "Paciencia", rate: "Infinita", description: "Los legendarios pueden tomar muchos intentos." }
        ],
        tips: ["Lleva muchas Ultra Balls", "Usa movimientos de estado", "Guarda antes del encuentro"]
      }
    }
  ];

  const pokemonLocations = [
    { id: 1, name: "Bulbasaur", location: "Pueblo Paleta", method: "Inicial del Prof. Oak", pokeball: "Cualquiera", rate: "100%" },
    { id: 4, name: "Charmander", location: "Pueblo Paleta", method: "Inicial del Prof. Oak", pokeball: "Cualquiera", rate: "100%" },
    { id: 7, name: "Squirtle", location: "Pueblo Paleta", method: "Inicial del Prof. Oak", pokeball: "Cualquiera", rate: "100%" },
    { id: 10, name: "Caterpie", location: "Bosque Verde", method: "Hierba alta", pokeball: "Pokéball", rate: "45%" },
    { id: 13, name: "Weedle", location: "Bosque Verde", method: "Hierba alta", pokeball: "Pokéball", rate: "45%" },
    { id: 16, name: "Pidgey", location: "Rutas 1-3", method: "Hierba alta", pokeball: "Pokéball", rate: "55%" },
    { id: 19, name: "Rattata", location: "Rutas 1-4", method: "Hierba alta", pokeball: "Pokéball", rate: "55%" },
    { id: 21, name: "Spearow", location: "Rutas 22-23", method: "Hierba alta", pokeball: "Pokéball", rate: "40%" },
    { id: 23, name: "Ekans", location: "Rutas 4, 8-11", method: "Hierba alta", pokeball: "Pokéball", rate: "35%" },
    { id: 25, name: "Pikachu", location: "Bosque Verde", method: "Hierba alta (raro)", pokeball: "Super Ball", rate: "5%" },
    { id: 27, name: "Sandshrew", location: "Rutas 4, 8-11", method: "Hierba alta", pokeball: "Pokéball", rate: "35%" },
    { id: 29, name: "Nidoran♀", location: "Rutas 22-23", method: "Hierba alta", pokeball: "Pokéball", rate: "50%" },
    { id: 32, name: "Nidoran♂", location: "Rutas 22-23", method: "Hierba alta", pokeball: "Pokéball", rate: "50%" },
    { id: 35, name: "Clefairy", location: "Monte Moon", method: "Cueva", pokeball: "Super Ball", rate: "10%" },
    { id: 37, name: "Vulpix", location: "Rutas 7-8", method: "Hierba alta", pokeball: "Super Ball", rate: "25%" },
    { id: 39, name: "Jigglypuff", location: "Rutas 3, 5-6", method: "Hierba alta", pokeball: "Super Ball", rate: "25%" },
    { id: 41, name: "Zubat", location: "Cuevas", method: "Interior cuevas", pokeball: "Pokéball", rate: "90%" },
    { id: 43, name: "Oddish", location: "Rutas 5-7", method: "Hierba alta (noche)", pokeball: "Pokéball", rate: "65%" },
    { id: 46, name: "Paras", location: "Monte Moon", method: "Cueva", pokeball: "Pokéball", rate: "25%" },
    { id: 48, name: "Venonat", location: "Rutas 14-15", method: "Hierba alta (noche)", pokeball: "Super Ball", rate: "40%" },
    { id: 50, name: "Diglett", location: "Cueva Diglett", method: "Interior cueva", pokeball: "Pokéball", rate: "95%" },
    { id: 52, name: "Meowth", location: "Rutas 5-8", method: "Hierba alta", pokeball: "Pokéball", rate: "45%" },
    { id: 54, name: "Psyduck", location: "Rutas 24-25", method: "Surf", pokeball: "Super Ball", rate: "25%" },
    { id: 56, name: "Mankey", location: "Rutas 5-6", method: "Hierba alta", pokeball: "Super Ball", rate: "35%" },
    { id: 58, name: "Growlithe", location: "Rutas 7-8", method: "Hierba alta", pokeball: "Super Ball", rate: "25%" },
    { id: 60, name: "Poliwag", location: "Rutas 22-25", method: "Surf/Caña", pokeball: "Pokéball", rate: "50%" },
    { id: 63, name: "Abra", location: "Rutas 24-25", method: "Hierba alta", pokeball: "Ultra Ball", rate: "15%" },
    { id: 66, name: "Machop", location: "Túnel Roca", method: "Interior cueva", pokeball: "Super Ball", rate: "25%" },
    { id: 69, name: "Bellsprout", location: "Rutas 5-7", method: "Hierba alta (día)", pokeball: "Pokéball", rate: "65%" },
    { id: 72, name: "Tentacool", location: "Rutas marítimas", method: "Surf", pokeball: "Pokéball", rate: "90%" },
    { id: 74, name: "Geodude", location: "Túnel Roca", method: "Interior cueva", pokeball: "Pokéball", rate: "50%" },
    { id: 77, name: "Ponyta", location: "Rutas 17, 7-8", method: "Hierba alta", pokeball: "Super Ball", rate: "30%" },
    { id: 79, name: "Slowpoke", location: "Rutas 12-13", method: "Caña", pokeball: "Super Ball", rate: "25%" },
    { id: 81, name: "Magnemite", location: "Central Energía", method: "Interior edificio", pokeball: "Super Ball", rate: "35%" },
    { id: 83, name: "Farfetch'd", location: "Ciudad Azulona", method: "Intercambio", pokeball: "Cualquiera", rate: "100%" },
    { id: 84, name: "Doduo", location: "Rutas 16-18", method: "Hierba alta", pokeball: "Super Ball", rate: "35%" },
    { id: 86, name: "Seel", location: "Islas Espuma", method: "Surf", pokeball: "Super Ball", rate: "45%" },
    { id: 88, name: "Grimer", location: "Mansión Pokémon", method: "Interior edificio", pokeball: "Super Ball", rate: "30%" },
    { id: 90, name: "Shellder", location: "Rutas marítimas", method: "Caña Super", pokeball: "Super Ball", rate: "25%" },
    { id: 92, name: "Gastly", location: "Torre Pokémon", method: "Interior torre", pokeball: "Super Ball", rate: "50%" },
    { id: 95, name: "Onix", location: "Túnel Roca", method: "Interior cueva", pokeball: "Ultra Ball", rate: "5%" },
    { id: 96, name: "Drowzee", location: "Rutas 11, 16", method: "Hierba alta", pokeball: "Super Ball", rate: "35%" },
    { id: 98, name: "Krabby", location: "Rutas marítimas", method: "Caña", pokeball: "Pokéball", rate: "45%" },
    { id: 100, name: "Voltorb", location: "Central Energía", method: "Interior edificio", pokeball: "Super Ball", rate: "40%" },
    { id: 102, name: "Exeggcute", location: "Safari Zone", method: "Hierba alta", pokeball: "Safari Ball", rate: "20%" },
    { id: 104, name: "Cubone", location: "Torre Pokémon", method: "Interior torre", pokeball: "Super Ball", rate: "30%" },
    { id: 106, name: "Hitmonlee", location: "Dojo Karate", method: "Regalo", pokeball: "Cualquiera", rate: "100%" },
    { id: 107, name: "Hitmonchan", location: "Dojo Karate", method: "Regalo", pokeball: "Cualquiera", rate: "100%" },
    { id: 108, name: "Lickitung", location: "Rutas 18", method: "Intercambio", pokeball: "Cualquiera", rate: "100%" },
    { id: 109, name: "Koffing", location: "Mansión Pokémon", method: "Interior edificio", pokeball: "Super Ball", rate: "35%" },
    { id: 111, name: "Rhyhorn", location: "Safari Zone", method: "Hierba alta", pokeball: "Safari Ball", rate: "25%" },
    { id: 113, name: "Chansey", location: "Safari Zone", method: "Hierba alta (raro)", pokeball: "Ultra Ball", rate: "4%" },
    { id: 114, name: "Tangela", location: "Rutas 21", method: "Hierba alta", pokeball: "Super Ball", rate: "30%" },
    { id: 115, name: "Kangaskhan", location: "Safari Zone", method: "Hierba alta", pokeball: "Safari Ball", rate: "15%" },
    { id: 116, name: "Horsea", location: "Rutas marítimas", method: "Caña Super", pokeball: "Super Ball", rate: "25%" },
    { id: 118, name: "Goldeen", location: "Rutas marítimas", method: "Caña", pokeball: "Pokéball", rate: "50%" },
    { id: 120, name: "Staryu", location: "Rutas marítimas", method: "Caña Super", pokeball: "Super Ball", rate: "25%" },
    { id: 122, name: "Mr. Mime", location: "Rutas 2", method: "Intercambio", pokeball: "Cualquiera", rate: "100%" },
    { id: 123, name: "Scyther", location: "Safari Zone", method: "Hierba alta", pokeball: "Safari Ball", rate: "20%" },
    { id: 124, name: "Jynx", location: "Ciudad Azulona", method: "Intercambio", pokeball: "Cualquiera", rate: "100%" },
    { id: 125, name: "Electabuzz", location: "Central Energía", method: "Interior edificio", pokeball: "Ultra Ball", rate: "15%" },
    { id: 126, name: "Magmar", location: "Mansión Pokémon", method: "Interior edificio", pokeball: "Ultra Ball", rate: "15%" },
    { id: 127, name: "Pinsir", location: "Safari Zone", method: "Hierba alta", pokeball: "Safari Ball", rate: "20%" },
    { id: 128, name: "Tauros", location: "Safari Zone", method: "Hierba alta", pokeball: "Safari Ball", rate: "15%" },
    { id: 129, name: "Magikarp", location: "Cualquier agua", method: "Caña Vieja", pokeball: "Pokéball", rate: "100%" },
    { id: 131, name: "Lapras", location: "Empresa Silph", method: "Regalo NPC", pokeball: "Cualquiera", rate: "100%" },
    { id: 132, name: "Ditto", location: "Cueva Celeste", method: "Hierba alta", pokeball: "Ultra Ball", rate: "25%" },
    { id: 133, name: "Eevee", location: "Ciudad Azulona", method: "Regalo NPC", pokeball: "Cualquiera", rate: "100%" },
    { id: 137, name: "Porygon", location: "Ciudad Azulona", method: "Compra (Casino)", pokeball: "Cualquiera", rate: "100%" },
    { id: 138, name: "Omanyte", location: "Monte Moon", method: "Fósil Helix", pokeball: "Cualquiera", rate: "100%" },
    { id: 140, name: "Kabuto", location: "Monte Moon", method: "Fósil Domo", pokeball: "Cualquiera", rate: "100%" },
    { id: 142, name: "Aerodactyl", location: "Museo Plateada", method: "Fósil Ámbar", pokeball: "Cualquiera", rate: "100%" },
    { id: 143, name: "Snorlax", location: "Rutas 12/16", method: "Pokéflauta", pokeball: "Ultra Ball", rate: "100%" },
    { id: 144, name: "Articuno", location: "Islas Espuma", method: "Legendario", pokeball: "Ultra Ball", rate: "3%" },
    { id: 145, name: "Zapdos", location: "Central Energía", method: "Legendario", pokeball: "Ultra Ball", rate: "3%" },
    { id: 146, name: "Moltres", location: "Monte Brasa", method: "Legendario", pokeball: "Ultra Ball", rate: "3%" },
    { id: 147, name: "Dratini", location: "Safari Zone", method: "Caña Super", pokeball: "Safari Ball", rate: "15%" },
    { id: 150, name: "Mewtwo", location: "Cueva Celeste", method: "Legendario", pokeball: "Master Ball", rate: "3%" },
    { id: 151, name: "Mew", location: "Evento", method: "Código especial", pokeball: "Master Ball", rate: "100%" }
  ];

  const openItemDetail = (item: any) => {
    setSelectedItem(item);
  };

  const closeItemDetail = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <div className="pokemon-bg min-h-screen">
        <div className="pokemon-overlay min-h-screen py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-white mb-4">Guía de Captura</h1>
              <p className="text-xl text-white">Aprende cómo capturar cada Pokémon</p>
            </div>

            {/* Methods Section */}
            <div className="section-card rounded-2xl p-8 shadow-2xl mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Métodos de Captura</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {catchItems.map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer hover:-translate-y-2"
                    onClick={() => openItemDetail(item)}
                  >
                    <div className="text-center mb-4">
                      {item.icon}
                      <h3 className="text-xl font-bold text-gray-800 mt-3">{item.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                    <div className="text-center">
                      <span className="text-blue-600 font-semibold text-sm">Ver detalles →</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Locations Section */}
            <div className="section-card rounded-2xl p-8 shadow-2xl">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Ubicaciones Específicas</h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-lg overflow-hidden">
                  <thead className="bg-gradient-to-r from-blue-500 to-green-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">#</th>
                      <th className="px-6 py-4 text-left">Pokémon</th>
                      <th className="px-6 py-4 text-left">Ubicación</th>
                      <th className="px-6 py-4 text-left">Método</th>
                      <th className="px-6 py-4 text-left">Pokéball Recomendada</th>
                      <th className="px-6 py-4 text-left">Tasa</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pokemonLocations.map((pokemon, index) => (
                      <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-colors`}>
                        <td className="px-6 py-4 font-mono text-sm text-gray-500">#{pokemon.id.toString().padStart(3, '0')}</td>
                        <td className="px-6 py-4 font-semibold text-gray-800">{pokemon.name}</td>
                        <td className="px-6 py-4 text-gray-600">{pokemon.location}</td>
                        <td className="px-6 py-4 text-gray-600">{pokemon.method}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            pokemon.pokeball === 'Master Ball' ? 'bg-purple-100 text-purple-800' :
                            pokemon.pokeball === 'Ultra Ball' ? 'bg-yellow-100 text-yellow-800' :
                            pokemon.pokeball === 'Super Ball' ? 'bg-blue-100 text-blue-800' :
                            pokemon.pokeball === 'Safari Ball' ? 'bg-green-100 text-green-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {pokemon.pokeball}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            pokemon.rate === '100%' ? 'bg-green-100 text-green-800' :
                            pokemon.rate.includes('3%') ? 'bg-red-100 text-red-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {pokemon.rate}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Item Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 pokemon-detail-modal flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center rounded-t-2xl">
              <h2 className="text-2xl font-bold text-gray-800">{selectedItem.title}</h2>
              <button
                onClick={closeItemDetail}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6">
              <p className="text-gray-600 mb-6 text-lg">{selectedItem.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Tipos/Variantes</h3>
                  <div className="space-y-4">
                    {selectedItem.details.types.map((type: any, index: number) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-semibold text-gray-800">{type.name}</h4>
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            type.rate === '100%' ? 'bg-green-100 text-green-800' :
                            type.rate.includes('x') ? 'bg-blue-100 text-blue-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {type.rate}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm">{type.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Consejos Útiles</h3>
                  <div className="space-y-3">
                    {selectedItem.details.tips.map((tip: string, index: number) => (
                      <div key={index} className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1">•</span>
                        <p className="text-gray-600">{tip}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CatchGuide;