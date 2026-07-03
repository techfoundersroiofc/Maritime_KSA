import Link from "next/link";
import { Compass, Anchor } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-slate-950 text-slate-100 text-center px-4">
      <div className="w-16 h-16 rounded bg-orange-600/10 border border-orange-500/20 flex items-center justify-center text-orange-500 mb-6">
        <Compass className="w-8 h-8 animate-spin-slow" />
      </div>

      <h1 className="text-5xl font-black text-white tracking-tight mb-2">404</h1>
      <h2 className="text-base font-bold text-slate-300 uppercase tracking-wider mb-4">
        Course Off Track
      </h2>
      <p className="text-xs text-slate-500 max-w-sm mb-8 leading-relaxed">
        The coordinates you entered do not exist on our charts. Use the compass below to navigate back to safe waters.
      </p>

      <Link
        href="/"
        className="bg-orange-600 hover:bg-orange-500 text-white font-semibold text-xs px-6 py-3.5 rounded shadow shadow-orange-600/10 transition-colors flex items-center space-x-2"
      >
        <Anchor className="w-4 h-4" />
        <span>Return to Home Port</span>
      </Link>
    </div>
  );
}
