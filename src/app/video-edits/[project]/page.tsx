import Link from "next/link";

const videos = [
  {
    number: "01",
    title: "FINAL EDIT",
    category: "MAIN VIDEO",
  },
  {
    number: "02",
    title: "SOCIAL CUT",
    category: "SHORT FORM",
  },
  {
    number: "03",
    title: "ALTERNATIVE CUT",
    category: "EDIT",
  },
];

export default function VideoEditProjectPage() {
  return (
    <main className="h-screen overflow-hidden bg-[#F8F8F5] lg:pl-[270px]">
      <section className="relative flex h-full flex-col overflow-hidden">

        {/* Japanese background element */}
        <div className="pointer-events-none absolute -right-10 top-24 z-0 text-[170px] font-light leading-none tracking-[-0.08em] text-[#151516] opacity-[0.025]">
          編集
        </div>

        {/* Fixed header */}
        <header className="relative z-10 shrink-0 border-b border-[#151516]/10 px-8 pb-8 pt-10 md:px-12 lg:px-16">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[9px] tracking-[0.3em] text-[#151516]/30">
                VIDEO EDITS / PROJECT 001
              </p>

              <h1 className="mt-3 text-4xl font-bold tracking-[-0.04em] text-[#B82134] md:text-5xl">
                PROJECT NAME
              </h1>
            </div>

            <Link
              href="/video-edits"
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
              describe the project, client, editing approach, creative
              direction, or production process.
            </p>
          </div>

          {/* Project information */}
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
            <div>
              <p className="text-[6px] tracking-[0.2em] text-[#151516]/25">
                CATEGORY
              </p>
              <p className="mt-1 text-[8px] tracking-[0.12em] text-[#151516]/50">
                CORPORATE
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
                EDITOR
              </p>
            </div>
          </div>
        </header>

        {/* Scrollable project area */}
        <section className="custom-scrollbar relative z-10 min-h-0 flex-1 overflow-y-auto px-8 py-10 md:px-12 lg:px-16">
          <div className="grid gap-x-6 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
            {videos.map((video) => (
              <article
                key={video.number}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video overflow-hidden bg-[#151516]">

                  {/* Video number */}
                  <div className="absolute left-4 top-4 z-10 text-[9px] tracking-[0.2em] text-[#F8F8F5]/35">
                    {video.number}
                  </div>

                  {/* Video information */}
                  <div className="absolute inset-x-0 bottom-0 z-10 p-5">
                    <h2 className="text-sm font-bold tracking-[0.03em] text-[#F8F8F5]">
                      {video.title}
                    </h2>

                    <p className="mt-2 text-[8px] tracking-[0.18em] text-[#F8F8F5]/40">
                      {video.category}
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