"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const albums = [
  {
    number: "01",
    title: "PROJECT ONE",
    category: "PORTRAIT",
    year: "2026",
  },
  {
    number: "02",
    title: "PROJECT TWO",
    category: "EVENT / DOCUMENTARY",
    year: "2026",
  },
  {
    number: "03",
    title: "PROJECT THREE",
    category: "STREET",
    year: "2025",
  },
  {
    number: "04",
    title: "PROJECT FOUR",
    category: "CONCEPTUAL",
    year: "2025",
  },
  {
    number: "05",
    title: "PROJECT FIVE",
    category: "PORTRAIT",
    year: "2025",
  },
  {
    number: "06",
    title: "PROJECT SIX",
    category: "EVENT / DOCUMENTARY",
    year: "2024",
  },
];

const categories = [
  "ALL",
  "PORTRAIT",
  "EVENT / DOCUMENTARY",
  "STREET",
  "CONCEPTUAL",
];

export default function PhotographyPage() {
  return (
    <main className="h-screen overflow-hidden bg-[#F8F8F5] lg:pl-[270px]">
      <section className="relative flex h-full flex-col overflow-hidden">

        {/* Japanese background element */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
            x: 20,
          }}
          animate={{
            opacity: 0.025,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="pointer-events-none absolute -right-10 top-24 z-0 text-[170px] font-light leading-none tracking-[-0.08em] text-[#151516]"
        >
          写真
        </motion.div>

        {/* Fixed Header Area */}
        <header className="relative z-10 shrink-0 px-8 pb-0 pt-10 md:px-12 lg:px-16">

          <div className="flex items-end justify-between">

            {/* Left header */}
            <motion.div
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="text-[9px] tracking-[0.3em] text-[#151516]/30">
                PORTFOLIO / 003
              </p>

              <h1 className="mt-3 text-4xl font-bold tracking-[-0.04em] text-[#B82134] md:text-5xl">
                PHOTOGRAPHY
              </h1>
            </motion.div>

            {/* Right header */}
            <motion.div
              initial={{
                opacity: 0,
                x: 15,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.18,
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="hidden text-right md:block"
            >
              <p className="text-[8px] tracking-[0.2em] text-[#151516]/30">
                STILL IMAGE
              </p>

              <p className="mt-1 text-[8px] tracking-[0.2em] text-[#151516]/20">
                PORTRAIT / DOCUMENTARY / CONCEPT
              </p>
            </motion.div>

          </div>

          {/* Category Tabs */}
          <motion.nav
            initial={{
              opacity: 0,
              y: 8,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.25,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8 flex gap-5 overflow-x-auto pb-3"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{
                  opacity: 0,
                  y: 6,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.28 + index * 0.055,
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`
                  shrink-0
                  text-[8px]
                  tracking-[0.14em]
                  transition-all
                  duration-300
                  ${
                    index === 0
                      ? "text-[#B82134]"
                      : "text-[#151516]/35 hover:text-[#151516]"
                  }
                `}
              >
                {category}
              </motion.button>
            ))}
          </motion.nav>

          {/* Divider */}
          <motion.div
            initial={{
              scaleX: 0,
              opacity: 0,
            }}
            animate={{
              scaleX: 1,
              opacity: 1,
            }}
            transition={{
              delay: 0.48,
              duration: 0.65,
              ease: [0.77, 0, 0.175, 1],
            }}
            style={{
              transformOrigin: "left",
            }}
            className="h-px w-full bg-[#151516]/10"
          />

        </header>

        {/* Scrollable Album Area */}
        <section className="custom-scrollbar relative z-10 min-h-0 flex-1 overflow-y-auto px-8 py-10 md:px-12 lg:px-16">

          <div className="grid gap-x-6 gap-y-12 md:grid-cols-2 xl:grid-cols-3">

            {albums.map((album, index) => (
              <motion.div
                key={album.number}
                initial={{
                  opacity: 0,
                  y: 24,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.4 + index * 0.09,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href={`/photography/${album.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="group block cursor-pointer"
                >
                  {/* Album Frame */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#151516]">

                    {/* Album number */}
                    <div className="absolute left-4 top-4 z-10 text-[9px] tracking-[0.2em] text-[#F8F8F5]/40">
                      {album.number}
                    </div>

                    {/* Album information */}
                    <div className="absolute inset-x-0 bottom-0 z-10 p-5">
                      <h2 className="text-sm font-bold tracking-[0.03em] text-[#F8F8F5]">
                        {album.title}
                      </h2>

                      <p className="mt-2 text-[8px] tracking-[0.18em] text-[#F8F8F5]/45">
                        {album.category}
                      </p>

                      <p className="mt-2 text-[7px] tracking-[0.15em] text-[#F8F8F5]/30">
                        {album.year}
                      </p>
                    </div>

                    {/* Dark gradient behind album information */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#151516] via-[#151516]/60 to-transparent" />

                    {/* Hover line */}
                    <div className="absolute bottom-0 left-0 z-20 h-[2px] w-0 bg-[#B82134] transition-all duration-500 group-hover:w-full" />

                  </div>
                </Link>
              </motion.div>
            ))}

          </div>
        </section>

      </section>
    </main>
  );
}