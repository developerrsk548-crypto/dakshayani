import React from 'react';
import { Home, ChevronRight } from 'lucide-react';

const Breadcrumb2 = ({ 
  title = 'Our Menu', 
  currentPage = 'Our Menu' 
}) => {
  return (
    <section className="bg-[#f8f8f8] text-black py-6 sm:py-8 md:py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center">
        
        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium font-black tracking-tight mb-6">
          {title}
        </h1>

        {/* Pill Breadcrumb Container */}
        <nav aria-label="Breadcrumb">
          <ol className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 shadow-sm text-sm sm:text-base">
            <li className="inline-flex items-center">
              <a 
                href="/" 
                className="inline-flex items-center gap-1.5 text-gray-600 hover:text-red-600 font-medium transition-colors"
              >
                <Home className="w-4 h-4 text-gray-500" />
                Home
              </a>
            </li>
            
            <li>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </li>

            <li aria-current="page">
              <span className="font-bold text-black">
                {currentPage}
              </span>
            </li>
          </ol>
        </nav>

      </div>
    </section>
  );
};

export default Breadcrumb2;