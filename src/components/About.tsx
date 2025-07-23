import { useState, useEffect } from 'react';
import { BookOpen, Heart, Lightbulb } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

export default function About() {
  const [currentLine, setCurrentLine] = useState(0);
  
  const storyLines = [
    "I'm a calm, curious learner who finds joy in quiet evenings, thoughtful code, and heartfelt stories.",
    "Whether I'm solving a dataset mystery or enjoying a K-drama, I immerse myself completely.",
    "I believe warmth, patience, and creativity are powerful tools—both in life and technology.",
    "My journey in AI and machine learning is driven by a desire to create meaningful solutions.",
    "When I'm not coding, you'll find me with a cozy room, planning my next adventure."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % storyLines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-[#FFE6D4]/40 via-[#FDF7F0] to-[#DDE6D5]/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#587C56] mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-[#A58A7F] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Profile Image and Animated Desk Scene */}
          <div className="relative flex flex-col items-center">
            {/* Profile Image */}
            <img
              src={profileImg}
              alt="Profile"
              className="w-64 h-64 object-cover rounded-full shadow-lg border-4 border-[#DDE6D5] mb-6"
            />
            <div className="bg-[#DDE6D5]/60 rounded-3xl p-8 backdrop-blur-sm border border-[#587C56]/20">
              {/* Desk Surface */}
              <div className="bg-[#A58A7F]/20 rounded-2xl p-6 relative">
                {/* Animated Items */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {/* Cozy Book */}
                  <div className="flex flex-col items-center group">
                    <div className="w-12 h-12 bg-[#A58A7F]/20 rounded-lg flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
                      <BookOpen size={20} className="text-[#A58A7F]" />
                    </div>
                    <span className="text-xs text-[#A58A7F]">Cozy reading books</span>
                  </div>

                  {/* Notebook */}
                  <div className="flex flex-col items-center group">
                    <div className="w-12 h-12 bg-[#FFE6D4] rounded-lg flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
                      <BookOpen size={20} className="text-[#A58A7F]" />
                    </div>
                    <span className="text-xs text-[#A58A7F]">Ideas & Notes</span>
                  </div>

                  {/* Plant */}
                  <div className="flex flex-col items-center group">
                    <div className="w-12 h-12 bg-[#587C56]/20 rounded-full flex items-center justify-center mb-2 group-hover:animate-bounce">
                      <span className="text-2xl">🌱</span>
                    </div>
                    <span className="text-xs text-[#A58A7F]">Growing daily</span>
                  </div>
                </div>

                {/* Animated Candle */}
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-4 h-8 bg-[#FFE6D4] rounded-full"></div>
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 animate-pulse">
                      <div className="w-2 h-4 bg-orange-400 rounded-full opacity-80"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 animate-float">
              <div className="w-8 h-8 bg-[#587C56] rounded-full flex items-center justify-center">
                <Lightbulb size={16} className="text-[#FDF7F0]" />
              </div>
            </div>
          </div>

          {/* Right: Story Content */}
          <div className="space-y-8">
            {/* Animated Story */}
            <div className="bg-[#FDF7F0] rounded-2xl p-8 shadow-lg border border-[#DDE6D5]/50">
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-[#587C56] rounded-full"></div>
                  <h3 className="text-xl font-semibold text-[#A58A7F]">My Story</h3>
                </div>
                
                <div className="space-y-4 text-[#A58A7F] leading-relaxed">
                  {storyLines.map((line, index) => (
                    <p
                      key={index}
                      className={`transition-all duration-500 ${
                        index === currentLine 
                          ? 'text-[#587C56] font-medium transform scale-105' 
                          : 'opacity-70'
                      }`}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Traits & Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#DDE6D5]/60 rounded-xl p-4">
                <h4 className="font-semibold text-[#587C56] mb-3">Traits</h4>
                <div className="space-y-2">
                  {['Curious', 'Emotional', 'Observant', 'Reflective'].map((trait) => (
                    <div key={trait} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#587C56] rounded-full"></div>
                      <span className="text-sm text-[#A58A7F]">{trait}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#FFE6D4]/60 rounded-xl p-4">
                <h4 className="font-semibold text-[#A58A7F] mb-3">Likes</h4>
                <div className="space-y-2">
                  {['Cozy Reading Books', 'Rainy Days', 'Clean Code', 'New Libraries'].map((like) => (
                    <div key={like} className="flex items-center space-x-2">
                      <Heart size={12} className="text-[#A58A7F]" />
                      <span className="text-sm text-[#A58A7F]">{like}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Dream */}
            <div className="bg-gradient-to-r from-[#587C56]/20 to-[#FFE6D4]/40 rounded-xl p-6">
              <h4 className="font-semibold text-[#587C56] mb-3 flex items-center">
                <span className="mr-2">✨</span>
                Dream
              </h4>
              <p className="text-[#A58A7F] italic">
                "To build tech that feels personal, human, and helpful."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}