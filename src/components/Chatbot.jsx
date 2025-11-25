import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, SendHorizontal } from 'lucide-react';
import { nanoid } from 'nanoid';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! Welcome to Praveen's portfolio. How can I help you?" }
  ]);
  const [userInput, setUserInput] = useState("");

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const toggleChatbot = () => setIsOpen(!isOpen);

  function getAnswer(text) {
    if (text.includes("project") || text.includes("work"))
      return "You can view Praveen’s projects in the ‘Projects’ section — they include React, Node.js, and MERN stack apps 🚀.";
    if (text.includes("about"))
      return "Praveen is a Computer Science Engineer passionate about building modern web apps using React and Node.js 💻.";
    if (text.includes("contact"))
      return "You can reach Praveen via the Contact page or just leave your message here 📩.";

    // --- FAQ responses ---
    if (text.includes("skills"))
      return "He’s skilled in React, Node.js, Express, MongoDB, Tailwind CSS, and JavaScript ⚛️.";
    if (text.includes("education") || text.includes("college"))
      return "He completed his B.E. in Computer Science and Engineering 🎓.";
    if (text.includes("experience"))
      return "He’s worked on multiple personal and academic projects while learning full-stack development 🧠.";

    // --- Contact feature ---
    if (text.includes("hi") || text.includes("hello"))
      return "Hey there! 👋 How can I help you today?";
    if (text.includes("message") || text.includes("leave"))
      return "Sure! Type your message below and I’ll make sure Praveen gets it 💌.";

    return "Hmm… I didn’t catch that 🤔. You can ask about projects, skills, or leave a message!";
  }

  function handleSubmit() {
    if (!userInput.trim()) return;

    const query = { sender: "you", text: userInput };
    
    // Add user message first
    setMessages((prev) => [...prev, query]);

    // Simulate a small delay for the bot response to feel natural
    setTimeout(() => {
        const answer = { sender: 'bot', text: getAnswer(userInput.toLowerCase()) };
        setMessages((prev) => [...prev, answer]);
    }, 500);
    
    setUserInput("");
  }

  return (
    // Added z-50 to ensure it floats above all other sections
    <div className="fixed bottom-4 right-4 z-50">
      
      {/* Toggle Button */}
      <button 
        onClick={toggleChatbot} 
        className="rounded-full bg-indigo-500 p-3 text-white shadow-lg transition-transform hover:scale-110 hover:bg-indigo-700 focus:outline-none"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 mb-2 flex h-[450px] w-80 flex-col overflow-hidden rounded-lg bg-white shadow-xl sm:w-96">
          
          {/* Header */}
          <div className="bg-indigo-500 p-4 text-white">
            <p className="font-bold">Virtual Assistant</p>
            <p className="text-xs opacity-90">Ask me about Praveen!</p>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            {messages.map((msg) => (
              <div 
                key={nanoid()} 
                className={`mb-3 flex ${msg.sender === 'bot' ? 'justify-start' : 'justify-end'}`}
              >
                <div 
                  className={`max-w-[80%] rounded-lg p-2 text-sm ${
                    msg.sender === 'bot' 
                      ? "bg-gray-200 text-gray-800" 
                      : "bg-indigo-500 text-white"
                  }`}
                >
                  <p>{msg.text}</p>
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Input Area */}
          <div className="flex items-center gap-2 border-t p-3 bg-white">
            <input 
              type="text" 
              value={userInput} 
              placeholder="Type a message..."
              className="flex-1 rounded-full border px-4 py-2 text-sm outline-none focus:border-indigo-500"
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()} 
              onChange={(e) => setUserInput(e.target.value)}
            />
            <button
              onClick={handleSubmit}
              className="rounded-full bg-indigo-500 p-2 text-white hover:bg-indigo-700"
            >
              <SendHorizontal size={20} />
            </button>
          </div>

        </div>
      )}
    </div>
  );
};

export default Chatbot;