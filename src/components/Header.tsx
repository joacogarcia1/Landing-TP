import { Instagram } from 'lucide-react';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="bg-gray-200 py-4">
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex justify-between items-center">
          
          <div className="flex items-center">
            <Logo className="h-8" />
          </div>
          
          
          <div className="flex space-x-12">
            <a href="#sobre-nosotros" className="text-gray-700 hover:text-black font-medium">
              Sobre nosotros
            </a>
            <a href="#nuestro-modelo" className="text-gray-700 hover:text-black font-medium">
              Nuestro Modelo IA
            </a>
            <a href="#como-funciona" className="text-gray-700 hover:text-black font-medium">
              Como funciona
            </a>
            <a href="#descarga" className="text-gray-700 hover:text-black font-medium">
              Descarga DermaScan
            </a>
          </div>
          
          {}
          <div className="flex space-x-4">
            <svg className="w-6 h-6 text-gray-700 hover:text-black cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
            <Instagram className="w-6 h-6 text-gray-700 hover:text-black cursor-pointer" />
          </div>
        </nav>
      </div>
    </header>
  );
}