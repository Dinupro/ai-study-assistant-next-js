export default function Features() {
  const features = [
    {
      title: "AI Chat Assistant",
      description: "Get instant answers to your complex study questions with our advanced AI tutor that understands your context.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      color: "bg-blue-500",
    },
    {
      title: "Note Summarizer",
      description: "Paste your long lecture notes and get concise, structured summaries and key takeaways in seconds.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: "bg-purple-500",
    },
    {
      title: "Quiz Generator",
      description: "Automatically transform your study materials into interactive quizzes to test your knowledge effectively.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: "bg-amber-500",
    },
    {
      title: "Saved Sessions",
      description: "Keep track of all your AI conversations and summaries in an organized workspace accessible anywhere.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
        </svg>
      ),
      color: "bg-emerald-500",
    },
  ];

  return (
    <section id="features" className="bg-slate-50 py-24 dark:bg-slate-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-400">Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Everything you need to excel
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Powerful tools designed specifically for students and lifelong learners.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="group relative rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950 dark:hover:border-brand-800/50"
            >
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${feature.color} bg-opacity-10 text-white`}>
                <div className={`p-2.5 rounded-lg ${feature.color}`}>
                  {feature.icon}
                </div>
              </div>
              <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">{feature.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {feature.description}
              </p>
              
              {/* Card Footer Decor */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-brand-500 transition-all group-hover:w-full rounded-b-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
