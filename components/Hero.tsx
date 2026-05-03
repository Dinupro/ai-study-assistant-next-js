import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -z-10 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/10 blur-[120px]" />
      <div className="absolute top-1/4 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-purple-500/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mx-auto mb-6 flex max-w-fit items-center justify-center space-x-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700 dark:border-brand-900/30 dark:bg-brand-950/30 dark:text-brand-300">
            <span className="flex h-2 w-2 rounded-full bg-brand-500" />
            <span>AI-Powered Learning is here</span>
          </div>
          
          <h1 className="mx-auto max-w-4xl text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl dark:text-white">
            Master Any Subject with your <br />
            <span className="bg-gradient-to-r from-brand-600 to-purple-500 bg-clip-text text-transparent">
              AI Study Companion
            </span>
          </h1>
          
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            The all-in-one platform for students to summarize notes, generate quizzes, and chat with an intelligent assistant. Study smarter, not harder.
          </p>
          
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/signup"
              className="group relative flex h-12 items-center justify-center rounded-full bg-brand-600 px-8 text-sm font-bold text-white transition-all hover:bg-brand-700 hover:shadow-[0_0_20px_-5px_rgba(139,92,246,0.5)] active:scale-95"
            >
              Get Started for Free
              <svg 
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" 
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            
            <Link
              href="#features"
              className="flex h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-8 text-sm font-semibold text-slate-900 transition-all hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-900"
            >
              Learn More
            </Link>
          </div>

          {/* Social Proof / Trusted By */}
          <div className="mt-16">
            <p className="text-sm font-medium text-slate-500 uppercase tracking-widest">
              Built for modern students
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-4 opacity-50 grayscale transition-all hover:grayscale-0">
              {/* These would be logos in a real product */}
              <div className="text-lg font-bold text-slate-400">University Hub</div>
              <div className="text-lg font-bold text-slate-400">EduStream</div>
              <div className="text-lg font-bold text-slate-400">StudyFlow</div>
              <div className="text-lg font-bold text-slate-400">Notesly</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
