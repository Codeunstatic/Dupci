import { motion } from "framer-motion";
import imgShift from "../assets/closing-cta/imgSvg.svg";
import imgTiktokBefore from "../assets/closing-cta/imgFfffff.svg";
import imgWhatsappBefore from "../assets/closing-cta/imgFfffff1.svg";
import imgInstagramBefore from "../assets/closing-cta/imgFfffff2.svg";
import imgFacebookBefore from "../assets/closing-cta/imgFfffff3.svg";
import imgGmailBefore from "../assets/closing-cta/imgEa4335.svg";
import imgPhoneBefore from "../assets/closing-cta/imgSvg1.svg";
import imgArrow from "../assets/closing-cta/imgNotoV1LeftArrow.svg";
import imgTiktokAfter from "../assets/closing-cta/imgFfffff4.svg";
import imgWhatsappAfter from "../assets/closing-cta/imgFfffff5.svg";
import imgInstagramAfter from "../assets/closing-cta/imgFfffff6.svg";
import imgFacebookAfter from "../assets/closing-cta/imgFfffff7.svg";
import imgGmailAfter from "../assets/closing-cta/imgEa4336.svg";
import imgPhoneAfter from "../assets/closing-cta/imgSvg2.svg";
import imgMergeArrow from "../assets/closing-cta/imgSvg3.svg";
import imgCheck from "../assets/closing-cta/imgSvg4.svg";

const BEFORE_CHANNELS = [
  { icon: imgTiktokBefore, alt: "TikTok", bg: "bg-[#010101]", count: "14", left: -3.64, top: 30.36, size: 53.289, rotate: -10, iconSize: 21, border: false },
  { icon: imgWhatsappBefore, alt: "WhatsApp", bg: "bg-[#25d366]", count: "8", left: 55.36, top: -0.63, size: 51.263, rotate: 7, iconSize: 21, border: false },
  { icon: imgInstagramBefore, alt: "Instagram", bg: "instagram-gradient", count: "23", left: 117.72, top: 27.72, size: 50.556, rotate: -6, iconSize: 21, border: false },
  { icon: imgFacebookBefore, alt: "Facebook", bg: "bg-[#0866ff]", count: "6", left: 187.02, top: -2.98, size: 51.954, rotate: 8, iconSize: 21, border: false },
  { icon: imgGmailBefore, alt: "Gmail", bg: "bg-white", count: "5", left: 33.72, top: 93.72, size: 50.556, rotate: 6, iconSize: 21, border: true },
  { icon: imgPhoneBefore, alt: "Phone", bg: "bg-[#3e3a36]", count: "3", left: 146.69, top: 88.68, size: 52.63, rotate: -9, iconSize: 20, border: false },
];

const AFTER_CHANNELS = [
  { icon: imgTiktokAfter, alt: "TikTok", bg: "bg-[#010101]" },
  { icon: imgWhatsappAfter, alt: "WhatsApp", bg: "bg-[#25d366]" },
  { icon: imgInstagramAfter, alt: "Instagram", bg: "instagram-gradient" },
  { icon: imgFacebookAfter, alt: "Facebook", bg: "bg-[#0866ff]" },
  { icon: imgGmailAfter, alt: "Gmail", bg: "bg-white" },
  { icon: imgPhoneAfter, alt: "Phone", bg: "bg-[#3e3a36]" },
];

const instagramGradientStyle = {
  backgroundImage:
    "linear-gradient(135deg, #fdcb52 0%, #fda045 13.75%, #fd7438 27.5%, #fd492a 41.25%, #fd3324 48.125%, #fd1d1d 55%, #df2443 66.25%, #c02c69 77.5%, #a2338e 88.75%, #833ab4 100%)",
};

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

