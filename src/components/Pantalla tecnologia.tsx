
export default function TechnologySection() {
  return (
    <section className="py-20 bg-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/*teléfono*/}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/*iPhone*/}
              <div className="w-80 h-[640px] bg-black rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-7 bg-black rounded-b-2xl"></div>
                  
                  {/*Lo que va en la pantalla del celu*/}
                  <div className="p-6 pt-12 h-full flex flex-col">
                    
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                      <h3 className="font-semibold text-lg text-gray-800">Resultados del escaneo</h3>
                      <div className="w-8 h-8">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="text-gray-600">
                          <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"/>
                        </svg>
                      </div>
                    </div>
                    
                    
                    <div className="flex justify-center mb-8">
                      <div className="relative w-32 h-32">
                        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#e5e7eb"
                            strokeWidth="3"
                          />
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#10b981"
                            strokeWidth="3"
                            strokeDasharray="15, 85"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-2xl font-bold text-gray-800">15%</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center mb-8">
                      <p className="text-gray-600 text-sm">Predicción de riesgo</p>
                    </div>
                    
                   
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="bg-gray-50 p-4 rounded-xl text-center">
                        <div className="relative w-16 h-16 mx-auto mb-2">
                          <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                            <path
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="#e5e7eb"
                              strokeWidth="3"
                            />
                            <path
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="#10b981"
                              strokeWidth="3"
                              strokeDasharray="12, 88"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-sm font-bold text-gray-800">12%</span>
                          </div>
                        </div>
                        <p className="text-xs text-gray-600">Riesgo en base a imagen</p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-xl text-center">
                        <div className="relative w-16 h-16 mx-auto mb-2">
                          <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                            <path
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="#e5e7eb"
                              strokeWidth="3"
                            />
                            <path
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="#10b981"
                              strokeWidth="3"
                              strokeDasharray="21, 79"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-sm font-bold text-gray-800">21%</span>
                          </div>
                        </div>
                        <p className="text-xs text-gray-600">Riesgo según diámetro</p>
                      </div>
                    </div>
                    
                    
                    <button className="bg-blue-600 text-white py-4 rounded-xl font-semibold text-lg mb-4">
                      Finalizar Escaneo
                    </button>
                    
                   
                    <p className="text-xs text-gray-500 text-center">
                      Para informarte sobre cuidados de la piel, consulta nuestra sección de <span className="font-semibold">Prevención</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-black mb-8">
              Tecnología con IA, especializada en salud
            </h2>
            
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                El melanoma, el cáncer de piel más peligroso, puede ser detectado 
                tempranamente, lo que reduce su mortalidad en un 98%. DermaScan 
                te ofrece una herramienta innovadora para su detección temprana y 
                prevención
              </p>
              
              <p>
                <span className="font-semibold text-black">Inteligencia Artificial:</span> Análisis preciso del riesgo de lunares.
              </p>
              
              <p>
                <span className="font-semibold text-black">Factores de Riesgo del usuario:</span> Identifica tus puntos débiles para una 
                predicción más fiable.
              </p>
              
              <p>
                <span className="font-semibold text-black">Cuidados Personalizados:</span> Sección dedicada a consejos para mantener 
                una piel sana.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}