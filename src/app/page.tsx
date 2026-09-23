import Sidebar from "@/components/layout/Sidebar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F8F5] lg:pl-[270px]">

      <Sidebar />

      <section className="relative min-h-screen overflow-hidden">

        {/* Atmospheric background */}
        <div className="pointer-events-none absolute inset-0">

          <div className="absolute -right-20 top-20 text-[180px] font-light leading-none tracking-[-0.08em] text-[#151516] opacity-[0.025]">
            映像
          </div>

          <div className="absolute bottom-10 left-10 text-[100px] font-light leading-none text-[#B82134] opacity-[0.025]">
            作品
          </div>

          {/* Decorative red line */}
          <div className="absolute right-12 top-12 h-20 w-px bg-[#B82134]/20" />

          <div className="absolute right-12 top-32 h-px w-20 bg-[#B82134]/20" />

        </div>

        {/* Section label */}
        <header className="relative flex items-center justify-between px-8 py-8 md:px-12 lg:px-16">

          <div>
            <p className="text-[9px] tracking-[0.3em] text-[#151516]/40">
              PORTFOLIO / 001
            </p>

            <h1 className="mt-2 text-4xl font-bold tracking-[-0.03em] text-[#B82134] md:text-5xl">
              HOME
            </h1>
          </div>

          <div className="hidden text-right md:block">
            <p className="text-[8px] tracking-[0.2em] text-[#151516]/30">
              MULTIMEDIA DESIGNER
            </p>

            <p className="mt-1 text-[8px] tracking-[0.2em] text-[#151516]/20">
              PHOTOGRAPHY / VIDEO / DESIGN
            </p>
          </div>

        </header>

        {/* Main content */}
        <div className="relative px-8 pb-16 md:px-12 lg:px-16">

          <div className="grid min-h-[65vh] items-end lg:grid-cols-[1.5fr_1fr]">

            {/* Highlight */}
            <div className="relative overflow-hidden bg-[#151516] p-8 text-[#F8F8F5] md:p-12">

              <div className="absolute right-0 top-0 h-24 w-24 border-b border-l border-[#B82134]/40" />

              <p className="text-[9px] tracking-[0.3em] text-[#B82134]">
                SELECTED WORK
              </p>

              <h2 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-[-0.04em] md:text-6xl">
                HIGHLIGHT
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-[#F8F8F5]/50">
                A collection of selected work across video editing,
                cinematography, photography, motion design, and graphic
                design.
              </p>

              <div className="mt-10 flex items-center gap-4 text-[9px] tracking-[0.2em]">
                <span className="h-px w-8 bg-[#B82134]" />
                VIEW WORK
              </div>

            </div>

            {/* Side information */}
            <div className="flex h-full flex-col justify-end p-8 md:p-12">

              <div className="mb-12 max-w-sm">

                <p className="text-[9px] tracking-[0.3em] text-[#B82134]">
                  PROFILE
                </p>

                <p className="mt-5 text-sm leading-7 text-[#151516]/60">
                  Multimedia designer focused on visual storytelling,
                  editorial design, video production, photography, and
                  motion graphics.
                </p>

              </div>

              <div className="grid grid-cols-2 gap-8 border-t border-[#151516]/10 pt-6">

                <div>
                  <p className="text-[8px] tracking-[0.2em] text-[#151516]/30">
                    DISCIPLINES
                  </p>

                  <p className="mt-3 text-xs leading-6">
                    Video
                    <br />
                    Photography
                    <br />
                    Design
                  </p>
                </div>

                <div>
                  <p className="text-[8px] tracking-[0.2em] text-[#151516]/30">
                    BASE
                  </p>

                  <p className="mt-3 text-xs leading-6">
                    Philippines
                    <br />
                    Remote
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}