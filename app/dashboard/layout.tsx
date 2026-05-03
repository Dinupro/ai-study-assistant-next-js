import Sidebar from "@/components/dashboard/Sidebar";

export const metadata = {
  title: "Dashboard | AI Study Assistant",
  description: "Your personalized study dashboard.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-900 overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto w-full">
        {/* We add top padding for mobile to account for the hamburger menu */}
        <div className="lg:pt-0 pt-16">
          {children}
        </div>
      </main>
    </div>
  );
}
