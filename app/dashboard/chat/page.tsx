"use client";

import { useState, useRef, useEffect } from "react";
import ChatMessage, { Message } from "@/components/dashboard/chat/ChatMessage";
import ChatInput from "@/components/dashboard/chat/ChatInput";
import { Sparkles, ArrowRight } from "lucide-react";

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = (content: string) => {
    // 1. Add User Message
    const newUserMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content,
    };
    
    setMessages((prev) => [...prev, newUserMsg]);
    setIsLoading(true);

    // 2. Simulate AI Network Request (Mock logic)
    setTimeout(() => {
      const mockResponses = [
        "That's a great question! Here is a simple explanation...",
        "I can certainly help with that. Let's break it down step by step.",
        "Based on your notes, the key takeaways are as follows:\n1. Always practice regularly.\n2. Understand the core concepts before moving to advanced topics.",
        "Here's a study plan tailored for you. Does this look good?",
      ];
      
      const randomResponse = mockResponses[Math.floor(Math.random() * mockResponses.length)];
      
      const newAiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "ai",
        content: `*Mock Response*: ${randomResponse}\n\n(This is a simulated response since the backend API is not yet connected.)`,
      };
      
      setMessages((prev) => [...prev, newAiMsg]);
      setIsLoading(false);
    }, 1500);
  };

  const examplePrompts = [
    "Explain recursion simply",
    "Summarize object-oriented programming",
    "Create a study plan for SQL",
  ];

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] lg:h-screen max-w-5xl mx-auto">
      
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 backdrop-blur-md sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 rounded-lg">
            <Sparkles size={20} />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-slate-900 dark:text-white leading-tight">AI Study Assistant</h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">Ask questions, summarize notes, or generate plans.</p>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 scrollbar-thin">
        {messages.length === 0 ? (
          /* Empty State */
          <div className="h-full flex flex-col items-center justify-center max-w-2xl mx-auto text-center px-4">
            <div className="w-16 h-16 bg-brand-50 dark:bg-brand-500/10 rounded-2xl flex items-center justify-center mb-6 text-brand-600 dark:text-brand-400 shadow-sm border border-brand-100 dark:border-brand-800/50">
              <Sparkles size={32} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">How can I help you study today?</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-md mx-auto">
              I can explain complex topics, summarize your lecture notes, or create custom study plans tailored to your needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
              {examplePrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(prompt)}
                  className="flex flex-col text-left p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 hover:border-brand-300 dark:hover:border-brand-700 hover:shadow-sm transition-all group"
                >
                  <span className="text-sm text-slate-700 dark:text-slate-300 font-medium mb-2">{prompt}</span>
                  <ArrowRight size={16} className="text-brand-500 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all mt-auto" />
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* Messages List */
          <div className="max-w-3xl mx-auto">
            {messages.map((msg) => (
              <ChatMessage key={msg.id} message={msg} />
            ))}
            
            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex w-full justify-start mb-6">
                <div className="flex max-w-[75%] flex-row items-start gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand-600 text-white shadow-md shadow-brand-500/20">
                    <Sparkles size={18} className="animate-pulse" />
                  </div>
                  <div className="px-5 py-4 rounded-2xl rounded-tl-sm bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-500 animate-bounce" style={{ animationDelay: "0ms" }}></span>
                    <span className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-500 animate-bounce" style={{ animationDelay: "150ms" }}></span>
                    <span className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-500 animate-bounce" style={{ animationDelay: "300ms" }}></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 bg-transparent">
        <div className="max-w-3xl mx-auto relative">
          {/* Subtle gradient border effect for input area */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-brand-400 to-purple-500 rounded-3xl opacity-20 blur-sm"></div>
          <ChatInput onSend={handleSendMessage} isLoading={isLoading} />
          <div className="text-center mt-3">
            <span className="text-[10px] md:text-xs text-slate-400 dark:text-slate-500">
              AI can make mistakes. Consider verifying important information.
            </span>
          </div>
        </div>
      </div>

    </div>
  );
}
