import React from 'react';
import { useState } from 'react';
import { X } from 'lucide-react';

const Pokedex: React.FC = () => {
  const [selectedPokemon, setSelectedPokemon] = useState<any>(null);

  // Real first generation Pokemon data
  const pokemon = [
    {
      id: 1, name: "Bulbasaur", type: "Grass/Poison", height: "0.7", weight: "6.9",
      hp: 45, attack: 49, defense: 49, abilities: ['Overgrow', 'Chlorophyll'],
      species: 'Seed Pokémon', habitat: 'Grassland',
      description: 'Bulbasaur puede verse echándose una siesta bajo el sol. Tiene una semilla en el lomo. Al crecer, la semilla se convierte en una planta.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 2, name: "Ivysaur", type: "Grass/Poison", height: "1.0", weight: "13.0",
      hp: 60, attack: 62, defense: 63, abilities: ['Overgrow', 'Chlorophyll'],
      species: 'Seed Pokémon', habitat: 'Grassland',
      description: 'Cuando le crece el capullo del lomo, parece que ya no puede erguirse sobre las patas traseras.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 3, name: "Venusaur", type: "Grass/Poison", height: "2.0", weight: "100.0",
      hp: 80, attack: 82, defense: 83, abilities: ['Overgrow', 'Chlorophyll'],
      species: 'Seed Pokémon', habitat: 'Grassland',
      description: 'La flor libera un aroma delicioso y atrae a otros Pokémon. El aroma se intensifica tras un día de lluvia.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 4, name: "Charmander", type: "Fire", height: "0.6", weight: "8.5",
      hp: 39, attack: 52, defense: 43, abilities: ['Blaze', 'Solar Power'],
      species: 'Lizard Pokémon', habitat: 'Mountain',
      description: 'Prefiere las cosas calientes. Dicen que cuando llueve le sale vapor de la punta de la cola.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 5, name: "Charmeleon", type: "Fire", height: "1.1", weight: "19.0",
      hp: 58, attack: 64, defense: 58, abilities: ['Blaze', 'Solar Power'],
      species: 'Flame Pokémon', habitat: 'Mountain',
      description: 'Tiene una naturaleza salvaje. En combate, expulsa intensas llamaradas para intimidar al rival.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 6, name: "Charizard", type: "Fire/Flying", height: "1.7", weight: "90.5",
      hp: 78, attack: 84, defense: 78, abilities: ['Blaze', 'Solar Power'],
      species: 'Flame Pokémon', habitat: 'Mountain',
      description: 'Escupe un fuego tan caliente que funde cualquier cosa. Pero nunca dirige las llamas a un rival más débil.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 7, name: "Squirtle", type: "Water", height: "0.5", weight: "9.0",
      hp: 44, attack: 48, defense: 65, abilities: ['Torrent', 'Rain Dish'],
      species: 'Tiny Turtle Pokémon', habitat: 'Water\'s-edge',
      description: 'Cuando retrae su largo cuello en el caparazón, dispara agua a una presión increíble.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 8, name: "Wartortle", type: "Water", height: "1.0", weight: "22.5",
      hp: 59, attack: 63, defense: 80, abilities: ['Torrent', 'Rain Dish'],
      species: 'Turtle Pokémon', habitat: 'Water\'s-edge',
      description: 'Se lo considera un símbolo de longevidad. Los ejemplares más ancianos tienen musgo sobre el caparazón.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 9, name: "Blastoise", type: "Water", height: "1.6", weight: "85.5",
      hp: 79, attack: 83, defense: 100, abilities: ['Torrent', 'Rain Dish'],
      species: 'Shellfish Pokémon', habitat: 'Water\'s-edge',
      description: 'Para acabar con su enemigo, lo aplasta con el peso de su cuerpo. En momentos de apuro, se esconde en el caparazón.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 10, name: "Caterpie", type: "Bug", height: "0.3", weight: "2.9",
      hp: 45, attack: 30, defense: 35, abilities: ['Shield Dust', 'Run Away'],
      species: 'Worm Pokémon', habitat: 'Forest',
      description: 'Para protegerse, despide un hedor horrible por las antenas. Con él repele a sus enemigos.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 11, name: "Metapod", type: "Bug", height: "0.7", weight: "9.9",
      hp: 50, attack: 20, defense: 55, abilities: ['Shed Skin'],
      species: 'Cocoon Pokémon', habitat: 'Forest',
      description: 'Su caparazón es tan duro como el hierro. No se mueve mucho porque está preparando su interior para la evolución.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 12, name: "Butterfree", type: "Bug/Flying", height: "1.1", weight: "32.0",
      hp: 60, attack: 45, defense: 50, abilities: ['Compound Eyes', 'Tinted Lens'],
      species: 'Butterfly Pokémon', habitat: 'Forest',
      description: 'Adora el néctar de las flores. Una fina pelusa que cubre todo su cuerpo le ayuda a recoger el polen.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 13, name: "Weedle", type: "Bug/Poison", height: "0.3", weight: "3.2",
      hp: 40, attack: 35, defense: 30, abilities: ['Shield Dust', 'Run Away'],
      species: 'Hairy Bug Pokémon', habitat: 'Forest',
      description: 'Suele habitar bosques y praderas. Tiene un afilado y venenoso aguijón de unos 5 cm encima de la cabeza.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 14, name: "Kakuna", type: "Bug/Poison", height: "0.6", weight: "10.0",
      hp: 45, attack: 25, defense: 50, abilities: ['Shed Skin'],
      species: 'Cocoon Pokémon', habitat: 'Forest',
      description: 'Casi incapaz de moverse, este Pokémon solo puede endurecer su caparazón para protegerse.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 15, name: "Beedrill", type: "Bug/Poison", height: "1.0", weight: "29.5",
      hp: 65, attack: 90, defense: 40, abilities: ['Swarm', 'Sniper'],
      species: 'Poison Bee Pokémon', habitat: 'Forest',
      description: 'Vuela a gran velocidad y ataca usando las grandes y venenosas púas de sus patas delanteras y cola.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 16, name: "Pidgey", type: "Normal/Flying", height: "0.3", weight: "1.8",
      hp: 40, attack: 45, defense: 40, abilities: ['Keen Eye', 'Tangled Feet', 'Big Pecks'],
      species: 'Tiny Bird Pokémon', habitat: 'Forest',
      description: 'Muy común en bosques y selvas. Aletea al nivel del suelo para levantar la gravilla.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 17, name: "Pidgeotto", type: "Normal/Flying", height: "1.1", weight: "30.0",
      hp: 63, attack: 60, defense: 55, abilities: ['Keen Eye', 'Tangled Feet', 'Big Pecks'],
      species: 'Bird Pokémon', habitat: 'Forest',
      description: 'Tiene unas garras desarrolladas. Puede atrapar un Exeggcute y transportarlo desde una distancia de casi 100 km.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 18, name: "Pidgeot", type: "Normal/Flying", height: "1.5", weight: "39.5",
      hp: 83, attack: 80, defense: 75, abilities: ['Keen Eye', 'Tangled Feet', 'Big Pecks'],
      species: 'Bird Pokémon', habitat: 'Forest',
      description: 'Al extender sus hermosas alas, intimida al enemigo. Puede volar a una velocidad de Mach 2.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 19, name: "Rattata", type: "Normal", height: "0.3", weight: "3.5",
      hp: 30, attack: 56, defense: 35, abilities: ['Run Away', 'Guts', 'Hustle'],
      species: 'Mouse Pokémon', habitat: 'Grassland',
      description: 'Vive allí donde haya comida disponible. Busca todo el día, sin descanso, algo comestible.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 20, name: "Raticate", type: "Normal", height: "0.7", weight: "18.5",
      hp: 55, attack: 81, defense: 60, abilities: ['Run Away', 'Guts', 'Hustle'],
      species: 'Mouse Pokémon', habitat: 'Grassland',
      description: 'Lima sus colmillos royendo objetos duros. Con ellos puede destruir incluso las paredes de hormigón.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 21, name: "Spearow", type: "Normal/Flying", height: "0.3", weight: "2.0",
      hp: 40, attack: 60, defense: 30, abilities: ['Keen Eye', 'Sniper'],
      species: 'Tiny Bird Pokémon', habitat: 'Rough-terrain',
      description: 'Come bichos en zonas de hierba alta. Tiene que batir las alas muy rápido para mantenerse en el aire.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 22, name: "Fearow", type: "Normal/Flying", height: "1.2", weight: "38.0",
      hp: 65, attack: 90, defense: 65, abilities: ['Keen Eye', 'Sniper'],
      species: 'Beak Pokémon', habitat: 'Rough-terrain',
      description: 'Con sus enormes y magníficas alas, puede seguir volando sin tener que aterrizar para descansar.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 23, name: "Ekans", type: "Poison", height: "2.0", weight: "6.9",
      hp: 35, attack: 60, defense: 44, abilities: ['Intimidate', 'Shed Skin', 'Unnerve'],
      species: 'Snake Pokémon', habitat: 'Grassland',
      description: 'Se mueve en silencio y sin hacer ruido. Come huevos de Pidgey y Spearow que encuentra en los nidos.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 24, name: "Arbok", type: "Poison", height: "3.5", weight: "65.0",
      hp: 60, attack: 95, defense: 69, abilities: ['Intimidate', 'Shed Skin', 'Unnerve'],
      species: 'Cobra Pokémon', habitat: 'Grassland',
      description: 'Para intimidar al enemigo, levanta la cabeza y hace que los dibujos de su cuerpo parezcan una cara terrorífica.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 25, name: "Pikachu", type: "Electric", height: "0.4", weight: "6.0",
      hp: 35, attack: 55, defense: 40, abilities: ['Static', 'Lightning Rod'],
      species: 'Mouse Pokémon', habitat: 'Forest',
      description: 'Cuando varios de estos Pokémon se juntan, su energía puede causar fuertes tormentas.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 26, name: "Raichu", type: "Electric", height: "0.8", weight: "30.0",
      hp: 60, attack: 90, defense: 55, abilities: ['Static', 'Lightning Rod'],
      species: 'Mouse Pokémon', habitat: 'Forest',
      description: 'Su cola actúa como toma de tierra y descarga electricidad al suelo, protegiéndolo de los calambres.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 27, name: "Sandshrew", type: "Ground", height: "0.6", weight: "12.0",
      hp: 50, attack: 75, defense: 85, abilities: ['Sand Veil', 'Sand Rush'],
      species: 'Mouse Pokémon', habitat: 'Rough-terrain',
      description: 'Vive en zonas áridas y desérticas. Se protege del calor y de los ataques enterrándose en la arena.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 28, name: "Sandslash", type: "Ground", height: "1.0", weight: "29.5",
      hp: 75, attack: 100, defense: 110, abilities: ['Sand Veil', 'Sand Rush'],
      species: 'Mouse Pokémon', habitat: 'Rough-terrain',
      description: 'Se enrolla para protegerse de los enemigos. Desde esa posición puede rodar y atacar o huir.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 29, name: "Nidoran♀", type: "Poison", height: "0.4", weight: "7.0",
      hp: 55, attack: 47, defense: 52, abilities: ['Poison Point', 'Rivalry', 'Hustle'],
      species: 'Poison Pin Pokémon', habitat: 'Grassland',
      description: 'Aunque pequeñas, sus púas son muy venenosas. Se dice que desarrolló estas púas para proteger su cuerpo.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 30, name: "Nidorina", type: "Poison", height: "0.8", weight: "20.0",
      hp: 70, attack: 62, defense: 67, abilities: ['Poison Point', 'Rivalry', 'Hustle'],
      species: 'Poison Pin Pokémon', habitat: 'Grassland',
      description: 'Cuando está con sus amigas se muestra muy cariñosa, pero se vuelve muy agresiva en combate.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 31, name: "Nidoqueen", type: "Poison/Ground", height: "1.3", weight: "60.0",
      hp: 90, attack: 92, defense: 87, abilities: ['Poison Point', 'Rivalry', 'Sheer Force'],
      species: 'Drill Pokémon', habitat: 'Grassland',
      description: 'Su cuerpo está recubierto de púas muy duras. Al atacar, se queda de pie sobre las patas traseras.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 32, name: "Nidoran♂", type: "Poison", height: "0.5", weight: "9.0",
      hp: 46, attack: 57, defense: 40, abilities: ['Poison Point', 'Rivalry', 'Hustle'],
      species: 'Poison Pin Pokémon', habitat: 'Grassland',
      description: 'Levanta sus grandes orejas para vigilar. Si detecta algo, atacará inmediatamente.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 33, name: "Nidorino", type: "Poison", height: "0.9", weight: "19.5",
      hp: 61, attack: 72, defense: 57, abilities: ['Poison Point', 'Rivalry', 'Hustle'],
      species: 'Poison Pin Pokémon', habitat: 'Grassland',
      description: 'Tiene un cuerno más duro que el diamante. Si siente una presencia hostil, le salen púas por todo el cuerpo.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 34, name: "Nidoking", type: "Poison/Ground", height: "1.4", weight: "62.0",
      hp: 81, attack: 102, defense: 77, abilities: ['Poison Point', 'Rivalry', 'Sheer Force'],
      species: 'Drill Pokémon', habitat: 'Grassland',
      description: 'Es fácil reconocerlo por tener una piel muy dura y un cuerno enorme y venenoso.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 35, name: "Clefairy", type: "Fairy", height: "0.6", weight: "7.5",
      hp: 70, attack: 45, defense: 48, abilities: ['Cute Charm', 'Magic Guard', 'Friend Guard'],
      species: 'Fairy Pokémon', habitat: 'Mountain',
      description: 'Su aspecto mágico y adorable hace que tenga muchos seguidores. Es muy raro de encontrar.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 36, name: "Clefable", type: "Fairy", height: "1.3", weight: "40.0",
      hp: 95, attack: 70, defense: 73, abilities: ['Cute Charm', 'Magic Guard', 'Unaware'],
      species: 'Fairy Pokémon', habitat: 'Mountain',
      description: 'Camina con cuidado para no ser visto. Prefiere los lugares apartados y alejados de la gente.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 37, name: "Vulpix", type: "Fire", height: "0.6", weight: "9.9",
      hp: 38, attack: 41, defense: 40, abilities: ['Flash Fire', 'Drought'],
      species: 'Fox Pokémon', habitat: 'Grassland',
      description: 'Al nacer, tiene una cola blanca que se va dividiendo en seis si recibe mucho cariño.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 38, name: "Ninetales", type: "Fire", height: "1.1", weight: "19.9",
      hp: 73, attack: 76, defense: 75, abilities: ['Flash Fire', 'Drought'],
      species: 'Fox Pokémon', habitat: 'Grassland',
      description: 'Muy vengativo. Dicen que quien le agarre una de sus colas será maldecido durante 1000 años.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 39, name: "Jigglypuff", type: "Normal/Fairy", height: "0.5", weight: "5.5",
      hp: 115, attack: 45, defense: 20, abilities: ['Cute Charm', 'Competitive', 'Friend Guard'],
      species: 'Balloon Pokémon', habitat: 'Grassland',
      description: 'Cautiva con la mirada a su enemigo y hace que se quede profundamente dormido mientras entona una dulce melodía.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 40, name: "Wigglytuff", type: "Normal/Fairy", height: "1.0", weight: "12.0",
      hp: 140, attack: 70, defense: 45, abilities: ['Cute Charm', 'Competitive', 'Frisk'],
      species: 'Balloon Pokémon', habitat: 'Grassland',
      description: 'Su piel es tan suave que si dos de ellos se acurrucan juntos, no querrán separarse nunca.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 41, name: "Zubat", type: "Poison/Flying", height: "0.8", weight: "7.5",
      hp: 40, attack: 45, defense: 35, abilities: ['Inner Focus', 'Infiltrator'],
      species: 'Bat Pokémon', habitat: 'Cave',
      description: 'Forma colonias en lugares oscuros. Usa ondas ultrasónicas para identificar y acercarse a objetivos.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 42, name: "Golbat", type: "Poison/Flying", height: "1.6", weight: "55.0",
      hp: 75, attack: 80, defense: 70, abilities: ['Inner Focus', 'Infiltrator'],
      species: 'Bat Pokémon', habitat: 'Cave',
      description: 'Adora chupar sangre. Vuela alrededor en la oscuridad para encontrar el cuello de alguien al que morder.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 43, name: "Oddish", type: "Grass/Poison", height: "0.5", weight: "5.4",
      hp: 45, attack: 50, defense: 55, abilities: ['Chlorophyll', 'Run Away'],
      species: 'Weed Pokémon', habitat: 'Grassland',
      description: 'Durante el día, se agazapa en el frío subsuelo huyendo del sol. La luz de la luna le hace crecer.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 44, name: "Gloom", type: "Grass/Poison", height: "0.8", weight: "8.6",
      hp: 60, attack: 65, defense: 70, abilities: ['Chlorophyll', 'Stench'],
      species: 'Weed Pokémon', habitat: 'Grassland',
      description: 'Segrega un fluido maloliente por la boca. Este fluido huele tan mal que puede hacer desmayar a cualquiera.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 45, name: "Vileplume", type: "Grass/Poison", height: "1.2", weight: "18.6",
      hp: 75, attack: 80, defense: 85, abilities: ['Chlorophyll', 'Effect Spore'],
      species: 'Flower Pokémon', habitat: 'Grassland',
      description: 'Cuanto mayores son sus pétalos, más tóxico es su polen. Le pesa mucho la cabeza y le cuesta mantenerla erguida.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 46, name: "Paras", type: "Bug/Grass", height: "0.3", weight: "5.4",
      hp: 35, attack: 70, defense: 55, abilities: ['Effect Spore', 'Dry Skin', 'Damp'],
      species: 'Mushroom Pokémon', habitat: 'Forest',
      description: 'Lleva dos setas parásitas a cuestas, que crecen con él. Las setas son muy apreciadas como ingrediente medicinal.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 47, name: "Parasect", type: "Bug/Grass", height: "1.0", weight: "29.5",
      hp: 60, attack: 95, defense: 80, abilities: ['Effect Spore', 'Dry Skin', 'Damp'],
      species: 'Mushroom Pokémon', habitat: 'Forest',
      description: 'La seta parásita que lleva a cuestas controla a Parasect. Prefiere los lugares húmedos.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 48, name: "Venonat", type: "Bug/Poison", height: "1.0", weight: "30.0",
      hp: 60, attack: 55, defense: 50, abilities: ['Compound Eyes', 'Tinted Lens', 'Run Away'],
      species: 'Insect Pokémon', habitat: 'Forest',
      description: 'Vive entre la hierba alta y en los bosques. Sus grandes ojos están formados por miles de ojos pequeños.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 49, name: "Venomoth", type: "Bug/Poison", height: "1.5", weight: "12.5",
      hp: 70, attack: 65, defense: 60, abilities: ['Shield Dust', 'Tinted Lens', 'Wonder Skin'],
      species: 'Poison Moth Pokémon', habitat: 'Forest',
      description: 'Las escamas que cubren sus alas cambian de color según el tipo de veneno que tenga.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 50, name: "Diglett", type: "Ground", height: "0.2", weight: "0.8",
      hp: 10, attack: 55, defense: 25, abilities: ['Sand Veil', 'Arena Trap', 'Sand Force'],
      species: 'Mole Pokémon', habitat: 'Cave',
      description: 'Vive un metro por debajo del suelo, donde se alimenta de raíces. También aparece en la superficie.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 51, name: "Dugtrio", type: "Ground", height: "0.7", weight: "33.3",
      hp: 35, attack: 100, defense: 50, abilities: ['Sand Veil', 'Arena Trap', 'Sand Force'],
      species: 'Mole Pokémon', habitat: 'Cave',
      description: 'Un trío de Diglett. Puede cavar hasta 100 km bajo tierra y causar grandes terremotos.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 52, name: "Meowth", type: "Normal", height: "0.4", weight: "4.2",
      hp: 40, attack: 45, defense: 35, abilities: ['Pickup', 'Technician', 'Unnerve'],
      species: 'Scratch Cat Pokémon', habitat: 'Urban',
      description: 'Adora los objetos redondos. De noche, merodea por las calles en busca de monedas perdidas.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 53, name: "Persian", type: "Normal", height: "1.0", weight: "32.0",
      hp: 65, attack: 70, defense: 60, abilities: ['Limber', 'Technician', 'Unnerve'],
      species: 'Classy Cat Pokémon', habitat: 'Urban',
      description: 'Tiene seis llamativos bigotes que le dan un aspecto feroz. Con ellos detecta los movimientos del aire.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 54, name: "Psyduck", type: "Water", height: "0.8", weight: "19.6",
      hp: 50, attack: 52, defense: 48, abilities: ['Damp', 'Cloud Nine'],
      species: 'Duck Pokémon', habitat: 'Water\'s-edge',
      description: 'Padece continuamente dolores de cabeza. Cuando son muy fuertes, empieza a usar extraños poderes.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 55, name: "Golduck", type: "Water", height: "1.7", weight: "76.6",
      hp: 80, attack: 82, defense: 78, abilities: ['Damp', 'Cloud Nine'],
      species: 'Duck Pokémon', habitat: 'Water\'s-edge',
      description: 'Suele confundirse con el monstruo del lago Ness cuando nada en los lagos al amanecer.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 56, name: "Mankey", type: "Fighting", height: "0.5", weight: "28.0",
      hp: 40, attack: 80, defense: 35, abilities: ['Vital Spirit', 'Anger Point', 'Defiant'],
      species: 'Pig Monkey Pokémon', habitat: 'Mountain',
      description: 'Vive en colonias en las copas de los árboles. Si uno se enfada, el resto de la colonia hará lo mismo.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 57, name: "Primeape", type: "Fighting", height: "1.0", weight: "32.0",
      hp: 65, attack: 105, defense: 60, abilities: ['Vital Spirit', 'Anger Point', 'Defiant'],
      species: 'Pig Monkey Pokémon', habitat: 'Mountain',
      description: 'Se enfada con tanta facilidad que puede llegar a morir de rabia. Su cara de enfado es realmente terrorífica.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 58, name: "Growlithe", type: "Fire", height: "0.7", weight: "19.0",
      hp: 55, attack: 70, defense: 45, abilities: ['Intimidate', 'Flash Fire', 'Justified'],
      species: 'Puppy Pokémon', habitat: 'Grassland',
      description: 'Tiene un carácter valiente y honrado. Se enfrenta sin miedo a enemigos más grandes y fuertes.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 59, name: "Arcanine", type: "Fire", height: "1.9", weight: "155.0",
      hp: 90, attack: 110, defense: 80, abilities: ['Intimidate', 'Flash Fire', 'Justified'],
      species: 'Legendary Pokémon', habitat: 'Grassland',
      description: 'Un Pokémon muy admirado desde la antigüedad por su belleza. Corre ágilmente como si tuviera alas.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 60, name: "Poliwag", type: "Water", height: "0.6", weight: "12.4",
      hp: 40, attack: 50, defense: 40, abilities: ['Water Absorb', 'Damp', 'Swift Swim'],
      species: 'Tadpole Pokémon', habitat: 'Water\'s-edge',
      description: 'Sus patas acaban de crecer. Prefiere caminar a nadar, pero se cansa enseguida.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 61, name: "Poliwhirl", type: "Water", height: "1.0", weight: "20.0",
      hp: 65, attack: 65, defense: 65, abilities: ['Water Absorb', 'Damp', 'Swift Swim'],
      species: 'Tadpole Pokémon', habitat: 'Water\'s-edge',
      description: 'Capaz de vivir dentro o fuera del agua. Fuera del agua, suda para mantener baboso su cuerpo.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 62, name: "Poliwrath", type: "Water/Fighting", height: "1.3", weight: "54.0",
      hp: 90, attack: 95, defense: 95, abilities: ['Water Absorb', 'Damp', 'Swift Swim'],
      species: 'Tadpole Pokémon', habitat: 'Water\'s-edge',
      description: 'Experto nadador tanto en estilo libre como en braza. Fácilmente supera a los nadadores olímpicos.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 63, name: "Abra", type: "Psychic", height: "0.9", weight: "19.5",
      hp: 25, attack: 20, defense: 15, abilities: ['Synchronize', 'Inner Focus', 'Magic Guard'],
      species: 'Psi Pokémon', habitat: 'Urban',
      description: 'Duerme 18 horas al día. Se ha confirmado que usa Teletransporte mientras duerme.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 64, name: "Kadabra", type: "Psychic", height: "1.3", weight: "56.5",
      hp: 40, attack: 35, defense: 30, abilities: ['Synchronize', 'Inner Focus', 'Magic Guard'],
      species: 'Psi Pokémon', habitat: 'Urban',
      description: 'Emite ondas alfa especiales de su cuerpo que hacen que las máquinas se estropeen.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 65, name: "Alakazam", type: "Psychic", height: "1.5", weight: "48.0",
      hp: 55, attack: 50, defense: 45, abilities: ['Synchronize', 'Inner Focus', 'Magic Guard'],
      species: 'Psi Pokémon', habitat: 'Urban',
      description: 'Su cerebro no deja de crecer, por lo que su cabeza es cada vez más grande.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 66, name: "Machop", type: "Fighting", height: "0.8", weight: "19.5",
      hp: 70, attack: 80, defense: 50, abilities: ['Guts', 'No Guard', 'Steadfast'],
      species: 'Superpower Pokémon', habitat: 'Mountain',
      description: 'Adora hacer ejercicio. Aunque llueva, continúa entrenando incansablemente.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 67, name: "Machoke", type: "Fighting", height: "1.5", weight: "70.5",
      hp: 80, attack: 100, defense: 70, abilities: ['Guts', 'No Guard', 'Steadfast'],
      species: 'Superpower Pokémon', habitat: 'Mountain',
      description: 'Su musculoso cuerpo es tan fuerte que usa un cinturón de fuerza para controlar sus movimientos.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 68, name: "Machamp", type: "Fighting", height: "1.6", weight: "130.0",
      hp: 90, attack: 130, defense: 80, abilities: ['Guts', 'No Guard', 'Steadfast'],
      species: 'Superpower Pokémon', habitat: 'Mountain',
      description: 'Usando sus cuatro brazos, puede golpear desde todos los ángulos y hacer hasta 1000 puñetazos en dos segundos.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 69, name: "Bellsprout", type: "Grass/Poison", height: "0.7", weight: "4.0",
      hp: 50, attack: 75, defense: 35, abilities: ['Chlorophyll', 'Gluttony'],
      species: 'Flower Pokémon', habitat: 'Forest',
      description: 'Prefiere los lugares cálidos y húmedos. Atrapa pequeños insectos con sus lianas para alimentarse.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 70, name: "Weepinbell", type: "Grass/Poison", height: "1.0", weight: "6.4",
      hp: 65, attack: 90, defense: 50, abilities: ['Chlorophyll', 'Gluttony'],
      species: 'Flycatcher Pokémon', habitat: 'Forest',
      description: 'Escupe un fluido corrosivo capaz de derretir cualquier cosa. Cuando está hambriento, se traga cualquier cosa.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 71, name: "Victreebel", type: "Grass/Poison", height: "1.7", weight: "15.5",
      hp: 80, attack: 105, defense: 65, abilities: ['Chlorophyll', 'Gluttony'],
      species: 'Flycatcher Pokémon', habitat: 'Forest',
      description: 'Atrae a sus presas con un dulce aroma. Los fluidos de su cuerpo disuelven a la presa en un día.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 72, name: "Tentacool", type: "Water/Poison", height: "0.9", weight: "45.5",
      hp: 40, attack: 40, defense: 35, abilities: ['Clear Body', 'Liquid Ooze', 'Rain Dish'],
      species: 'Jellyfish Pokémon', habitat: 'Sea',
      description: 'Su cuerpo está compuesto casi en su totalidad por agua. Atrapa a sus enemigos con sus tentáculos.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 73, name: "Tentacruel", type: "Water/Poison", height: "1.6", weight: "55.0",
      hp: 80, attack: 70, defense: 65, abilities: ['Clear Body', 'Liquid Ooze', 'Rain Dish'],
      species: 'Jellyfish Pokémon', habitat: 'Sea',
      description: 'Sus 80 tentáculos se mueven libremente. Con ellos atrapa a sus presas y las envenena.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 74, name: "Geodude", type: "Rock/Ground", height: "0.4", weight: "20.0",
      hp: 40, attack: 80, defense: 100, abilities: ['Rock Head', 'Sturdy', 'Sand Veil'],
      species: 'Rock Pokémon', habitat: 'Mountain',
      description: 'Se encuentra en senderos de montaña y sitios parecidos. Puedes pisarlo por accidente porque parece una roca.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 75, name: "Graveler", type: "Rock/Ground", height: "1.0", weight: "105.0",
      hp: 55, attack: 95, defense: 115, abilities: ['Rock Head', 'Sturdy', 'Sand Veil'],
      species: 'Rock Pokémon', habitat: 'Mountain',
      description: 'Rueda montaña abajo para desplazarse. Si rueda demasiado rápido, se marea y para.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 76, name: "Golem", type: "Rock/Ground", height: "1.4", weight: "300.0",
      hp: 80, attack: 120, defense: 130, abilities: ['Rock Head', 'Sturdy', 'Sand Veil'],
      species: 'Megaton Pokémon', habitat: 'Mountain',
      description: 'Su caparazón rocoso es extremadamente resistente. Puede soportar explosiones de dinamita sin inmutarse.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 77, name: "Ponyta", type: "Fire", height: "1.0", weight: "30.0",
      hp: 50, attack: 85, defense: 55, abilities: ['Run Away', 'Flash Fire', 'Flame Body'],
      species: 'Fire Horse Pokémon', habitat: 'Grassland',
      description: 'Sus cascos son más duros que el diamante. Puede aplastar cualquier cosa con solo pisarla.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 78, name: "Rapidash", type: "Fire", height: "1.7", weight: "95.0",
      hp: 65, attack: 100, defense: 70, abilities: ['Run Away', 'Flash Fire', 'Flame Body'],
      species: 'Fire Horse Pokémon', habitat: 'Grassland',
      description: 'Muy competitivo, este Pokémon perseguirá a cualquier cosa que se mueva rápido con la esperanza de correr contra ella.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 79, name: "Slowpoke", type: "Water/Psychic", height: "1.2", weight: "36.0",
      hp: 90, attack: 65, defense: 65, abilities: ['Oblivious', 'Own Tempo', 'Regenerator'],
      species: 'Dopey Pokémon', habitat: 'Water\'s-edge',
      description: 'Increíblemente lento y despistado. Le lleva 5 segundos sentir dolor cuando lo atacan.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 80, name: "Slowbro", type: "Water/Psychic", height: "1.6", weight: "78.5",
      hp: 95, attack: 75, defense: 110, abilities: ['Oblivious', 'Own Tempo', 'Regenerator'],
      species: 'Hermit Crab Pokémon', habitat: 'Water\'s-edge',
      description: 'El Shellder que tiene agarrado a la cola le inyecta toxinas que le hacen perder la noción del tiempo.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 81, name: "Magnemite", type: "Electric/Steel", height: "0.3", weight: "6.0",
      hp: 25, attack: 35, defense: 70, abilities: ['Magnet Pull', 'Sturdy', 'Analytic'],
      species: 'Magnet Pokémon', habitat: 'Rough-terrain',
      description: 'Usa ondas electromagnéticas para flotar en el aire. Sus imanes pierden su poder si se mojan.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 82, name: "Magneton", type: "Electric/Steel", height: "1.0", weight: "60.0",
      hp: 50, attack: 60, defense: 95, abilities: ['Magnet Pull', 'Sturdy', 'Analytic'],
      species: 'Magnet Pokémon', habitat: 'Rough-terrain',
      description: 'Formado por varios Magnemite unidos. Aparece cuando las manchas solares aumentan de número.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 83, name: "Farfetch'd", type: "Normal/Flying", height: "0.8", weight: "15.0",
      hp: 52, attack: 90, defense: 55, abilities: ['Keen Eye', 'Inner Focus', 'Defiant'],
      species: 'Wild Duck Pokémon', habitat: 'Grassland',
      description: 'Vive en colonias de juncos. Si no hay juncos en los alrededores, luchará con otros por el territorio.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 84, name: "Doduo", type: "Normal/Flying", height: "1.4", weight: "39.2",
      hp: 35, attack: 85, defense: 45, abilities: ['Run Away', 'Early Bird', 'Tangled Feet'],
      species: 'Twin Bird Pokémon', habitat: 'Grassland',
      description: 'Un extraño Pokémon que puede correr muy rápido sobre sus dos patas. Se le ve en praderas.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 85, name: "Dodrio", type: "Normal/Flying", height: "1.8", weight: "85.2",
      hp: 60, attack: 110, defense: 70, abilities: ['Run Away', 'Early Bird', 'Tangled Feet'],
      species: 'Triple Bird Pokémon', habitat: 'Grassland',
      description: 'Usa sus tres cerebros para ejecutar planes complejos. Sus tres cabezas representan la alegría, la tristeza y la ira.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 86, name: "Seel", type: "Water", height: "1.1", weight: "90.0",
      hp: 65, attack: 45, defense: 55, abilities: ['Thick Fat', 'Hydration', 'Ice Body'],
      species: 'Sea Lion Pokémon', habitat: 'Sea',
      description: 'Cuanto más frío está, más activo se vuelve. Nada entre icebergs en mares polares.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 87, name: "Dewgong", type: "Water/Ice", height: "1.7", weight: "120.0",
      hp: 90, attack: 70, defense: 80, abilities: ['Thick Fat', 'Hydration', 'Ice Body'],
      species: 'Sea Lion Pokémon', habitat: 'Sea',
      description: 'Almacena energía térmica en el cuerpo. Nada a 8 nudos de velocidad incluso en aguas heladas.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 88, name: "Grimer", type: "Poison", height: "0.9", weight: "30.0",
      hp: 80, attack: 80, defense: 50, abilities: ['Stench', 'Sticky Hold', 'Poison Touch'],
      species: 'Sludge Pokémon', habitat: 'Urban',
      description: 'Aparece en zonas contaminadas. Prospera al alimentarse de cosas sucias.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 89, name: "Muk", type: "Poison", height: "1.2", weight: "30.0",
      hp: 105, attack: 105, defense: 75, abilities: ['Stench', 'Sticky Hold', 'Poison Touch'],
      species: 'Sludge Pokémon', habitat: 'Urban',
      description: 'Thickly covered with a filthy, vile sludge. It is so toxic, even its footprints contain poison.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 90, name: "Shellder", type: "Water", height: "0.3", weight: "4.0",
      hp: 30, attack: 65, defense: 100, abilities: ['Shell Armor', 'Skill Link', 'Overcoat'],
      species: 'Bivalve Pokémon', habitat: 'Sea',
      description: 'Su concha es más dura que el diamante. Se abre y se cierra para nadar.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 91, name: "Cloyster", type: "Water/Ice", height: "1.5", weight: "132.5",
      hp: 50, attack: 95, defense: 180, abilities: ['Shell Armor', 'Skill Link', 'Overcoat'],
      species: 'Bivalve Pokémon', habitat: 'Sea',
      description: 'Cuando se siente atacado, dispara púas en todas las direcciones. Su concha es extremadamente dura.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 92, name: "Gastly", type: "Ghost/Poison", height: "1.3", weight: "0.1",
      hp: 30, attack: 35, defense: 30, abilities: ['Levitate'],
      species: 'Gas Pokémon', habitat: 'Urban',
      description: 'Casi invisible, este Pokémon gaseoso acecha a sus víctimas y las duerme sin que se den cuenta.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 93, name: "Haunter", type: "Ghost/Poison", height: "1.6", weight: "0.1",
      hp: 45, attack: 50, defense: 45, abilities: ['Levitate'],
      species: 'Gas Pokémon', habitat: 'Urban',
      description: 'Por ser un gas, puede colarse en cualquier lugar. Le gusta esconderse en lugares oscuros.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 94, name: "Gengar", type: "Ghost/Poison", height: "1.5", weight: "40.5",
      hp: 60, attack: 65, defense: 60, abilities: ['Cursed Body'],
      species: 'Shadow Pokémon', habitat: 'Urban',
      description: 'Bajo la luz de la luna llena, este Pokémon gusta de imitar las sombras de la gente y burlarse de sus miedos.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 95, name: "Onix", type: "Rock/Ground", height: "8.8", weight: "210.0",
      hp: 35, attack: 45, defense: 160, abilities: ['Rock Head', 'Sturdy', 'Weak Armor'],
      species: 'Rock Snake Pokémon', habitat: 'Cave',
      description: 'Mientras cava a gran velocidad, va absorbiendo todo lo que encuentra. Eso hace que su cuerpo sea tan sólido.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 96, name: "Drowzee", type: "Psychic", height: "1.0", weight: "32.4",
      hp: 60, attack: 48, defense: 45, abilities: ['Insomnia', 'Forewarn', 'Inner Focus'],
      species: 'Hypnosis Pokémon', habitat: 'Grassland',
      description: 'Pone a dormir a sus enemigos y se come sus sueños. A veces se pone enfermo si come pesadillas.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 97, name: "Hypno", type: "Psychic", height: "1.6", weight: "75.6",
      hp: 85, attack: 73, defense: 70, abilities: ['Insomnia', 'Forewarn', 'Inner Focus'],
      species: 'Hypnosis Pokémon', habitat: 'Grassland',
      description: 'Lleva un péndulo en la mano. Una vez, hizo desaparecer a un niño al que había hipnotizado.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 98, name: "Krabby", type: "Water", height: "0.4", weight: "6.5",
      hp: 30, attack: 105, defense: 90, abilities: ['Hyper Cutter', 'Shell Armor', 'Sheer Force'],
      species: 'River Crab Pokémon', habitat: 'Water\'s-edge',
      description: 'Vive en la playa, enterrado en la arena. Si se le cae una pinza, le vuelve a crecer rápidamente.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 99, name: "Kingler", type: "Water", height: "1.3", weight: "60.0",
      hp: 55, attack: 130, defense: 115, abilities: ['Hyper Cutter', 'Shell Armor', 'Sheer Force'],
      species: 'Pincer Pokémon', habitat: 'Water\'s-edge',
      description: 'Su pinza izquierda es enorme. Cuando la agita, puede romper incluso los objetos más duros.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 100, name: "Voltorb", type: "Electric", height: "0.5", weight: "10.4",
      hp: 40, attack: 30, defense: 50, abilities: ['Soundproof', 'Static', 'Aftermath'],
      species: 'Ball Pokémon', habitat: 'Urban',
      description: 'Suele encontrarse en centrales eléctricas. Dado que se parece mucho a una Pokéball, a menudo causa confusión.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 101, name: "Electrode", type: "Electric", height: "1.2", weight: "66.6",
      hp: 60, attack: 50, defense: 70, abilities: ['Soundproof', 'Static', 'Aftermath'],
      species: 'Ball Pokémon', habitat: 'Urban',
      description: 'Almacena energía eléctrica en su cuerpo. La más mínima conmoción puede hacer que explote.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 102, name: "Exeggcute", type: "Grass/Psychic", height: "0.4", weight: "2.5",
      hp: 60, attack: 40, defense: 80, abilities: ['Chlorophyll', 'Harvest'],
      species: 'Egg Pokémon', habitat: 'Forest',
      description: 'Este Pokémon está formado por seis huevos que forman una estrecha piña y se comunican por telepatía.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 103, name: "Exeggutor", type: "Grass/Psychic", height: "2.0", weight: "120.0",
      hp: 95, attack: 95, defense: 85, abilities: ['Chlorophyll', 'Harvest'],
      species: 'Coconut Pokémon', habitat: 'Forest',
      description: 'Originario de los trópicos. Sus cabezas crecen continuamente si hay mucho sol.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 104, name: "Cubone", type: "Ground", height: "0.4", weight: "6.5",
      hp: 50, attack: 50, defense: 95, abilities: ['Rock Head', 'Lightning Rod', 'Battle Armor'],
      species: 'Lonely Pokémon', habitat: 'Mountain',
      description: 'Lleva puesto el cráneo de su madre. Nadie sabe qué aspecto tiene su cara oculta.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 105, name: "Marowak", type: "Ground", height: "1.0", weight: "45.0",
      hp: 60, attack: 80, defense: 110, abilities: ['Rock Head', 'Lightning Rod', 'Battle Armor'],
      species: 'Bone Keeper Pokémon', habitat: 'Mountain',
      description: 'Ha superado la pena por la pérdida de su madre y se ha hecho más fuerte. Su temperamento se ha vuelto violento.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 106, name: "Hitmonlee", type: "Fighting", height: "1.5", weight: "49.8",
      hp: 50, attack: 120, defense: 53, abilities: ['Limber', 'Reckless', 'Unburden'],
      species: 'Kicking Pokémon', habitat: 'Urban',
      description: 'Cuando lucha, estira y encoge las patas libremente. Con una patada, puede derribar a un enemigo lejano.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 107, name: "Hitmonchan", type: "Fighting", height: "1.4", weight: "50.2",
      hp: 50, attack: 105, defense: 79, abilities: ['Keen Eye', 'Iron Fist', 'Inner Focus'],
      species: 'Punching Pokémon', habitat: 'Urban',
      description: 'Sus puñetazos cortan el aire. Son tan rápidos que incluso un ligero roce puede causar una grave quemadura.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 108, name: "Lickitung", type: "Normal", height: "1.2", weight: "65.5",
      hp: 90, attack: 55, defense: 75, abilities: ['Own Tempo', 'Oblivious', 'Cloud Nine'],
      species: 'Licking Pokémon', habitat: 'Grassland',
      description: 'Su lengua, que es dos veces más larga que su cuerpo, se mueve como una mano hábil.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 109, name: "Koffing", type: "Poison", height: "0.6", weight: "1.0",
      hp: 40, attack: 65, defense: 95, abilities: ['Levitate', 'Neutralizing Gas'],
      species: 'Poison Gas Pokémon', habitat: 'Urban',
      description: 'Su cuerpo está lleno de gas venenoso. Flota gracias a los gases que contiene, que son más ligeros que el aire.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 110, name: "Weezing", type: "Poison", height: "1.2", weight: "9.5",
      hp: 65, attack: 90, defense: 120, abilities: ['Levitate', 'Neutralizing Gas'],
      species: 'Poison Gas Pokémon', habitat: 'Urban',
      description: 'Donde hay Weezing, siempre hay gases venenosos. Mantente alejado de este Pokémon.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 111, name: "Rhyhorn", type: "Ground/Rock", height: "1.0", weight: "115.0",
      hp: 80, attack: 85, defense: 95, abilities: ['Lightning Rod', 'Rock Head', 'Reckless'],
      species: 'Spikes Pokémon', habitat: 'Rough-terrain',
      description: 'Sus huesos son 1000 veces más duros que los de los humanos. Puede derribar fácilmente un rascacielos.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 112, name: "Rhydon", type: "Ground/Rock", height: "1.9", weight: "120.0",
      hp: 105, attack: 130, defense: 120, abilities: ['Lightning Rod', 'Rock Head', 'Reckless'],
      species: 'Drill Pokémon', habitat: 'Rough-terrain',
      description: 'Protegido por una armadura, puede sobrevivir en lava de 2000 grados centígrados.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 113, name: "Chansey", type: "Normal", height: "1.1", weight: "34.6",
      hp: 250, attack: 5, defense: 5, abilities: ['Natural Cure', 'Serene Grace', 'Healer'],
      species: 'Egg Pokémon', habitat: 'Urban',
      description: 'Un Pokémon gentil que comparte sus huevos nutritivos con los heridos.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 114, name: "Tangela", type: "Grass", height: "1.0", weight: "35.0",
      hp: 65, attack: 55, defense: 115, abilities: ['Chlorophyll', 'Leaf Guard', 'Regenerator'],
      species: 'Vine Pokémon', habitat: 'Grassland',
      description: 'Su identidad permanece oculta tras una maraña de lianas. Las lianas nunca paran de crecer.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 115, name: "Kangaskhan", type: "Normal", height: "2.2", weight: "80.0",
      hp: 105, attack: 95, defense: 80, abilities: ['Early Bird', 'Scrappy', 'Inner Focus'],
      species: 'Parent Pokémon', habitat: 'Grassland',
      description: 'La cría sale de la bolsa solo para jugar. La madre no la deja salir hasta que cumple 3 años.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 116, name: "Horsea", type: "Water", height: "0.4", weight: "8.0",
      hp: 30, attack: 40, defense: 70, abilities: ['Swift Swim', 'Sniper', 'Damp'],
      species: 'Dragon Pokémon', habitat: 'Sea',
      description: 'Conocido por derribar insectos voladores lanzando tinta desde la superficie del agua.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 117, name: "Seadra", type: "Water", height: "1.2", weight: "25.0",
      hp: 55, attack: 65, defense: 95, abilities: ['Poison Point', 'Sniper', 'Damp'],
      species: 'Dragon Pokémon', habitat: 'Sea',
      description: 'Capaz de nadar hacia atrás agitando rápidamente sus aletas pectorales y su robusta cola.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 118, name: "Goldeen", type: "Water", height: "0.6", weight: "15.0",
      hp: 45, attack: 67, defense: 60, abilities: ['Swift Swim', 'Water Veil', 'Lightning Rod'],
      species: 'Goldfish Pokémon', habitat: 'Water\'s-edge',
      description: 'Sus aletas de cola ondean elegantemente como un vestido de baile. Por eso recibe el nombre de reina del agua.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 119, name: "Seaking", type: "Water", height: "1.3", weight: "39.0",
      hp: 80, attack: 92, defense: 65, abilities: ['Swift Swim', 'Water Veil', 'Lightning Rod'],
      species: 'Goldfish Pokémon', habitat: 'Water\'s-edge',
      description: 'En otoño, se puede ver a los machos luchando ferozmente por las hembras.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 120, name: "Staryu", type: "Water", height: "0.8", weight: "34.5",
      hp: 30, attack: 45, defense: 55, abilities: ['Illuminate', 'Natural Cure', 'Analytic'],
      species: 'Star Shape Pokémon', habitat: 'Sea',
      description: 'Aparece en gran número en las orillas del mar durante las noches de verano. Su núcleo rojo brilla.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 121, name: "Starmie", type: "Water/Psychic", height: "1.1", weight: "80.0",
      hp: 60, attack: 75, defense: 85, abilities: ['Illuminate', 'Natural Cure', 'Analytic'],
      species: 'Mysterious Pokémon', habitat: 'Sea',
      description: 'Su núcleo central brilla con los colores del arco iris. Algunos creen que es una gema de otro mundo.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 122, name: "Mr. Mime", type: "Psychic/Fairy", height: "1.3", weight: "54.5",
      hp: 40, attack: 45, defense: 65, abilities: ['Soundproof', 'Filter', 'Technician'],
      species: 'Barrier Pokémon', habitat: 'Urban',
      description: 'Si alguien interrumpe su pantomima, le dará una bofetada con sus enormes manos.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 123, name: "Scyther", type: "Bug/Flying", height: "1.5", weight: "56.0",
      hp: 70, attack: 110, defense: 80, abilities: ['Swarm', 'Technician', 'Steadfast'],
      species: 'Mantis Pokémon', habitat: 'Grassland',
      description: 'Con sus cuchillas, que se vuelven más afiladas cortando objetos duros, corta a sus enemigos.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 124, name: "Jynx", type: "Ice/Psychic", height: "1.4", weight: "40.6",
      hp: 65, attack: 50, defense: 35, abilities: ['Oblivious', 'Forewarn', 'Dry Skin'],
      species: 'Human Shape Pokémon', habitat: 'Urban',
      description: 'Camina balanceándose y moviendo las caderas como si estuviera bailando. Sus movimientos son muy seductores.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 125, name: "Electabuzz", type: "Electric", height: "1.1", weight: "30.0",
      hp: 65, attack: 83, defense: 57, abilities: ['Static', 'Vital Spirit'],
      species: 'Electric Pokémon', habitat: 'Urban',
      description: 'Normalmente vive cerca de centrales eléctricas. Se alimenta de electricidad y causa apagones.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 126, name: "Magmar", type: "Fire", height: "1.3", weight: "44.5",
      hp: 65, attack: 95, defense: 57, abilities: ['Flame Body', 'Vital Spirit'],
      species: 'Spitfire Pokémon', habitat: 'Mountain',
      description: 'Su cuerpo arde con una llama anaranjada. Vive cerca de volcanes.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 127, name: "Pinsir", type: "Bug", height: "1.5", weight: "55.0",
      hp: 65, attack: 125, defense: 100, abilities: ['Hyper Cutter', 'Mold Breaker', 'Moxie'],
      species: 'Stag Beetle Pokémon', habitat: 'Forest',
      description: 'Si no puede aplastar a su enemigo con sus pinzas, lo agita y lo arroja lejos.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 128, name: "Tauros", type: "Normal", height: "1.4", weight: "88.4",
      hp: 75, attack: 100, defense: 95, abilities: ['Intimidate', 'Anger Point', 'Sheer Force'],
      species: 'Wild Bull Pokémon', habitat: 'Grassland',
      description: 'Cuando se enfada, se azota con las colas y embiste con fuerza para destrozar todo.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 129, name: "Magikarp", type: "Water", height: "0.9", weight: "10.0",
      hp: 20, attack: 10, defense: 55, abilities: ['Swift Swim', 'Rattled'],
      species: 'Fish Pokémon', habitat: 'Water\'s-edge',
      description: 'En el pasado, era algo más fuerte de lo que es ahora. Este Pokémon es considerado inútil.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 130, name: "Gyarados", type: "Water/Flying", height: "6.5", weight: "235.0",
      hp: 95, attack: 125, defense: 79, abilities: ['Intimidate', 'Moxie'],
      species: 'Atrocious Pokémon', habitat: 'Water\'s-edge',
      description: 'Raramente se ve en estado salvaje. Aunque no es especialmente fuerte, puede aprender muchos movimientos.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 131, name: "Lapras", type: "Water/Ice", height: "2.5", weight: "220.0",
      hp: 130, attack: 85, defense: 80, abilities: ['Water Absorb', 'Shell Armor', 'Hydration'],
      species: 'Transport Pokémon', habitat: 'Sea',
      description: 'Le gusta transportar gente en su lomo. Está casi extinto.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 132, name: "Ditto", type: "Normal", height: "0.3", weight: "4.0",
      hp: 48, attack: 48, defense: 48, abilities: ['Limber', 'Imposter'],
      species: 'Transform Pokémon', habitat: 'Urban',
      description: 'Puede alterar la estructura de su cuerpo para transformarse en lo que ve.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 133, name: "Eevee", type: "Normal", height: "0.3", weight: "6.5",
      hp: 55, attack: 55, defense: 50, abilities: ['Run Away', 'Adaptability', 'Anticipation'],
      species: 'Evolution Pokémon', habitat: 'Urban',
      description: 'Su código genético es irregular. Puede mutar si se expone a la radiación de las piedras.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 134, name: "Vaporeon", type: "Water", height: "1.0", weight: "29.0",
      hp: 130, attack: 65, defense: 60, abilities: ['Water Absorb', 'Hydration'],
      species: 'Bubble Jet Pokémon', habitat: 'Urban',
      description: 'Vive cerca del agua. Su larga cola termina en una aleta como la de una sirena.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 135, name: "Jolteon", type: "Electric", height: "0.8", weight: "24.5",
      hp: 65, attack: 65, defense: 60, abilities: ['Volt Absorb', 'Quick Feet'],
      species: 'Lightning Pokémon', habitat: 'Urban',
      description: 'Acumula iones negativos en la atmósfera para lanzar rayos de 10 000 voltios.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 136, name: "Flareon", type: "Fire", height: "0.9", weight: "25.0",
      hp: 65, attack: 130, defense: 60, abilities: ['Flash Fire', 'Guts'],
      species: 'Flame Pokémon', habitat: 'Urban',
      description: 'Tiene una bolsa de aire ardiente en el interior del cuerpo. Después de inhalar profundamente, escupe llamas de 1700 °C.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 137, name: "Porygon", type: "Normal", height: "0.8", weight: "36.5",
      hp: 65, attack: 60, defense: 70, abilities: ['Trace', 'Download', 'Analytic'],
      species: 'Virtual Pokémon', habitat: 'Urban',
      description: 'Un Pokémon que consiste enteramente en código de programación. Es capaz de moverse libremente en el ciberespacio.',
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg'
    },
    {
      id: 138, name: "Omanyte", type: "Rock/Water", height: "0.4", weight: "7.5",
      hp: 35, attack: 40, defense: 100, abilities: ['Swift Swim', 'Shell Armor', 'Weak Armor'],
      species: 'Spiral Pokémon', habitat: 'Sea',
      description: 'Un Pokémon que se regeneró a partir de un fósil. Usa los tentáculos para capturar y devorar presas.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 139, name: "Omastar", type: "Rock/Water", height: "1.0", weight: "35.0",
      hp: 70, attack: 60, defense: 125, abilities: ['Swift Swim', 'Shell Armor', 'Weak Armor'],
      species: 'Spiral Pokémon', habitat: 'Sea',
      description: 'Un Pokémon prehistórico que murió porque su concha se volvió demasiado grande y pesada.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 140, name: "Kabuto", type: "Rock/Water", height: "0.5", weight: "11.5",
      hp: 30, attack: 80, defense: 90, abilities: ['Swift Swim', 'Battle Armor', 'Weak Armor'],
      species: 'Shellfish Pokémon', habitat: 'Sea',
      description: 'Un Pokémon que se regeneró a partir de un fósil encontrado en lo que una vez fue el fondo del océano.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 141, name: "Kabutops", type: "Rock/Water", height: "1.3", weight: "40.5",
      hp: 60, attack: 115, defense: 105, abilities: ['Swift Swim', 'Battle Armor', 'Weak Armor'],
      species: 'Shellfish Pokémon', habitat: 'Sea',
      description: 'Sus cuchillas afiladas le permiten cortar a través de presas gruesas. Raramente se ve en estado salvaje.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 142, name: "Aerodactyl", type: "Rock/Flying", height: "1.8", weight: "59.0",
      hp: 80, attack: 105, defense: 65, abilities: ['Rock Head', 'Pressure', 'Unnerve'],
      species: 'Fossil Pokémon', habitat: 'Mountain',
      description: 'Un Pokémon feroz de la antigüedad. Se dice que volaba por los cielos con sus grandes alas membranosas.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 143, name: "Snorlax", type: "Normal", height: "2.1", weight: "460.0",
      hp: 160, attack: 110, defense: 65, abilities: ['Immunity', 'Thick Fat', 'Gluttony'],
      species: 'Sleeping Pokémon', habitat: 'Mountain',
      description: 'No está satisfecho a menos que coma 400 kg de comida cada día. Cuando termina de comer, se va a dormir inmediatamente.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 144, name: "Articuno", type: "Ice/Flying", height: "1.7", weight: "55.4",
      hp: 90, attack: 85, defense: 100, abilities: ['Pressure', 'Snow Cloak'],
      species: 'Freeze Pokémon', habitat: 'Mountain',
      description: 'Un Pokémon pájaro legendario que puede controlar el hielo. El batir de sus alas congela el aire.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 145, name: "Zapdos", type: "Electric/Flying", height: "1.6", weight: "52.6",
      hp: 90, attack: 90, defense: 85, abilities: ['Pressure', 'Static'],
      species: 'Electric Pokémon', habitat: 'Mountain',
      description: 'Un Pokémon pájaro legendario que tiene la habilidad de controlar la electricidad.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 146, name: "Moltres", type: "Fire/Flying", height: "2.0", weight: "60.0",
      hp: 90, attack: 100, defense: 90, abilities: ['Pressure', 'Flame Body'],
      species: 'Flame Pokémon', habitat: 'Mountain',
      description: 'Conocido como el legendario pájaro de fuego. Cada aleteo de sus alas crea una deslumbrante llamarada.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 147, name: "Dratini", type: "Dragon", height: "1.8", weight: "3.3",
      hp: 41, attack: 64, defense: 45, abilities: ['Shed Skin', 'Marvel Scale'],
      species: 'Dragon Pokémon', habitat: 'Water\'s-edge',
      description: 'Continuamente muda la piel y crece. La energía vital de su cuerpo aumenta constantemente.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 148, name: "Dragonair", type: "Dragon", height: "4.0", weight: "16.5",
      hp: 61, attack: 84, defense: 65, abilities: ['Shed Skin', 'Marvel Scale'],
      species: 'Dragon Pokémon', habitat: 'Water\'s-edge',
      description: 'Un Pokémon místico que exuda una aura gentil. Tiene la habilidad de cambiar el clima.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 149, name: "Dragonite", type: "Dragon/Flying", height: "2.2", weight: "210.0",
      hp: 91, attack: 134, defense: 95, abilities: ['Inner Focus', 'Multiscale'],
      species: 'Dragon Pokémon', habitat: 'Water\'s-edge',
      description: 'A pesar de su gran cuerpo, es capaz de dar la vuelta al mundo en solo 16 horas.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 150, name: "Mewtwo", type: "Psychic", height: "2.0", weight: "122.0",
      hp: 106, attack: 110, defense: 90, abilities: ['Pressure', 'Unnerve'],
      species: 'Genetic Pokémon', habitat: 'Rare',
      description: 'Un Pokémon creado por recombinación genética. Sus poderes científicos y psíquicos son incomparables.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    },
    {
      id: 151, name: "Mew", type: "Psychic", height: "0.4", weight: "4.0",
      hp: 100, attack: 100, defense: 100, abilities: ['Synchronize'],
      species: 'New Species Pokémon', habitat: 'Rare',
      description: 'Cuando se ve bajo un microscopio, se puede observar que su pelo corto, fino y delicado crece continuamente.',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    }
  ];

  const openPokemonDetail = (poke: any) => {
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
              <p className="text-xl text-white">Primera Generación - 151 Pokémon</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {pokemon.map((poke) => (
                <div 
                  key={poke.id} 
                  className="pokemon-card bg-white rounded-2xl p-6 shadow-lg"
                  onClick={() => openPokemonDetail(poke)}
                >
                  <div className="text-center mb-4">
                    <span className="text-sm text-gray-500 font-mono">#{poke.id.toString().padStart(3, '0')}</span>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{poke.name}</h3>
                    <img
                      src={poke.image}
                      alt={poke.name}
                      className="w-24 h-24 mx-auto rounded-full object-cover mb-3"
                    />
                    <div className="flex justify-center gap-1 mb-3">
                      {poke.type.split('/').map((type, index) => (
                        <span key={index} className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${
                          type === 'Fire' ? 'bg-red-600' :
                          type === 'Water' ? 'bg-blue-600' :
                          type === 'Grass' ? 'bg-green-600' :
                          type === 'Electric' ? 'bg-yellow-600' :
                          type === 'Psychic' ? 'bg-purple-600' :
                          type === 'Ice' ? 'bg-cyan-600' :
                          type === 'Dragon' ? 'bg-indigo-600' :
                          type === 'Dark' ? 'bg-gray-800' :
                          type === 'Fighting' ? 'bg-red-700' :
                          type === 'Poison' ? 'bg-purple-700' :
                          type === 'Ground' ? 'bg-yellow-700' :
                          type === 'Flying' ? 'bg-blue-400' :
                          type === 'Bug' ? 'bg-green-500' :
                          type === 'Rock' ? 'bg-yellow-800' :
                          type === 'Ghost' ? 'bg-purple-800' :
                          type === 'Steel' ? 'bg-gray-600' :
                          type === 'Fairy' ? 'bg-pink-500' :
                          'bg-gray-600'
                        }`}>
                          {type}
                        </span>
                      ))}
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
          </div>
        </div>
      </div>

      {/* Pokemon Detail Modal */}
      {selectedPokemon && (
        <div className="fixed inset-0 pokemon-detail-modal flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center rounded-t-2xl">
              <h2 className="text-2xl font-bold text-gray-800">
                #{selectedPokemon.id.toString().padStart(3, '0')} {selectedPokemon.name}
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
                      {selectedPokemon.type.split('/').map((type: string, index: number) => (
                        <span key={index} className={`px-4 py-2 rounded-full text-white font-semibold ${
                          type === 'Fire' ? 'bg-red-600' :
                          type === 'Water' ? 'bg-blue-600' :
                          type === 'Grass' ? 'bg-green-600' :
                          type === 'Electric' ? 'bg-yellow-600' :
                          type === 'Psychic' ? 'bg-purple-600' :
                          type === 'Ice' ? 'bg-cyan-600' :
                          type === 'Dragon' ? 'bg-indigo-600' :
                          type === 'Dark' ? 'bg-gray-800' :
                          type === 'Fighting' ? 'bg-red-700' :
                          type === 'Poison' ? 'bg-purple-700' :
                          type === 'Ground' ? 'bg-yellow-700' :
                          type === 'Flying' ? 'bg-blue-400' :
                          type === 'Bug' ? 'bg-green-500' :
                          type === 'Rock' ? 'bg-yellow-800' :
                          type === 'Ghost' ? 'bg-purple-800' :
                          type === 'Steel' ? 'bg-gray-600' :
                          type === 'Fairy' ? 'bg-pink-500' :
                          'bg-gray-600'
                        }`}>
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Información Básica</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Especie:</span>
                        <span className="font-semibold">{selectedPokemon.species}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Altura:</span>
                        <span className="font-semibold">{selectedPokemon.height} m</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Peso:</span>
                        <span className="font-semibold">{selectedPokemon.weight} kg</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Hábitat:</span>
                        <span className="font-semibold">{selectedPokemon.habitat}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Estadísticas</h3>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-gray-600">HP</span>
                          <span className="text-sm font-semibold">{selectedPokemon.hp}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-green-500 h-2 rounded-full" 
                            style={{ width: `${Math.min((selectedPokemon.hp / 250) * 100, 100)}%` }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-gray-600">Ataque</span>
                          <span className="text-sm font-semibold">{selectedPokemon.attack}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-red-500 h-2 rounded-full" 
                            style={{ width: `${Math.min((selectedPokemon.attack / 150) * 100, 100)}%` }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-gray-600">Defensa</span>
                          <span className="text-sm font-semibold">{selectedPokemon.defense}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-500 h-2 rounded-full" 
                            style={{ width: `${Math.min((selectedPokemon.defense / 180) * 100, 100)}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Habilidades</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedPokemon.abilities.map((ability: string, index: number) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                        >
                          {ability}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Descripción</h3>
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