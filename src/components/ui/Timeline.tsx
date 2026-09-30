"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { type ReactNode, useEffect, useRef, useState } from "react";

export type TimelineEntry = {
  /** Label shown in the left column, typically a date range. */
  title: string;
  content: ReactNode;
};

/**
 * Vertical timeline.
 *
 * Each entry keeps its date stuck to the top of the viewport while its content
 * scrolls, and a gradient line fills up along the rail as the reader advances.
 */
export function Timeline({ data }: { data: TimelineEntry[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackHeight, setTrackHeight] = useState(0);

  // Track the real height of the list (images loading changes it) so the
  // progress line always matches the content.
  useEffect(() => {
    const element = trackRef.current;
    if (!element) return;

    const measure = () =>
      setTrackHeight(element.getBoundingClientRect().height);

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 60%"],
  });

  const heightTransform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, trackHeight],
  );
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div ref={containerRef} className="relative">
      <div ref={trackRef} className="relative">
        {/* Rail */}
        <div
          style={{ height: trackHeight }}
          className="absolute left-4 top-0 w-px overflow-hidden bg-neutral-200 dark:bg-white/10 md:left-6"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-px bg-gradient-to-b from-cyan-400 via-purple-500 to-fuchsia-500"
          />
        </div>

        <ol className="space-y-12 md:space-y-16">
          {data.map((item, index) => (
            <li key={index} className="relative pl-11 md:pl-24">
              <span
                aria-hidden="true"
                className="absolute left-4 top-1 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-white bg-purple-500 ring-4 ring-purple-500/15 dark:border-neutral-950 md:left-6"
              />

              <div className="grid gap-2 md:grid-cols-[9rem_1fr] md:gap-10">
                <div className="md:sticky md:top-28 md:self-start">
                  <span className="inline-block rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs font-medium text-neutral-600 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-neutral-300">
                    {item.title}
                  </span>
                </div>
                <div className="min-w-0">{item.content}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Timeline;
