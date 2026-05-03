import { SendHorizontal } from "lucide-react";
import { useState, KeyboardEvent } from "react";

interface ChatInputProps {
  onSend: (message: string) => void;
  isLoading: boolean;
}

export default function ChatInput({ onSend, isLoading }: ChatInputProps) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() && !isLoading) {
      onSend(input.trim());
      setInput("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="relative flex items-end w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-2 shadow-sm focus-within:ring-2 focus-within:ring-brand-500/50 focus-within:border-brand-500 transition-all">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask anything..."
        className="w-full max-h-32 min-h-[44px] bg-transparent border-none focus:ring-0 resize-none px-4 py-3 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none scrollbar-thin"
        rows={1}
        disabled={isLoading}
      />
      
      <button
        onClick={handleSend}
        disabled={!input.trim() || isLoading}
        className="flex-shrink-0 flex items-center justify-center h-11 w-11 rounded-full bg-brand-600 text-white transition-all disabled:opacity-50 disabled:bg-slate-200 disabled:text-slate-400 dark:disabled:bg-slate-800 dark:disabled:text-slate-600 hover:bg-brand-700 hover:shadow-md ml-2"
      >
        <SendHorizontal size={20} className={input.trim() && !isLoading ? "translate-x-[-1px] translate-y-[1px]" : ""} />
      </button>
    </div>
  );
}
