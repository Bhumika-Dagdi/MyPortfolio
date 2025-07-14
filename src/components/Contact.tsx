import { useState } from 'react';
import { Mail, Send, Github, Linkedin, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#DDE6D5]/30 via-[#FDF7F0] to-[#FFE6D4]/40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#587C56] mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-[#A58A7F] mx-auto rounded-full"></div>
          <p className="text-[#A58A7F] mt-6 text-lg">
            I'd love to hear from you! Drop me a message.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Contact Form */}
          <div className="bg-[#FDF7F0] rounded-2xl p-8 shadow-lg border border-[#DDE6D5]/50">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-[#587C56] mb-2">Send a Message</h3>
              <p className="text-[#A58A7F]">Write me a letter, and I'll get back to you soon!</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#587C56] font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#DDE6D5]/30 border border-[#DDE6D5] rounded-xl focus:ring-2 focus:ring-[#587C56] focus:border-transparent transition-all text-[#A58A7F] placeholder-[#A58A7F]/60"
                  placeholder="What should I call you?"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#587C56] font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#DDE6D5]/30 border border-[#DDE6D5] rounded-xl focus:ring-2 focus:ring-[#587C56] focus:border-transparent transition-all text-[#A58A7F] placeholder-[#A58A7F]/60"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[#587C56] font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#DDE6D5]/30 border border-[#DDE6D5] rounded-xl focus:ring-2 focus:ring-[#587C56] focus:border-transparent transition-all text-[#A58A7F] placeholder-[#A58A7F]/60 resize-none"
                  placeholder="Tell me about your project, ideas, or just say hello..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-[#587C56] text-white rounded-xl hover:bg-[#587C56]/90 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              >
                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                <span className="font-medium">Send Message</span>
                <div className="text-xl group-hover:animate-pulse">💌</div>
              </button>
            </form>
          </div>

          {/* Right: Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="bg-[#FDF7F0] rounded-2xl p-8 shadow-lg border border-[#DDE6D5]/50">
              <h3 className="text-2xl font-bold text-[#587C56] mb-6">Get in Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#587C56] rounded-full flex items-center justify-center">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-[#587C56]">Email</p>
                    <p className="text-[#A58A7F]">bhumikadagdi99@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#A58A7F] rounded-full flex items-center justify-center">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-[#587C56]">Location</p>
                    <p className="text-[#A58A7F]">India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-[#FDF7F0] rounded-2xl p-8 shadow-lg border border-[#DDE6D5]/50">
              <h3 className="text-2xl font-bold text-[#587C56] mb-6">Find Me Online</h3>
              
              <div className="space-y-4">
                <a
                  href="https://github.com/Bhumika-Dagdi"
                  className="flex items-center space-x-4 p-4 bg-[#DDE6D5]/40 rounded-xl hover:bg-[#DDE6D5]/60 transition-all hover:scale-105 group"
                >
                  <div className="w-12 h-12 bg-[#587C56] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Github size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-[#587C56]">GitHub</p>
                    <p className="text-[#A58A7F] text-sm">@Bhumika-Dagdi</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/bhumika-dagdi"
                  className="flex items-center space-x-4 p-4 bg-[#FFE6D4]/40 rounded-xl hover:bg-[#FFE6D4]/60 transition-all hover:scale-105 group"
                >
                  <div className="w-12 h-12 bg-[#A58A7F] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Linkedin size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-[#587C56]">LinkedIn</p>
                    <p className="text-[#A58A7F] text-sm">@bhumika-dagdi</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Decorative Quote */}
            <div className="bg-gradient-to-br from-[#587C56]/20 to-[#FFE6D4]/40 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">🌸</div>
              <p className="text-[#587C56] font-medium italic">
                "In a world full of code and logic, I still believe in warmth and wonder."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}