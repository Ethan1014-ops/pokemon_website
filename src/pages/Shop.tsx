import React, { useState } from 'react';
import { ShoppingCart, Plus, Minus } from 'lucide-react';

const Shop: React.FC = () => {
  const [cart, setCart] = useState<Record<string, number>>({});

  const products = [
    {
      id: 'pokeball',
      name: 'Pokéball',
      price: 200,
      description: 'Pokéball básica para capturar Pokémon',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg',
      category: 'Pokéballs'
    },
    {
      id: 'greatball',
      name: 'Super Ball',
      price: 600,
      description: 'Mayor probabilidad de captura que la Pokéball',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg',
      category: 'Pokéballs'
    },
    {
      id: 'ultraball',
      name: 'Ultra Ball',
      price: 1200,
      description: 'La mejor Pokéball disponible',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg',
      category: 'Pokéballs'
    },
    {
      id: 'potion',
      name: 'Poción',
      price: 300,
      description: 'Restaura 20 HP de un Pokémon',
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg',
      category: 'Medicina'
    },
    {
      id: 'superpotion',
      name: 'Súper Poción',
      price: 700,
      description: 'Restaura 50 HP de un Pokémon',
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg',
      category: 'Medicina'
    },
    {
      id: 'hyperpotion',
      name: 'Hiper Poción',
      price: 1200,
      description: 'Restaura 200 HP de un Pokémon',
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg',
      category: 'Medicina'
    },
    {
      id: 'oran-berry',
      name: 'Baya Aranja',
      price: 100,
      description: 'Restaura 10 HP cuando el Pokémon está herido',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg',
      category: 'Bayas'
    },
    {
      id: 'sitrus-berry',
      name: 'Baya Zidra',
      price: 200,
      description: 'Restaura HP cuando está por debajo del 50%',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg',
      category: 'Bayas'
    },
    {
      id: 'lucky-egg',
      name: 'Huevo Suerte',
      price: 5000,
      description: 'Duplica la experiencia ganada en combate',
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg',
      category: 'Objetos Especiales'
    }
  ];

  const addToCart = (productId: string) => {
    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[productId] > 1) {
        newCart[productId]--;
      } else {
        delete newCart[productId];
      }
      return newCart;
    });
  };

  const getTotalPrice = () => {
    return Object.entries(cart).reduce((total, [productId, quantity]) => {
      const product = products.find(p => p.id === productId);
      return total + (product?.price || 0) * quantity;
    }, 0);
  };

  const categories = Array.from(new Set(products.map(p => p.category)));

  return (
    <div className="pokemon-bg min-h-screen">
      <div className="pokemon-overlay min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">Tienda Pokémon</h1>
            <p className="text-xl text-white">Equípate para tu aventura</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Products */}
            <div className="flex-1">
              {categories.map(category => (
                <div key={category} className="section-card rounded-2xl p-8 shadow-2xl mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">{category}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products
                      .filter(product => product.category === category)
                      .map(product => (
                        <div key={product.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-32 object-cover rounded-lg mb-4"
                          />
                          <h3 className="text-lg font-bold text-gray-800 mb-2">{product.name}</h3>
                          <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                          <div className="flex justify-between items-center">
                            <span className="text-xl font-bold text-blue-600">₽{product.price}</span>
                            <div className="flex items-center space-x-2">
                              {cart[product.id] && (
                                <>
                                  <button
                                    onClick={() => removeFromCart(product.id)}
                                    className="p-1 bg-red-500 text-white rounded hover:bg-red-600"
                                  >
                                    <Minus className="w-4 h-4" />
                                  </button>
                                  <span className="font-semibold">{cart[product.id]}</span>
                                </>
                              )}
                              <button
                                onClick={() => addToCart(product.id)}
                                className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Cart */}
            <div className="w-full lg:w-80">
              <div className="section-card rounded-2xl p-6 shadow-2xl sticky top-24">
                <div className="flex items-center mb-6">
                  <ShoppingCart className="w-6 h-6 text-blue-500 mr-2" />
                  <h3 className="text-xl font-bold text-gray-800">Carrito</h3>
                </div>

                {Object.keys(cart).length === 0 ? (
                  <p className="text-gray-500 text-center py-8">Tu carrito está vacío</p>
                ) : (
                  <div className="space-y-4">
                    {Object.entries(cart).map(([productId, quantity]) => {
                      const product = products.find(p => p.id === productId);
                      if (!product) return null;

                      return (
                        <div key={productId} className="flex justify-between items-center py-2 border-b">
                          <div>
                            <h4 className="font-semibold text-sm">{product.name}</h4>
                            <p className="text-xs text-gray-500">₽{product.price} x {quantity}</p>
                          </div>
                          <span className="font-bold">₽{product.price * quantity}</span>
                        </div>
                      );
                    })}

                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center text-lg font-bold">
                        <span>Total:</span>
                        <span className="text-blue-600">₽{getTotalPrice()}</span>
                      </div>
                      <button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all">
                        Comprar Ahora
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;