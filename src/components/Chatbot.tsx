import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Maximize2, Minimize2 } from 'lucide-react';
import TextareaAutosize from 'react-textarea-autosize';

interface Message {
  type: 'user' | 'bot';
  content: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { type: 'bot', content: 'Hello! I\'m your AI compliance assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { type: 'user', content: userMessage }]);

    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'bot',
        content: 'I understand you have a question about compliance. Let me help you with that. Our team specializes in labor law compliance and can provide expert guidance on your specific needs.'
      }]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 ${isOpen ? 'hidden' : 'flex'} left-8 items-center space-x-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow z-50`}
      >
        <MessageSquare className="h-6 w-6" />
        <span className="font-medium">Chat with AI Assistant</span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className={`fixed ${isExpanded ? 'inset-4' : 'bottom-8 left-8 w-96 h-[600px]'} z-50 rounded-2xl shadow-2xl transition-all duration-300`}
          >
            <div className="glass-strong flex flex-col h-full rounded-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
              {/* Header */}
              <div className="p-4 border-b border-gray-200/50 dark:border-gray-700/50 flex justify-between items-center bg-gradient-to-r from-blue-600/10 to-purple-600/10">
                <div className="flex items-center space-x-2">
                  <MessageSquare className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  <span className="font-semibold text-gray-800 dark:text-gray-200">AI Compliance Assistant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    {isExpanded ? (
                      <Minimize2 className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                    ) : (
                      <Maximize2 className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                    )}
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    <X className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-4 rounded-2xl ${
                        message.type === 'user'
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200'
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t border-gray-200/50 dark:border-gray-700/50">
                <div className="flex items-end space-x-2">
                  <TextareaAutosize
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 max-h-32 p-3 bg-gray-100 dark:bg-gray-800 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-gray-200"
                    minRows={1}
                    maxRows={4}
                  />
                  <button
                    onClick={handleSend}
                    disabled={!input.trim()}
                    className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-shadow"
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}