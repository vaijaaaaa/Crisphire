"use client";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <div className="py-24">
      <div className="max-w-4xl mx-auto text-center px-8">
        {/* Trust indicators */}
        <div className="mb-16">
          <div className="flex items-center justify-center space-x-6 mb-6">
            <div className="w-5 h-5 text-amber-500">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <div className="w-5 h-5 text-amber-500">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
          </div>
          <div className="text-gray-600 text-sm space-y-1 font-montserrat font-medium">
            <p>Trusted by 1000s of</p>
            <p>high volume recruiters</p>
          </div>
        </div>

        {/* Main heading */}
        <div className="mb-12">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-4 tracking-tight font-montserrat">
            A way faster
          </h1>
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 tracking-tight font-montserrat">
            Post apply contact
          </h1>
        </div>
        
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed font-montserrat font-medium">
          Instantly interview your entire candidate pipeline without bias using 
          our AI interviewer Steve. Reduce time to hire by 2x.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
          <Button 
            className="bg-gray-900 text-white hover:bg-black px-8 py-3.5 rounded-xl font-bold text-base shadow-lg font-montserrat"
          >
            Book a demo
          </Button>
          <Button 
            variant="outline" 
            className="px-8 py-3.5 border-2 border-gray-300 text-gray-700 bg-white hover:bg-gray-50 rounded-xl font-bold text-base flex items-center gap-3 font-montserrat"
          >
            <div className="w-5 h-5 bg-blue-500 rounded-lg flex items-center justify-center">
              <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 8 8">
                <path d="M0 0v6l6-3z"/>
              </svg>
            </div>
            Try Steve
          </Button>
        </div>
      </div>
    </div>
  );
}