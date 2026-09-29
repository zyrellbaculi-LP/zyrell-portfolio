"use client";

import { useState } from "react";

const services = [
  "VIDEOGRAPHY",
  "PHOTOGRAPHY",
  "VIDEO EDITS",
  "GRAPHICS DESIGN",
];

export default function ContactPage() {
  const [selectedService, setSelectedService] = useState("");

  return (
    <main className="h-screen overflow-hidden bg-[#F8F8F5] lg:pl-[270px]">
      <section className="relative flex h-full flex-col overflow-hidden">

        {/* Japanese background element */}
        <div className="pointer-events-none absolute -right-16 top-20 z-0 text-[170px] font-light leading-none tracking-[-0.08em] text-[#151516] opacity-[0.025]">
          連絡
        </div>

        {/* Fixed header */}
        <header className="relative z-10 shrink-0 px-8 pb-6 pt-8 md:px-12 lg:px-16">
          <p className="text-[9px] font-medium tracking-[0.3em] text-[#151516]/40">
            PORTFOLIO / 006
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-[-0.04em] text-[#B82134] md:text-5xl">
            CONTACT ME
          </h1>
        </header>

        <div className="relative z-10 h-px w-full bg-[#151516]/10" />

        {/* Scrollable content */}
        <section className="custom-scrollbar relative z-10 min-h-0 flex-1 overflow-y-auto px-8 py-8 md:px-12 lg:px-16">

          <div className="max-w-3xl">

            {/* Intro */}
            <div className="mb-8">
              <p className="max-w-2xl text-[11px] font-medium leading-5 tracking-[0.04em] text-[#151516]/70">
                Have a project in mind? Tell me a little about what you need
                and I&apos;ll get back to you.
              </p>

              <p className="mt-3 max-w-xl text-[9px] font-normal leading-5 tracking-[0.04em] text-[#151516]/50">
                Whether it&apos;s video editing, photography, motion graphics,
                or graphic design, feel free to get in touch.
              </p>
            </div>

            {/* Contact form */}
            <form className="space-y-7">

              {/* Name + Email */}
              <div className="grid gap-6 md:grid-cols-2">

                {/* Full name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-[8px] font-semibold tracking-[0.18em] text-[#151516]/65"
                  >
                    FULL NAME
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    className="w-full border-b border-[#151516]/20 bg-transparent pb-2.5 text-[11px] font-medium tracking-[0.03em] text-[#151516] outline-none placeholder:text-[#151516]/40 transition-colors duration-300 focus:border-[#B82134]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[8px] font-semibold tracking-[0.18em] text-[#151516]/65"
                  >
                    EMAIL ADDRESS
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    className="w-full border-b border-[#151516]/20 bg-transparent pb-2.5 text-[11px] font-medium tracking-[0.03em] text-[#151516] outline-none placeholder:text-[#151516]/40 transition-colors duration-300 focus:border-[#B82134]"
                  />
                </div>

              </div>

              {/* Services */}
              <div>
                <label className="mb-3 block text-[8px] font-semibold tracking-[0.18em] text-[#151516]/65">
                  SERVICE
                </label>

                <div className="flex flex-wrap gap-2">
                  {services.map((service) => {
                    const isSelected = selectedService === service;

                    return (
                      <button
                        key={service}
                        type="button"
                        onClick={() => setSelectedService(service)}
                        className={`
                          border
                          px-4
                          py-2.5
                          text-[8px]
                          font-semibold
                          tracking-[0.14em]
                          transition-all
                          duration-300
                          ${
                            isSelected
                              ? "border-[#B82134] bg-[#B82134] text-[#F8F8F5] shadow-[0_0_18px_rgba(184,33,52,0.25)]"
                              : "border-[#151516]/20 bg-transparent text-[#151516]/60 hover:border-[#B82134]/50 hover:text-[#B82134]"
                          }
                        `}
                      >
                        {service}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Project description */}
              <div>
                <label
                  htmlFor="description"
                  className="mb-2 block text-[8px] font-semibold tracking-[0.18em] text-[#151516]/65"
                >
                  PROJECT DESCRIPTION
                </label>

                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none border border-[#151516]/20 bg-transparent p-3.5 text-[11px] font-medium leading-5 tracking-[0.03em] text-[#151516] outline-none placeholder:text-[#151516]/40 transition-colors duration-300 focus:border-[#B82134]"
                />
              </div>

              {/* Send button */}
              <div>
                <button
                  type="submit"
                  className="group flex items-center gap-4 bg-[#151516] px-6 py-3.5 text-[8px] font-semibold tracking-[0.18em] text-[#F8F8F5] transition-all duration-300 hover:bg-[#B82134]"
                >
                  <span>SEND MESSAGE</span>

                  <span className="text-base font-light leading-none transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>

            </form>

            {/* Social links */}
            <div className="mt-10 border-t border-[#151516]/10 pt-6 pb-8">
              <p className="mb-4 text-[8px] font-semibold tracking-[0.2em] text-[#151516]/40">
                ELSEWHERE
              </p>

              <div className="flex flex-wrap gap-x-8 gap-y-3">

                <a
                  href="#"
                  className="text-[9px] font-medium tracking-[0.16em] text-[#151516]/55 transition-colors duration-300 hover:text-[#B82134]"
                >
                  FACEBOOK
                </a>

                <a
                  href="#"
                  className="text-[9px] font-medium tracking-[0.16em] text-[#151516]/55 transition-colors duration-300 hover:text-[#B82134]"
                >
                  LINKEDIN
                </a>

                <a
                  href="#"
                  className="text-[9px] font-medium tracking-[0.16em] text-[#151516]/55 transition-colors duration-300 hover:text-[#B82134]"
                >
                  BEHANCE
                </a>

                <a
                  href="mailto:your@email.com"
                  className="text-[9px] font-medium tracking-[0.16em] text-[#151516]/55 transition-colors duration-300 hover:text-[#B82134]"
                >
                  EMAIL
                </a>

              </div>
            </div>

          </div>
        </section>
      </section>
    </main>
  );
}