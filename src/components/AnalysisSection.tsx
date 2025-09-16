import React from 'react';
import { Sparkles } from 'lucide-react';

export default function AnalysisSection() {
  return (
    <section className="py-20 bg-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contenido de texto */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-bold text-black mb-8 leading-tight flex items-center">
              Análisis Inteligente de Lunares con IA 
              <Sparkles className="w-8 h-8 ml-3 text-black" />
            </h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg mb-10">
              <p>
                El proceso es sencillo, pero el resultado es extraordinario. Simplemente 
                tomas una foto clara de tu lunar con la cámara de tu teléfono. Nuestra 
                IA no solo evalúa el tamaño o el color, sino que se fija en las 
                características críticas que los dermatólogos usan para clasificar los 
                lunares, basándose en la regla ABCDE (A de asimetría, B de bordes 
                irregulares, C de color variado, D de diámetro y E de evolución)
              </p>
              
              <p>
                Al considerar todos estos factores, DermaScan te ofrece una 
                evaluación de riesgo clara y confiable. Aunque nuestra herramienta no 
                reemplaza la consulta con un profesional, te da la tranquilidad de tener 
                un primer escaneo en la palma de tu mano, permitiéndote tomar 
                decisiones informadas y, lo más importante, actuar a tiempo.
              </p>
            </div>
            
            {/* Imagen debajo del texto */}
            <div className="flex justify-center mb-10">
              <div className="w-[40rem] h-[30rem] flex items-center justify-center">
                <img 
                  src="/image copy copy copy.png" 
                  alt="Lunar para análisis detallado" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            
            <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg">
              Infórmate más sobre nuestro modelo IA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}