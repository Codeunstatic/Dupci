import { useState } from "react";
import { motion } from "framer-motion";
import imgSvg from "../assets/pillars/imgSvg.svg";
import imgSvg1 from "../assets/pillars/imgSvg1.svg";
import imgSvg2 from "../assets/pillars/imgSvg2.svg";
import imgSvg3 from "../assets/pillars/imgSvg3.svg";
import imgSvg4 from "../assets/pillars/imgSvg4.svg";
import imgSvg5 from "../assets/pillars/imgSvg5.svg";
import imgFfffff from "../assets/pillars/imgFfffff.svg";
import imgFfffff1 from "../assets/pillars/imgFfffff1.svg";
import imgFfffff2 from "../assets/pillars/imgFfffff2.svg";
import imgFfffff3 from "../assets/pillars/imgFfffff3.svg";
import imgEa4335 from "../assets/pillars/imgEa4335.svg";
import imgSvg6 from "../assets/pillars/imgSvg6.svg";

const TABS = [
  { icon: imgSvg1, label: "One inbox" },
  { icon: imgSvg2, label: "Built-in CRM" },
  { icon: imgSvg3, label: "Marketing" },
];

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

const CHECKLIST = [
  "7+ channels in one live feed",
  "Reply without opening a single app",
  "Full history on every customer",
];

const MESSAGES = [
  { icon: imgFfffff, iconBg: "bg-[#010101]", name: "@mia.k", text: "yes please!!", time: "14:04", unread: true },
  { icon: imgFfffff1, iconBg: "bg-[#25d366]", name: "Dana R.", text: "perfect, thank you so much", time: "13:58", unread: true },
  { icon: imgFfffff2, gradient: true, name: "@jules", text: "is this still available??", time: "13:41" },
  { icon: imgFfffff3, iconBg: "bg-[#0866ff]", name: "Tom H.", text: "what colours do you have?", time: "12:19" },
  { icon: imgEa4335, iconBorder: true, name: "S. Okafor", text: "Re: refund request #2216", time: "11:03" },
];

