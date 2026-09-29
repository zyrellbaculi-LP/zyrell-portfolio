import Link from "next/link";

const designs = [
  {
    number: "01",
    title: "PRIMARY DESIGN",
    category: "BRANDING",
  },
  {
    number: "02",
    title: "SOCIAL MEDIA",
    category: "DIGITAL",
  },
  {
    number: "03",
    title: "PROMOTIONAL MATERIAL",
    category: "MARKETING",
  },
  {
    number: "04",
    title: "PRINT DESIGN",
    category: "PRINT",
  },
  {
    number: "05",
    title: "EDITORIAL DESIGN",
    category: "EDITORIAL",
  },
  {
    number: "06",
    title: "SUPPORTING GRAPHICS",
    category: "DIGITAL",
  },
];

type Props = {
  params: Promise<{
    project: string;
  }>;
};

export default async function GraphicsDesignProjectPage({
  params,
}: Props) {
  const { project } = await params;

  return (
    <main className="h-screen overflow-hidden bg-[#F8F8F5] lg:pl-[270px]">
      <section className="relative flex h-full flex-col overflow-hidden">

        {/* Japanese background element */}
        <div className="pointer-events-none absolute -right-10 top-24 z-0 text-[170px] font-light leading-none tracking-[-0.08em] text-[#151516] opacity-[0.025]">
          グラフィック
        </div>

        {/* Fixed header */}
        <header className="relative z-10 shrink-0 border-b border-[#151516]/10 px-8 pb-8 pt-10 md:px-12 lg:px-16">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[9px] tracking-[0.3em] text-[#151516]/30">
                GRAPHICS DESIGN / PROJECT {project}
              </p>

              <h1 className="mt-3 text-4xl font-bold tracking-[-0.04em] text-[#B82134] md:text-5xl">
                PROJECT {project}
              </h1>
            </div>

            <Link
              href="/graphics-design"
              className="group mb-1 flex items-center gap-3 text-[8px] tracking-[0.18em] text-[#151516]/50 transition-all duration-300 hover:text-[#151516]"
            >
              <span className="text-xl font-light leading-none transition-transform duration-300 group-hover:-translate-x-1">
                ‹
              </span>

              <span>GO BACK</span>
            </Link>
          </div>

          {/* Project description */}
          <div className="mt-8">
            <p className="max-w-2xl text-[9px] leading-5 tracking-[0.08em] text-[#151516]/45">
              Project description goes here. This space can be used to briefly
              describe the client, design objectives, creative direction,
              visual approach, and final deliverables.
            </p>
          </div>

          {/* Project information */}
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
            <div>
              <p className="text-[6px] tracking-[0.2em] text-[#151516]/25">
                CATEGORY
              </p>

              <p className="mt-1 text-[8px] tracking-[0.12em] text-[#151516]/50">
                BRANDING
              </p>
            </div>

            <div>
              <p className="text-[6px] tracking-[0.2em] text-[#151516]/25">
                YEAR
              </p>

              <p className="mt-1 text-[8px] tracking-[0.12em] text-[#151516]/50">
                2026
              </p>
            </div>

            <div>
              <p className="text-[6px] tracking-[0.2em] text-[#151516]/25">
                ROLE
              </p>

              <p className="mt-1 text-[8px] tracking-[0.12em] text-[#151516]/50">
                GRAPHIC DESIGNER
              </p>
            </div>
          </div>
        </header>

        {/* Scrollable project area */}
        <section className="custom-scrollbar relative z-10 min-h-0 flex-1 overflow-y-auto px-8 py-10 md:px-12 lg:px-16">
          <div className="grid gap-x-6 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
            {designs.map((design) => (
              <article
                key={design.number}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#151516]">

                  {/* Design number */}
                  <div className="absolute left-4 top-4 z-10 text-[9px] tracking-[0.2em] text-[#F8F8F5]/35">
                    {design.number}
                  </div>

                  {/* Design information */}
                  <div className="absolute inset-x-0 bottom-0 z-10 p-5">
                    <h2 className="text-sm font-bold tracking-[0.03em] text-[#F8F8F5]">
                      {design.title}
                    </h2>

                    <p className="mt-2 text-[8px] tracking-[0.18em] text-[#F8F8F5]/40">
                      {design.category}
                    </p>
                  </div>

                  {/* Bottom gradient */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#151516] via-[#151516]/60 to-transparent" />

                  {/* Hover line */}
                  <div className="absolute bottom-0 left-0 z-20 h-[2px] w-0 bg-[#B82134] transition-all duration-500 group-hover:w-full" />
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}