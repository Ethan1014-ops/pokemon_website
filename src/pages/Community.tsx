import React, { useEffect } from 'react';
import { MessageCircle, Users, Heart, ExternalLink } from 'lucide-react';

const Community: React.FC = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Handle hash navigation
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  const platforms = [
    {
      id: 'discord',
      name: 'Discord',
      description: 'Únete a nuestra comunidad de entrenadores en Discord. Chatea en tiempo real, participa en torneos y encuentra compañeros de batalla.',
      icon: <MessageCircle className="w-12 h-12 text-blue-600" />,
      link: 'https://discord.gg/pokemon',
      color: 'from-blue-500 to-blue-700',
      features: ['Chat en tiempo real', 'Torneos semanales', 'Intercambios', 'Ayuda estratégica']
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      description: 'Mantente actualizado con las últimas noticias y eventos. Recibe notificaciones directas en tu teléfono.',
      icon: <Users className="w-12 h-12 text-green-600" />,
      link: 'https://wa.me/+573024774256?text=Hola, estoy interesado/a',
      color: 'from-green-500 to-green-700',
      features: ['Noticias exclusivas', 'Eventos especiales', 'Alertas de raids', 'Comunidad local']
    },
    {
      id: 'pinterest',
      name: 'Pinterest',
      description: 'Explora increíble arte fan, wallpapers, guías visuales y mucho más contenido creativo de la comunidad.',
      icon: <Heart className="w-12 h-12 text-yellow-600" />,
      link: 'https://pinterest.com/pokepage',
      color: 'from-yellow-500 to-yellow-700',
      features: ['Arte fan', 'Wallpapers HD', 'Guías visuales', 'Inspiración creativa']
    }
  ];

  const supportOptions = [
    {
      title: 'Centro de Ayuda',
      description: 'Encuentra respuestas a las preguntas más frecuentes',
      action: 'Visitar Centro de Ayuda'
    },
    {
      title: 'Reportar un Error',
      description: 'Ayúdanos a mejorar reportando cualquier problema',
      action: 'Reportar Error'
    },
    {
      title: 'Sugerir Funcionalidad',
      description: 'Comparte tus ideas para nuevas características',
      action: 'Enviar Sugerencia'
    },
    {
      title: 'Contacto Directo',
      description: 'Habla directamente con nuestro equipo de soporte',
      action: 'Contactar Soporte'
    }
  ];

  return (
    <div className="pokemon-bg min-h-screen">
      <div className="pokemon-overlay min-h-screen py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">Comunidad</h1>
            <p className="text-xl text-white">Conecta con otros entrenadores Pokémon</p>
          </div>

          {/* Social Platforms */}
          <div className="section-card rounded-2xl p-8 shadow-2xl mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Únete a Nosotros</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {platforms.map((platform, index) => (
                <div 
                  key={index} 
                  id={platform.id}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
                >
                  <div className="text-center mb-6">
                    {platform.icon}
                    <h3 className="text-2xl font-bold text-gray-800 mt-4">{platform.name}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 text-center">{platform.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {platform.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <span className="text-blue-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center py-3 rounded-lg font-semibold text-white bg-gradient-to-r ${platform.color} hover:shadow-lg transition-all`}
                  >
                    Unirse a {platform.name}
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Support Section */}
          <div className="section-card rounded-2xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Soporte</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {supportOptions.map((option, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{option.title}</h3>
                  <p className="text-gray-600 mb-4">{option.description}</p>
                  <button className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    {option.action}
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">¿Necesitas ayuda inmediata?</h3>
              <p className="text-gray-600 mb-6">Nuestro equipo está disponible 24/7 para ayudarte</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-semibold">
                  Chat en Vivo
                </button>
                <button className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold">
                  Enviar Email
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;