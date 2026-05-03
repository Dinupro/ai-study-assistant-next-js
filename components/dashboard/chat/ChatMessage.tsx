import { User, Sparkles } from "lucide-react";

export type MessageRole = "user" | "ai";

export interface Message {
  id: string;
  role: MessageRole;
  content: string;
}

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <div className={`flex w-full ${isUser ? "justify-end" : "justify-start"} mb-6`}>
      <div className={`flex max-w-[85%] md:max-w-[75%] ${isUser ? "flex-row-reverse" : "flex-row"} items-start gap-3 md:gap-4`}>
        
        {/* Avatar */}
        <div className={`flex-shrink-0 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full ${
          isUser 
            ? "bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-300" 
            : "bg-brand-600 text-white shadow-md shadow-brand-500/20"
        }`}>
          {isUser ? <User size={18} /> : <Sparkles size={18} />}
        </div>

        {/* Message Bubble */}
        <div className={`relative px-4 py-3 md:px-5 md:py-4 rounded-2xl text-sm md:text-base shadow-sm ${
          isUser
            ? "bg-brand-600 text-white rounded-tr-sm"
            : "bg-white border border-slate-200 text-slate-800 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-200 rounded-tl-sm"
        }`}>
          <div className="whitespace-pre-wrap leading-relaxed">
            {message.content}
          </div>
        </div>

      </div>
    </div>
  );
}
