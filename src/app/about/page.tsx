import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Muhammad Zain-Ul-Abideen",
  description: "Personal chronicle, engineering philosophy, and leadership trajectory of Muhammad Zain-Ul-Abideen.",
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 md:py-20">
      <div className="border-b border-white/[0.08] pb-12 mb-16">
        <span className="text-xs uppercase font-mono tracking-widest text-amber-400 block mb-3">
          01 // The Chronicle
        </span>
        <h1 className="text-4xl sm:text-6xl font-bold font-display text-white">
          About & Philosophy
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-6 text-slate-300 font-light leading-relaxed">
          <p className="text-lg text-white font-normal">
            I am a software engineer, computer science scholar, and Devsinc Campus Ambassador focused on high-concurrency systems, distributed backends, and algorithmic problem-solving.
          </p>
          <p>
            My engineering philosophy centers on **architectural clarity, demonstrable performance, and rigorous fundamentals**. Rather than building cosmetic prototypes, I engineer production-grade systems—such as Humankind, an enterprise healthcare super-marketplace orchestrating HIPAA-aware AI care flows, Supabase Row-Level Security, and Stripe Connect financing across 200+ relational tables.
          </p>
          <p>
            Beyond systems engineering, I lead engineering communities at NUML. As Internal PR Lead for the IEEE Student Community and Event Management Member for GDG On Campus, I connect students with enterprise opportunities and organize high-impact developer symposiums.
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="relative rounded-2xl overflow-hidden border border-white/[0.1] bg-[#0D1017] p-2">
            <div className="relative aspect-square rounded-xl overflow-hidden grayscale contrast-110">
              <Image
                src="/images/zain.jpg"
                alt="Muhammad Zain-Ul-Abideen"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 font-mono text-xs text-slate-400">
              <span className="text-white block font-semibold">Muhammad Zain-Ul-Abideen</span>
              <span>Devsinc Ambassador • NUML CS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