export default function ClosingCta() {
  return (
    <section className="bg-[#f3eee3] flex flex-col items-center px-6 sm:px-10 lg:px-[160px] py-16 sm:py-20 lg:py-[130px]">
      <motion.div
        {...reveal}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="bg-white border border-[rgba(27,23,19,0.16)] flex flex-col gap-10 sm:gap-[52px] items-center pb-10 pt-12 sm:pb-[61px] sm:pt-[65px] px-6 sm:px-10 lg:px-[57px] rounded-[24px] sm:rounded-[32px] w-full"
      >
        <div className="flex flex-col gap-6 items-center justify-center w-full max-w-[792px]">
          <motion.div
            {...reveal}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="bg-[rgba(27,23,19,0.03)] border border-[rgba(27,23,19,0.16)] flex gap-1.5 items-center justify-center pl-[11px] pr-[14px] py-[7px] rounded-[100px] shadow-[0px_1px_2px_0px_rgba(27,23,19,0.03),0px_3px_8px_0px_rgba(27,23,19,0.04)] shrink-0"
          >
            <img alt="" className="size-[13px]" src={imgShift} />
            <span className="font-medium text-[#5c544b] text-[12.5px] leading-5 whitespace-nowrap">The shift</span>
          </motion.div>

          <motion.h2
            {...reveal}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="font-semibold text-[#1b1713] text-[28px] sm:text-[34px] lg:text-[42px] text-center leading-[1.15] lg:leading-[46px] tracking-[-1.05px]"
          >
            Same channels. Totally{" "}
            <span className="italic font-medium text-[#ff5a38]">different outcome</span>
          </motion.h2>

          <motion.a
            href="#get-started"
            {...reveal}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="relative flex items-center justify-center px-[30px] py-[15px] rounded-[100px] bg-[#ff5a38] shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.25)]"
          >
            <span className="font-semibold text-[15.5px] text-white leading-[24.8px] whitespace-nowrap">
              Get started
            </span>
          </motion.a>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-6 items-center justify-center w-full">
          <div className="relative bg-[#faf7f0] border border-[rgba(27,23,19,0.09)] flex flex-col items-center gap-8 lg:gap-0 lg:h-[347px] w-full max-w-[420px] rounded-[20px] px-7 py-9 lg:p-0">
            <p className="font-medium text-[#8a8177] text-[11px] text-center tracking-[1.54px] uppercase lg:absolute lg:left-7 lg:right-7 lg:top-9">
              BEFORE Dupci
            </p>

            <div className="hidden lg:block relative h-[150px] w-[247px] lg:mt-[85.19px]">
              {BEFORE_CHANNELS.map((chip, i) => (
                <motion.div
                  key={chip.alt}
                  className="absolute flex items-center justify-center"
                  style={{ left: chip.left, top: chip.top, width: chip.size, height: chip.size }}
                  initial={{ opacity: 0, scale: 0.5, rotate: chip.rotate * 3 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.15 + i * 0.08 }}
                  viewport={{ once: true, amount: 0.4 }}
                >
                  <div className="flex-none" style={{ transform: `rotate(${chip.rotate}deg)` }}>
                    <div
                      className={`${chip.bg !== "instagram-gradient" ? chip.bg : ""} ${
                        chip.border ? "border border-[rgba(27,23,19,0.1)] p-px" : ""
                      } drop-shadow-[0px_4px_7px_rgba(27,23,19,0.12)] flex items-center justify-center relative rounded-[13px] size-[46px]`}
                      style={chip.bg === "instagram-gradient" ? instagramGradientStyle : undefined}
                    >
                      <img alt={chip.alt} style={{ width: chip.iconSize, height: chip.iconSize }} src={chip.icon} />
                      <div className="absolute bg-[#b04b37] flex items-center justify-center min-w-[19px] px-[5px] h-[19px] right-[-7px] rounded-[10px] top-[-7px] shadow-[0px_0px_0px_2px_#faf7f0]">
                        <span className="font-bold text-[9.5px] text-center text-white leading-[9.5px] whitespace-nowrap">
                          {chip.count}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex lg:hidden flex-wrap items-center justify-center gap-3">
              {BEFORE_CHANNELS.map((chip, i) => (
                <motion.div
                  key={chip.alt}
                  className="relative flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18, delay: i * 0.06 }}
                  viewport={{ once: true, amount: 0.4 }}
                >
                  <div
                    className={`${chip.bg !== "instagram-gradient" ? chip.bg : ""} ${
                      chip.border ? "border border-[rgba(27,23,19,0.1)] p-px" : ""
                    } drop-shadow-[0px_4px_7px_rgba(27,23,19,0.12)] flex items-center justify-center relative rounded-[13px] size-[42px]`}
                    style={chip.bg === "instagram-gradient" ? instagramGradientStyle : undefined}
                  >
                    <img alt={chip.alt} className="size-[19px]" src={chip.icon} />
                    <div className="absolute bg-[#b04b37] flex items-center justify-center min-w-[17px] px-[4px] h-[17px] right-[-6px] rounded-[9px] top-[-6px] shadow-[0px_0px_0px_2px_#faf7f0]">
                      <span className="font-bold text-[8.5px] text-center text-white leading-[8.5px] whitespace-nowrap">
                        {chip.count}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="font-medium text-[#5c544b] text-[16px] text-center leading-6 max-w-[255px] lg:absolute lg:left-7 lg:right-7 lg:top-[265.59px]">
              Scattered across six apps. Most of it missed or answered too late.
            </p>
          </div>

          <motion.div
            className="flex items-center justify-center shrink-0"
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.55 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.img
              alt=""
              className="size-8 -rotate-90 lg:rotate-180"
              src={imgArrow}
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          <div className="relative bg-[#faf7f0] border border-[rgba(27,23,19,0.09)] flex flex-col items-center gap-8 lg:gap-0 lg:h-[347px] w-full max-w-[421px] rounded-[20px] px-7 py-9 lg:p-0">
            <p className="font-medium text-[#8a8177] text-[11px] text-center tracking-[1.54px] uppercase lg:absolute lg:left-7 lg:right-7 lg:top-9">
              WITH Dupci
            </p>

            <div className="flex items-center justify-center flex-wrap gap-x-0 gap-y-3 lg:mt-[85.48px]">
              <div className="flex items-center">
                {AFTER_CHANNELS.map((chip, i) => (
                  <motion.div
                    key={chip.alt}
                    className={`${chip.bg !== "instagram-gradient" ? chip.bg : ""} border-2 border-[#faf7f0] drop-shadow-[0px_3px_5px_rgba(27,23,19,0.12)] flex items-center justify-center p-[2.5px] rounded-[12px] shrink-0 size-[42px] ${
                      i > 0 ? "-ml-[13px]" : ""
                    }`}
                    style={chip.bg === "instagram-gradient" ? instagramGradientStyle : undefined}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: 0.65 + i * 0.07 }}
                    viewport={{ once: true, amount: 0.4 }}
                  >
                    <img alt={chip.alt} className="size-[19px]" src={chip.icon} />
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="flex items-center justify-center px-4 py-1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 1.05 }}
                viewport={{ once: true, amount: 0.4 }}
              >
                <img alt="" className="size-[18px]" src={imgMergeArrow} />
              </motion.div>

              <motion.div
                className="bg-[#ff5a38] relative flex items-center justify-center rounded-[14px] size-14 shrink-0"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15, delay: 1.15 }}
                viewport={{ once: true, amount: 0.4 }}
              >
                <svg viewBox="0 0 16 16" fill="none" className="size-[26px]">
                  <path
                    d="M13 8a5 5 0 1 1-1.6-3.65M13 2.2v3.4h-3.4"
                    stroke="white"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <motion.div
                  className="absolute bg-[#2f8f6b] border-2 border-[#faf7f0] flex items-center justify-center p-[2.5px] rounded-[11px] size-[22px] bottom-[-4px] right-[-4px]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 14, delay: 1.35 }}
                  viewport={{ once: true, amount: 0.4 }}
                >
                  <img alt="" className="size-3" src={imgCheck} />
                </motion.div>
              </motion.div>
            </div>

            <p className="font-medium text-[#1b1713] text-[16px] text-center leading-6 max-w-[222px] lg:absolute lg:left-7 lg:right-7 lg:top-[265.59px]">
              One system. Every comment answered in seconds.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
