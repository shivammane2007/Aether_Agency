"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ExpandableCardProps {
  title: string;
  src: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
  classNameExpanded?: string;
  [key: string]: any;
}

export function ExpandableCard({
  title,
  src,
  description,
  children,
  className,
  classNameExpanded,
  ...props
}: ExpandableCardProps) {
  const [active, setActive] = React.useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);
  const id = React.useId();

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActive(false);
      }
    };

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setActive(false);
      }
    };

    if (active) {
      window.addEventListener("keydown", onKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [active]);

  return (
    <>
      <AnimatePresence>
        {active && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md h-full w-full z-[100]"
            />
            <div
              className={cn(
                "fixed inset-0 grid place-items-center z-[101] sm:pt-16 pb-10 pointer-events-none",
              )}
            >
              <motion.div
                layoutId={`card-${title}-${id}`}
                ref={cardRef}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className={cn(
                  "w-full max-w-[850px] h-full md:h-auto md:max-h-[90vh] flex flex-col overflow-hidden sm:rounded-3xl bg-[#0a0a0a] border border-[#1a1a1a] shadow-2xl relative pointer-events-auto",
                  classNameExpanded,
                )}
                {...props}
              >
                <motion.div layoutId={`image-${title}-${id}`} className="relative h-80 shrink-0 overflow-hidden">
                  <div className="absolute inset-x-0 bottom-[-1px] h-[70px] z-50 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
                    <img
                      src={src}
                      alt={title}
                      className="w-full h-full object-cover object-center"
                    />
                </motion.div>

                <div className="flex flex-col flex-1 overflow-hidden">
                  <div className="flex justify-between items-start p-8 pb-4 shrink-0">
                    <div>
                      <motion.p
                        layoutId={`description-${description}-${id}`}
                        className="text-[#888888] text-lg font-medium"
                      >
                        {description}
                      </motion.p>
                      <motion.h3
                        layoutId={`title-${title}-${id}`}
                        className="font-bold text-white text-4xl mt-1"
                      >
                        {title}
                      </motion.h3>
                    </div>
                    <button
                      aria-label="Close card"
                      className="h-10 w-10 shrink-0 flex items-center justify-center rounded-full bg-[#111] text-white/70 border border-[#1a1a1a] hover:border-[#0070f3] hover:text-white transition-colors duration-300 focus:outline-none"
                      onClick={() => setActive(false)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 6L6 18" />
                        <path d="M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="relative flex-1 overflow-y-auto px-6 sm:px-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="text-[#888888] text-base pb-10 flex flex-col items-start gap-4"
                    >
                      {children}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      <motion.div
        layoutId={`card-${title}-${id}`}
        onClick={() => setActive(true)}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className={cn(
          "p-4 flex flex-col justify-between items-center bg-[#0a0a0a] hover:bg-[#111] shadow-xl rounded-2xl cursor-pointer border border-[#1a1a1a] transition-colors duration-300 group",
          className,
        )}
      >
        <div className="flex gap-4 flex-col w-full">
          <motion.div layoutId={`image-${title}-${id}`} className="overflow-hidden rounded-xl h-56 w-full">
            <img
              src={src}
              alt={title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <motion.p
                layoutId={`description-${description}-${id}`}
                className="text-[#888888] md:text-left text-sm font-medium"
              >
                {description}
              </motion.p>
              <motion.h3
                layoutId={`title-${title}-${id}`}
                className="text-white md:text-left font-bold"
              >
                {title}
              </motion.h3>
            </div>
            <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-full bg-[#0a0a0a] text-white/70 border border-[#1a1a1a] group-hover:border-[#0070f3] group-hover:text-white transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
