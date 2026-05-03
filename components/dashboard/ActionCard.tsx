import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface ActionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  colorClass: string;
}

export default function ActionCard({ title, description, icon: Icon, href, colorClass }: ActionCardProps) {
  return (
    <Link 
      href={href}
      className="group relative flex flex-col items-start p-6 rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-slate-700 overflow-hidden"
    >
      <div className={`p-3 rounded-xl mb-4 text-white ${colorClass}`}>
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{title}</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
        {description}
      </p>
      
      {/* Subtle background glow effect on hover */}
      <div className={`absolute -right-10 -bottom-10 w-32 h-32 rounded-full blur-[50px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${colorClass}`} />
    </Link>
  );
}
