export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-slate-950 text-slate-100">
      <div className="relative w-16 h-16">
        {/* Outer rotating ring */}
        <div className="absolute inset-0 rounded-full border-4 border-slate-900 border-t-orange-500 animate-spin" />
        {/* Inner static anchor outline or glow */}
        <div className="absolute inset-2 rounded-full bg-slate-950 flex items-center justify-center">
          <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-ping" />
        </div>
      </div>
      <p className="text-[11px] font-bold tracking-widest text-slate-500 uppercase mt-6 animate-pulse">
        Securing Navigation Coordinates...
      </p>
    </div>
  );
}
