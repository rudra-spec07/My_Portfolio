export default function Footer() {
  return (
    <footer className="text-center py-8 bg-slate-100 dark:bg-slate-900 text-sm text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <p>© {new Date().getFullYear()} Rudra Kumar Choubey. All rights reserved.</p>
      </div>
    </footer>
  );
}