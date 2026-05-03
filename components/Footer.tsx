import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <Link href="/" className="text-xl font-bold tracking-tight text-brand-600 dark:text-brand-400">
              AI Study Assistant
            </Link>
            <p className="mt-4 max-w-xs text-sm text-slate-600 dark:text-slate-400">
              Empowering students with intelligent tools to simplify learning and maximize productivity.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">Product</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="#features" className="text-sm text-slate-600 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400 transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="text-sm text-slate-600 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400 transition-colors">Pricing</Link></li>
              <li><Link href="/dashboard" className="text-sm text-slate-600 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400 transition-colors">Dashboard</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">Support</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/docs" className="text-sm text-slate-600 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400 transition-colors">Documentation</Link></li>
              <li><Link href="/contact" className="text-sm text-slate-600 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400 transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="text-sm text-slate-600 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-200 pt-8 dark:border-slate-800">
          <p className="text-center text-sm text-slate-500 dark:text-slate-400">
            &copy; {new Date().getFullYear()} AI Study Assistant Platform. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
