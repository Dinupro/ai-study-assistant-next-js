import ActionCard from "@/components/dashboard/ActionCard";
import StatCard from "@/components/dashboard/StatCard";
import RecentActivity from "@/components/dashboard/RecentActivity";
import { MessageSquare, FileText, Lightbulb, Bookmark, Zap, Calendar, TrendingUp, CheckCircle2 } from "lucide-react";

export default function DashboardPage() {
  const userName = "Dinukshi"; // Hardcoded for now, will come from auth later

  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto space-y-8">
      
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Welcome back, {userName} 👋
        </h1>
        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Ready to crush your study goals today? Here's an overview of your progress.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Sessions" 
          value="12" 
          icon={Zap} 
          trend="+2" 
          trendUp={true} 
        />
        <StatCard 
          title="Notes Summarized" 
          value="34" 
          icon={FileText} 
          trend="+8" 
          trendUp={true} 
        />
        <StatCard 
          title="Quizzes Generated" 
          value="5" 
          icon={Lightbulb} 
        />
        <StatCard 
          title="Study Streak" 
          value="3 Days" 
          icon={TrendingUp} 
        />
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ActionCard 
            title="Ask AI Assistant" 
            description="Get instant help with complex topics and homework questions."
            icon={MessageSquare}
            href="/dashboard/chat"
            colorClass="bg-blue-500"
          />
          <ActionCard 
            title="Summarize Notes" 
            description="Condense long lectures into easy-to-read key takeaways."
            icon={FileText}
            href="/dashboard/summarizer"
            colorClass="bg-purple-500"
          />
          <ActionCard 
            title="Generate Quiz" 
            description="Test your knowledge by turning your notes into interactive quizzes."
            icon={Lightbulb}
            href="/dashboard/quiz"
            colorClass="bg-amber-500"
          />
          <ActionCard 
            title="View Saved Sessions" 
            description="Access your past conversations and study materials."
            icon={Bookmark}
            href="/dashboard/sessions"
            colorClass="bg-emerald-500"
          />
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <RecentActivity />
        </div>
        
        {/* Weekly Goal - Optional extra widget to make it look pro */}
        <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Weekly Goal</h2>
            <Calendar className="text-slate-400" size={20} />
          </div>
          
          <div className="flex items-center justify-center mb-6">
            <div className="relative flex items-center justify-center w-32 h-32">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-slate-100 dark:text-slate-800"
                  strokeWidth="3"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-brand-500"
                  strokeWidth="3"
                  strokeDasharray="60, 100"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute text-2xl font-bold text-slate-900 dark:text-white">60%</div>
            </div>
          </div>
          
          <ul className="space-y-3">
            <li className="flex items-center text-sm text-slate-600 dark:text-slate-400">
              <CheckCircle2 className="text-brand-500 mr-2" size={16} />
              <span>Study for 5 hours (3/5)</span>
            </li>
            <li className="flex items-center text-sm text-slate-600 dark:text-slate-400">
              <CheckCircle2 className="text-slate-300 dark:text-slate-700 mr-2" size={16} />
              <span>Generate 2 Quizzes (0/2)</span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
}
