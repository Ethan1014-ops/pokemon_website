import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { X } from "lucide-react";

interface PokemonData {
  id: number;
  name: string;
  type: string;
  height: string;
  weight: string;
  hp: number;
  attack: number;
  defense: number;
  abilities: String[];
  species: String;
  habitat: String | undefined;
  description: String;
  image: String;
}

const LIMIT = 10;

const Pokedex: React.FC = () => {

  const [pokemon, setPokemon] = useState<any[]>([]);
  const [nextUrl, setNextUrl] = useState<string | null>(`https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=0`);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedPokemon, setSelectedPokemon] = useState<any>(null);

  const fetchPokemon = async (
    idOrName: string | number
  ): Promise<PokemonData> => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName}`);
    if (!res.ok) throw new Error("Pokémon no encontrado");
    const data = await res.json();
    // Descripción se encuentra en 'species'
    const speciesRes = await fetch(data.species.url);
    const speciesData = await speciesRes.json();
    const flavor =
      speciesData.flavor_text_entries.find(
        (entry: { language: { name: string } }) => entry.language.name === "es"
      ) || // si hay español
      speciesData.flavor_text_entries.find(
        (entry: { language: { name: string } }) => entry.language.name === "en"
      );
    const description = flavor ? flavor.flavor_text.replace(/\n|\f/g, " ") : "";

    return {
      id: data.id,
      name: capitalize(data.name),
      type: data.types
        .map((t: { type: { name: string } }) => capitalize(t.type.name))
        .join("/"),
      height: (data.height / 10).toString(), // metros
      weight: (data.weight / 10).toString(), // kg
      hp: data.stats.find(
        (s: { stat: { name: string } }) => s.stat.name === "hp"
      ).base_stat,
      attack: data.stats.find(
        (s: { stat: { name: string } }) => s.stat.name === "attack"
      ).base_stat,
      defense: data.stats.find(
        (s: { stat: { name: string } }) => s.stat.name === "defense"
      ).base_stat,
      abilities: data.abilities.map((a: { ability: { name: string } }) =>
        capitalize(a.ability.name)
      ),
      species:
        speciesData.genera.find(
          (g: { language: { name: string } }) => g.language.name === "es"
        )?.genus || speciesData.genera[0].genus,
      habitat: speciesData.habitat?.name
        ? capitalize(speciesData.habitat.name)
        : undefined,
      description,
      image: data.sprites.other["official-artwork"].front_default,
    };
  }
  ;
  function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const loadPage = useCallback(async () => {
    if (!nextUrl || loading) return;
    setLoading(true);
    try {
      const res = await fetch(nextUrl);
      const list = await res.json();
      setNextUrl(list.next);
      const details = await Promise.all(
        list.results.map((r: { name: string }) => fetchPokemon(r.name))
      );
      // Evitamos duplicados asegurando que no se reañadan IDs existentes
      setPokemon(prev => {
        const existingIds = new Set(prev.map(p => p.id));
        const unique = details.filter(d => !existingIds.has(d.id));
        return [...prev, ...unique];
      });
    } catch (error) {
      console.error('Error cargando página:', error);
    } finally {
      setLoading(false);
    }
  }, [nextUrl, loading]);

  useEffect(() => {
    loadPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Solo se ejecuta al montar

  const openPokemonDetail = async (poke: any) => {
    setSelectedPokemon(poke);
  };

  const closePokemonDetail = () => {
    setSelectedPokemon(null);
  };

  return (
    <>
      <div className="pokemon-bg min-h-screen">
        <div className="pokemon-overlay min-h-screen py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-white mb-4">Pokedex</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {pokemon.map((poke) => (
                <div
                  key={poke.id+poke.name}
                  className="pokemon-card bg-white rounded-2xl p-6 shadow-lg"
                  onClick={() => openPokemonDetail(poke)}
                >
                  <div className="text-center mb-4">
                    <span className="text-sm text-gray-500 font-mono">
                      #{poke.id.toString().padStart(3, "0")}
                    </span>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {poke.name}
                    </h3>
                    <img
                      src={poke.image}
                      alt={poke.name}
                      className="w-24 h-24 mx-auto rounded-full object-cover mb-3"
                    />
                    <div className="flex justify-center gap-1 mb-3">
                      {poke.type
                        .split("/")
                        .map(
                          (
                            type:
                              | string
                              | number
                              | boolean
                              | React.ReactElement<
                                  any,
                                  string | React.JSXElementConstructor<any>
                                >
                              | Iterable<React.ReactNode>
                              | null
                              | undefined,
                            index: React.Key | null | undefined
                          ) => (
                            <span
                              key={index}
                              className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${
                                type === "Fire"
                                  ? "bg-red-600"
                                  : type === "Water"
                                  ? "bg-blue-600"
                                  : type === "Grass"
                                  ? "bg-green-600"
                                  : type === "Electric"
                                  ? "bg-yellow-600"
                                  : type === "Psychic"
                                  ? "bg-purple-600"
                                  : type === "Ice"
                                  ? "bg-cyan-600"
                                  : type === "Dragon"
                                  ? "bg-indigo-600"
                                  : type === "Dark"
                                  ? "bg-gray-800"
                                  : type === "Fighting"
                                  ? "bg-red-700"
                                  : type === "Poison"
                                  ? "bg-purple-700"
                                  : type === "Ground"
                                  ? "bg-yellow-700"
                                  : type === "Flying"
                                  ? "bg-blue-400"
                                  : type === "Bug"
                                  ? "bg-green-500"
                                  : type === "Rock"
                                  ? "bg-yellow-800"
                                  : type === "Ghost"
                                  ? "bg-purple-800"
                                  : type === "Steel"
                                  ? "bg-gray-600"
                                  : type === "Fairy"
                                  ? "bg-pink-500"
                                  : "bg-gray-600"
                              }`}
                            >
                              {type}
                            </span>
                          )
                        )}
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Altura:</span>
                      <span className="font-semibold">{poke.height} m</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Peso:</span>
                      <span className="font-semibold">{poke.weight} kg</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">HP:</span>
                      <span className="font-semibold">{poke.hp}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Ataque:</span>
                      <span className="font-semibold">{poke.attack}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Defensa:</span>
                      <span className="font-semibold">{poke.defense}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Botón Load more */}
            <div className="text-center mt-6">
              {nextUrl && (
                <button
                  onClick={loadPage}
                  disabled={loading}
                  className="px-4 py-2 bg-blue-600 text-white rounded transition-opacity disabled:opacity-50"
                >
                  {loading ? "Cargando..." : "Cargar más"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Pokemon Detail Modal */}
      {selectedPokemon && (
        <div className="fixed inset-0 pokemon-detail-modal flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center rounded-t-2xl">
              <h2 className="text-2xl font-bold text-gray-800">
                #{selectedPokemon.id.toString().padStart(3, "0")}{" "}
                {selectedPokemon.name}
              </h2>
              <button
                onClick={closePokemonDetail}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <img
                    src={selectedPokemon.image}
                    alt={selectedPokemon.name}
                    className="w-full h-64 object-cover rounded-xl mb-4"
                  />
                  <div className="text-center">
                    <div className="flex justify-center gap-2 mb-4">
                      {selectedPokemon.type
                        .split("/")
                        .map((type: string, index: number) => (
                          <span
                            key={index}
                            className={`px-4 py-2 rounded-full text-white font-semibold ${
                              type === "Fire"
                                ? "bg-red-600"
                                : type === "Water"
                                ? "bg-blue-600"
                                : type === "Grass"
                                ? "bg-green-600"
                                : type === "Electric"
                                ? "bg-yellow-600"
                                : type === "Psychic"
                                ? "bg-purple-600"
                                : type === "Ice"
                                ? "bg-cyan-600"
                                : type === "Dragon"
                                ? "bg-indigo-600"
                                : type === "Dark"
                                ? "bg-gray-800"
                                : type === "Fighting"
                                ? "bg-red-700"
                                : type === "Poison"
                                ? "bg-purple-700"
                                : type === "Ground"
                                ? "bg-yellow-700"
                                : type === "Flying"
                                ? "bg-blue-400"
                                : type === "Bug"
                                ? "bg-green-500"
                                : type === "Rock"
                                ? "bg-yellow-800"
                                : type === "Ghost"
                                ? "bg-purple-800"
                                : type === "Steel"
                                ? "bg-gray-600"
                                : type === "Fairy"
                                ? "bg-pink-500"
                                : "bg-gray-600"
                            }`}
                          >
                            {type}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>

                <div className="md:w-1/2 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      Información Básica
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Especie:</span>
                        <span className="font-semibold">
                          {selectedPokemon.species}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Altura:</span>
                        <span className="font-semibold">
                          {selectedPokemon.height} m
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Peso:</span>
                        <span className="font-semibold">
                          {selectedPokemon.weight} kg
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Hábitat:</span>
                        <span className="font-semibold">
                          {selectedPokemon.habitat}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      Estadísticas
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-gray-600">HP</span>
                          <span className="text-sm font-semibold">
                            {selectedPokemon.hp}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-green-500 h-2 rounded-full"
                            style={{
                              width: `${Math.min(
                                (selectedPokemon.hp / 250) * 100,
                                100
                              )}%`,
                            }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-gray-600">Ataque</span>
                          <span className="text-sm font-semibold">
                            {selectedPokemon.attack}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-red-500 h-2 rounded-full"
                            style={{
                              width: `${Math.min(
                                (selectedPokemon.attack / 150) * 100,
                                100
                              )}%`,
                            }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-gray-600">Defensa</span>
                          <span className="text-sm font-semibold">
                            {selectedPokemon.defense}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-500 h-2 rounded-full"
                            style={{
                              width: `${Math.min(
                                (selectedPokemon.defense / 180) * 100,
                                100
                              )}%`,
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      Habilidades
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedPokemon.abilities.map(
                        (ability: string, index: number) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                          >
                            {ability}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      Descripción
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {selectedPokemon.description}
                    </p>
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

export default Pokedex;
