import { motion } from "framer-motion";
import imgSvg from "../assets/journey/imgSvg.svg";

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

function PulseDot({ className }) {
  return (
    <motion.div
      className={className}
      animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="bg-[rgba(255,255,255,0)] rounded-[5px] shadow-[0px_0px_0px_5px_rgba(255,90,56,0.15)] size-[10px]" />
    </motion.div>
  );
}

function Waveform({ heights, barClass }) {
  return (
    <>
      {heights.map((h, i) => (
        <motion.div
          key={i}
          className={barClass}
          style={{ height: h }}
          animate={{ scaleY: [1, 0.55, 1.15, 1] }}
          transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut", delay: i * 0.12 }}
        />
      ))}
    </>
  );
}
import imgFfffff from "../assets/journey/imgFfffff.svg";
import imgVector373 from "../assets/journey/imgVector373.svg";
import imgVector374 from "../assets/journey/imgVector374.svg";
import imgVector376 from "../assets/journey/imgVector376.svg";
import imgVector377 from "../assets/journey/imgVector377.svg";
import imgVector378 from "../assets/journey/imgVector378.svg";
import imgVector379 from "../assets/journey/imgVector379.svg";
import imgVector380 from "../assets/journey/imgVector380.svg";
import imgVector381 from "../assets/journey/imgVector381.svg";
import imgVector382 from "../assets/journey/imgVector382.svg";
import imgVector383 from "../assets/journey/imgVector383.svg";
import imgSvg1 from "../assets/journey/imgSvg1.svg";
import imgSvg2 from "../assets/journey/imgSvg2.svg";
import imgSvg3 from "../assets/journey/imgSvg3.svg";
import imgSvg4 from "../assets/journey/imgSvg4.svg";
import imgSvg5 from "../assets/journey/imgSvg5.svg";

