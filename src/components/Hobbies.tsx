import { Heart, Film, Music, BookOpen } from 'lucide-react';
import { useState, useRef, useEffect, useCallback } from 'react';
import Lottie from 'lottie-react';
import cozyCodeAnimation from '../assets/cozy-code.json';

export default function Hobbies() {
  const hobbies = [
    {
      name: "K-Drama Binge",
      icon: Film,
      description: "Getting lost in heartwarming stories and beautiful cinematography",
      color: "from-[#587C56] to-[#A58A7F]",
      favorites: ["Amidst Snowstorm of Love", "The Legend of Blue Sea", "Goblin"],
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=256&q=80"
    },
    {
      name: "Reading & Learning",
      icon: BookOpen,
      description: "Always curious about new technologies and inspiring stories",
      color: "from-[#FFE6D4] to-[#DDE6D5]",
      favorites: ["Tech blogs", "AI research", "Personal growth"],
      image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=facearea&w=256&q=80"
    },
    {
      name: "Music & Vibes",
      icon: Music,
      description: "Creating the perfect atmosphere for every mood and moment",
      color: "from-[#587C56] to-[#FFE6D4]",
      favorites: ["old bollywood songs", "good mood songs", "love songs"],
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=256&q=80"
    },
    {
      name: "Cultures & Self-Discovery",
      icon: Heart,
      description: "Learning about different cultures and understanding myself more deeply. I enjoy discovering new perspectives and reflecting on personal growth.",
      color: "from-[#A58A7F] to-[#FFE6D4]",
      favorites: ["Cultural insights", "Personal growth", "Mindfulness", "Personality tests"],
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=256&q=80"
    }
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);
  const visibleCount = 3;
  const canSlide = startIndex + visibleCount < hobbies.length;
  const canSlideBack = startIndex > 0;
  const visibleHobbies = hobbies.slice(startIndex, startIndex + visibleCount);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX - currentX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const newX = e.clientX - startX;
    setCurrentX(newX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const threshold = 100;
    if (Math.abs(currentX) > threshold) {
      if (currentX > 0 && canSlideBack) {
        setStartIndex(startIndex - 1);
      } else if (currentX < 0 && canSlide) {
        setStartIndex(startIndex + 1);
      }
    }
    setCurrentX(0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX - currentX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const newX = e.touches[0].clientX - startX;
    setCurrentX(newX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const threshold = 50;
    if (Math.abs(currentX) > threshold) {
      if (currentX > 0 && canSlideBack) {
        setStartIndex(startIndex - 1);
      } else if (currentX < 0 && canSlide) {
        setStartIndex(startIndex + 1);
      }
    }
    setCurrentX(0);
  };

  const startAutoSlide = useCallback(() => {
    if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    autoSlideRef.current = setInterval(() => {
      setStartIndex(prevIndex => {
        const nextIndex = prevIndex + 1;
        const maxIndex = hobbies.length - visibleCount;
        return nextIndex > maxIndex ? 0 : nextIndex;
      });
    }, 5000); // Auto-slide every 5 seconds
  }, [hobbies.length, visibleCount]);

  const stopAutoSlide = useCallback(() => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
      autoSlideRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!isPaused && !isDragging) {
      startAutoSlide();
    } else {
      stopAutoSlide();
    }
    
    return () => stopAutoSlide();
  }, [isPaused, isDragging, startAutoSlide, stopAutoSlide]);

  useEffect(() => {
    const handleMouseLeave = () => {
      if (isDragging) {
        setIsDragging(false);
        setCurrentX(0);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [isDragging]);

  return (
    <section id="hobbies" className="py-20 bg-gradient-to-br from-[#FFE6D4]/40 via-[#FDF7F0] to-[#DDE6D5]/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#587C56] mb-4">
            Hobbies & Favorites
          </h2>
          <div className="w-24 h-1 bg-[#A58A7F] mx-auto rounded-full"></div>
          <p className="text-[#A58A7F] mt-6 text-lg">
            The little things that bring joy and inspiration
          </p>
        </div>

        {/* Hobbies Slider Row */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            ref={sliderRef}
            className="flex gap-8 overflow-x-hidden transition-transform duration-500 cursor-grab active:cursor-grabbing" 
            style={{ 
              minHeight: 350,
              transform: `translateX(${currentX}px)`,
              userSelect: isDragging ? 'none' : 'auto'
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {visibleHobbies.map((hobby, index) => {
              const Icon = hobby.icon;
              return (
                <div
                  key={hobby.name}
                  className="group bg-[#FDF7F0] rounded-2xl p-6 shadow-lg border border-[#DDE6D5]/50 hover:shadow-xl transition-all duration-300 hover:scale-105 w-full max-w-md"
                >
                  {/* Header */}
                  <div className="flex flex-col items-center space-y-3 mb-4">
                    {/* Hobby Image */}
                    <img
                      src={hobby.image}
                      alt={hobby.name + ' visual'}
                      className="w-24 h-24 object-cover rounded-full shadow-md border border-[#DDE6D5]/70 mb-2"
                    />
                    <div className={`flex items-center space-x-3`}>
                      <div className={`w-12 h-12 bg-gradient-to-br ${hobby.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Icon size={24} className="text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[#587C56]">{hobby.name}</h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[#A58A7F] mb-4 leading-relaxed">
                    {hobby.description}
                  </p>

                  {/* Favorites */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-[#587C56] flex items-center">
                      <Heart size={16} className="mr-2" />
                      Favorites
                    </h4>
                    <div className="space-y-1">
                      {hobby.favorites.map((favorite, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-[#587C56] rounded-full"></div>
                          <span className="text-sm text-[#A58A7F]">{favorite}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Decorative element */}
                  <div className="mt-4 pt-4 border-t border-[#DDE6D5]/50">
                    <div className="flex justify-center">
                      <div className="text-2xl opacity-60 group-hover:animate-pulse">
                        {index === 0 && '🎭'}
                        {index === 1 && '📸'}
                        {index === 2 && '📚'}
                        {index === 3 && '☕'}
                        {index === 4 && '🎵'}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Arrow Buttons */}
          {canSlideBack && (
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-[#A58A7F] text-white rounded-full p-3 shadow-lg hover:bg-[#587C56] transition-all duration-300"
              aria-label="Show previous hobbies"
              onClick={() => setStartIndex(startIndex - 1)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          {canSlide && (
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-[#A58A7F] text-white rounded-full p-3 shadow-lg hover:bg-[#587C56] transition-all duration-300"
              aria-label="Show more hobbies"
              onClick={() => setStartIndex(startIndex + 1)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>

        {/* Quote Section */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Cozy K-Drama Lottie Animation */}
          <div className="flex-shrink-0 flex justify-center">
            <Lottie animationData={cozyCodeAnimation} loop style={{ width: 260, height: 260 }} />
          </div>
          <div className="bg-[#FDF7F0] rounded-2xl p-8 shadow-lg border border-[#DDE6D5]/50 flex-1 min-w-0">
            <div className="text-4xl mb-4">🌸</div>
            <blockquote className="text-xl text-[#587C56] font-medium italic mb-4">
              "I find inspiration in the quiet moments—a cozy room, a beautiful sunset, 
              or a touching K-drama scene. These simple pleasures fuel my creativity and remind me 
              that technology should enhance, not replace, the human experience."
            </blockquote>
            <div className="w-16 h-0.5 bg-[#A58A7F] mx-auto"></div>
          </div>
        </div>
      </div>
    </section>
  );
}