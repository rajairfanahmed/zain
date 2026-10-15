"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageCurtain() {
  const pathname = usePathname();
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    // Trigger entrance sweep on route change
    setAnimating(true);
    const timer = setTimeout(() => {
      setAnimating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!animating) return null;

  return (
    <div
      className="fixed inset-0 z-[100] pointer-events-none flex flex-col transition-opacity duration-500"
      aria-hidden="true"
    >
      <div className="flex-1 bg-[#040507] transform -translate-y-full animate-[curtainUp_0.5s_cubic-bezier(0.77,0,0.175,1)_forwards]" />
      <div className="flex-1 bg-[#040507] transform translate-y-full animate-[curtainDown_0.5s_cubic-bezier(0.77,0,0.175,1)_forwards]" />
    </div>
  );
}
