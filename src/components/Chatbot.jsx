import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, SendHorizontal, Loader2 } from 'lucide-react';
import { nanoid } from 'nanoid';
import emailjs from '@emailjs/browser';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [isSending, setIsSending] = useState(false);

  // State for user details
  const [userInfo, setUserInfo] = useState({ name: "", email: "" });

  // Steps: 
  // 0 = Name
  // 1 = Email
  // 2 = General Chat (Answering FAQs, no email)
  // 3 = Message Mode (Next input will be sent as email)
  const [chatStep, setChatStep] = useState(0);

  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! Welcome to Praveen's Portfolio. Before we start, may I know your name?" }
  ]);

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const toggleChatbot = () => setIsOpen(!isOpen);

  // --- YOUR FAQ LOGIC ---
  function getAnswer(text) {

    const lowerText = text.toLowerCase();

    const skillRatings = {
      javascript: 5,
      python: 3,
      java: 3,
      express: 4,
      nodejs: 4,
      git: 4,
      github: 4,
      mongodb: 3,
      react: 4,
      typescript: 2
    };
    const rateKeywords = ["rate", "rating", "evaluate", "score"];
    const isRating = rateKeywords.some(word => text.includes(word))

    // Specific Portfolio Questions
    if (lowerText.includes("project") || lowerText.includes("work"))
      return "You can view Praveen’s projects in the ‘Projects’ section — they include React, Node.js, and MERN stack apps 🚀.";
    if (lowerText.includes("about"))
      return "Praveen is a Computer Science Engineer passionate about building modern web apps using React and Node.js 💻.";

    // --- FAQ responses ---
    if (isRating && text.includes("skill")) {
      return Object.entries(skillRatings).map(([skill, rating]) => (
          <div key={skill} className="flex items-center justify-between p-1">
            <span className="font-medium">{skill}</span>
            <span className="ml-2 font-semibold">{rating}/5</span>
          </div>
        ))
    }
    if (lowerText.includes("skill"))
      return "He’s skilled in React, Node.js, Express, MongoDB, Tailwind CSS, and JavaScript ⚛️.";
    if (text.includes("stack") || text.includes("tech stack")){
      return "He is skilled with MERN stack"
    }
    if (lowerText.includes("education") || lowerText.includes("college"))
      return "He completed his B.E. in Computer Science and Engineering 🎓.";
    if (lowerText.includes("experience"))
      return "He’s worked on multiple personal and academic projects while learning full-stack development 🧠.";

    // --- Greetings ---
    if (lowerText.includes("hi") || lowerText.includes("hello"))
      return "Hey there! 👋 How can I help you today?";

    // Default Fallback
    return "Hmm… I didn’t catch that 🤔. You can ask about projects, skills, or say 'leave a message' to contact Praveen directly!";
  }

  const handleStepLogic = (text) => {
    // --- STEP 0: CAPTURE NAME ---
    if (chatStep === 0) {
      setUserInfo({ ...userInfo, name: text });
      setChatStep(1);
      setTimeout(() => {
        setMessages(prev => [...prev, {
          sender: "bot",
          text: `Nice to meet you, ${text}! What is your email address?`
        }]);
      }, 500);
      return;
    }

    // --- STEP 1: CAPTURE EMAIL ---
    if (chatStep === 1) {
      setUserInfo(prev => ({ ...prev, email: text })); // Ensure state updates correctly
      setChatStep(2);
      setTimeout(() => {
        setMessages(prev => [...prev, {
          sender: "bot",
          text: "Thanks! I've saved your details. You can now ask me about skills, projects, or say 'leave a message' to send an email."
        }]);
      }, 500);
      return;
    }

    // --- STEP 2: GENERAL CHAT (No Email Sent) ---
    if (chatStep === 2) {
      const lowerText = text.toLowerCase();

      // Check if user WANTS to send a message
      if (lowerText.includes("message") || lowerText.includes("contact") || lowerText.includes("email") || lowerText.includes("leave")) {
        setChatStep(3); // Switch to Message Mode
        setTimeout(() => {
          setMessages(prev => [...prev, {
            sender: "bot",
            text: "Sure! Please type the message you want to send to Praveen below. 👇"
          }]);
        }, 500);
        return;
      }

      // Otherwise, just answer the question locally
      const botReply = getAnswer(text);
      setTimeout(() => {
        setMessages(prev => [...prev, { sender: "bot", text: botReply }]);
      }, 500);
      return;
    }

    // --- STEP 3: MESSAGE MODE (Send Email) ---
    if (chatStep === 3) {
      sendEmailToPraveen(text);
      setChatStep(2); // Go back to General Chat after sending
    }
  };

  const sendEmailToPraveen = (userMessage) => {
    setIsSending(true);

    const templateParams = {
      name: userInfo.name,
      email: userInfo.email, // This comes from Step 1
      message: userMessage,  // This comes from Step 3 input
      time: new Date().toLocaleString()
    };

    console.log("Sending Email with params:", templateParams);

    emailjs.send("service_40dvzss", "template_b33pg1o", templateParams, "ZQTdsFiljIHUxkXG0")
      .then(() => {
        setTimeout(() => {
          setMessages(prev => [...prev, { sender: "bot", text: "Message sent successfully! ✅ Praveen will reply to " + userInfo.email }]);
          setIsSending(false);
        }, 1000);
      })
      .catch((err) => {
        console.error("Failed to send", err);
        setMessages(prev => [...prev, { sender: "bot", text: "Oops! Failed to send message. Please try again later." }]);
        setIsSending(false);
      });
  };

  const handleSubmit = () => {
    if (!userInput.trim()) return;

    setMessages(prev => [...prev, { sender: "you", text: userInput }]);
    handleStepLogic(userInput);
    setUserInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button onClick={toggleChatbot} className="rounded-full bg-indigo-500 p-3 text-white shadow-lg hover:bg-indigo-700 transition-all focus:outline-none">
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {isOpen && (
        <div className="absolute bottom-16 right-0 mb-2 flex h-[450px] w-80 flex-col overflow-hidden rounded-lg bg-white shadow-xl sm:w-96 border border-gray-200">
          <div className="bg-indigo-500 p-4 text-white flex justify-between items-center">
            <p className="font-bold">Virtual Assistant</p>
            {isSending && <span className="text-xs bg-indigo-600 px-2 py-1 rounded animate-pulse">Sending...</span>}
          </div>

          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            {messages.map((msg) => (
              <div key={nanoid()} className={`mb-3 flex ${msg.sender === 'bot' ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[80%] rounded-lg p-2 text-sm ${msg.sender === 'bot' ? "bg-gray-200 text-gray-800" : "bg-indigo-500 text-white"}`}>
                  <p>{msg.text}</p>
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          <div className="flex items-center gap-2 border-t p-3 bg-white">
            <input
              type="text"
              value={userInput}
              disabled={isSending}
              // Placeholder changes based on the step
              placeholder={chatStep === 0 ? "Enter your Name..." : chatStep === 1 ? "Enter your Email..." : chatStep === 3 ? "Type your message to send..." : "Ask me anything..."}
              className="flex-1 rounded-full border px-4 py-2 text-sm outline-none focus:border-indigo-500 disabled:bg-gray-100"
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              onChange={(e) => setUserInput(e.target.value)}
            />

            <button
              onClick={handleSubmit}
              disabled={isSending}
              className="rounded-full bg-indigo-500 p-2 text-white hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed focus:outline-none"
            >
              {isSending ? <Loader2 size={20} className="animate-spin" /> : <SendHorizontal size={20} />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;