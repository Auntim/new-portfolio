import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Twitter, Bot, X, Send } from 'lucide-react'; // Added Bot, X, Send
import image1 from '@/assets/images/profile4.png';
import ThreeDCarousel from './ThreeDCarousel';
import TypingText from './TypingText';
import { GoogleGenerativeAI } from "@google/generative-ai";

const Hero = () => {
  // State for AI Sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'ai', text: "Hi! I'm Auntim's AI assistant. Ask me anything about his skills, projects, or experience!" }
  ]);

  // Initialize the AI with your key (Assuming you use Vite)
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userText = chatInput;

    setMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setChatInput('');

    setMessages((prev) => [...prev, { sender: 'ai', text: 'Typing...', isTyping: true }]);

    try {

      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

      const prompt = `
        You are the friendly AI assistant for Auntim Hossen Saikat's portfolio website. 
        Here is the information you know about Auntim:
        - He is a Web Developer and Full-Stack Enthusiast.
        - He creates beautiful, functional, and user-friendly digital experiences.
        - He has expertise in both frontend and backend technologies.
        - (Add your skills here, e.g., React, Node.js, Tailwind, etc.)
        - (Add your projects here)
        
        Rules for you:
        - Keep your answers short, friendly, and professional (1-3 sentences max).
        - If the user asks something unrelated to Auntim or web development, politely say you can only answer questions about Auntim's professional background.
        
        The user just asked: "${userText}"
      `;

      // 5. Fetch the response from AI
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      // 6. Remove the "Typing..." message and add the real AI response
      setMessages((prev) =>
        prev.filter((msg) => !msg.isTyping).concat({ sender: 'ai', text: text })
      );

    } catch (error) {
      console.error("AI Error:", error);
      // Handle errors (like if the API fails)
      setMessages((prev) =>
        prev.filter((msg) => !msg.isTyping).concat({ sender: 'ai', text: "Sorry, my brain is offline right now! Please try again later or contact Auntim directly." })
      );
    }
  };

  return (
    <>
      {/* --- YOUR ORIGINAL HERO SECTION --- */}
      <section id="home" className="min-h-screen flex mx-auto items-center hero-pattern section-padding pt-24 overflow-hidden w-screen"
        style={{
          background: "#000000",
          backgroundImage: `
          radial-gradient(circle, rgba(255, 255, 255, 0.2) 1.5px, transparent 1.5px)
        `,
          backgroundSize: "30px 30px",
          backgroundPosition: "0 0",
        }}
      >
        <div className="px-4 sm:px-6 lg:px-8 w-full sm:w-11/12 lg:w-10/12 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="order-2 lg:order-1"
            >

              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-white"
              >
                Hi, I'm{" "}
                <span className="text-[#ED985F]">
                  <TypingText
                    texts={[
                      "Auntim Hossen Saikat",
                      "Full-Stack Enthusiast",
                      'Web_Developer'
                    ]}
                  />
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg text-gray-400 mb-8 max-w-lg mt-8 text-justify leading-tight tracking-wider"
              >
                I create beautiful, functional, and user-friendly digital experiences. With expertise in both frontend and backend technologies, I bring ideas to life.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  size="lg"
                  className="rounded-tl-xl rounded-br-xl rounded-tr-none rounded-bl-none bg-[#F7B980] hover:bg-[#ED985F] text-[#000000] text-sm font-semibold transition-colors"
                  onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
                >
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                  className="rounded-tl-xl rounded-br-xl rounded-tr-none rounded-bl-none text-white border-white hover:bg-white hover:text-black transition-colors"
                >
                  Contact Me
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex items-center gap-4 mt-8"
              >
                <a href="https://github.com/Auntim" className="text-white hover:text-[#ED985F] transition-colors">
                  <Github className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/in/auntim-hossen-saikat/" className="text-white hover:text-[#ED985F] transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-white hover:text-[#ED985F] transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="order-1 lg:order-2 flex justify-center"
            >
              <div className="relative">
                <div className="absolute -inset-0.5 rounded-full blur opacity-75 mt-6 md:mt-0"></div>
                <ThreeDCarousel />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- NEW: FLOATING BUTTONS (BOTTOM RIGHT) --- */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        {/* AI Chat Button */}
        {/* <button
          onClick={() => setIsSidebarOpen(true)}
          className="w-12 h-12 bg-[#F7B980] hover:bg-[#ED985F] text-black rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(247,185,128,0.4)] transition-transform hover:scale-110 z-50"
          title="Chat with AI"
        >
          <Bot size={28} />
        </button> */}

        {/* WhatsApp Button (Using an SVG so it looks exactly like the brand icon) */}
        {/* REPLACE "1234567890" WITH YOUR ACTUAL NUMBER (country code included, no +) */}
        <a
          href="https://wa.me/01871853590"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-[#25D366] hover:bg-[#1DA851] text-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-transform hover:scale-110 z-50"
          title="WhatsApp Me"
        >
          <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </a>
      </div>

      {/* --- NEW: AI SIDEBAR (SLIDING IN FROM RIGHT) --- */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Background Overlay (Click to close) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-black/60 z-[60]"
            />

            {/* Sidebar Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-screen w-full sm:w-[400px] bg-[#0a0a0a] border-l border-gray-800 z-[70] flex flex-col shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-800 bg-[#111111]">
                <div className="flex items-center gap-2 text-[#F7B980]">
                  <Bot size={24} />
                  <h3 className="font-semibold text-lg">Ask about Auntim</h3>
                </div>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Chat Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.sender === 'user'
                      ? 'bg-[#F7B980] text-black self-end rounded-tr-sm'
                      : 'bg-[#1e1e1e] text-white self-start rounded-tl-sm'
                      }`}
                  >
                    {msg.text}
                  </div>
                ))}
              </div>

              {/* Input Area */}
              <div className="p-4 border-t border-gray-800 bg-[#111111]">
                <form onSubmit={handleSendMessage} className="flex gap-2 relative">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Type your question..."
                    className="w-full bg-[#1e1e1e] text-white rounded-full pl-4 pr-12 py-3 outline-none border border-gray-700 focus:border-[#F7B980] transition-colors"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[#F7B980] text-black rounded-full hover:bg-[#ED985F] transition-colors"
                  >
                    <Send size={16} />
                  </button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;