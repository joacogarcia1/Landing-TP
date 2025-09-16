import React from 'react';
import { Users, Shield, TrendingUp, Award, Globe, Clock } from 'lucide-react';

export default function TestimonialsSection() {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      number: "50.000+",
      title: "Usuarios Activos",
      description: "Personas Monitoreando sus lunares constantemente"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      number: "95%",
      title: "De precisión en Detección",
      description: "Efectividad comprobada en análisis de lunares"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      number: "36.000+",
      title: "Análisis Realizados",
      description: "Escaneos completados con éxito"
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      number: "500+",
      title: "Casos Detectados",
      description: "Melanomas identificados en etapa temprana"
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      number: "25",
      title: "Países",
      description: "Disponible en múltiples regiones"
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      number: "24/7",
      title: "Disponibilidad",
      description: "Monitoreo continuo de tu piel"
    }
  ];

  return (
    <section className="py-20 bg-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6 leading-tight">
            Nuestro Impacto en la Prevención
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
            DermaScan está transformando la manera en que las personas cuidan su piel,<br />
            ayudando a detectar riesgos tempranamente y salvando vidas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-50 rounded-2xl mb-6 mx-auto">
                {stat.icon}
              </div>
              
              <div className="text-center">
                <h3 className="text-3xl font-bold text-black mb-2">
                  {stat.number}
                </h3>
                <h4 className="text-lg font-semibold text-black mb-3">
                  {stat.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}