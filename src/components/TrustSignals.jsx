import { motion } from "framer-motion";

const LOGOS = [
  { name: "SAGEBLOOM", className: "font-['General_Sans',_sans-serif] font-semibold text-sm tracking-[2.5px]" },
  { name: "Kindred & Co.", className: "font-['Instrument_Serif',_serif] text-xl" },
  { name: "atelier mora", className: "font-['General_Sans',_sans-serif] font-medium text-base tracking-[0.66px]" },
  { name: "GLOWBOX", className: "font-['General_Sans',_sans-serif] font-bold text-[15.5px] tracking-[1.86px]" },
  { name: "Fern+Field", className: "font-['General_Sans',_sans-serif] font-semibold text-base" },
  { name: "VELVETTE", className: "font-['Instrument_Serif',_serif] text-lg tracking-[1.44px]" },
];

export default function TrustSignals() {
  return (
    <section className="flex flex-col gap-6 items-center px-6 lg:px-10 pt-16 sm:pt-20 pb-24 sm:pb-32">
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="font-['General_Sans',_sans-serif] font-medium text-[#8a8177] text-[13.5px] text-center"
      >
        Built for B2C brands drowning in DMs, comments and missed calls
      </motion.p>
      <div className="flex flex-wrap gap-x-[54px] gap-y-4 items-baseline justify-center text-[#8a8177] opacity-85">
        {LOGOS.map((logo, i) => (
          <motion.span
            key={logo.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.06 }}
            viewport={{ once: true, amount: 0.2 }}
            className={logo.className}
          >
            {logo.name}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
