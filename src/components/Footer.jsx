import { motion } from "framer-motion";

const FOOTER_COLUMNS = [
  { title: "PRODUCT", links: ["Unified inbox", "AI agents", "CRM", "Marketing"] },
  { title: "COMPANY", links: ["About", "Careers", "Contact"] },
  { title: "RESOURCES", links: ["How it works", "Pricing", "Security", "FAQs"] },
];

export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-[rgba(27,23,19,0.09)] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-[40px] pt-14 sm:pt-20">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-8 pb-14 sm:pb-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-3.5 items-start max-w-[280px]"
          >
            <a href="#top" className="flex gap-[9px] items-center">
              <div className="bg-[#ff5c02] rounded-lg size-7 flex items-center justify-center shrink-0">
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
            <p className="font-['General_Sans',_sans-serif] text-[#5c544b] text-[14.5px] leading-[1.6]">
              One system to reach customers, run the team, and close.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-10 sm:gap-x-16 lg:gap-x-20 w-full lg:w-auto">
            {FOOTER_COLUMNS.map((col, i) => (
              <motion.div
                key={col.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 + i * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-col gap-[10px] items-start"
              >
                <p className="font-mono font-semibold text-[#8a8177] text-[10px] tracking-[1.5px] uppercase">
                  {col.title}
                </p>
                <ul className="flex flex-col gap-[10px] pt-1">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="font-['General_Sans',_sans-serif] text-[#5c544b] text-[14.5px] hover:text-[#1b1713] transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className="border-t border-[rgba(27,23,19,0.09)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pt-[21px] pb-5"
        >
          <p className="font-mono text-[#8a8177] text-[10px] tracking-[1px] uppercase">
            © 2026 Dupci · All rights reserved
          </p>
          <p className="font-mono text-[#8a8177] text-[10px] tracking-[1px] uppercase">
            Every conversation, every channel, every lead
          </p>
        </motion.div>
      </div>

      <motion.p
        aria-hidden="true"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        viewport={{ once: true, amount: 0.2 }}
        className="pointer-events-none select-none text-center font-['General_Sans',_sans-serif] font-bold text-[#1b1713] leading-[0.78] tracking-[-2px] sm:tracking-[-4px] md:tracking-[-7px] lg:tracking-[-12.15px] text-[68px] sm:text-[120px] md:text-[190px] lg:text-[270px] whitespace-nowrap pt-8 sm:pt-12 pb-2"
      >
        Dupci
      </motion.p>
    </footer>
  );
}
