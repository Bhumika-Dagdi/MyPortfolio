import { useState } from 'react';
import { useRef, useEffect } from 'react';

const FAQ = [
  {
    q: /list.*project|show.*project|all.*project|project list|what.*project/i,
    a: `Here are my main projects:\n- VicharaAI\n- Python Automation\n- Breast Cancer Prediction\n- Customer Segmentation\n\nYou can view my projects in the Projects section. Click "Show More" on any project for details!`
  },
  {
    q: /project|work|portfolio/i,
    a: 'You can view my projects in the Projects section. Click "Show More" on any project for details!'
  },
  {
    q: /contact|email|reach/i,
    a: 'You can contact me via the Contact section or email me at bhumikadagdi99@gmail.com.'
  },
  {
    q: /skills|tech|technology|tools/i,
    a: 'My main skills are Python, ML, Data Science, and web technologies. See the Skills section for more!'
  },
  {
    q: /education|degree|college|university/i,
    a: 'I am pursuing B.Tech in Computer Science & AI from SKIT Jaipur (2022-2026).'
  },
  {
    q: /hobbies|favorites|drama|music/i,
    a: 'Check out my Hobbies & Favorites section for my favorite dramas, music, and more!'
  },
  {
    q: /hello|hi|hey|greet/i,
    a: 'Hello! How can I help you with this website?'
  }
];

function getBotResponse(input: string): string {
  const intro = "I'm Bhumika, a B.Tech (CS & AI) student at SKIT Jaipur (2022-2026), passionate about AI, data, and building meaningful tech. Ask me about my projects, skills, or how to contact me!";
  for (const { q, a } of FAQ) {
    if (q.test(input)) return `${intro}\n\n${a}`;
  }
  return `${intro}\n\nI'm here to help with anything about this website! Please ask something related to my portfolio, projects, skills, or contact.`;
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: '👋 Hi there! Welcome to my portfolio. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { from: 'user', text: input };
    const botMsg = { from: 'bot', text: getBotResponse(input) };
    setMessages((msgs) => [...msgs, userMsg, botMsg]);
    setInput('');
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  return (
    <>
      {/* Floating Chat Button */}
      <button
        className="fixed bottom-8 right-8 z-50 bg-[#587C56] text-white rounded-full p-4 shadow-lg hover:bg-[#A58A7F] transition-all"
        onClick={() => setOpen((o) => !o)}
        aria-label="Open Chatbot"
      >
        💬
      </button>
      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-8 z-50 w-80 bg-white rounded-2xl shadow-2xl border border-[#DDE6D5] flex flex-col overflow-hidden animate-fadeIn">
          <div className="bg-[#587C56] text-white px-4 py-3 font-bold text-lg flex items-center justify-between">
            <span>Chatbot</span>
            <button onClick={() => setOpen(false)} className="text-white text-xl">×</button>
          </div>
          <div className="flex-1 p-4 space-y-2 overflow-y-auto max-h-80">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={
                  msg.from === 'bot'
                    ? 'bg-[#DDE6D5]/60 text-[#587C56] rounded-xl p-2 mb-1'
                    : 'bg-[#FFE6D4]/80 text-[#A58A7F] rounded-xl p-2 mb-1 text-right ml-auto'
                }
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-3 border-t border-[#DDE6D5] flex items-center bg-[#FDF7F0]">
            <input
              className="flex-1 px-3 py-2 rounded-lg border border-[#DDE6D5] focus:outline-none focus:ring-2 focus:ring-[#A58A7F] text-[#587C56]"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              placeholder="Ask about this website..."
            />
            <button
              className="ml-2 px-4 py-2 bg-[#A58A7F] text-white rounded-lg hover:bg-[#587C56] transition-all font-medium"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
} 