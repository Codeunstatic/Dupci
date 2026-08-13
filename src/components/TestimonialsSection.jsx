import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import imgFeatured from "../assets/testimonials/imgImage.jpg";
import imgAvatarJonah from "../assets/testimonials/imgImage1.jpg";
import imgAvatarPriya from "../assets/testimonials/imgImage2.jpg";
import imgAvatarMarcus from "../assets/testimonials/imgImage3.jpg";
import imgBadge from "../assets/testimonials/imgSvg.svg";
import imgStarLarge from "../assets/testimonials/imgSvg1.svg";
import imgChevronLeft from "../assets/testimonials/imgSvg2.svg";
import imgChevronRight from "../assets/testimonials/imgSvg3.svg";
import imgStarSmall from "../assets/testimonials/imgSvg4.svg";

const MINI_TESTIMONIALS = [
  {
    quote:
      "“The second someone says ‘how much’ in a comment, they’re already a qualified lead in our pipeline. Our sales team stopped doing data entry entirely.”",
    name: "Jonah Reyes",
    role: "Norrend Home",
    avatar: imgAvatarJonah,
    avatarClass: "absolute h-[150%] left-0 max-w-none top-[-25%] w-full",
  },
  {
    quote:
      "“The AI calls sounded so natural our customers didn’t realize it wasn’t a person until we told them. Dupci beat our own team.”",
    name: "Priya Nair",
    role: "Quiet Coast",
    avatar: imgAvatarPriya,
    avatarClass: "absolute h-[150%] left-0 max-w-none top-[-25%] w-full",
  },
  {
    quote:
      "“We used to have five tabs open just to keep up with comments and messages. Now it’s one inbox, and nothing gets missed.”",
    name: "Marcus Webb",
    role: "Fieldstone Supply",
    avatar: imgAvatarMarcus,
    avatarClass: "absolute h-full left-[-24.63%] max-w-none top-0 w-[149.25%]",
  },
];

const FEATURED_SLIDES = [
  {
    quote:
      "“We were missing half our TikTok comments before they even got seen. Now every single one gets a reply in seconds — and most of them turn into a DM.”",
    name: "Amara Osei",
    role: "Founder, Bloomstead",
    image: imgFeatured,
    imageClass: "absolute h-full left-[-12.18%] max-w-none top-0 w-[124.35%]",
  },
  ...MINI_TESTIMONIALS.map((t) => ({
    quote: t.quote,
    name: t.name,
    role: t.role,
    image: t.avatar,
    imageClass: "absolute inset-0 size-full object-cover",
  })),
];

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

