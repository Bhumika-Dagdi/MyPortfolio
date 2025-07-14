import { useState } from 'react';
import { Github, BookOpen, PieChart, Target, Heart } from 'lucide-react';

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
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
      color: "from-[#FFE6D4] to-[#A58A7F]"
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
      color: "from-[#A58A7F] to-[#FFE6D4]"
    },
    {
      id: 3,
      title: "Breast Cancer Prediction",
      description: "A comprehensive machine learning solution for early detection using the Wisconsin Breast Cancer dataset with advanced feature selection and model optimization.",
      dataset: "Breast Cancer Wisconsin",
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
      color: "from-[#587C56] to-[#A58A7F]"
    },
    {
      id: 4,
      title: "Customer Segmentation",
      description: "Advanced clustering analysis to identify distinct customer segments using multiple unsupervised learning algorithms with dimensionality reduction.",
      methods: ["K-Means", "Agglomerative Clustering", "DBSCAN"],
      reduction: "PCA",
      highlights: [
        "Elbow Method visualization",
        "Silhouette analysis",
        "Cluster interpretation",
        "Business insights generation"
      ],
      techStack: ["Python", "Scikit-learn", "NumPy", "Matplotlib", "Plotly"],
      github: "https://github.com/Bhumika-Dagdi/Projects/tree/main/Customer-Segmentation",
      icon: PieChart,
      color: "from-[#A58A7F] to-[#587C56]"
    }
  ];

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

        <div className="space-y-8">
          {projects.map((project) => {
            const Icon = project.icon;
            const isExpanded = expandedProject === project.id;
            return (
              <div
                key={project.id}
                className="group relative"
              >
                <div className="bg-[#FDF7F0] rounded-2xl shadow-lg border border-[#DDE6D5]/50 overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                  <div className="relative z-10 p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${project.color} rounded-full flex items-center justify-center`}>
                        <Icon size={24} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#587C56]">{project.title}</h3>
                    </div>
                    <p className="text-[#A58A7F] leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    {!isExpanded && (
                      <button
                        className="px-6 py-2 bg-[#587C56] text-white rounded-full hover:bg-[#587C56]/90 transition-all duration-300 hover:scale-105 font-medium"
                        onClick={() => setExpandedProject(project.id)}
                      >
                        Show More
                      </button>
                    )}
                    {isExpanded && (
                      <div className="mt-6">
                        {/* Models/Methods */}
                        {project.models || project.methods ? (
                          <div className="space-y-3">
                            <h4 className="font-semibold text-[#587C56] flex items-center">
                              <span className="mr-2">🤖</span>
                              {project.models ? "Models Used" : "Methods"}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {(project.models || project.methods)?.map((item) => (
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
                            {project.highlights.map((highlight, index) => (
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
                        <div className="bg-[#DDE6D5]/40 rounded-xl p-6 mt-4">
                          <h4 className="font-semibold text-[#587C56] mb-4 flex items-center">
                            <span className="mr-2">🛠️</span>
                            Tech Stack
                          </h4>
                          <div className="grid grid-cols-2 gap-3">
                            {project.techStack.map((tech) => (
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
                        {/* Action Button */}
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