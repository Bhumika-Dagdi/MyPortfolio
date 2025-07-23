import { useState, useEffect } from 'react';
import { ChevronDown, Leaf, BookOpen, Heart } from 'lucide-react';
import Lottie from 'lottie-react';
import heartCodeAnimation from '../assets/heart-code.json';

export default function Hero() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 5,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-[#FDF7F0] via-[#DDE6D5]/30 to-[#FFE6D4]/40 relative overflow-hidden">
      {/* Animated Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-2 h-2 bg-[#587C56]/20 rounded-full animate-pulse"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

      {/* Falling Leaves */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <Leaf
            key={i}
            className="absolute text-[#587C56]/30 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
            size={16 + Math.random() * 8}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-32 pb-16 min-h-screen flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          {/* Left: Text Content */}
          <div className="space-y-8 text-center md:text-left">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-[#A58A7F] leading-tight">
                Hello, I'm{' '}
                <span className="text-[#587C56] relative">
                  Bhumika
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#FFE6D4] rounded-full transform -skew-x-12"></div>
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-[#A58A7F] leading-relaxed">
                I write code, I solve problems, and I love stories — from data or dramas.
              </p>
              
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="px-4 py-2 bg-[#DDE6D5] text-[#587C56] rounded-full text-sm font-medium">
                  Final Year B.Tech (CS-AI)
                </span>
                <span className="px-4 py-2 bg-[#FFE6D4] text-[#A58A7F] rounded-full text-sm font-medium">
                  Nature Lover
                </span>
                <span className="px-4 py-2 bg-[#DDE6D5] text-[#587C56] rounded-full text-sm font-medium">
                  K-Drama Fan
                </span>
                <span className="px-4 py-2 bg-[#FFE6D4] text-[#A58A7F] rounded-full text-sm font-medium">
                  ML Explorer
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="flex items-center justify-center space-x-2 px-5 py-2 bg-[#587C56] text-white rounded-full hover:bg-[#587C56]/90 transition-all duration-300 hover:scale-105 hover:shadow-lg group text-base font-medium whitespace-nowrap"
                >
                  <BookOpen size={18} />
                  <span>View My Work</span>
                  <div className="ml-2 group-hover:animate-pulse">📚</div>
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="flex items-center justify-center space-x-2 px-5 py-2 bg-[#FFE6D4] text-[#A58A7F] rounded-full hover:bg-[#FFE6D4]/80 transition-all duration-300 hover:scale-105 hover:shadow-lg group text-base font-medium whitespace-nowrap"
                >
                  <Heart size={18} />
                  <span>Know Me More</span>
                  <div className="ml-2 group-hover:animate-pulse">🌸</div>
                </button>
                <a
                  href="https://drive.google.com/file/d/1JIYx1QIiVBG9uFEBF0i25R-_78KilvvT/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 px-5 py-2 bg-[#A58A7F] text-white rounded-full hover:bg-[#A58A7F]/90 transition-all duration-300 hover:scale-105 hover:shadow-lg group text-base font-medium whitespace-nowrap"
                >
                  <span>Resume</span>
                  <span className="ml-2">📄</span>
                </a>
              </div>
            </div>

          {/* Right: Animated Scene */}
          <div className="relative">
            <div className="bg-[#DDE6D5]/60 rounded-3xl p-8 backdrop-blur-sm border border-[#587C56]/20">
              <div className="space-y-6">
                {/* Animated Window */}
                <div className="bg-[#FDF7F0] rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <span className="text-[#A58A7F] text-sm">my_portfolio.py</span>
                  </div>
                  <div className="space-y-2 text-sm font-mono">
                    <div className="text-[#587C56]">
                      <span className="text-[#A58A7F]">class</span> Developer:
                    </div>
                    <div className="text-[#A58A7F] ml-4">
                      name = <span className="text-[#587C56]">"Bhumika"</span>
                    </div>
                    <div className="text-[#A58A7F] ml-4">
                      passion = <span className="text-[#587C56]">["AI", "Stories", "Nature"]</span>
                    </div>
                    <div className="text-[#A58A7F] ml-4">
                      current_status = <span className="text-[#587C56]">"Building dreams"</span>
                    </div>
                  </div>
                </div>

                {/* Lottie Animation: Heart Code */}
                <div className="flex justify-center mb-4">
                  <Lottie 
                    animationData={heartCodeAnimation} 
                    loop 
                    style={{ width: 220, height: 220 }}
                  />
                </div>
                {/* Animated Books */}
                <div className="flex justify-center space-x-4">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-8 h-12 bg-gradient-to-b from-[#587C56] to-[#A58A7F] rounded-sm shadow-lg hover:scale-105 transition-transform duration-300"
                      style={{
                        animationDelay: `${i * 0.2}s`,
                      }}
                    />
                  ))}
                </div>

                {/* Animated Plant */}
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-16 h-20 bg-[#587C56] rounded-full opacity-60 animate-pulse"></div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-4xl animate-bounce">
                      🌿
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-[#587C56]" />
      </div>
    </section>
  );
}