export default function TestimonialsSection() {
  const [[index, direction], setSlide] = useState([0, 1]);
  const slide = FEATURED_SLIDES[index];

  const paginate = (dir) => {
    setSlide(([i]) => [(i + dir + FEATURED_SLIDES.length) % FEATURED_SLIDES.length, dir]);
  };

  return (
    <section className="flex flex-col items-center justify-center px-6 sm:px-10 lg:px-[120px] py-16 lg:py-[130px] w-full">
      <div className="flex flex-col gap-6 items-center max-w-[1200px] px-0 sm:px-10 w-full">
        <div className="flex flex-col gap-5 items-center max-w-[600px] w-full">
          <motion.div
            {...reveal}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-[rgba(27,23,19,0.03)] border border-[rgba(27,23,19,0.16)] flex gap-1.5 items-center justify-center pl-[11px] pr-3.5 py-[7px] rounded-full shadow-[0px_1px_2px_0px_rgba(27,23,19,0.03),0px_3px_8px_0px_rgba(27,23,19,0.04)] shrink-0"
          >
            <img alt="" className="h-[13px] w-5" src={imgBadge} />
            <span className="font-['General_Sans',_sans-serif] font-medium text-[#5c544b] text-[12.5px] whitespace-nowrap">
              Testimonials
            </span>
          </motion.div>
          <motion.h2
            {...reveal}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="font-['General_Sans',_sans-serif] font-semibold text-[#1b1713] text-[32px] sm:text-[44px] lg:text-[54px] leading-[1.15] tracking-[-1.15px] text-center"
          >
            {"Hear from our "}
            <span className="font-medium italic text-[#ff5a38]">satisfied customers</span>
          </motion.h2>
        </div>

        <motion.div
          {...reveal}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="bg-white border border-[rgba(27,23,19,0.09)] grid grid-cols-1 md:grid-cols-[0.82fr_1.18fr] max-w-[1120px] overflow-hidden rounded-[24px] shadow-[0px_1px_2px_0px_rgba(27,23,19,0.04),0px_8px_24px_0px_rgba(27,23,19,0.07)] shrink-0 w-full"
        >
          <div className="relative order-1 md:order-none h-[260px] sm:h-[340px] md:h-[380px] w-full">
            <div className="absolute inset-0 overflow-hidden">
              <AnimatePresence mode="popLayout" initial={false} custom={direction}>
                <motion.img
                  key={slide.name}
                  alt={slide.name}
                  className={slide.imageClass}
                  src={slide.image}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                />
              </AnimatePresence>
            </div>
          </div>
          <div className="order-2 md:order-none flex flex-col items-start justify-between gap-6 px-6 sm:px-10 lg:px-12 py-8 lg:py-11">
            <Stars icon={imgStarLarge} size="size-[19px]" />
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={slide.name}
                custom={direction}
                initial={{ opacity: 0, x: 24 * direction }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 * direction }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="flex flex-col gap-6 items-start"
              >
                <p className="font-['General_Sans',_sans-serif] text-[#1b1713] text-[18px] sm:text-[21px] lg:text-[23px] leading-[1.45] tracking-[-0.115px]">
                  {slide.quote}
                </p>
                <div className="flex flex-col items-start gap-0.5">
                  <p className="font-['General_Sans',_sans-serif] font-semibold text-[#1b1713] text-base">
                    {slide.name}
                  </p>
                  <p className="font-['General_Sans',_sans-serif] text-[#8a8177] text-[13.5px]">
                    {slide.role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="flex gap-2.5 items-center">
              <motion.button
                type="button"
                aria-label="Previous testimonial"
                onClick={() => paginate(-1)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="border border-[rgba(27,23,19,0.16)] flex items-center justify-center rounded-full size-[38px] shrink-0 cursor-pointer"
              >
                <img alt="" className="size-[15px]" src={imgChevronLeft} />
              </motion.button>
              <motion.button
                type="button"
                aria-label="Next testimonial"
                onClick={() => paginate(1)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="bg-[#ff5a38] border border-[#ff5a38] flex items-center justify-center rounded-full size-[38px] shrink-0 cursor-pointer"
              >
                <img alt="" className="size-[15px]" src={imgChevronRight} />
              </motion.button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1120px] w-full">
          {MINI_TESTIMONIALS.map((t, i) => (
            <MiniTestimonial key={t.name} {...t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Stars({ icon, size }) {
  return (
    <div className="flex gap-[3px] items-start">
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.img
          key={i}
          alt=""
          className={size}
          src={icon}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 380, damping: 16, delay: 0.3 + i * 0.06 }}
          viewport={{ once: true, amount: 0.4 }}
        />
      ))}
    </div>
  );
}

function MiniTestimonial({ quote, name, role, avatar, avatarClass, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 + index * 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -4 }}
      className="bg-white border border-[rgba(27,23,19,0.09)] hover:shadow-[0px_10px_28px_rgba(27,23,19,0.08)] transition-shadow duration-300 flex flex-col gap-[18px] items-start px-6 sm:px-[27px] py-6 rounded-[18px]"
    >
      <p className="font-['General_Sans',_sans-serif] text-[#5c544b] text-sm leading-[1.55]">
        {quote}
      </p>
      <div className="flex items-center justify-between w-full gap-3">
        <div className="flex gap-2.5 items-center min-w-0">
          <div className="relative rounded-full shrink-0 size-[34px] overflow-hidden">
            <img alt={name} className={avatarClass} src={avatar} />
          </div>
          <div className="flex flex-col items-start min-w-0">
            <p className="font-['General_Sans',_sans-serif] font-semibold text-[#1b1713] text-[13px] whitespace-nowrap">
              {name}
            </p>
            <p className="font-['General_Sans',_sans-serif] text-[#8a8177] text-[11.5px] whitespace-nowrap">
              {role}
            </p>
          </div>
        </div>
        <Stars icon={imgStarSmall} size="size-3" />
      </div>
    </motion.div>
  );
}
