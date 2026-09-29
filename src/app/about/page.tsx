"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const disciplines = [
  "VIDEO EDITING",
  "MOTION DESIGN",
  "GRAPHIC DESIGN",
  "PHOTOGRAPHY",
  "VIDEOGRAPHY",
];

const software = [
  {
    name: "PREMIERE PRO",
    icon: "/adobe/premiere-pro.svg",
  },
  {
    name: "AFTER EFFECTS",
    icon: "/adobe/after-effects.svg",
  },
  {
    name: "PHOTOSHOP",
    icon: "/adobe/photoshop.svg",
  },
  {
    name: "LIGHTROOM CLASSIC",
    icon: "/adobe/lightroom-classic.svg",
  },
  {
    name: "MEDIA ENCODER",
    icon: "/adobe/media-encoder.svg",
  },
  {
    name: "ILLUSTRATOR",
    icon: "/adobe/illustrator.svg",
  },
];

const documents = [
  {
    id: "cv",
    title: "Curriculum Vitae",
    short: "CV",
    file: "/documents/curriculum-vitae.pdf",
  },
  {
    id: "resume",
    title: "Resume",
    short: "RESUME",
    file: "/documents/resume.pdf",
  },
];

export default function AboutPage() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [selectedDocuments, setSelectedDocuments] = useState<string[]>([]);

  const toggleDocument = (id: string) => {
    setSelectedDocuments((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  };

  const selectedFiles = documents.filter((document) =>
    selectedDocuments.includes(document.id),
  );

  const handleView = () => {
    selectedFiles.forEach((document) => {
      window.open(document.file, "_blank", "noopener,noreferrer");
    });
  };

  const handleDownload = () => {
    selectedFiles.forEach((document) => {
      const link = window.document.createElement("a");

      link.href = document.file;
      link.download = document.file.split("/").pop() || document.short;

      window.document.body.appendChild(link);
      link.click();
      window.document.body.removeChild(link);
    });
  };

  return (
    <main className="h-screen overflow-hidden bg-[#F8F8F5] lg:pl-[270px]">
      <section className="relative flex h-full flex-col overflow-hidden">

        {/* Background Profile Image */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 1.04,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="pointer-events-none absolute right-0 top-0 z-0 h-[78%] w-[60%] overflow-hidden"
        >
          <Image
            src="/profile.jpg"
            alt=""
            fill
            className="object-cover object-center grayscale opacity-[0.16]"
            sizes="60vw"
          />

          {/* Left fade */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F8F8F5] via-[#F8F8F5]/35 to-transparent" />

          {/* Bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F8F8F5]" />

          {/* Slight overall wash */}
          <div className="absolute inset-0 bg-[#F8F8F5]/10" />
        </motion.div>

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
          className="pointer-events-none absolute -right-14 top-24 z-0 text-[180px] font-light leading-none tracking-[-0.08em] text-[#151516]"
        >
          私
        </motion.div>

        {/* Header */}
        <header className="relative z-10 shrink-0 px-8 pb-0 pt-10 md:px-12 lg:px-16">

          <div className="flex items-end justify-between gap-6">

            {/* Title */}
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
                PORTFOLIO / 007
              </p>

              <h1 className="mt-3 text-4xl font-bold tracking-[-0.04em] text-[#B82134] md:text-5xl">
                ABOUT ME
              </h1>
            </motion.div>

            {/* CV / Resume Button */}
            <motion.button
              type="button"
              onClick={() => setResumeModalOpen(true)}
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
              className="group mb-1 flex shrink-0 items-center gap-3 border border-[#151516]/15 px-4 py-2.5 text-[8px] font-semibold tracking-[0.16em] text-[#151516]/55 transition-all duration-300 hover:border-[#B82134] hover:text-[#B82134]"
            >
              <span>CV × RESUME</span>

              <span className="text-sm font-light leading-none transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </motion.button>

          </div>

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
              delay: 0.3,
              duration: 0.65,
              ease: [0.77, 0, 0.175, 1],
            }}
            style={{
              transformOrigin: "left",
            }}
            className="mt-8 h-px w-full bg-[#151516]/10"
          />

        </header>

        {/* Scrollable Content */}
        <section className="custom-scrollbar relative z-10 min-h-0 flex-1 overflow-y-auto px-8 py-10 md:px-12 lg:px-16">

          <div className="max-w-5xl">

            {/* Introduction */}
            <div className="grid gap-10 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr]">

              {/* Profile Image */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 24,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.35,
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#151516]">

                  <Image
                    src="/profile.jpg"
                    alt="Zyrell Baculi"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 320px"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#151516]/70 via-transparent to-transparent" />

                  <div className="absolute bottom-5 left-5">
                    <p className="text-[8px] font-medium tracking-[0.2em] text-[#F8F8F5]/50">
                      MULTIMEDIA DESIGNER
                    </p>

                    <div className="mt-3 h-px w-8 bg-[#B82134]" />
                  </div>
                </div>
              </motion.div>

              {/* Introduction Text */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.45,
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col justify-center"
              >
                <p className="text-[9px] font-semibold tracking-[0.25em] text-[#B82134]">
                  HELLO, I&apos;M ZYRELL
                </p>

                <h2 className="mt-4 max-w-2xl text-2xl font-bold leading-tight tracking-[-0.03em] text-[#151516] md:text-3xl">
                  I create visual work that brings ideas, stories, and
                  experiences to life.
                </h2>

                <p className="mt-6 max-w-2xl text-[11px] font-medium leading-6 tracking-[0.02em] text-[#151516]/65">
                  I&apos;m a multimedia designer working across video,
                  photography, motion graphics, and graphic design. I enjoy
                  combining visual storytelling with thoughtful design to
                  create work that communicates clearly and feels intentional.
                </p>

                <p className="mt-4 max-w-2xl text-[10px] leading-6 tracking-[0.02em] text-[#151516]/45">
                  This portfolio is a collection of selected work, experiments,
                  and projects that reflect the way I approach visual
                  communication.
                </p>
              </motion.div>

            </div>

            {/* Disciplines */}
            <motion.section
              initial={{
                opacity: 0,
                y: 24,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.6,
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-16 border-t border-[#151516]/10 pt-8"
            >
              <div className="flex flex-col gap-8 md:flex-row md:justify-between">

                <div>
                  <p className="text-[8px] font-semibold tracking-[0.2em] text-[#151516]/40">
                    WHAT I DO
                  </p>

                  <h2 className="mt-3 text-xl font-bold tracking-[-0.02em] text-[#151516]">
                    CREATIVE DISCIPLINES
                  </h2>
                </div>

                <div className="grid flex-1 gap-x-8 gap-y-4 md:max-w-xl md:grid-cols-2">
                  {disciplines.map((discipline, index) => (
                    <motion.div
                      key={discipline}
                      initial={{
                        opacity: 0,
                        x: 12,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: 0.65 + index * 0.07,
                        duration: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="flex items-center gap-3"
                    >
                      <span className="h-px w-5 bg-[#B82134]" />

                      <span className="text-[9px] font-semibold tracking-[0.15em] text-[#151516]/65">
                        {discipline}
                      </span>
                    </motion.div>
                  ))}
                </div>

              </div>
            </motion.section>

            {/* Approach */}
            <motion.section
              initial={{
                opacity: 0,
                y: 24,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.8,
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-16 border-t border-[#151516]/10 pt-8"
            >
              <div className="grid gap-8 md:grid-cols-[220px_1fr]">

                <div>
                  <p className="text-[8px] font-semibold tracking-[0.2em] text-[#151516]/40">
                    APPROACH
                  </p>

                  <h2 className="mt-3 text-xl font-bold tracking-[-0.02em] text-[#151516]">
                    HOW I WORK
                  </h2>
                </div>

                <div className="max-w-2xl">
                  <p className="text-[11px] font-medium leading-6 tracking-[0.02em] text-[#151516]/65">
                    Good visual work starts with understanding the message.
                    Whether I&apos;m editing a video, designing a graphic, or
                    creating a visual sequence, I focus on clarity, pacing,
                    composition, and purpose.
                  </p>

                  <p className="mt-4 text-[10px] leading-6 tracking-[0.02em] text-[#151516]/45">
                    I like working through ideas from concept to final output,
                    refining the small details while keeping the bigger picture
                    in mind.
                  </p>
                </div>

              </div>
            </motion.section>

            {/* Software */}
            <motion.section
              initial={{
                opacity: 0,
                y: 24,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.95,
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-16 border-t border-[#151516]/10 pt-8 pb-12"
            >
              <div className="flex flex-col gap-8 md:flex-row md:justify-between">

                <div>
                  <p className="text-[8px] font-semibold tracking-[0.2em] text-[#151516]/40">
                    TOOLKIT
                  </p>

                  <h2 className="mt-3 text-xl font-bold tracking-[-0.02em] text-[#151516]">
                    ADOBE
                  </h2>
                </div>

                <div className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-3 md:max-w-xl">
                  {software.map((tool, index) => (
                    <motion.div
                      key={tool.name}
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 1 + index * 0.06,
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="group flex items-center gap-3 border border-[#151516]/15 px-3 py-3 transition-all duration-300 hover:border-[#B82134]/50"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-105">
                        <Image
                          src={tool.icon}
                          alt={`${tool.name} icon`}
                          width={36}
                          height={36}
                          className="h-9 w-9 object-contain"
                        />
                      </div>

                      <div>
                        <p className="text-[8px] font-semibold tracking-[0.1em] text-[#151516]/70">
                          {tool.name}
                        </p>

                        <p className="mt-1 text-[7px] tracking-[0.12em] text-[#151516]/30">
                          ADOBE
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

              </div>
            </motion.section>

          </div>

        </section>

        {/* CV / Resume Modal */}
        {resumeModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#151516]/45 px-6 backdrop-blur-[4px]">

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative w-full max-w-xl bg-[#F8F8F5] p-7 md:p-9"
            >

              {/* Modal Header */}
              <div className="flex items-start justify-between">

                <div>
                  <p className="text-[8px] font-semibold tracking-[0.22em] text-[#151516]/40">
                    DOCUMENTS
                  </p>

                  <h2 className="mt-2 text-xl font-bold tracking-[-0.02em] text-[#151516]">
                    CV × RESUME
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={() => setResumeModalOpen(false)}
                  className="text-xl font-light leading-none text-[#151516]/35 transition-colors duration-300 hover:text-[#B82134]"
                  aria-label="Close modal"
                >
                  ×
                </button>

              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">

                {documents.map((document) => {
                  const selected = selectedDocuments.includes(document.id);

                  return (
                    <button
                      key={document.id}
                      type="button"
                      onClick={() => toggleDocument(document.id)}
                      className={`group relative flex items-center gap-4 border p-4 text-left transition-all duration-300 ${
                        selected
                          ? "border-[#B82134] bg-[#B82134]/[0.04]"
                          : "border-[#151516]/15 hover:border-[#B82134]/50"
                      }`}
                    >

                      {/* Document icon */}
                      <div
                        className={`flex h-12 w-10 shrink-0 items-center justify-center border text-[9px] font-bold tracking-[0.08em] transition-all duration-300 ${
                          selected
                            ? "border-[#B82134] bg-[#B82134] text-[#F8F8F5]"
                            : "border-[#151516]/15 bg-[#151516] text-[#F8F8F5]"
                        }`}
                      >
                        {document.short}
                      </div>

                      <div>
                        <p className="text-[9px] font-semibold tracking-[0.08em] text-[#151516]/75">
                          {document.title}
                        </p>

                        <p className="mt-1 text-[7px] tracking-[0.12em] text-[#151516]/35">
                          PDF DOCUMENT
                        </p>
                      </div>

                      {/* Selection indicator */}
                      <span
                        className={`absolute right-3 top-3 h-2 w-2 rounded-full border transition-all duration-300 ${
                          selected
                            ? "border-[#B82134] bg-[#B82134]"
                            : "border-[#151516]/20"
                        }`}
                      />

                    </button>
                  );
                })}

              </div>

              {/* Modal Actions */}
              <div className="mt-8 flex items-center justify-between border-t border-[#151516]/10 pt-6">

                <p className="text-[8px] tracking-[0.12em] text-[#151516]/35">
                  {selectedFiles.length === 0
                    ? "SELECT A DOCUMENT"
                    : `${selectedFiles.length} DOCUMENT${
                        selectedFiles.length > 1 ? "S" : ""
                      } SELECTED`}
                </p>

                <div className="flex gap-2">

                  <button
                    type="button"
                    onClick={handleView}
                    disabled={selectedFiles.length === 0}
                    className="border border-[#151516]/20 px-5 py-3 text-[8px] font-semibold tracking-[0.16em] text-[#151516]/65 transition-all duration-300 hover:border-[#B82134] hover:text-[#B82134] disabled:cursor-not-allowed disabled:opacity-25"
                  >
                    VIEW
                  </button>

                  <button
                    type="button"
                    onClick={handleDownload}
                    disabled={selectedFiles.length === 0}
                    className="bg-[#151516] px-5 py-3 text-[8px] font-semibold tracking-[0.16em] text-[#F8F8F5] transition-all duration-300 hover:bg-[#B82134] disabled:cursor-not-allowed disabled:opacity-25"
                  >
                    DOWNLOAD
                  </button>

                </div>

              </div>

            </motion.div>
          </div>
        )}

      </section>
    </main>
  );
}