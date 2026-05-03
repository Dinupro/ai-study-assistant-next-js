import { Clock } from "lucide-react";

export default function RecentActivity() {
  // Simulating an empty state for now
  const activities: any[] = [];

  return (
    <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Recent Activity</h2>
      
      {activities.length > 0 ? (
        <div className="space-y-4">
          {/* List would go here when we add backend */}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-16 h-16 bg-slate-50 dark:bg-slate-900 rounded-full flex items-center justify-center mb-4 text-slate-400">
            <Clock size={32} />
          </div>
          <h3 className="text-base font-medium text-slate-900 dark:text-white mb-1">No recent activity</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm">
            Your study sessions, generated quizzes, and summarized notes will appear here. Start exploring to fill up your dashboard!
          </p>
        </div>
      )}
    </div>
  );
}
