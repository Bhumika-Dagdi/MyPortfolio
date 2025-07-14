import { useState } from 'react';
import { 
  Code, 
  Database, 
  Settings, 
  Brain, 
  BookOpen, 
  Award,
  Leaf
} from 'lucide-react';

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      name: "Languages",
      icon: Code,
      color: "from-[#587C56] to-[#A58A7F]",
      skills: [
        { name: "Python", level: 95, usage: "Primary language for ML and data analysis" },
        { name: "C/C++", level: 85, usage: "System programming and algorithms" },
        // { name: "JavaScript", level: 80, usage: "Web development and visualization" },
        // { name: "SQL", level: 90, usage: "Database queries and data manipulation" }
      ]
    },
    {
      name: "ML & Data Libraries",
      icon: Brain,
      color: "from-[#A58A7F] to-[#FFE6D4]",
      skills: [
        { name: "Scikit-learn", level: 90, usage: "Machine learning model development" },
        { name: "Pandas", level: 95, usage: "Data manipulation and analysis" },
        { name: "NumPy", level: 92, usage: "Numerical computing and arrays" },
        { name: "Matplotlib", level: 88, usage: "Data visualization and plotting" },
        { name: "Seaborn", level: 85, usage: "Statistical data visualization" }
      ]
    },
    {
      name: "Tools & Platforms",
      icon: Settings,
      color: "from-[#FFE6D4] to-[#587C56]",
      skills: [
        { name: "Git", level: 88, usage: "Version control and collaboration" },
        { name: "Jupyter", level: 93, usage: "Interactive development and analysis" },
        { name: "Google Colab", level: 90, usage: "Cloud-based ML experiments" },
        { name: "VS Code", level: 92, usage: "Primary development environment" }
      ]
    },
    {
      name: "Specialized ML",
      icon: Database,
      color: "from-[#DDE6D5] to-[#587C56]",
      skills: [
        { name: "Feature Selection", level: 87, usage: "SelectKBest, Chi-square testing" },
        { name: "Dimensionality Reduction", level: 83, usage: "PCA implementation and analysis" },
        { name: "Model Evaluation", level: 91, usage: "Cross-validation, metrics analysis" },
        { name: "Clustering", level: 85, usage: "K-means, DBSCAN, Hierarchical" }
      ]
    }
  ];

  const education = [
    {
      degree: "B.Tech in Computer Science & AI",
      institution: "SKIT Jaipur",
      year: "2022-2026",
      status: "Student",
      highlights: ["Machine Learning Specialization", "Software Engineering"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-[#FDF7F0] via-[#DDE6D5]/30 to-[#FFE6D4]/40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#587C56] mb-4">
            Skills & Education
          </h2>
          <div className="w-24 h-1 bg-[#A58A7F] mx-auto rounded-full"></div>
          <p className="text-[#A58A7F] mt-6 text-lg">
            Growing like a tree, one branch at a time
          </p>
        </div>

        {/* Skills Tree */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#587C56] mb-8 text-center flex items-center justify-center">
            <Leaf className="mr-2" size={24} />
            Skill Tree
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.name}
                  className="bg-[#FDF7F0] rounded-2xl p-6 shadow-lg border border-[#DDE6D5]/50 hover:shadow-xl transition-all duration-300"
                >
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-[#587C56]">{category.name}</h4>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group cursor-pointer"
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-[#A58A7F] group-hover:text-[#587C56] transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-sm text-[#A58A7F]">{skill.level}%</span>
                        </div>
                        
                        <div className="w-full bg-[#DDE6D5]/50 rounded-full h-2 mb-2">
                          <div
                            className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                        
                        {hoveredSkill === skill.name && (
                          <div className="bg-[#DDE6D5]/40 rounded-lg p-3 text-sm text-[#A58A7F] animate-fadeIn">
                            <strong>Usage:</strong> {skill.usage}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Education Timeline */}
        <div className="bg-[#FDF7F0] rounded-2xl p-8 shadow-lg border border-[#DDE6D5]/50">
          <h3 className="text-2xl font-bold text-[#587C56] mb-8 text-center flex items-center justify-center">
            <BookOpen className="mr-2" size={24} />
            Education Journey
          </h3>
          
          <div className="relative">
            {/* Timeline Vine */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#587C56]/30"></div>
            
            {education.map((edu, index) => (
              <div key={index} className="relative flex items-start space-x-6 pb-8">
                {/* Timeline Node */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#587C56] to-[#A58A7F] rounded-full flex items-center justify-center shadow-lg">
                  <Award size={24} className="text-white" />
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-[#DDE6D5]/40 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-bold text-[#587C56]">{edu.degree}</h4>
                    <span className="px-3 py-1 bg-[#FFE6D4] text-[#A58A7F] rounded-full text-sm font-medium">
                      {edu.status}
                    </span>
                  </div>
                  
                  <p className="text-[#A58A7F] font-medium mb-2">{edu.institution}</p>
                  <p className="text-[#A58A7F] text-sm mb-4">{edu.year}</p>
                  
                  <div className="space-y-2">
                    <h5 className="font-semibold text-[#587C56]">Key Highlights:</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {edu.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-[#587C56] rounded-full"></div>
                          <span className="text-sm text-[#A58A7F]">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}