export default function JourneySection() {
  return (
    <section className="relative w-full bg-[#faf7f0] overflow-hidden px-6 py-16 sm:px-10 sm:py-20 lg:px-[120px] lg:py-[130px]">
      <div className="absolute bg-[#fffdfa] inset-[0_0_0.27px_0] rounded-[8px]" />

      <div className="relative flex flex-col gap-16 lg:gap-20 items-center max-w-[1200px] mx-auto w-full">
        {/* header */}
        <div className="flex flex-col gap-4 items-center max-w-[640px] w-full">
          <motion.div
            {...reveal}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-[rgba(27,23,19,0.03)] border border-[rgba(27,23,19,0.16)] flex gap-1.5 items-center justify-center pl-[11px] pr-[14px] py-[7px] rounded-full shadow-[0px_1px_2px_0px_rgba(27,23,19,0.03),0px_3px_8px_0px_rgba(27,23,19,0.04)]"
          >
            <img alt="" className="size-[13px]" src={imgSvg} />
            <span className="font-['General_Sans',_sans-serif] font-medium text-[#5c544b] text-[12.5px] whitespace-nowrap">
              How it works
            </span>
          </motion.div>
          <motion.h2
            {...reveal}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="font-['General_Sans',_sans-serif] font-semibold text-[#1b1713] text-[32px] sm:text-[42px] lg:text-[54px] text-center tracking-[-1.35px] leading-[1.12]"
          >
            From comment to
            <br />
            customer. Automatically
          </motion.h2>
          <motion.p
            {...reveal}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="font-['General_Sans',_sans-serif] font-normal text-[#5c544b] text-[15px] sm:text-[18px] text-center leading-[1.6] max-w-[438px]"
          >
            Watch one TikTok comment travel through the entire system, in minutes, not days.
          </motion.p>
        </div>

        {/* desktop pixel-precise diagram */}
        <div className="hidden xl:flex flex-col gap-[75px] items-center w-[1278px]">
          {/* row 1 */}
          <div className="relative w-[1278px] h-[418px]">
            {/* connector lines (behind cards) */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true, amount: 0.2 }}
              className="absolute left-[5px] top-0 w-[1276px] h-[422px] pointer-events-none"
            >
              <img alt="" className="block max-w-none size-full" src={imgVector373} />
            </motion.div>
            <PulseDot className="absolute bg-[#ff5a38] left-0 top-[413px] rounded-[5px] size-[10px]" />
            <div className="absolute left-[424.5px] top-[76.5px] w-px h-[181.5px] pointer-events-none">
              <img alt="" className="block max-w-none w-full h-full" src={imgVector376} />
            </div>
            <div className="absolute left-[860.5px] top-[81.5px] w-px h-[228px] flex items-center justify-center pointer-events-none">
              <img alt="" className="block max-w-none w-full h-full rotate-180" src={imgVector377} />
            </div>
            <div className="absolute left-[1281px] top-[156px] w-px h-[213px] pointer-events-none">
              <img alt="" className="block max-w-none w-full h-full" src={imgVector378} />
            </div>
            <div className="absolute left-[5px] top-[225.5px] w-px h-[192.5px] pointer-events-none">
              <img alt="" className="block max-w-none w-full h-full" src={imgVector379} />
            </div>

            <div className="absolute left-[16px] top-[10px] w-[1237px] h-[398px]">
              <motion.div
                {...reveal}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute content-stretch flex flex-col gap-[16px] h-[357px] items-end left-[0.5px] top-[-0.01px] w-[395px]"
              >
                <div className="bg-white border border-[rgba(27,23,19,0.08)] flex flex-col h-[219px] items-start overflow-clip p-px relative rounded-[18px] shadow-[0px_2px_6px_0px_rgba(27,23,19,0.04),0px_22px_46px_0px_rgba(27,23,19,0.09)] shrink-0 w-full">
                  <div className="border-b border-[rgba(27,23,19,0.09)] flex gap-[10px] items-center pb-[15px] pt-[14px] px-[18px] w-full">
                    <div className="bg-[#010101] flex items-center justify-center rounded-[6px] shrink-0 size-[22px]">
                      <img alt="" className="size-[12px]" src={imgFfffff} />
                    </div>
                    <span className="font-['General_Sans',_sans-serif] font-semibold text-[#1b1713] text-[13px] whitespace-nowrap">
                      TikTok · comments
                    </span>
                    <span className="ml-auto font-['General_Sans',_sans-serif] font-semibold text-[#8a8177] text-[9.5px] tracking-[0.665px] uppercase whitespace-nowrap">
                      LIVE
                    </span>
                  </div>
                  <div className="flex flex-col gap-[10px] items-start px-[22px] py-[20px] w-full">
                    <div className="flex gap-[12px] items-center w-full">
                      <div
                        className="flex items-center justify-center rounded-[18px] shrink-0 size-[36px]"
                        style={{ backgroundImage: "linear-gradient(135deg, rgb(123, 108, 246) 0%, rgb(78, 168, 222) 100%)" }}
                      >
                        <span className="font-['General_Sans',_sans-serif] font-semibold text-[13px] text-center text-white">MK</span>
                      </div>
                      <div className="flex flex-col gap-[4px] items-start">
                        <span className="font-['General_Sans',_sans-serif] font-semibold text-[#1b1713] text-[15px]">@mia.k</span>
                        <span className="font-['General_Sans',_sans-serif] font-normal text-[#8a8177] text-[12.5px]">just now</span>
                      </div>
                    </div>
                    <p className="font-['General_Sans',_sans-serif] font-semibold text-[#1b1713] text-[21px] tracking-[-0.42px] w-full">
                      “how much is this?”
                    </p>
                    <div className="flex gap-[18px] items-center w-full">
                      <span className="font-['General_Sans',_sans-serif] font-normal text-[#fe2c55] text-[13px] whitespace-nowrap">♥ 12</span>
                      <span className="font-['General_Sans',_sans-serif] font-normal text-[#8a8177] text-[13px] whitespace-nowrap">Reply</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[11px] h-[147px] items-start justify-center px-[8px] w-full">
                  <div className="flex flex-col items-center justify-center rounded-[8px] w-[42px]">
                    <span className="font-['General_Sans',_sans-serif] font-bold text-[#1b1713] text-[26px] tracking-[-0.26px]">01</span>
                  </div>
                  <span className="font-['General_Sans',_sans-serif] font-semibold text-[#1b1713] text-[20px]">The comment</span>
                  <p className="font-['General_Sans',_sans-serif] font-normal text-[#5c544b] text-[16px] leading-[24px]">
                    A question lands on your latest TikTok. Normally it would sit unread for hours, or forever.
                  </p>
                </div>
              </motion.div>

              <motion.div
                {...reveal}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                className="absolute flex flex-col h-[398px] items-start justify-between left-[423.5px] top-[-0.01px] w-[406px]"
              >
                <div className="flex flex-col gap-[11px] h-[124px] items-start px-[8px] w-full">
                  <span className="font-['General_Sans',_sans-serif] font-bold text-[#1b1713] text-[26px] tracking-[-0.26px]">02</span>
                  <span className="font-['General_Sans',_sans-serif] font-semibold text-[#1b1713] text-[20px]">AI replies publicly</span>
                  <p className="font-['General_Sans',_sans-serif] font-normal text-[#5c544b] text-[16px] leading-[24px] whitespace-pre-wrap">
                    {`The agent answers on the post, every other viewer sees the price too. Zero comments missed.`}
                  </p>
                </div>
                <div className="bg-white border border-[rgba(27,23,19,0.08)] flex flex-col h-[239px] items-start overflow-clip p-px relative rounded-[18px] shadow-[0px_-2px_6px_0px_rgba(27,23,19,0.04),0px_22px_46px_0px_rgba(27,23,19,0.09)] w-full">
                  <div className="border-b border-[rgba(27,23,19,0.09)] flex gap-[10px] items-center pb-[15px] pt-[14px] px-[18px] w-full">
                    <div className="bg-[#010101] flex items-center justify-center rounded-[6px] shrink-0 size-[22px]">
                      <img alt="" className="size-[12px]" src={imgFfffff} />
                    </div>
                    <span className="font-['General_Sans',_sans-serif] font-semibold text-[#1b1713] text-[13px] whitespace-nowrap">Public reply</span>
                    <span className="ml-auto font-['General_Sans',_sans-serif] font-semibold text-[#8a8177] text-[9.5px] tracking-[0.665px] uppercase whitespace-nowrap">AUTO</span>
                  </div>
                  <div className="flex flex-col gap-[16px] items-start px-[22px] py-[20px] w-full">
                    <div className="flex gap-[10px] items-start w-full">
                      <div
                        className="flex items-center justify-center rounded-[14px] shrink-0 size-[28px]"
                        style={{ backgroundImage: "linear-gradient(135deg, rgb(123, 108, 246) 0%, rgb(78, 168, 222) 100%)" }}
                      >
                        <span className="font-['General_Sans',_sans-serif] font-semibold text-[10px] text-center text-white">MK</span>
                      </div>
                      <div className="flex flex-col gap-[2px] items-start">
                        <span className="font-['General_Sans',_sans-serif] font-bold text-[#1b1713] text-[13.5px]">@mia.k</span>
                        <span className="font-['General_Sans',_sans-serif] font-normal text-[#5c544b] text-[14px]">how much is this?</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-start pl-[38px] w-full">
                      <div className="flex gap-[10px] items-start pl-[14px] w-full">
                        <div
                          className="flex items-center justify-center rounded-[14px] shrink-0 size-[28px]"
                          style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 90, 56) 0%, rgb(255, 138, 92) 100%)" }}
                        >
                          <span className="font-['General_Sans',_sans-serif] font-semibold text-[10px] text-center text-white">B</span>
                        </div>
                        <div className="flex flex-col gap-[2px] items-start">
                          <div className="flex gap-[6px] items-center">
                            <span className="font-['General_Sans',_sans-serif] font-bold text-[#1b1713] text-[13.5px] whitespace-nowrap">yourbrand</span>
                            <span className="bg-[#ffede8] flex items-start px-[8px] py-[2px] rounded-[20px] shrink-0">
                              <span className="font-['General_Sans',_sans-serif] font-semibold text-[#e8492a] text-[9px] tracking-[0.18px] whitespace-nowrap">AI Agent</span>
                            </span>
                          </div>
                          <p className="font-['General_Sans',_sans-serif] font-normal text-[#5c544b] text-[14px] leading-[21px]">
                            Hey Mia! It’s $49 with free shipping this week — just slid into your DMs with the details 🧡
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                {...reveal}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                className="absolute flex flex-col gap-[16px] items-start left-[856.5px] top-[-0.01px] w-[398px]"
              >
                <div className="bg-white border border-[rgba(27,23,19,0.08)] flex flex-col h-[258px] items-start overflow-clip p-px relative rounded-[18px] shadow-[0px_2px_6px_0px_rgba(27,23,19,0.04),0px_22px_46px_0px_rgba(27,23,19,0.09)] w-full">
                  <div className="border-b border-[rgba(27,23,19,0.09)] flex gap-[10px] items-center pb-[15px] pt-[14px] px-[18px] w-full">
                    <div className="bg-[#010101] flex items-center justify-center rounded-[6px] shrink-0 size-[22px]">
                      <img alt="" className="size-[12px]" src={imgFfffff} />
                    </div>
                    <span className="font-['General_Sans',_sans-serif] font-semibold text-[#1b1713] text-[13px] whitespace-nowrap">Direct messages</span>
                    <span className="ml-auto font-['General_Sans',_sans-serif] font-semibold text-[#8a8177] text-[9.5px] tracking-[0.665px] uppercase whitespace-nowrap">THREAD</span>
                  </div>
                  <div className="flex flex-col gap-[10px] items-start px-[18px] py-[20px] w-full">
                    <div className="flex flex-col items-center w-full">
                      <span className="font-['General_Sans',_sans-serif] font-semibold text-[#8a8177] text-[10.5px] tracking-[0.525px] uppercase whitespace-nowrap">TODAY, 14:02</span>
                    </div>
                    <div className="flex flex-col items-end w-full">
                      <div className="bg-[#1b1713] max-w-[282px] relative rounded-bl-[16px] rounded-br-[5px] rounded-tl-[16px] rounded-tr-[16px] w-[253.1px] px-[15px] py-[13px]">
                        <p className="font-['General_Sans',_sans-serif] font-normal text-[#f5f0e6] text-[14px] leading-[21px]">
                          Hey Mia! Here’s the full rundown: the Everyday Set is $49, ships in 48h, 30-day returns.
                        </p>
                        <span className="mt-1 inline-flex bg-[rgba(255,90,56,0.2)] px-[8px] py-[2px] rounded-[20px]">
                          <span className="font-['General_Sans',_sans-serif] font-semibold text-[#ffb49e] text-[9px] tracking-[0.18px] whitespace-nowrap">AI</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-start w-full">
                      <div className="bg-[#f3eee3] max-w-[282px] px-[15px] py-[11px] rounded-bl-[5px] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px]">
                        <span className="font-['General_Sans',_sans-serif] font-normal text-[#1b1713] text-[14px] whitespace-nowrap">
                          ooh do you have it in sage green?
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[11px] h-[124px] items-start justify-center px-[24px] w-full">
                  <span className="font-['General_Sans',_sans-serif] font-bold text-[#1b1713] text-[26px] tracking-[-0.26px]">03</span>
                  <span className="font-['General_Sans',_sans-serif] font-semibold text-[#1b1713] text-[20px]">Slides into their DM</span>
                  <p className="font-['General_Sans',_sans-serif] font-normal text-[#5c544b] text-[16px] leading-[24px]">
                    The conversation moves private. The AI answers questions naturally, like your best support rep.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* row 2 */}
          <div className="relative w-[1278px] h-[422px]">
            {/* connector lines (behind cards) */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true, amount: 0.2 }}
              className="absolute left-0 top-0 w-[1273px] h-[413px] scale-y-[-1] pointer-events-none"
            >
              <img alt="" className="block max-w-none size-full" src={imgVector374} />
            </motion.div>
            <div className="absolute left-0 top-[61px] w-px h-[193px] scale-y-[-1] pointer-events-none">
              <img alt="" className="block max-w-none w-full h-full" src={imgVector380} />
            </div>
            <div className="absolute left-[415px] top-[149px] w-px h-[174px] scale-y-[-1] pointer-events-none">
              <img alt="" className="block max-w-none w-full h-full" src={imgVector381} />
            </div>
            <div className="absolute left-[851.5px] top-[85px] w-px h-[171px] pointer-events-none">
              <img alt="" className="block max-w-none w-full h-full" src={imgVector382} />
            </div>
            <div className="absolute left-[1273px] top-[6px] w-px h-[260px] scale-y-[-1] pointer-events-none">
              <img alt="" className="block max-w-none w-full h-full" src={imgVector383} />
            </div>
            <PulseDot className="absolute bg-[#ff5a38] left-[1268px] top-[2px] rounded-[5px] size-[10px]" />

            <div className="flex gap-[18px] items-end justify-center relative left-[10px] top-[6px] w-[1258px]">
              <motion.div
                {...reveal}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-[16px] items-start w-[394px]"
              >
                <div className="flex flex-col gap-[11px] h-[138px] items-start justify-center px-[24px] w-full">
                  <span className="font-['General_Sans',_sans-serif] font-bold text-[#191919] text-[26px] tracking-[-0.26px]">04</span>
                  <span className="font-['General_Sans',_sans-serif] font-semibold text-[#1b1713] text-[20px]">Logged. Qualified. Handed off.</span>
                  <p className="font-['General_Sans',_sans-serif] font-normal text-[#5c544b] text-[16px] leading-[24px]">
                    Mia is now a lead with full context attached. High-intent buyers surface straight to sales.
                  </p>
                </div>
                <div className="bg-white border border-[rgba(27,23,19,0.08)] flex flex-col h-[236.8px] items-start overflow-clip p-px relative rounded-[18px] shadow-[0px_2px_6px_0px_rgba(27,23,19,0.04),0px_22px_46px_0px_rgba(27,23,19,0.09)] w-full">
                  <div className="border-b border-[rgba(27,23,19,0.09)] flex gap-[10px] items-center pb-[15px] pt-[14px] px-[18px] w-full">
                    <div className="bg-[#1b1713] flex items-center justify-center rounded-[6px] shrink-0 size-[22px]">
                      <img alt="" className="size-[12px]" src={imgSvg1} />
                    </div>
                    <span className="font-['General_Sans',_sans-serif] font-semibold text-[#1b1713] text-[13px] whitespace-nowrap">CRM · Pipeline</span>
                    <span className="ml-auto font-['General_Sans',_sans-serif] font-semibold text-[#8a8177] text-[9.5px] tracking-[0.665px] uppercase whitespace-nowrap">SYNCED</span>
                  </div>
                  <div className="flex gap-[12px] items-start justify-center p-[18px] w-full">
                    <div className="flex flex-1 flex-col items-start min-w-0">
                      <div className="flex gap-[6px] items-center pb-[10px] w-full">
                        <div className="bg-[#8a8177] rounded-[3.5px] shrink-0 size-[7px]" />
                        <span className="font-['General_Sans',_sans-serif] font-semibold text-[#8a8177] text-[10.5px] tracking-[0.63px] uppercase whitespace-nowrap">NEW LEADS</span>
                      </div>
                      <div className="bg-[#faf7f0] border border-[rgba(27,23,19,0.09)] flex flex-col items-start justify-between px-[15px] py-[14px] rounded-[12px] w-full">
                        <span className="font-['General_Sans',_sans-serif] font-bold text-[#1b1713] text-[13.5px]">@jules</span>
                        <span className="font-['General_Sans',_sans-serif] font-normal text-[#8a8177] text-[11.5px] whitespace-nowrap mt-1">Instagram · browsing</span>
                        <span className="bg-[#f3eee3] flex items-center justify-center px-[9px] py-[3px] rounded-[20px] w-full mt-3">
                          <span className="font-['General_Sans',_sans-serif] font-semibold text-[#5c544b] text-[10px] tracking-[0.2px] whitespace-nowrap">Nurture</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-start min-w-0">
                      <div className="flex gap-[6px] items-center pb-[10px] w-full">
                        <div className="bg-[#ff5a38] rounded-[3.5px] shrink-0 size-[7px]" />
                        <span className="font-['General_Sans',_sans-serif] font-semibold text-[#8a8177] text-[10.5px] tracking-[0.63px] uppercase whitespace-nowrap">HIGH INTENT</span>
                      </div>
                      <div className="bg-white border border-[#ff5a38] drop-shadow-[0px_6px_9px_rgba(255,90,56,0.15)] flex flex-col items-start justify-between px-[15.5px] py-[14.5px] rounded-[12px] w-full">
                        <span className="font-['General_Sans',_sans-serif] font-bold text-[#1b1713] text-[13.5px]">Mia K.</span>
                        <span className="font-['General_Sans',_sans-serif] font-normal text-[#8a8177] text-[11.5px] mt-1">TikTok · asked price + colour</span>
                        <span className="bg-[#ff5a38] flex items-center justify-center px-[9px] py-[3px] rounded-[20px] w-full mt-3">
                          <span className="font-['General_Sans',_sans-serif] font-semibold text-white text-[10px] tracking-[0.2px] whitespace-nowrap">High intent</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                {...reveal}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                className="flex flex-col gap-[16px] items-center justify-center w-[419px]"
              >
                <div className="bg-white border border-[rgba(27,23,19,0.08)] flex flex-col h-[246px] items-start overflow-clip p-px relative rounded-[20px] shadow-[0px_2px_6px_0px_rgba(27,23,19,0.04),0px_22px_46px_0px_rgba(27,23,19,0.09)] w-[411px]">
                  <div className="flex flex-col gap-[4px] h-full items-center justify-center px-[22px] py-[26px] w-full">
                    <span className="font-['General_Sans',_sans-serif] font-bold text-[#1b1713] text-[16.5px] text-center whitespace-nowrap">Dupci Voice Agent</span>
                    <span className="font-['General_Sans',_sans-serif] font-semibold text-[#4a4a4a] text-[11px] text-center tracking-[0.44px] uppercase whitespace-nowrap mt-1">OUTBOUND · MIA K.</span>
                    <div className="flex gap-[3px] h-[64px] items-center justify-center pb-[16px] pt-[14px]">
                      <Waveform heights={[12, 22, 32, 18, 28, 14, 24, 10]} barClass="bg-[#ff5a38] rounded-[2px] w-[3px]" />
                    </div>
                    <span className="font-['General_Sans',_sans-serif] font-semibold text-[#4a4a4a] text-[13.5px] text-center tracking-[0.405px] whitespace-nowrap">02:47</span>
                    <div className="flex gap-[14px] items-start justify-center pt-[15px]">
                      <div className="bg-[#191919] flex items-center justify-center rounded-full size-[38px]">
                        <img alt="" className="size-[15px]" src={imgSvg2} />
                      </div>
                      <div className="bg-[#191919] flex items-center justify-center rounded-full size-[38px]">
                        <img alt="" className="size-[15px]" src={imgSvg3} />
                      </div>
                      <div className="bg-[#e5484d] flex items-center justify-center rounded-full size-[38px]">
                        <div className="flex items-center justify-center rotate-135 size-[15px]">
                          <img alt="" className="size-[15px]" src={imgSvg4} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[11px] h-[123px] items-start justify-center px-[24px] w-full">
                  <span className="font-['General_Sans',_sans-serif] font-bold text-[#191919] text-[26px] tracking-[-0.26px]">05</span>
                  <span className="font-['General_Sans',_sans-serif] font-semibold text-[#1b1713] text-[20px]">AI places the call</span>
                  <p className="font-['General_Sans',_sans-serif] font-normal text-[#5c544b] text-[16px] leading-[22px]">
                    An AI voice walks her through the product, answers the last objection, and confirms the order.
                  </p>
                </div>
              </motion.div>

              <motion.div
                {...reveal}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                className="flex flex-col gap-[16px] items-center w-[408px]"
              >
                <div className="flex flex-col gap-[11px] h-[124px] items-start justify-end px-[24px] w-[396px]">
                  <span className="font-['General_Sans',_sans-serif] font-bold text-[#191919] text-[26px] tracking-[-0.26px]">06</span>
                  <span className="font-['General_Sans',_sans-serif] font-semibold text-[#1b1713] text-[20px]">Nurtured until they buy</span>
                  <p className="font-['General_Sans',_sans-serif] font-normal text-[#5c544b] text-[16px] leading-[22px] whitespace-pre-wrap">
                    {`She’s enrolled in marketing, every open, click, and reply tied to the same customer record.`}
                  </p>
                </div>
                <div className="bg-white border border-[rgba(27,23,19,0.08)] flex flex-col h-[252px] items-start overflow-clip p-px relative rounded-[18px] shadow-[0px_2px_6px_0px_rgba(27,23,19,0.04),0px_22px_46px_0px_rgba(27,23,19,0.09)] w-[396px]">
                  <div className="border-b border-[rgba(27,23,19,0.09)] flex gap-[10px] items-center pb-[15px] pt-[14px] px-[18px] w-full">
                    <div className="bg-[#1b1713] flex items-center justify-center rounded-[6px] shrink-0 size-[22px]">
                      <img alt="" className="size-[12px]" src={imgSvg5} />
                    </div>
                    <span className="font-['General_Sans',_sans-serif] font-semibold text-[#1b1713] text-[13px] whitespace-nowrap">Marketing · Nurture flow</span>
                    <span className="ml-auto font-['General_Sans',_sans-serif] font-semibold text-[#8a8177] text-[9.5px] tracking-[0.665px] uppercase whitespace-nowrap">ENROLLED</span>
                  </div>
                  <div className="border-b border-[rgba(27,23,19,0.09)] flex gap-[8px] items-start pb-[11px] pt-[10px] px-[18px] w-full">
                    <span className="font-['General_Sans',_sans-serif] font-semibold text-[#8a8177] text-[10.5px] tracking-[0.525px] uppercase w-[52px] shrink-0 pt-[2px]">TO</span>
                    <span className="font-['General_Sans',_sans-serif] font-normal text-[#1b1713] text-[13px] whitespace-nowrap">mia.k@gmail.com</span>
                  </div>
                  <div className="border-b border-[rgba(27,23,19,0.09)] flex gap-[8px] items-start pb-[11px] pt-[10px] px-[18px] w-full">
                    <span className="font-['General_Sans',_sans-serif] font-semibold text-[#8a8177] text-[10.5px] tracking-[0.525px] uppercase w-[52px] shrink-0 pt-[2px]">SUBJECT</span>
                    <span className="font-['General_Sans',_sans-serif] font-bold text-[#1b1713] text-[13px] whitespace-nowrap">Your sage green set is on its way 🌿</span>
                  </div>
                  <div className="flex flex-col items-start px-[18px] py-[16px] w-full">
                    <p className="font-['General_Sans',_sans-serif] font-normal text-[#5c544b] text-[13.5px] leading-[21.6px]">
                      Hi Mia — <span className="font-['General_Sans',_sans-serif] font-bold text-[#1b1713]">welcome to the club.</span> Your order ships tomorrow. Here’s 10% off your next one, plus the care guide
                    </p>
                  </div>
                  <div className="bg-[#faf7f0] border-t border-[rgba(27,23,19,0.09)] flex gap-[8px] items-center pb-[11px] pt-[12px] px-[18px] w-full">
                    <div className="bg-[#25d366] rounded-[3.5px] shrink-0 size-[7px]" />
                    <span className="font-['General_Sans',_sans-serif] font-semibold text-[#5c544b] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
                      SUBSCRIBER ADDED · WELCOME FLOW · DAY 1 OF 14
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* simplified stacked timeline (below xl) */}
        <div className="flex xl:hidden flex-col gap-12 w-full max-w-[520px]">
          {JOURNEY_STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: (i % 2) * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
              className="relative flex flex-col gap-4 pl-9"
            >
              <motion.span
                className="absolute left-0 top-1 flex-none rounded-full bg-[#ff5a38] shadow-[0px_0px_0px_5px_rgba(255,90,56,0.15)] size-[10px]"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              />
              {i !== JOURNEY_STEPS.length - 1 && (
                <span className="absolute left-[4px] top-6 bottom-[-48px] w-px bg-[rgba(27,23,19,0.14)]" />
              )}
              <div className="flex flex-col gap-2">
                <span className="font-['General_Sans',_sans-serif] font-bold text-[#1b1713] text-[22px] tracking-[-0.22px]">
                  {step.number}
                </span>
                <h3 className="font-['General_Sans',_sans-serif] font-semibold text-[#1b1713] text-[18px]">{step.title}</h3>
                <p className="font-['General_Sans',_sans-serif] font-normal text-[#5c544b] text-[15px] leading-[1.55]">
                  {step.description}
                </p>
              </div>
              {step.visual}
            </motion.div>
          ))}
        </div>

        {/* closing statement */}
        <div className="flex flex-col gap-8 items-center w-full">
          <motion.h3
            {...reveal}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-['General_Sans',_sans-serif] font-medium text-[#1b1713] text-[22px] sm:text-[26px] lg:text-[30px] text-center tracking-[-0.45px] leading-[1.35] max-w-[620px]"
          >
            A comment that would have been missed. Closed.{" "}
            <span className="font-medium text-[#ff5a38]">No one lifted a finger.</span>
          </motion.h3>
          <motion.a
            href="#get-started"
            {...reveal}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="relative flex items-center justify-center px-[30px] py-[15px] rounded-full bg-[#ff5a38] shadow-[0px_1px_2px_0px_rgba(232,73,42,0.3),0px_8px_20px_0px_rgba(255,90,56,0.28)]"
          >
            <span className="font-['General_Sans',_sans-serif] font-semibold text-[15.5px] text-white whitespace-nowrap">
              Get started
            </span>
            <span className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.25)]" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}

