import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

const LINKS = ["Product", "Pricing", "How it works", "Why Dupci", "FAQ"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 backdrop-blur-xl transition-[background-color,box-shadow] duration-300 ${
        scrolled
          ? "bg-[#fffefb]/80 shadow-[0px_8px_20px_rgba(27,23,19,0.05)]"
          : "bg-[#fffefb]/50"
      }`}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between h-[80px] px-6 lg:px-20">
        <a href="#top" className="flex gap-[9px] items-center shrink-0">
          <div className="bg-[#ff5c02] rounded-lg size-7 flex items-center justify-center">
            <svg viewBox="0 0 16 16" fill="none" className="size-[15px]">
              <path
                d="M13 8a5 5 0 1 1-1.6-3.65M13 2.2v3.4h-3.4"
                stroke="white"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="font-['General_Sans',_sans-serif] font-bold text-[#1b1713] text-lg tracking-[-0.36px]">
            Dupci
          </span>
        </a>

        <nav className="hidden lg:flex gap-9 items-center">
          {LINKS.map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase().replace(/\s+/g, "-")}`}
              className="nav-link relative font-['General_Sans',_sans-serif] font-medium text-[#5c544b] text-[15px] hover:text-[#1b1713] transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1.5px] after:w-full after:bg-[#1b1713] after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden sm:flex gap-2.5 items-center shrink-0">
          <motion.a
            href="#sign-in"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="nav-cta flex items-center px-[22px] py-[10px] rounded-full font-['General_Sans',_sans-serif] font-semibold text-[#1b1713] text-sm shadow-[inset_0px_0px_0px_1.5px_rgba(27,23,19,0.16)]"
          >
            Sign in
          </motion.a>
          <motion.a
            href="#get-started"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="nav-cta flex items-center px-[22px] py-[10px] rounded-full bg-[#ff5a38] font-['General_Sans',_sans-serif] font-semibold text-white text-sm shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.25)]"
          >
            Get started
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
}
