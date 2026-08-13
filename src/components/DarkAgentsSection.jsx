import { motion } from "framer-motion";
import imgBadge from "../assets/dark-agents/imgSvg.svg";
import imgAvatarMia from "../assets/dark-agents/imgFfffff.svg";
import imgAvatarNina from "../assets/dark-agents/imgFfffff1.svg";
import imgAvatarDana from "../assets/dark-agents/imgFfffff2.svg";
import imgIconImage from "../assets/dark-agents/imgSvg1.svg";
import imgIconMic from "../assets/dark-agents/imgSvg2.svg";
import imgIconChat from "../assets/dark-agents/imgSvg3.svg";
import imgIconPhone from "../assets/dark-agents/imgSvg4.svg";

const CARD1_BG =
  "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 330 172' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%25' width='100%25' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(23.335 0 0 12.162 165 86)'><stop stop-color='rgba(245,240,230,0.05)' offset='0.050508'/><stop stop-color='rgba(245,240,230,0)' offset='0.050508'/></radialGradient></defs></svg>\"), linear-gradient(90deg, rgb(23, 19, 16) 0%, rgb(23, 19, 16) 100%)";
const CARD2_BG =
  "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 330 172' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%25' width='100%25' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(23.335 0 0 12.162 165 86)'><stop stop-color='rgba(245,240,230,0.05)' offset='0.050508'/><stop stop-color='rgba(245,240,230,0)' offset='0.050508'/></radialGradient></defs></svg>\"), linear-gradient(90deg, rgb(24, 19, 15) 0%, rgb(24, 19, 15) 100%)";
const CARD3_BG = CARD2_BG;
const CARD4_BG =
  "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 519 185.59' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%25' width='100%25' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(36.699 0 0 13.123 259.5 92.795)'><stop stop-color='rgba(245,240,230,0.05)' offset='0.050508'/><stop stop-color='rgba(245,240,230,0)' offset='0.050508'/></radialGradient></defs></svg>\"), linear-gradient(90deg, rgb(24, 19, 15) 0%, rgb(24, 19, 15) 100%)";
const CARD5_BG =
  "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 519 172' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%25' width='100%25' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(36.699 0 0 12.162 259.5 86)'><stop stop-color='rgba(245,240,230,0.05)' offset='0.050508'/><stop stop-color='rgba(245,240,230,0)' offset='0.050508'/></radialGradient></defs></svg>\"), linear-gradient(90deg, rgb(24, 19, 15) 0%, rgb(24, 19, 15) 100%)";

const headerContainerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const headerItemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function DarkAgentsSection() {
  return (
    <section className="w-full px-6 sm:px-10 lg:px-6 py-10 sm:py-14 lg:py-[80px]">
      <div className="bg-[#141110] relative overflow-hidden rounded-[24px] sm:rounded-[40px] px-6 sm:px-12 lg:px-24 py-16 sm:py-24 lg:py-[130px] max-w-[1392px] mx-auto">
        <div className="relative flex flex-col gap-10 sm:gap-14 items-center max-w-[1200px] mx-auto">
        <motion.div
          className="flex flex-col gap-[18px] items-center max-w-[620px] w-full"
          variants={headerContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            variants={headerItemVariants}
            className="bg-[#1e1a18] border border-[rgba(245,240,230,0.14)] flex gap-1.5 items-center justify-center pl-[11px] pr-[14px] py-[7px] rounded-full shadow-[0px_1px_1px_rgba(27,23,19,0.03),0px_3px_4px_rgba(27,23,19,0.04)]"
          >
            <img alt="" className="size-[13px]" src={imgBadge} />
            <span className="font-['General_Sans',_sans-serif] font-medium text-[12.5px] text-[rgba(245,240,230,0.75)] whitespace-nowrap">
              AI agents
            </span>
          </motion.div>

          <motion.h2
            variants={headerItemVariants}
            className="font-['General_Sans',_sans-serif] font-semibold text-[#f5f0e6] text-[34px] sm:text-[44px] lg:text-[52px] leading-[1.08] tracking-[-1.5px] text-center"
          >
            Agents that do the work.
            <br />
            <span className="italic font-medium text-[#ff5a38] tracking-[-1.3px]">All of it.</span>
          </motion.h2>

          <motion.p
            variants={headerItemVariants}
            className="font-['General_Sans',_sans-serif] text-[rgba(245,240,230,0.66)] text-[15px] sm:text-[18px] leading-[1.6] text-center max-w-[480px] pb-3.5"
          >
            Build agents that reply to comments, answer customers, qualify
            leads, follow up — even place calls with an AI voice. Your team
            stops doing the repetitive work.
          </motion.p>

          <motion.a
            href="#get-started"
            variants={headerItemVariants}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="relative flex items-center justify-center px-[30px] py-[15px] rounded-full bg-[#ff5a38] shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.25)]"
          >
            <span className="font-['General_Sans',_sans-serif] font-semibold text-[15.5px] text-white whitespace-nowrap">
              Build your first agent
            </span>
          </motion.a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3.5 w-full">
          <AgentCard
            index={0}
            className="order-1 sm:col-span-2 lg:col-start-1 lg:col-span-2 lg:row-start-1"
            title="Comment Responder"
            desc="Replies to every comment across TikTok, Meta and WhatsApp — in your brand's voice, the moment it lands."
            preview={
              <div
                className="h-[172px] rounded-[14px] w-full relative overflow-hidden"
                style={{ backgroundImage: CARD1_BG }}
              >
                <div className="flex flex-col gap-[9px] items-start justify-center p-4 size-full">
                  <CommentRow icon={imgAvatarMia} name="@mia.k" text="how much is this?" tag="REPLIED" tagClass="text-[#c9a47a]" />
                  <CommentRow icon={imgAvatarNina} name="@nina" text="Is this still available??" tag="REPLIED" tagClass="text-[#c9a47a]" />
                  <CommentRow icon={imgAvatarDana} name="Dana R." text="hi, I ordered last week…" tag="···" tagClass="text-[rgba(245,240,230,0.35)]" />
                </div>
              </div>
            }
          />

          <AgentCard
            index={1}
            className="order-2 sm:col-span-2 lg:col-start-3 lg:col-span-2 lg:row-start-1"
            title="Voice Caller"
            desc="Places outbound calls with a natural AI voice to walk leads through the close."
            preview={
              <div
                className="h-[172px] rounded-[14px] w-full relative overflow-hidden"
                style={{ backgroundImage: CARD3_BG }}
              >
                <div className="absolute left-1/2 top-[42px] -translate-x-1/2 flex items-center justify-center size-[88px]">
                  <motion.div
                    className="absolute inset-0 border border-[rgba(201,164,122,0.3)] rounded-[44px]"
                    animate={{ scale: [1, 1.12, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="relative flex items-center justify-center rounded-[28px] size-14 drop-shadow-[0px_10px_13px_rgba(0,0,0,0.45)]"
                    style={{ backgroundImage: "linear-gradient(135deg, rgb(58, 46, 36) 0%, rgb(36, 28, 22) 100%)" }}
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <img alt="" className="size-[22px]" src={imgIconPhone} />
                  </motion.div>
                </div>
                <div className="absolute left-4 right-4 top-[105px] flex gap-[3px] h-5 items-center justify-center">
                  {[6, 12, 18, 9, 15, 7, 13].map((h, i) => (
                    <div key={i} className="bg-[#8b7455] rounded-sm w-[2.5px]" style={{ height: h }} />
                  ))}
                </div>
                <p className="absolute left-4 right-4 top-[131px] font-mono text-[9.5px] text-[rgba(245,240,230,0.4)] text-center whitespace-nowrap">
                  Calling Mia K. · 02:47
                </p>
              </div>
            }
          />

          <AgentCard
            index={2}
            className="order-3 sm:col-span-2 lg:col-start-5 lg:col-span-2 lg:row-start-1"
            title="Lead Qualifier"
            desc="Scores intent from every conversation and routes hot leads straight to sales."
            preview={
              <div
                className="h-[172px] rounded-[14px] w-full relative overflow-hidden"
                style={{ backgroundImage: CARD2_BG }}
              >
                <div className="flex flex-col gap-[9px] items-start justify-center p-4 size-full">
                  <LeadRow initials="MK" name="Mia K." detail="TikTok · asked price + colour" badge="HIGH INTENT" tone="hot" />
                  <LeadRow initials="JR" name="@jules.r" detail="Instagram · browsing" badge="NURTURE" tone="cool" />
                  <LeadRow initials="SD" name="@sam.d" detail="TikTok · asked about sizing" badge="NURTURE" tone="cool" />
                </div>
              </div>
            }
          />

          <AgentCard
            index={3}
            className="order-4 sm:col-span-2 lg:col-start-1 lg:col-span-3 lg:row-start-2"
            title="Works while you sleep"
            desc="Every agent runs 24/7 — replies, calls and follow-ups don't wait for business hours."
            preview={
              <div
                className="h-[210px] rounded-[14px] w-full relative overflow-hidden flex flex-col justify-center"
                style={{ backgroundImage: CARD4_BG }}
              >
                <div className="flex flex-col gap-4 p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] text-[rgba(245,240,230,0.35)]">10 PM</span>
                    <span className="font-mono text-[9px] text-[rgba(245,240,230,0.35)]">2 AM</span>
                    <span className="font-mono text-[9px] text-[rgba(245,240,230,0.35)]">6 AM</span>
                  </div>
                  <div className="relative h-[7px] mx-1 bg-[rgba(245,240,230,0.1)] rounded-full">
                    <div className="absolute -translate-y-1/2 top-1/2 left-[7%] bg-[#5c4c3c] rounded-full size-[7px]" />
                    <div className="absolute -translate-y-1/2 top-1/2 left-[41%] bg-[#5c4c3c] rounded-full size-[7px]" />
                    <div className="absolute -translate-y-1/2 top-1/2 left-[77%] bg-[#5c4c3c] rounded-full size-[7px]" />
                  </div>
                  <div className="flex flex-col gap-[7px]">
                    <ActivityRow text="Comment replied on TikTok" time="11:42 PM" />
                    <ActivityRow text="Voice call placed to a lead" time="2:14 AM" />
                    <ActivityRow text="Lead qualified & handed to sales" time="4:50 AM" />
                  </div>
                </div>
              </div>
            }
          />

          <AgentCard
            index={4}
            className="order-5 sm:col-span-2 lg:col-start-4 lg:col-span-3 lg:row-start-2"
            title="Trained on your brand"
            desc="Learns your tone, catalog and voice — so every reply sounds like your team wrote it."
            preview={
              <div
                className="h-[210px] rounded-[14px] w-full relative overflow-hidden flex items-center justify-center"
                style={{ backgroundImage: CARD5_BG }}
              >
                <div className="relative flex items-center justify-center size-[150px] shrink-0">
                  <div className="absolute inset-0 border border-[rgba(245,240,230,0.08)] rounded-full" />
                  <div className="absolute inset-[11px] border border-[rgba(245,240,230,0.08)] rounded-full" />
                  <div className="relative flex items-center gap-3.5">
                    <div
                      className="flex items-center justify-center rounded-[21px] size-[42px] border-[3px] border-[#171310] drop-shadow-[0px_4px_6px_rgba(0,0,0,0.4)]"
                      style={{ backgroundImage: "linear-gradient(150deg, rgb(58, 46, 36) 0%, rgb(36, 28, 22) 100%)" }}
                    >
                      <span className="font-['Instrument_Serif',_serif] text-[15px] text-[#c9a47a]">Aa</span>
                    </div>
                    <div
                      className="flex items-center justify-center rounded-[21px] size-[42px] border-[3px] border-[#171310] drop-shadow-[0px_4px_6px_rgba(0,0,0,0.4)]"
                      style={{ backgroundImage: "linear-gradient(150deg, rgb(58, 46, 36) 0%, rgb(36, 28, 22) 100%)" }}
                    >
                      <img alt="" className="size-4" src={imgIconImage} />
                    </div>
                    <div className="flex items-center justify-center rounded-full size-14 border-[3px] border-[#171310] bg-[#ff5a38] drop-shadow-[0px_0px_13px_rgba(255,90,56,0.4)]">
                      <svg viewBox="0 0 16 16" fill="none" className="size-[22px]">
                        <path
                          d="M13 8a5 5 0 1 1-1.6-3.65M13 2.2v3.4h-3.4"
                          stroke="white"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div
                      className="flex items-center justify-center rounded-[21px] size-[42px] border-[3px] border-[#171310] drop-shadow-[0px_4px_6px_rgba(0,0,0,0.4)]"
                      style={{ backgroundImage: "linear-gradient(150deg, rgb(58, 46, 36) 0%, rgb(36, 28, 22) 100%)" }}
                    >
                      <img alt="" className="size-4" src={imgIconMic} />
                    </div>
                    <div
                      className="flex items-center justify-center rounded-[21px] size-[42px] border-[3px] border-[#171310] drop-shadow-[0px_4px_6px_rgba(0,0,0,0.4)]"
                      style={{ backgroundImage: "linear-gradient(150deg, rgb(58, 46, 36) 0%, rgb(36, 28, 22) 100%)" }}
                    >
                      <img alt="" className="size-4" src={imgIconChat} />
                    </div>
                  </div>
                </div>
              </div>
            }
          />
        </div>
        </div>
      </div>
    </section>
  );
}

function AgentCard({ className = "", preview, title, desc, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -4 }}
      className={`bg-[#1e1a18] border border-[rgba(245,240,230,0.08)] hover:border-[rgba(245,240,230,0.18)] transition-colors duration-300 flex flex-col gap-4 items-start p-[17px] rounded-[20px] w-full ${className}`}
    >
      {preview}
      <div className="flex flex-col gap-[3px] w-full">
        <p className="font-['General_Sans',_sans-serif] font-semibold text-[#f5f0e6] text-[15px]">{title}</p>
        <p className="font-['General_Sans',_sans-serif] text-[rgba(245,240,230,0.5)] text-[12.5px] leading-[1.45]">{desc}</p>
      </div>
    </motion.div>
  );
}

function CommentRow({ icon, name, text, tag, tagClass }) {
  return (
    <div className="bg-[rgba(245,240,230,0.04)] flex gap-2.5 items-center px-2.5 py-2 rounded-[10px] w-full">
      <div className="bg-[#2e241c] flex items-center justify-center rounded-[7px] shrink-0 size-6">
        <img alt="" className="size-[11px]" src={icon} />
      </div>
      <span className="font-['General_Sans',_sans-serif] font-semibold text-[#f5f0e6] text-xs whitespace-nowrap">{name}</span>
      <span className="font-['General_Sans',_sans-serif] text-[rgba(245,240,230,0.55)] text-xs flex-1 min-w-0 truncate">{text}</span>
      <span className={`font-mono font-bold text-[8.5px] tracking-[0.51px] uppercase whitespace-nowrap ${tagClass}`}>{tag}</span>
    </div>
  );
}

function LeadRow({ initials, name, detail, badge, tone }) {
  const toneClass =
    tone === "hot"
      ? "bg-[rgba(201,164,122,0.14)] border border-[rgba(201,164,122,0.25)] text-[#c9a47a]"
      : "bg-[rgba(245,240,230,0.08)] text-[rgba(245,240,230,0.4)]";
  return (
    <div className="bg-[rgba(245,240,230,0.04)] flex gap-2.5 items-center px-2.5 py-2 rounded-[10px] w-full">
      <div
        className="flex items-center justify-center rounded-[7px] shrink-0 size-6"
        style={{ backgroundImage: "linear-gradient(135deg, rgb(58, 46, 36) 0%, rgb(42, 33, 25) 100%)" }}
      >
        <span className="font-['General_Sans',_sans-serif] font-semibold text-[8.5px] text-center text-white">{initials}</span>
      </div>
      <span className="font-['General_Sans',_sans-serif] font-semibold text-[#f5f0e6] text-xs whitespace-nowrap">{name}</span>
      <span className="font-['General_Sans',_sans-serif] text-[rgba(245,240,230,0.55)] text-xs flex-1 min-w-0 truncate">{detail}</span>
      <span className={`font-mono font-bold text-[8px] tracking-[0.48px] uppercase whitespace-nowrap px-2 py-[3px] rounded-full shrink-0 ${toneClass}`}>
        {badge}
      </span>
    </div>
  );
}

function ActivityRow({ text, time }) {
  return (
    <div className="bg-[rgba(245,240,230,0.04)] flex gap-2.5 items-center pb-[7px] pt-[6px] px-2.5 rounded-[10px] w-full">
      <div className="bg-[#5c4c3c] rounded-[3px] shrink-0 size-1.5" />
      <span className="font-['General_Sans',_sans-serif] text-[rgba(245,240,230,0.55)] text-[11.5px] flex-1 min-w-0 truncate">{text}</span>
      <span className="font-mono text-[9.5px] text-[rgba(245,240,230,0.35)] whitespace-nowrap">{time}</span>
    </div>
  );
}
