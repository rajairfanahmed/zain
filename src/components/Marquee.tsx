export default function Marquee() {
  const items = [
    "DISTRIBUTED SYSTEMS",
    "200+ LEETCODE ALGORITHMS",
    "REACT 18 & NEXT.JS",
    "SUPABASE POSTGRESQL RLS",
    "REDIS IN-MEMORY PUB/SUB",
    "C++ COMPETITIVE PROGRAMMING",
    "PYTHON & PANDAS",
    "HIPAA COMPLIANT AI FLOWS",
    "STRIPE CONNECT FINTECH",
    "DEVSINC CAMPUS AMBASSADOR",
    "IEEE NUML INTERNAL PR LEAD",
    "GDG ON CAMPUS EVENT MEMBER",
  ];

  return (
    <div className="w-full overflow-hidden border-y border-white/[0.08] bg-[#040507] py-3.5 select-none my-16">
      <div className="animate-marquee flex items-center gap-8">
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-8">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-colors">
              {item}
            </span>
            <span className="text-amber-400 text-xs">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
