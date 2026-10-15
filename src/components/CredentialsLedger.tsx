import React from "react";
import { profileData } from "@/data/profile";
import { Award, CheckCircle2 } from "lucide-react";

export default function CredentialsLedger() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {profileData.credentials.map((cred) => (
        <div
          key={cred.id}
          className="p-6 sm:p-7 rounded-2xl neural-card flex flex-col justify-between group hover:border-cyan-500/40 transition-all"
        >
          <div>
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Award className="w-5 h-5" />
              </span>
              <span className="text-[10px] font-mono text-cyan-300 px-2.5 py-0.5 rounded-full bg-cyan-950/40 border border-cyan-500/25 flex items-center gap-1">
                <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" />
                <span>Verified</span>
              </span>
            </div>

            <h3 className="text-base font-bold text-white mb-1.5 leading-snug font-display">
              {cred.title}
            </h3>
            <p className="text-xs font-mono text-cyan-400 mb-1">
              {cred.issuer}
            </p>
            <p className="text-[11px] font-mono text-zinc-400 mb-5">
              {cred.period}
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <div className="flex flex-wrap gap-1.5">
              {cred.skills.map((s) => (
                <span
                  key={s}
                  className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] text-zinc-300 border border-white/5"
                >
                  {s}
                </span>
              ))}
            </div>
            <span className="text-cyan-400 font-bold text-xs">✦</span>
          </div>
        </div>
      ))}
    </div>
  );
}