export default function PillarsSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="flex flex-col items-center px-6 sm:px-10 lg:px-[120px] py-20 lg:py-[130px]">
      <div className="flex flex-col gap-8 items-center max-w-[1200px] w-full">
        <div className="flex flex-col gap-3.5 items-center max-w-[600px] w-full">
          <motion.div
            {...reveal}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-[rgba(27,23,19,0.03)] border border-[rgba(27,23,19,0.16)] flex gap-1.5 items-center justify-center pl-[11px] pr-[14px] py-[7px] rounded-full shadow-[0px_1px_2px_0px_rgba(27,23,19,0.03),0px_3px_8px_0px_rgba(27,23,19,0.04)]"
          >
            <img alt="" className="size-[13px]" src={imgSvg} />
            <span className="font-['General_Sans',_sans-serif] font-medium text-[#5c544b] text-[12.5px] whitespace-nowrap">
              The system underneath
            </span>
          </motion.div>
          <motion.h2
            {...reveal}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="pt-1.5 font-['General_Sans',_sans-serif] font-semibold text-[#1b1713] text-[32px] sm:text-[42px] lg:text-[54px] leading-[1.05] tracking-[-1.2px] text-center"
          >
            Three tools,{" "}
            <span className="italic font-medium text-[#ff5a38]">one system</span>
          </motion.h2>
          <motion.p
            {...reveal}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="font-['General_Sans',_sans-serif] text-[#5c544b] text-[15px] sm:text-[16.5px] lg:text-[18px] leading-[1.6] text-center"
          >
            Every step of the user’s journey runs on the same three foundations.
          </motion.p>
        </div>

        <motion.div
          {...reveal}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
          className="flex flex-wrap gap-3 items-center justify-center pt-3"
        >
          {TABS.map((tab, i) => {
            const active = i === activeTab;
            return (
              <motion.button
                key={tab.label}
                type="button"
                onClick={() => setActiveTab(i)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="relative bg-white flex gap-[9px] items-center pb-[13px] pl-[15px] pr-[21px] pt-[12.5px] rounded-[14px] border border-[rgba(27,23,19,0.16)] cursor-pointer"
              >
                {active && (
                  <motion.span
                    layoutId="pillar-tab-ring"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    className="absolute -inset-px rounded-[14px] border border-[rgba(255,90,56,0.55)] drop-shadow-[0px_1px_1.5px_rgba(255,90,56,0.08)] pointer-events-none"
                  />
                )}
                <img alt="" className="size-4" src={tab.icon} />
                <span
                  className={`font-['General_Sans',_sans-serif] text-[14.5px] whitespace-nowrap transition-colors duration-200 ${
                    active ? "font-semibold text-[#1b1713]" : "font-medium text-[#5c544b]"
                  }`}
                >
                  {tab.label}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        <motion.div
          {...reveal}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="bg-white border border-[rgba(27,23,19,0.16)] rounded-[24px] w-full overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col justify-center gap-8 px-6 sm:px-10 lg:pl-[52px] lg:pr-10 py-10 lg:py-0 lg:w-[46%] lg:min-h-[524px] border-b lg:border-b-0 lg:border-r border-[rgba(27,23,19,0.09)]">
              <div className="flex flex-col gap-6 max-w-[420px]">
                <h3 className="font-['General_Sans',_sans-serif] font-semibold text-[#1b1713] text-[26px] sm:text-[30px] lg:text-[34px] leading-[1.08] tracking-[-0.85px]">
                  Every comment, DM and channel in one place
                </h3>
                <p className="font-['General_Sans',_sans-serif] text-[#5c544b] text-[15.5px] lg:text-[16.5px] leading-[1.6]">
                  Meta and TikTok comments, DMs, WhatsApp, SMS, phone calls, and
                  email — unified. Reply everywhere without logging into a
                  single social platform.
                </p>
                <div className="flex flex-col gap-3">
                  {CHECKLIST.map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 + i * 0.1 }}
                      viewport={{ once: true, amount: 0.2 }}
                      className="flex gap-[11px] items-center"
                    >
                      <img alt="" className="size-[18px] shrink-0" src={imgSvg4} />
                      <span className="font-['General_Sans',_sans-serif] font-medium text-[#1b1713] text-[15px]">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-[#f8f4ec] flex items-center justify-center lg:items-end lg:justify-end lg:w-[54%] p-6 sm:p-8 lg:pl-12 lg:pt-12 lg:min-h-[524px] overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 32, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
                viewport={{ once: true, amount: 0.2 }}
                className="bg-white border border-[rgba(27,23,19,0.06)] rounded-2xl lg:rounded-tl-2xl lg:rounded-tr-none lg:rounded-br-none lg:rounded-bl-none shadow-[0px_2px_6px_0px_rgba(27,23,19,0.06),-24px_-24px_64px_0px_rgba(27,23,19,0.1)] w-full max-w-[517px] overflow-hidden"
              >
                <div className="bg-[#faf7f0] border-b border-[rgba(27,23,19,0.09)] flex items-center gap-2.5 px-3.5 py-2.5">
                  <div className="flex gap-[5px] items-center shrink-0">
                    <div className="bg-[rgba(27,23,19,0.16)] rounded-full size-[7px]" />
                    <div className="bg-[rgba(27,23,19,0.16)] rounded-full size-[7px]" />
                    <div className="bg-[rgba(27,23,19,0.16)] rounded-full size-[7px]" />
                  </div>
                  <div className="flex-1 flex justify-center min-w-0">
                    <div className="bg-white border border-[rgba(27,23,19,0.09)] flex gap-1.5 items-center max-w-full overflow-hidden px-3 py-1.5 rounded-[7px]">
                      <img alt="" className="size-2.5 shrink-0" src={imgSvg5} />
                      <span className="font-mono text-[#8a8177] text-[10px] tracking-[0.1px] whitespace-nowrap truncate">
                        app.Dupci.com/inbox
                      </span>
                    </div>
                  </div>
                </div>

                <div className="border-b border-[rgba(27,23,19,0.09)] flex gap-2.5 items-center px-[18px] py-3.5">
                  <div className="border border-[rgba(27,23,19,0.35)] rounded-[6px] flex items-center justify-center shrink-0 size-5">
                    <div className="-rotate-45 border border-[rgba(27,23,19,0.35)] rounded-[4.5px] size-[9px]" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-['General_Sans',_sans-serif] font-semibold text-[#1b1713] text-[13.5px] whitespace-nowrap">
                      Inbox
                    </p>
                    <p className="font-['General_Sans',_sans-serif] font-medium text-[#8a8177] text-[10.5px] whitespace-nowrap">
                      7 channels · Today
                    </p>
                  </div>
                  <div className="flex-1 flex justify-end min-w-0">
                    <div className="bg-[#1b1713] flex items-center justify-center rounded-full shrink-0 size-[22px]">
                      <span className="font-['General_Sans',_sans-serif] font-bold text-[9.5px] text-white">
                        B
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#faf7f0] p-4">
                  <div className="bg-white border border-[rgba(27,23,19,0.09)] rounded-xl overflow-hidden">
                    {MESSAGES.map((msg, i) => (
                      <MessageRow key={msg.name} {...msg} index={i} last={i === MESSAGES.length - 1} />
                    ))}
                    <div className="flex gap-3 items-center px-[18px] py-3.5">
                      <div className="bg-[#3e3a36] flex items-center justify-center rounded-[9px] shrink-0 size-7">
                        <img alt="" className="size-2.5" src={imgSvg6} />
                      </div>
                      <p className="font-['General_Sans',_sans-serif] font-semibold text-[#1b1713] text-[13.5px] whitespace-nowrap shrink-0">
                        +44 7911 20…
                      </p>
                      <p className="font-['General_Sans',_sans-serif] text-[#8a8177] text-[13.5px] truncate min-w-0 flex-1">
                        Missed call · AI returned it
                      </p>
                      <p className="font-mono text-[#8a8177] text-[10px] whitespace-nowrap shrink-0">
                        10:47
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MessageRow({ icon, iconBg, gradient, iconBorder, name, text, time, unread, last, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45, ease: "easeOut", delay: 0.5 + index * 0.08 }}
      viewport={{ once: true, amount: 0.2 }}
      className={`flex gap-3 items-center px-[18px] py-3.5 ${
        last ? "" : "border-b border-[rgba(27,23,19,0.09)]"
      }`}
    >
      {unread ? (
        <motion.div
          className="bg-[#ff5a38] rounded-full shrink-0 size-[7px]"
          animate={{ opacity: [1, 0.45, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      ) : (
        <div className="shrink-0 size-[7px]" />
      )}
      <div
        className={`flex items-center justify-center rounded-[9px] shrink-0 size-7 ${
          iconBorder ? "bg-white border border-[rgba(27,23,19,0.1)] p-px" : iconBg || ""
        }`}
        style={
          gradient
            ? {
                backgroundImage:
                  "radial-gradient(circle at 30% 30%, #fdcb52 0%, #fda045 14%, #fd7438 28%, #fd492a 41%, #fd3324 48%, #fd1d1d 55%, #df2443 66%, #c02c69 78%, #a2338e 89%, #833ab4 100%)",
              }
            : undefined
        }
      >
        <img alt="" className="size-[15px]" src={icon} />
      </div>
      <p className="font-['General_Sans',_sans-serif] font-semibold text-[#1b1713] text-[13.5px] whitespace-nowrap shrink-0">
        {name}
      </p>
      <p className="font-['General_Sans',_sans-serif] text-[#8a8177] text-[13.5px] truncate min-w-0 flex-1">
        {text}
      </p>
      <p className="font-mono text-[#8a8177] text-[10px] whitespace-nowrap shrink-0">{time}</p>
    </motion.div>
  );
}
