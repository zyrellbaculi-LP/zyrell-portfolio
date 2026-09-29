import Link from "next/link";

const projects = [
  {
    number: "01",
    title: "PROJECT ONE",
    category: "BRANDING",
    year: "2026",
  },
  {
    number: "02",
    title: "PROJECT TWO",
    category: "SOCIAL MEDIA",
    year: "2026",
  },
  {
    number: "03",
    title: "PROJECT THREE",
    category: "MARKETING",
    year: "2026",
  },
  {
    number: "04",
    title: "PROJECT FOUR",
    category: "PRINT DESIGN",
    year: "2025",
  },
  {
    number: "05",
    title: "PROJECT FIVE",
    category: "EDITORIAL",
    year: "2025",
  },
  {
    number: "06",
    title: "PROJECT SIX",
    category: "ILLUSTRATION",
    year: "2025",
  },
];

const categories = [
  "ALL",
  "BRANDING",
  "SOCIAL MEDIA",
  "MARKETING",
  "PRINT DESIGN",
  "EDITORIAL",
  "ILLUSTRATION",
];

export default function GraphicsDesignPage() {
  return (
    <main className="h-screen overflow-hidden bg-[#F8F8F5] lg:pl-[270px]">
      <section className="relative flex h-full flex-col overflow-hidden">

        {/* Japanese background element */}
        <div className="pointer-events-none absolute -right-10 top-24 z-0 text-[170px] font-light leading-none tracking-[-0.08em] text-[#151516] opacity-[0.025]">
          グラフィック
        </div>

        {/* Fixed header */}
        <header className="relative z-10 shrink-0 px-8 pb-0 pt-10 md:px-12 lg:px-16">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[9px] tracking-[0.3em] text-[#151516]/30">
                PORTFOLIO / 005
              </p>

              <h1 className="mt-3 text-4xl font-bold tracking-[-0.04em] text-[#B82134] md:text-5xl">
                GRAPHICS DESIGN
              </h1>
            </div>

            <div className="hidden text-right md:block">
              <p className="text-[8px] tracking-[0.2em] text-[#151516]/30">
                VISUAL DESIGN ARCHIVE
              </p>

              <p className="mt-1 text-[8px] tracking-[0.2em] text-[#151516]/20">
                BRANDING / DIGITAL / PRINT
              </p>
            </div>
          </div>

          {/* Categories */}
          <nav className="mt-8 flex gap-5 overflow-x-auto pb-3">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`
                  shrink-0
                  text-[5px]
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
              </button>
            ))}
          </nav>

          <div className="h-px w-full bg-[#151516]/10" />
        </header>

        {/* Scrollable project area */}
        <section className="custom-scrollbar relative z-10 min-h-0 flex-1 overflow-y-auto px-8 py-10 md:px-12 lg:px-16">
          <div className="grid gap-x-6 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
            <Link
                key={project.number}
                href={`/graphics-design/${project.number}`}
                className="group block"
            >
                <article>
                <div className="relative aspect-[4/3] overflow-hidden bg-[#151516]">

                    {/* Project number */}
                    <div className="absolute left-4 top-4 z-10 text-[9px] tracking-[0.2em] text-[#F8F8F5]/35">
                    {project.number}
                    </div>

                    {/* Project information */}
                    <div className="absolute inset-x-0 bottom-0 z-10 p-5">
                    <h2 className="text-sm font-bold tracking-[0.03em] text-[#F8F8F5]">
                        {project.title}
                    </h2>

                    <p className="mt-2 text-[8px] tracking-[0.18em] text-[#F8F8F5]/40">
                        {project.category}
                    </p>

                    <p className="mt-2 text-[7px] tracking-[0.15em] text-[#F8F8F5]/30">
                        {project.year}
                    </p>
                    </div>

                    {/* Bottom gradient */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#151516] via-[#151516]/60 to-transparent" />

                    {/* Hover line */}
                    <div className="absolute bottom-0 left-0 z-20 h-[2px] w-0 bg-[#B82134] transition-all duration-500 group-hover:w-full" />
                </div>
                </article>
            </Link>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}