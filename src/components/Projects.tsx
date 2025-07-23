import { useState, useRef, useEffect, useCallback } from 'react';
import { Github, BookOpen, PieChart, Target, Heart } from 'lucide-react';

// Define a type for project cards
interface ProjectCard {
  id: number | string;
  title: string;
  description: string;
  highlights?: string[];
  techStack?: string[];
  github?: string;
  icon?: any;
  color?: string;
  image?: string;
  isExtra?: boolean;
  models?: string[];
  methods?: string[];
  bestF1?: string;
}

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [startIndex, setStartIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);
  const visibleCount = 3;

  const projects: ProjectCard[] = [
    {
      id: 2,
      title: "VicharaAI",
      description: "A conversational AI project designed to provide intelligent responses and assist users in various tasks, leveraging NLP and deep learning techniques.",
      highlights: [
        "Conversational AI",
        "Natural Language Processing",
        "Deep learning integration",
        "User-friendly interface"
      ],
      techStack: ["Python", "TensorFlow", "NLTK", "Flask"],
      github: "https://github.com/Bhumika-Dagdi/VicharaAI",
      icon: Heart,
      color: "from-[#FFE6D4] to-[#A58A7F]",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=facearea&w=256&q=80"
    },
    {
      id: 1,
      title: "Python Automation",
      description: "A collection of Python scripts automating daily tasks, from file management to web scraping, designed to boost productivity and reduce manual effort.",
      highlights: [
        "Automates repetitive tasks",
        "Web scraping and data extraction",
        "File and folder organization",
        "Email automation"
      ],
      techStack: ["Python", "Selenium", "BeautifulSoup", "smtplib"],
      github: "https://github.com/Bhumika-Dagdi/Python-Automation",
      icon: BookOpen,
      color: "from-[#A58A7F] to-[#FFE6D4]",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=facearea&w=256&q=80"
    },
    {
      id: 3,
      title: "Breast Cancer Prediction",
      description: "A comprehensive machine learning solution for early detection using the Wisconsin Breast Cancer dataset with advanced feature selection and model optimization.",
      models: ["Logistic Regression", "SVM", "Random Forest"],
      bestF1: "0.96",
      highlights: [
        "Chi-square feature selection",
        "Confusion matrix analysis",
        "Cross-validation optimization",
        "Feature importance visualization"
      ],
      techStack: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
      github: "https://github.com/Bhumika-Dagdi/Projects/tree/main/Breast-Cancer-Prediction",
      icon: Target,
      color: "from-[#587C56] to-[#A58A7F]",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=facearea&w=256&q=80"
    },
    {
      id: 4,
      title: "Customer Segmentation",
      description: "Advanced clustering analysis to identify distinct customer segments using multiple unsupervised learning algorithms with dimensionality reduction.",
      methods: ["K-Means", "Agglomerative Clustering", "DBSCAN"],
      highlights: [
        "Elbow Method visualization",
        "Silhouette analysis",
        "Cluster interpretation",
        "Business insights generation"
      ],
      techStack: ["Python", "Scikit-learn", "NumPy", "Matplotlib", "Plotly"],
      github: "https://github.com/Bhumika-Dagdi/Projects/tree/main/Customer-Segmentation",
      icon: PieChart,
      color: "from-[#A58A7F] to-[#587C56]",
      image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=facearea&w=256&q=80"
    }
  ];

  const allCards: ProjectCard[] = [
    ...projects,
    {
      id: 'coming-soon',
      title: 'More projects coming soon!',
      description: 'Stay tuned for exciting new additions to my portfolio.',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=256&q=80',
      icon: null,
      color: 'from-[#A58A7F] to-[#DDE6D5]',
      isExtra: true
    }
  ];
  const canSlide = startIndex + visibleCount < allCards.length;
  const canSlideBack = startIndex > 0;
  const visibleCards = allCards.slice(startIndex, startIndex + visibleCount);

  function isProjectCard(card: ProjectCard): card is ProjectCard & { id: number } {
    return typeof card.id === 'number';
  }

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
        const maxIndex = allCards.length - visibleCount;
        return nextIndex > maxIndex ? 0 : nextIndex;
      });
    }, 5000); // Auto-slide every 5 seconds
  }, [allCards.length, visibleCount]);

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
    <section id="projects" className="py-20 bg-gradient-to-br from-[#DDE6D5]/30 via-[#FDF7F0] to-[#FFE6D4]/40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#587C56] mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-[#A58A7F] mx-auto rounded-full"></div>
          <p className="text-[#A58A7F] mt-6 text-lg">
            Turning data into insights, one algorithm at a time
          </p>
        </div>

        {/* Project Cards Row */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            ref={sliderRef}
            className="flex gap-8 overflow-x-hidden transition-transform duration-500 cursor-grab active:cursor-grabbing" 
            style={{ 
              minHeight: 400,
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
            {visibleCards.map((project) => {
              if (project.isExtra) {
                return (
                  <div key={project.id} className="group bg-[#FDF7F0] rounded-2xl p-6 shadow-lg border border-[#DDE6D5]/50 flex flex-col items-center justify-center h-full min-h-[350px] relative w-full max-w-md">
                    <div className="flex flex-col items-center space-y-4">
                      <span className="text-6xl text-[#A58A7F] animate-bounce">🚀</span>
                      <h3 className="text-xl font-bold text-[#587C56] text-center">{project.title}</h3>
                      <p className="text-[#A58A7F] text-center">{project.description}</p>
                    </div>
                  </div>
                );
              }
              const Icon = project.icon;
              const isExpanded = expandedProject === project.id;
              return (
                <div
                  key={project.id}
                  className="group relative h-full w-full max-w-md"
                >
                  <div className="bg-[#FDF7F0] rounded-2xl shadow-lg border border-[#DDE6D5]/50 overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl h-full flex flex-col">
                    <div className="relative z-10 p-8 flex-1 flex flex-col">
                      <div className="flex flex-col items-center space-y-3 mb-4">
                        {/* Project Image */}
                        <img
                          src={project.image}
                          alt={project.title + ' visual'}
                          className="w-28 h-28 object-cover rounded-2xl shadow-md border border-[#DDE6D5]/70 mb-2"
                        />
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 bg-gradient-to-br ${project.color} rounded-full flex items-center justify-center`}>
                            {Icon && <Icon size={24} className="text-white" />}
                          </div>
                          <h3 className="text-2xl font-bold text-[#587C56]">{project.title}</h3>
                        </div>
                      </div>
                      <p className="text-[#A58A7F] leading-relaxed mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      {!isExpanded && isProjectCard(project) && (
                        <button
                          className="px-6 py-2 bg-[#587C56] text-white rounded-full hover:bg-[#587C56]/90 transition-all duration-300 hover:scale-105 font-medium"
                          onClick={() => setExpandedProject(project.id as number)}
                        >
                          Show More
                        </button>
                      )}
                      {isExpanded && isProjectCard(project) && (
                        <div className="mt-6">
                          {/* Models/Methods */}
                          {(project.models || project.methods) ? (
                            <div className="space-y-3">
                              <h4 className="font-semibold text-[#587C56] flex items-center">
                                <span className="mr-2">🤖</span>
                                {project.models ? "Models Used" : "Methods"}
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {(project.models || project.methods)?.map((item: string) => (
                                  <span
                                    key={item}
                                    className="px-3 py-1 bg-[#DDE6D5] text-[#587C56] rounded-full text-sm font-medium"
                                  >
                                    {item}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ) : null}
                          {/* Best Performance */}
                          {project.bestF1 && (
                            <div className="bg-[#FFE6D4]/60 rounded-xl p-4 mt-4">
                              <h4 className="font-semibold text-[#A58A7F] mb-2">Best Performance</h4>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-[#587C56] rounded-full"></div>
                                <span className="text-[#A58A7F]">F1-Score: <strong>{project.bestF1}</strong></span>
                              </div>
                            </div>
                          )}
                          {/* Special Features */}
                          <div className="space-y-2 mt-4">
                            <h4 className="font-semibold text-[#587C56]">Key Features</h4>
                            <div className="space-y-1">
                              {project.highlights && project.highlights.map((highlight: string, index: number) => (
                                <div
                                  key={index}
                                  className="flex items-center space-x-2 text-[#A58A7F]"
                                >
                                  <div className="w-1.5 h-1.5 bg-[#587C56] rounded-full"></div>
                                  <span className="text-sm">{highlight}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          {/* Tech Stack */}
                          {project.techStack && (
                            <div className="bg-[#DDE6D5]/40 rounded-xl p-6 mt-4">
                              <h4 className="font-semibold text-[#587C56] mb-4 flex items-center">
                                <span className="mr-2">🛠️</span>
                                Tech Stack
                              </h4>
                              <div className="grid grid-cols-2 gap-3">
                                {project.techStack.map((tech: string) => (
                                  <div
                                    key={tech}
                                    className="flex items-center space-x-2 p-2 bg-[#FDF7F0] rounded-lg"
                                  >
                                    <div className="w-2 h-2 bg-[#587C56] rounded-full"></div>
                                    <span className="text-sm text-[#A58A7F]">{tech}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                          {/* Action Button */}
                          {project.github && (
                            <div className="space-y-3 mt-4">
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center space-x-3 px-6 py-3 bg-[#587C56] text-white rounded-xl hover:bg-[#587C56]/90 transition-all duration-300 hover:scale-105 group"
                              >
                                <Github size={20} />
                                <span className="font-medium">View on GitHub</span>
                                <BookOpen size={16} className="group-hover:animate-pulse" />
                              </a>
                            </div>
                          )}
                          <button
                            className="px-6 py-2 bg-[#A58A7F] text-white rounded-full hover:bg-[#A58A7F]/90 transition-all duration-300 hover:scale-105 font-medium mt-6"
                            onClick={() => setExpandedProject(null)}
                          >
                            Show Less
                          </button>
                        </div>
                      )}
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
              aria-label="Show previous projects"
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
              aria-label="Show more projects"
              onClick={() => setStartIndex(startIndex + 1)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>

        {/* GitHub Button Only */}
        <div className="text-center mt-12 flex flex-col items-center gap-4">
          <a
            href="https://github.com/Bhumika-Dagdi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-[#24292f] text-white rounded-full hover:bg-[#444d56] transition-all duration-300 hover:scale-105 font-medium"
          >
            <Github size={20} />
            <span>View all on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}