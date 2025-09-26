"use client";

export function DemoInterface() {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex gap-8">
          {/* Left Panel - Interviewer */}
          <div className="w-1/2">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl overflow-hidden">
              {/* Header */}
              <div className="bg-emerald-50/80 px-6 py-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full"></div>
                  <span className="text-sm font-bold text-gray-800 font-montserrat">interviewer</span>
                </div>
              </div>
              
              {/* Navigation */}
              <div className="px-6 py-4 border-b border-gray-100/50">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span>←</span>
                  <span>My Sessions</span>
                </div>
              </div>
              
              {/* Profile */}
              <div className="p-6 border-b border-gray-100/50">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-medium shadow-lg">
                    JD
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 font-montserrat">Jane Doe</div>
                    <div className="text-sm text-blue-600 font-semibold font-montserrat">Programmer</div>
                    <div className="text-xs text-gray-500 mt-1 font-montserrat font-medium">Wed Jan 14, 2024</div>
                  </div>
                </div>
              </div>
              
              {/* Score */}
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-gray-800 font-montserrat">Overall score</span>
                  <div className="bg-amber-100 text-amber-800 px-3 py-1.5 rounded-full font-bold text-sm font-montserrat">
                    5
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Candidate */}
          <div className="w-1/2">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl overflow-hidden">
              {/* Video Area */}
              <div className="relative h-72 bg-gradient-to-br from-indigo-500 via-purple-600 to-purple-700">
                {/* Candidate photo */}
                <div className="absolute bottom-6 right-6 w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-600 text-xs font-medium">
                    Candidate
                  </div>
                </div>
              </div>
              
              {/* Tabs */}
              <div className="border-b border-gray-100/50">
                <div className="flex">
                  <button className="px-6 py-4 text-sm font-bold text-gray-900 border-b-2 border-gray-900 bg-white/50 font-montserrat">
                    Transcript
                  </button>
                  <button className="px-6 py-4 text-sm font-semibold text-gray-500 hover:text-gray-700 transition-colors font-montserrat">
                    Scorecard
                  </button>
                  <button className="px-6 py-4 text-sm font-semibold text-gray-500 hover:text-gray-700 transition-colors font-montserrat">
                    Output
                  </button>
                  <button className="px-6 py-4 text-sm font-semibold text-gray-500 hover:text-gray-700 transition-colors font-montserrat">
                    Notes
                  </button>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 text-amber-800 px-3 py-1.5 rounded-full font-bold text-sm shrink-0 font-montserrat">
                    8.5
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1 font-montserrat">Overall score</div>
                    <div className="text-sm text-gray-600 font-semibold mb-3 font-montserrat">
                      English Proficiency
                    </div>
                    <div className="text-sm text-gray-500 leading-relaxed font-montserrat font-medium">
                      Excellent communication skills with clear articulation and 
                      professional demeanor. Strong technical knowledge demonstrated 
                      through detailed explanations and problem-solving approach.
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="font-bold text-gray-900 mb-2 font-montserrat">Communication Skills</div>
                  <div className="text-sm text-gray-600 font-semibold font-montserrat">6/10</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}