function MiniCardHeader({ icon, iconBg = "bg-[#010101]", label, tag }) {
  return (
    <div className="border-b border-[rgba(27,23,19,0.09)] flex gap-2.5 items-center px-4 py-3 w-full">
      <div className={`${iconBg} flex items-center justify-center rounded-[6px] shrink-0 size-5`}>
        <img alt="" className="size-[11px]" src={icon} />
      </div>
      <span className="font-['General_Sans',_sans-serif] font-semibold text-[#1b1713] text-[12.5px] whitespace-nowrap">{label}</span>
      <span className="ml-auto font-['General_Sans',_sans-serif] font-semibold text-[#8a8177] text-[9px] tracking-[0.63px] uppercase whitespace-nowrap">
        {tag}
      </span>
    </div>
  );
}

const JOURNEY_STEPS = [
  {
    number: "01",
    title: "The comment",
    description: "A question lands on your latest TikTok. Normally it would sit unread for hours, or forever.",
    visual: (
      <div className="bg-white border border-[rgba(27,23,19,0.08)] rounded-[16px] shadow-[0px_2px_6px_0px_rgba(27,23,19,0.04),0px_16px_32px_0px_rgba(27,23,19,0.08)] overflow-hidden w-full">
        <MiniCardHeader icon={imgFfffff} label="TikTok · comments" tag="LIVE" />
        <div className="flex flex-col gap-2.5 items-start px-4 py-4">
          <div className="flex gap-2.5 items-center">
            <div
              className="flex items-center justify-center rounded-2xl shrink-0 size-8"
              style={{ backgroundImage: "linear-gradient(135deg, rgb(123, 108, 246) 0%, rgb(78, 168, 222) 100%)" }}
            >
              <span className="font-['General_Sans',_sans-serif] font-semibold text-[11px] text-white">MK</span>
            </div>
            <div className="flex flex-col">
              <span className="font-['General_Sans',_sans-serif] font-semibold text-[#1b1713] text-[13.5px]">@mia.k</span>
              <span className="font-['General_Sans',_sans-serif] font-normal text-[#8a8177] text-[11.5px]">just now</span>
            </div>
          </div>
          <p className="font-['General_Sans',_sans-serif] font-semibold text-[#1b1713] text-[18px] tracking-[-0.36px]">
            “how much is this?”
          </p>
          <div className="flex gap-4 items-center">
            <span className="font-['General_Sans',_sans-serif] font-normal text-[#fe2c55] text-[12px]">♥ 12</span>
            <span className="font-['General_Sans',_sans-serif] font-normal text-[#8a8177] text-[12px]">Reply</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "02",
    title: "AI replies publicly",
    description: "The agent answers on the post, every other viewer sees the price too. Zero comments missed.",
    visual: (
      <div className="bg-white border border-[rgba(27,23,19,0.08)] rounded-[16px] shadow-[0px_2px_6px_0px_rgba(27,23,19,0.04),0px_16px_32px_0px_rgba(27,23,19,0.08)] overflow-hidden w-full">
        <MiniCardHeader icon={imgFfffff} label="Public reply" tag="AUTO" />
        <div className="flex flex-col gap-3.5 items-start px-4 py-4">
          <div className="flex gap-2.5 items-start">
            <div
              className="flex items-center justify-center rounded-xl shrink-0 size-6"
              style={{ backgroundImage: "linear-gradient(135deg, rgb(123, 108, 246) 0%, rgb(78, 168, 222) 100%)" }}
            >
              <span className="font-['General_Sans',_sans-serif] font-semibold text-[9px] text-white">MK</span>
            </div>
            <div className="flex flex-col">
              <span className="font-['General_Sans',_sans-serif] font-bold text-[#1b1713] text-[12.5px]">@mia.k</span>
              <span className="font-['General_Sans',_sans-serif] font-normal text-[#5c544b] text-[13px]">how much is this?</span>
            </div>
          </div>
          <div className="flex gap-2.5 items-start pl-8">
            <div
              className="flex items-center justify-center rounded-xl shrink-0 size-6"
              style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 90, 56) 0%, rgb(255, 138, 92) 100%)" }}
            >
              <span className="font-['General_Sans',_sans-serif] font-semibold text-[9px] text-white">B</span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex gap-1.5 items-center flex-wrap">
                <span className="font-['General_Sans',_sans-serif] font-bold text-[#1b1713] text-[12.5px]">yourbrand</span>
                <span className="bg-[#ffede8] px-2 py-0.5 rounded-full">
                  <span className="font-['General_Sans',_sans-serif] font-semibold text-[#e8492a] text-[8.5px] tracking-[0.17px]">AI Agent</span>
                </span>
              </div>
              <p className="font-['General_Sans',_sans-serif] font-normal text-[#5c544b] text-[13px] leading-[1.5]">
                Hey Mia! It’s $49 with free shipping this week — just slid into your DMs with the details 🧡
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "03",
    title: "Slides into their DM",
    description: "The conversation moves private. The AI answers questions naturally, like your best support rep.",
    visual: (
      <div className="bg-white border border-[rgba(27,23,19,0.08)] rounded-[16px] shadow-[0px_2px_6px_0px_rgba(27,23,19,0.04),0px_16px_32px_0px_rgba(27,23,19,0.08)] overflow-hidden w-full">
        <MiniCardHeader icon={imgFfffff} label="Direct messages" tag="THREAD" />
        <div className="flex flex-col gap-2.5 items-start px-4 py-4">
          <span className="self-center font-['General_Sans',_sans-serif] font-semibold text-[#8a8177] text-[10px] tracking-[0.5px] uppercase">
            TODAY, 14:02
          </span>
          <div className="self-end bg-[#1b1713] max-w-[85%] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-md px-3.5 py-3">
            <p className="font-['General_Sans',_sans-serif] font-normal text-[#f5f0e6] text-[13px] leading-[1.5]">
              Hey Mia! Here’s the full rundown: the Everyday Set is $49, ships in 48h, 30-day returns.
            </p>
            <span className="mt-1.5 inline-flex bg-[rgba(255,90,56,0.2)] px-2 py-0.5 rounded-full">
              <span className="font-['General_Sans',_sans-serif] font-semibold text-[#ffb49e] text-[8.5px] tracking-[0.17px]">AI</span>
            </span>
          </div>
          <div className="self-start bg-[#f3eee3] max-w-[85%] rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-md px-3.5 py-2.5">
            <span className="font-['General_Sans',_sans-serif] font-normal text-[#1b1713] text-[13px]">
              ooh do you have it in sage green?
            </span>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "04",
    title: "Logged. Qualified. Handed off.",
    description: "Mia is now a lead with full context attached. High-intent buyers surface straight to sales.",
    visual: (
      <div className="bg-white border border-[rgba(27,23,19,0.08)] rounded-[16px] shadow-[0px_2px_6px_0px_rgba(27,23,19,0.04),0px_16px_32px_0px_rgba(27,23,19,0.08)] overflow-hidden w-full">
        <MiniCardHeader icon={imgSvg1} iconBg="bg-[#1b1713]" label="CRM · Pipeline" tag="SYNCED" />
        <div className="flex flex-col gap-3 items-start px-4 py-4">
          <div className="bg-white border border-[#ff5a38] drop-shadow-[0px_6px_9px_rgba(255,90,56,0.15)] flex flex-col items-start px-3.5 py-3.5 rounded-xl w-full">
            <div className="flex gap-1.5 items-center pb-1.5">
              <div className="bg-[#ff5a38] rounded-full size-[7px]" />
              <span className="font-['General_Sans',_sans-serif] font-semibold text-[#8a8177] text-[10px] tracking-[0.6px] uppercase">HIGH INTENT</span>
            </div>
            <span className="font-['General_Sans',_sans-serif] font-bold text-[#1b1713] text-[13.5px]">Mia K.</span>
            <span className="font-['General_Sans',_sans-serif] font-normal text-[#8a8177] text-[11.5px] mt-0.5">TikTok · asked price + colour</span>
            <span className="bg-[#ff5a38] flex items-center justify-center px-2.5 py-1 rounded-full w-full mt-2.5">
              <span className="font-['General_Sans',_sans-serif] font-semibold text-white text-[10px] tracking-[0.2px]">High intent</span>
            </span>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "05",
    title: "AI places the call",
    description: "An AI voice walks her through the product, answers the last objection, and confirms the order.",
    visual: (
      <div className="bg-white border border-[rgba(27,23,19,0.08)] rounded-[16px] shadow-[0px_2px_6px_0px_rgba(27,23,19,0.04),0px_16px_32px_0px_rgba(27,23,19,0.08)] overflow-hidden w-full">
        <div className="flex flex-col gap-1 items-center px-6 py-6">
          <span className="font-['General_Sans',_sans-serif] font-bold text-[#1b1713] text-[15px]">Dupci Voice Agent</span>
          <span className="font-['General_Sans',_sans-serif] font-semibold text-[#4a4a4a] text-[10px] tracking-[0.4px] uppercase">OUTBOUND · MIA K.</span>
          <div className="flex gap-[3px] h-12 items-center justify-center py-3">
            <Waveform heights={[10, 18, 26, 15, 22, 12, 20, 8]} barClass="bg-[#ff5a38] rounded-[2px] w-[3px]" />
          </div>
          <span className="font-['General_Sans',_sans-serif] font-semibold text-[#4a4a4a] text-[12px] tracking-[0.36px]">02:47</span>
          <div className="flex gap-3 items-center pt-3">
            <div className="bg-[#191919] flex items-center justify-center rounded-full size-8">
              <img alt="" className="size-[13px]" src={imgSvg2} />
            </div>
            <div className="bg-[#191919] flex items-center justify-center rounded-full size-8">
              <img alt="" className="size-[13px]" src={imgSvg3} />
            </div>
            <div className="bg-[#e5484d] flex items-center justify-center rounded-full size-8">
              <div className="rotate-135 size-[13px]">
                <img alt="" className="size-[13px]" src={imgSvg4} />
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "06",
    title: "Nurtured until they buy",
    description: "She’s enrolled in marketing, every open, click, and reply tied to the same customer record.",
    visual: (
      <div className="bg-white border border-[rgba(27,23,19,0.08)] rounded-[16px] shadow-[0px_2px_6px_0px_rgba(27,23,19,0.04),0px_16px_32px_0px_rgba(27,23,19,0.08)] overflow-hidden w-full">
        <MiniCardHeader icon={imgSvg5} iconBg="bg-[#1b1713]" label="Marketing · Nurture flow" tag="ENROLLED" />
        <div className="flex flex-col items-start px-4 py-4 gap-1">
          <span className="font-['General_Sans',_sans-serif] font-bold text-[#1b1713] text-[12.5px]">
            Your sage green set is on its way 🌿
          </span>
          <p className="font-['General_Sans',_sans-serif] font-normal text-[#5c544b] text-[12.5px] leading-[1.5]">
            Hi Mia — <span className="font-['General_Sans',_sans-serif] font-bold text-[#1b1713]">welcome to the club.</span> Your order ships tomorrow. Here’s 10% off your next one.
          </p>
        </div>
        <div className="bg-[#faf7f0] border-t border-[rgba(27,23,19,0.09)] flex gap-2 items-center px-4 py-2.5">
          <div className="bg-[#25d366] rounded-full size-[7px]" />
          <span className="font-['General_Sans',_sans-serif] font-semibold text-[#5c544b] text-[9px] tracking-[0.45px] uppercase">
            SUBSCRIBER ADDED · WELCOME FLOW
          </span>
        </div>
      </div>
    ),
  },
];
