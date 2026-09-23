import Link from "next/link";

const navigation = [
  { label: "HOME", href: "/" },
  { label: "VIDEOGRAPHY", href: "/videography" },
  { label: "PHOTOGRAPHY", href: "/photography" },
  { label: "VIDEO EDITS", href: "/video-edits" },
  { label: "GRAPHICS DESIGN", href: "/graphics-design" },
  { label: "CONTACT ME", href: "/contact" },
  { label: "ABOUT", href: "/about" },
];

export default function Sidebar() {
  return (
    <aside
      className="
        fixed
        left-0
        top-0
        z-50
        hidden
        h-screen
        w-[270px]
        bg-[#151516]
        text-[#F8F8F5]
        lg:block
      "
    >
      <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-tl-[32px] px-8 py-10">

        {/* Japanese atmospheric background */}
        <div
          className="
            pointer-events-none
            absolute
            -right-10
            top-1/4
            rotate-90
            text-[80px]
            font-light
            leading-none
            tracking-[0.15em]
            text-[#F8F8F5]
            opacity-[0.025]
          "
        >
          編集 映像 写真
        </div>

        {/* Brand */}
        <div className="relative z-10">
          <div className="text-[13px] font-bold tracking-[0.18em]">
            ZYRELL BACULI
          </div>

          <div className="mt-2 text-[9px] tracking-[0.22em] text-[#F8F8F5]/40">
            MULTIMEDIA DESIGNER
          </div>
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex flex-col gap-5">
          {navigation.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="
                group
                relative
                flex
                items-center
                gap-3
                text-[10px]
                tracking-[0.14em]
                transition-all
                duration-300
              "
            >
              <span
                className="
                  h-[1px]
                  w-0
                  bg-[#B82134]
                  transition-all
                  duration-300
                  group-hover:w-5
                "
              />

              <span className="transition-opacity duration-300 group-hover:opacity-60">
                {item.label}
              </span>

              <span className="ml-auto text-[8px] text-[#F8F8F5]/20">
                {String(index + 1).padStart(2, "0")}
              </span>
            </Link>
          ))}
        </nav>

        {/* Bottom information */}
        <div className="relative z-10">
          <div className="mb-4 h-px w-8 bg-[#B82134]" />

          <div className="text-[8px] uppercase tracking-[0.18em] text-[#F8F8F5]/30">
            Visual Archive
          </div>

          <div className="mt-2 text-[8px] tracking-[0.12em] text-[#F8F8F5]/20">
            © {new Date().getFullYear()} ZYRELL BACULI
          </div>
        </div>

      </div>
    </aside>
  );
}