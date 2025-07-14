import { Heart, Moon, Stars } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#587C56] to-[#A58A7F] text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          {/* Decorative Elements */}
          <div className="flex justify-center items-center space-x-4 mb-6">
            <Moon size={24} className="text-[#FFE6D4] animate-pulse" />
            <div className="flex space-x-2">
              {[...Array(5)].map((_, i) => (
                <Stars
                  key={i}
                  size={16}
                  className="text-[#FFE6D4] animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
            <div className="text-2xl animate-bounce">👩‍💻</div>
          </div>

          {/* Main Message */}
          <h3 className="text-2xl font-bold mb-4">
            Thanks for visiting my little corner on the internet.
          </h3>
          
          <p className="text-[#FFE6D4] text-lg mb-6">
            May your code be bug-free and your nights always cozy! 🕯️
          </p>

          {/* Divider */}
          <div className="w-32 h-0.5 bg-[#FFE6D4] mx-auto mb-6"></div>

          {/* Copyright */}
          <div className="flex items-center justify-center space-x-2 text-[#FFE6D4]">
            <span>© 2024 Bhumika</span>
            <span>•</span>
            <span>Made with</span>
            <Heart size={16} className="text-red-400 animate-pulse" />
            <span>and cozy vibes</span>
          </div>

          {/* Fun Footer Note */}
          <div className="mt-4 text-sm text-[#FFE6D4]/80">
            <p>Built with React, TypeScript, and a sprinkle of magic ✨</p>
          </div>
        </div>
      </div>
    </footer>
  );
}