import { Heart, Film, Music, BookOpen } from 'lucide-react';

export default function Hobbies() {
  const hobbies = [
    {
      name: "K-Drama Binge",
      icon: Film,
      description: "Getting lost in heartwarming stories and beautiful cinematography",
      color: "from-[#587C56] to-[#A58A7F]",
      favorites: ["Amidst Snowstorm of Love", "The Legend of Blue Sea", "Goblin"]
    },
    {
      name: "Reading & Learning",
      icon: BookOpen,
      description: "Always curious about new technologies and inspiring stories",
      color: "from-[#FFE6D4] to-[#DDE6D5]",
      favorites: ["Tech blogs", "AI research", "Personal growth"]
    },
    {
      name: "Music & Vibes",
      icon: Music,
      description: "Creating the perfect atmosphere for every mood and moment",
      color: "from-[#587C56] to-[#FFE6D4]",
      favorites: ["old bollywood songs", "good mood songs", "love songs"]
    }
  ];

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => {
            const Icon = hobby.icon;
            return (
              <div
                key={hobby.name}
                className="group bg-[#FDF7F0] rounded-2xl p-6 shadow-lg border border-[#DDE6D5]/50 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                {/* Header */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${hobby.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#587C56]">{hobby.name}</h3>
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

        {/* Quote Section */}
        <div className="mt-16 text-center">
          <div className="bg-[#FDF7F0] rounded-2xl p-8 shadow-lg border border-[#DDE6D5]/50 max-w-3xl mx-auto">
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