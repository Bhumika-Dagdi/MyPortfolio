import { useState, useEffect } from 'react';
import { Home, BookOpen, Code, Brain, Heart, Mail } from 'lucide-react';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About Me', icon: BookOpen },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'skills', label: 'Skills & Education', icon: Brain },
    { id: 'hobbies', label: 'Hobbies / Faves', icon: Heart },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FDF7F0]/90 backdrop-blur-sm border-b border-[#DDE6D5]/50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center py-4">
          <div className="flex space-x-8 bg-[#DDE6D5]/60 rounded-full px-6 py-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 hover:bg-[#587C56]/20 hover:scale-105 ${
                    activeSection === item.id 
                      ? 'bg-[#587C56] text-white shadow-lg' 
                      : 'text-[#A58A7F] hover:text-[#587C56]'
                  }`}
                >
                  <Icon size={18} />
                  <span className="text-sm font-medium hidden md:block">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}