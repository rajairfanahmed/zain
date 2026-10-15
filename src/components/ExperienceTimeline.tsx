import React from "react";
import { profileData } from "@/data/profile";
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ExperienceTimeline() {
  return (
    <div className="relative flex flex-col gap-8">
      {/* Central continuous vertical synaptic line */}
      <div className="absolute top-4 bottom-4 left-4 sm:left-6 w-px bg-gradient-to-b from-cyan-500/60 via-indigo-500/30 to-transparent" />

      {profileData.experiences.map((exp) => {
        const isFeatured = exp.featured;

        return (
          <div key={exp.id} className="relative pl-12 sm:pl-16 group">
            {/* Timeline node icon */}
            <div
              className={cn(
                "absolute left-2.5 sm:left-4.5 -translate-x-1/2 top-6 w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-300",
                isFeatured
                  ? "bg-cyan-500 border-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.8)]"
                  : "bg-surface-void border-white/20 group-hover:border-cyan-400"
              )}
            >
              <span
                className={cn(
                  "w-1.5 h-1.5 rounded-full",
                  isFeatured ? "bg-surface-void" : "bg-cyan-400"
                )}
              />
            </div>

            {/* Experience Card */}
            <div
              className={cn(
                "p-6 sm:p-8 rounded-2xl transition-all relative overflow-hidden neural-card",
                isFeatured && "border-cyan-500/30 shadow-[0_15px_35px_-10px_rgba(6,182,212,0.15)]"
              )}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <span
                      className={cn(
                        "text-[10px] font-mono px-2.5 py-0.5 rounded-full border",
                        isFeatured
                          ? "bg-cyan-950/60 border-cyan-500/40 text-cyan-300"
                          : "bg-white/[0.04] border-white/10 text-zinc-400"
                      )}
                    >
                      {exp.employmentType}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium mt-1">
                    <Building2 className="text-cyan-400 w-4 h-4" />
                    <span className="text-zinc-200 font-semibold font-display">
                      {exp.company}
                    </span>
                  </div>
                </div>

                <div className="flex sm:flex-col items-start sm:items-end gap-1 text-xs font-mono text-zinc-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="text-cyan-400 w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-zinc-400">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="flex flex-col gap-2.5 my-5">
                {exp.description.map((bullet, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-1.5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] text-zinc-300 border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {isFeatured && (
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">
                    Verified Trajectory
                  </span>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
