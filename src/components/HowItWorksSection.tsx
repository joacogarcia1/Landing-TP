import React from 'react';
import { Camera, Brain, FileText, Shield } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      icon: <Camera className="w-12 h-12 text-blue-600" />,
      step: "Paso 01",
      title: "Captura la imagen",
      description: "Toma una foto clara del lunar que deseas analizar siguiendo nuestras guías visuales para obtener la mejor calidad."
    },
    {
      icon: <Brain className="w-12 h-12 text-green-500" />,
      step: "Paso 02", 
      title: "Análisis con IA",
      description: "Nuestra inteligencia artificial analiza la imagen utilizando algoritmos avanzados de reconocimiento de patrones."
    },
    {
      icon: <FileText className="w-12 h-12 text-orange-500" />,
      step: "Paso 03",
      title: "Recibe Resultados",
      description: "Obtén un reporte detallado con el nivel de riesgo, características identificadas y recomendaciones personalizadas."
    },
    {
      icon: <Shield className="w-12 h-12 text-purple-500" />,
      step: "Paso 04",
      title: "Actúa Preventivamente",
      description: "Sigue nuestros consejos de cuidado y programa consultas médicas cuando sea necesario para tu tranquilidad."
    }
  ];

  return (
    <section className="py-20 bg-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6 leading-tight">
            Cómo Funciona DermaScan
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
            Un proceso simple y eficaz en 4 pasos que te ayuda a mantener tu piel saludable y 
            detectar posibles riesgos tempranamente.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow relative">
              {/* Línea conectora */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300 z-10"></div>
              )}
              
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gray-50 rounded-2xl">
                  {step.icon}
                </div>
              </div>
              
              <div className="text-center mb-4">
                <p className="text-sm text-gray-500 font-medium mb-2">{step.step}</p>
                <h3 className="text-xl font-bold text-black mb-4">
                  {step.title}
                </h3>
              </div>
              
              <p className="text-gray-600 text-center leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}