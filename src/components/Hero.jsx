import { motion } from "framer-motion";
import imgBackgroundShadow from "../assets/hero/imgBackgroundShadow.jpg";
import imgGradient from "../assets/hero/imgGradient.svg";
import imgContainer from "../assets/hero/imgContainer.svg";
import imgSvg from "../assets/hero/imgSvg.svg";
import img010101 from "../assets/hero/img010101.svg";
import imgE1306C from "../assets/hero/imgE1306C.svg";
import img25D366 from "../assets/hero/img25D366.svg";
import img0866Ff from "../assets/hero/img0866Ff.svg";
import imgEa4335 from "../assets/hero/imgEa4335.svg";
import imgSvg1 from "../assets/hero/imgSvg1.svg";
import imgSvg2 from "../assets/hero/imgSvg2.svg";
import imgSvg3 from "../assets/hero/imgSvg3.svg";
import imgSvg4 from "../assets/hero/imgSvg4.svg";
import imgSvg5 from "../assets/hero/imgSvg5.svg";
import imgSvg6 from "../assets/hero/imgSvg6.svg";
import imgSvg7 from "../assets/hero/imgSvg7.svg";
import imgSvg8 from "../assets/hero/imgSvg8.svg";
import imgSvg9 from "../assets/hero/imgSvg9.svg";
import img10102 from "../assets/hero/img10102.svg";
import img8A8177 from "../assets/hero/img8A8177.svg";
import img8A8178 from "../assets/hero/img8A8178.svg";
import img8A8179 from "../assets/hero/img8A8179.svg";
import img8A8180 from "../assets/hero/img8A8180.svg";
import img8A8181 from "../assets/hero/img8A8181.svg";
import imgSvg10 from "../assets/hero/imgSvg10.svg";
import imgSvg11 from "../assets/hero/imgSvg11.svg";
import imgSvg12 from "../assets/hero/imgSvg12.svg";

export default function Hero() {
  return (
    <div className="relative w-full overflow-hidden" data-name="Header - HERO">
      {/* ambient warm radial wash */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1440 1221' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%25' width='100%25' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(187.2 0 0 122.1 720 0)'><stop stop-color='rgba(27,23,19,0)' offset='0.55'/><stop stop-color='rgba(27,23,19,0.035)' offset='1'/></radialGradient></defs></svg>\")",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.09]"
        style={{
          maskImage: `url("${imgGradient}")`,
          WebkitMaskImage: `url("${imgGradient}")`,
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1440 1221' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%25' width='100%25' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(101.82 0 0 86.338 720 610.5)'><stop stop-color='rgba(27,23,19,0.5)' offset='0.027196'/><stop stop-color='rgba(27,23,19,0)' offset='0.027196'/></radialGradient></defs></svg>\")",
        }}
      />

      {/* concentric rings */}
      <div
        className="absolute inset-0"
        style={{ maskImage: `url("${imgContainer}")`, WebkitMaskImage: `url("${imgContainer}")` }}
      >
        {[
          { size: 1120, top: 0, opacity: 1 },
          { size: 1280, top: -80, opacity: 0.85 },
          { size: 1440, top: -160, opacity: 0.7 },
          { size: 1600, top: -240, opacity: 0.55 },
          { size: 1760, top: -320, opacity: 0.4 },
          { size: 1920, top: -400, opacity: 0.25 },
        ].map((ring, i) => (
          <motion.div
            key={ring.size}
            className="-translate-x-1/2 absolute border border-[rgba(27,23,19,0.16)] left-1/2 rounded-full"
            style={{
              width: ring.size,
              height: ring.size,
              top: ring.top,
              opacity: ring.opacity,
            }}
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{ duration: 160 + i * 20, repeat: Infinity, ease: "linear" }}
          />
        ))}
        <motion.div
          className="-translate-x-1/2 absolute left-1/2 size-[2200px] top-[-540px]"
          animate={{ rotate: -360 }}
          transition={{ duration: 220, repeat: Infinity, ease: "linear" }}
        >
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSvg} />
        </motion.div>
      </div>

      {/* channel chips orbiting the rings (desktop only) */}
      <div className="hidden lg:block">
        {[
          { icon: img010101, alt: "TikTok", left: 131, top: 540 },
          { icon: imgE1306C, alt: "Instagram", left: 97, top: 771 },
          { icon: img25D366, alt: "WhatsApp", left: 226, top: 971 },
          { icon: img0866Ff, alt: "Facebook", left: 1248, top: 537 },
          { icon: imgEa4335, alt: "Gmail", left: 1287, top: 766 },
        ].map((chip, i) => (
          <motion.div
            key={chip.alt}
            className="channel-chip absolute bg-white border border-[rgba(27,23,19,0.08)] flex items-center justify-center p-px rounded-[29px] size-[58px] shadow-[0px_2px_2px_rgba(27,23,19,0.05),0px_14px_15px_rgba(27,23,19,0.1)]"
            style={{ left: chip.left, top: chip.top }}
            whileHover={{ scale: 1.15 }}
          >
            <img alt={chip.alt} className="size-6" src={chip.icon} />
          </motion.div>
        ))}
        <motion.div
          className="channel-chip absolute bg-white border border-[rgba(27,23,19,0.08)] flex items-center justify-center p-px rounded-[29px] size-[58px] shadow-[0px_2px_2px_rgba(27,23,19,0.05),0px_14px_15px_rgba(27,23,19,0.1)]"
          style={{ left: 1156, top: 971 }}
          whileHover={{ scale: 1.15 }}
        >
          <img alt="X" className="size-[23px]" src={imgSvg1} />
        </motion.div>
      </div>

      {/* headline block */}
      <div className="relative flex flex-col gap-4 items-center max-w-[1200px] mx-auto px-6 sm:px-10 pt-[150px] text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
          className="hero-heading max-w-[420px] sm:max-w-[500px] lg:max-w-[588px] font-['General_Sans',_sans-serif] font-semibold text-[#1b1713] text-[38px] sm:text-[48px] lg:text-[62px] leading-[1.05] tracking-[-1.5px]"
        >
          Turn one comment into a customer
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="flex flex-col items-center max-w-[678px]"
        >
          <p className="font-['General_Sans',_sans-serif] text-[#5c544b] text-[16px] sm:text-[19px] leading-[1.6]">
            Dupci unifies every channel, DM and comment into one system where AI
            agents reply, qualify, and close without no one lifting a finger.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-6"
        >
          <motion.a
            href="#get-started"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="hero-cta relative flex items-center justify-center px-[30px] py-[15px] rounded-full bg-[#ff5a38] shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.25)]"
          >
            <span className="font-['General_Sans',_sans-serif] font-semibold text-[15.5px] text-white whitespace-nowrap">
              Get started
            </span>
          </motion.a>
          <motion.a
            href="#how-it-works"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="hero-cta relative flex items-center justify-center px-[30px] py-[15px] rounded-full shadow-[inset_0px_0px_0px_1.5px_rgba(27,23,19,0.16)]"
          >
            <span className="font-['General_Sans',_sans-serif] font-semibold text-[15.5px] text-[#1b1713] whitespace-nowrap">
              See how it works
            </span>
          </motion.a>
        </motion.div>
      </div>

      {/* dashboard + phone mockup */}
      <div className="relative mt-[60px] sm:mt-[90px] px-4 flex justify-center md:min-h-[690px]">
        <div
          className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[640px] w-[760px] rounded-[350px] pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 760 640' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%25' width='100%25' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(49.679 0 0 49.679 380 320)'><stop stop-color='rgba(255,90,56,0.13)' offset='0'/><stop stop-color='rgba(255,138,92,0.05)' offset='0.45'/><stop stop-color='rgba(255,138,92,0)' offset='0.7'/></radialGradient></defs></svg>\")",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="hero-dashboard relative bg-white border border-[rgba(27,23,19,0.08)] rounded-[20px] shadow-[0px_2px_6px_0px_rgba(27,23,19,0.04),0px_40px_90px_0px_rgba(27,23,19,0.09)] w-full max-w-[840px] overflow-hidden hidden md:flex">
          {/* sidebar */}
          <div className="bg-white border-r border-[rgba(27,23,19,0.09)] shrink-0 w-[183px] flex flex-col justify-between py-5 px-3.5">
            <div>
              <div className="flex gap-[9px] items-center px-2.5 pb-4">
                <div className="bg-[#ff5a38] rounded-[7px] size-6 flex items-center justify-center">
                  <svg viewBox="0 0 16 16" fill="none" className="size-[13px]">
                    <path
                      d="M13 8a5 5 0 1 1-1.6-3.65M13 2.2v3.4h-3.4"
                      stroke="white"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="font-['General_Sans',_sans-serif] font-bold text-[#1b1713] text-[15.5px] tracking-[-0.155px]">
                  Dupci
                </span>
              </div>
              <NavGroup label="CONVERSATIONS">
                <NavItem icon={imgSvg2} label="Unified Inbox" count="12" active countBg="bg-[#ffede8]" countColor="text-[#e8492a]" />
                <NavItem icon={imgSvg3} label="Messages" count="4" />
              </NavGroup>
              <NavGroup label="SALES">
                <NavItem icon={imgSvg4} label="CRM Pipeline" />
                <NavItem icon={imgSvg5} label="Voice Calls" count="2" />
              </NavGroup>
              <NavGroup label="MARKETING">
                <NavItem icon={imgSvg6} label="Campaigns" />
                <NavItem icon={imgSvg7} label="Subscribers" />
              </NavGroup>
              <NavGroup label="SYSTEM">
                <NavItem icon={imgSvg8} label="AI Agents" />
              </NavGroup>
            </div>
            <div className="border-t border-[rgba(27,23,19,0.09)] pt-[15px] px-2.5 flex gap-[9px] items-center">
              <div className="bg-[#e4e4e4] rounded-full size-[26px] flex items-center justify-center">
                <span className="font-['General_Sans',_sans-serif] font-semibold text-[10px] text-white">Y</span>
              </div>
              <div>
                <p className="font-['General_Sans',_sans-serif] font-semibold text-[#1b1713] text-[12.5px]">yourbrand</p>
                <p className="font-['General_Sans',_sans-serif] font-medium text-[#8a8177] text-[10.5px]">Owner</p>
              </div>
            </div>
          </div>

          {/* main panel */}
          <div className="flex-1 min-w-0 flex flex-col">
            <div className="border-b border-[rgba(27,23,19,0.09)] flex items-center gap-3.5 px-[22px] py-4">
              <div>
                <p className="font-['General_Sans',_sans-serif] font-semibold text-[#1b1713] text-[15.5px] whitespace-nowrap">Unified Inbox</p>
                <p className="font-['General_Sans',_sans-serif] font-medium text-[#8a8177] text-[11.5px] whitespace-nowrap">Every channel, one place · 12 open</p>
              </div>
              <div className="flex-1 min-w-[80px] flex justify-end">
                <div className="bg-white border border-[rgba(27,23,19,0.09)] flex gap-2 items-center pl-[15px] pr-6 py-2 rounded-full max-w-[210px]">
                  <img alt="" className="size-[13px]" src={imgSvg9} />
                  <span className="font-['General_Sans',_sans-serif] text-[#8a8177] text-[12.5px] whitespace-nowrap overflow-hidden text-ellipsis">Search conversations…</span>
                </div>
              </div>
              <div className="bg-[#faf7f0] border border-[rgba(27,23,19,0.09)] rounded-full flex gap-[7px] items-center px-3.5 py-[7px] shrink-0">
                <div className="bg-[#ff5a38] rounded-full size-[7px]" />
                <span className="font-['General_Sans',_sans-serif] font-semibold text-[#1b1713] text-[12px] whitespace-nowrap">AI Agent · On</span>
              </div>
            </div>

            <div className="flex flex-1 min-h-0">
              {/* conversation list */}
              <div className="bg-white border-r border-[rgba(27,23,19,0.09)] w-[295px] flex flex-col shrink-0">
                <div className="border-b border-[rgba(27,23,19,0.16)] flex gap-1.5 items-center px-3.5 py-3">
                  <div className="bg-white border border-[rgba(27,23,19,0.1)] rounded-full flex gap-1.5 items-center px-3.5 py-2 shadow-[0px_1px_1px_rgba(27,23,19,0.05)]">
                    <img alt="TikTok" className="size-3.5" src={img10102} />
                    <span className="font-['General_Sans',_sans-serif] font-semibold text-[#1b1713] text-xs whitespace-nowrap">TikTok</span>
                  </div>
                  {[img8A8177, img8A8178, img8A8179, img8A8180].map((icon, i) => (
                    <div key={i} className="rounded-full px-2.5 py-2">
                      <img alt="" className="size-3.5 opacity-60" src={icon} />
                    </div>
                  ))}
                </div>
                <div className="flex-1 overflow-y-auto">
                  <ConvoItem name="Mia K." time="now" text="how much is this? 😍" tag="AI replied · New lead" active />
                  <ConvoItem name="@kofi.k" time="9m" text="do you ship to the UK?" />
                  <ConvoItem name="@sam.d" time="21m" text="obsessed, the packaging is gorgeous 😍" />
                  <ConvoItem name="@jules.r" time="1h" text="need this in sage green 🙏" />
                  <ConvoItem name="@nina.styles" time="2h" text="is this still available??" />
                  <ConvoItem name="@adonis" time="2h" text="is this still available??" />
                </div>
              </div>

              {/* thread */}
              <div className="bg-[#faf7f0] flex-1 min-w-0 flex flex-col">
                <div className="bg-white border-b border-[rgba(27,23,19,0.09)] flex gap-[11px] items-center px-[22px] py-[10.5px]">
                  <div
                    className="rounded-full size-[34px] flex items-center justify-center shrink-0"
                    style={{ backgroundImage: "linear-gradient(135deg, rgb(123, 108, 246) 0%, rgb(78, 168, 222) 100%)" }}
                  >
                    <span className="font-['General_Sans',_sans-serif] font-semibold text-white text-xs">MK</span>
                  </div>
                  <div>
                    <p className="font-['General_Sans',_sans-serif] font-semibold text-[#1b1713] text-sm">Mia K.</p>
                    <p className="font-['General_Sans',_sans-serif] text-[#8a8177] text-[11.5px] flex items-center gap-1">
                      <img alt="" className="size-3" src={img8A8181} /> @mia.k · TikTok comment
                    </p>
                  </div>
                </div>
                <div className="flex-1 flex flex-col gap-3 p-[22px]">
                  <div className="self-start bg-white border border-[rgba(27,23,19,0.09)] rounded-tl-[15px] rounded-tr-[15px] rounded-br-[15px] rounded-bl-[4px] flex gap-[5px] items-center px-3.5 py-[11px] max-w-[70%]">
                    <span className="font-['General_Sans',_sans-serif] text-[#1b1713] text-[13px] whitespace-nowrap">how much is this? 😍</span>
                    <span className="font-['General_Sans',_sans-serif] text-[#8a8177] text-[10px] whitespace-nowrap">2m</span>
                  </div>
                  <div className="self-end bg-white border border-[rgba(27,23,19,0.09)] rounded-tl-[15px] rounded-tr-[15px] rounded-br-[4px] rounded-bl-[15px] relative max-w-[65%] px-3 pt-[26px] pb-3">
                    <span className="absolute top-2.5 left-2 bg-[#faf7f0] rounded-full px-[7px] py-0.5 font-['General_Sans',_sans-serif] font-bold text-[#9d8d68] text-[8.5px] tracking-[0.17px] whitespace-nowrap">AI Agent</span>
                    <p className="font-['General_Sans',_sans-serif] text-[#1b1713] text-xs leading-[1.25]">Hey Mia! It's $49 with free shipping this week, just slid into your DMs with the details 🧡</p>
                    <p className="font-['General_Sans',_sans-serif] text-[#969695] text-[10px] mt-2">1m</p>
                  </div>
                  <div className="self-start bg-white border border-[rgba(27,23,19,0.09)] rounded-tl-[15px] rounded-tr-[15px] rounded-br-[15px] rounded-bl-[4px] flex gap-[5px] items-center px-3.5 py-[11px] max-w-[70%]">
                    <span className="font-['General_Sans',_sans-serif] text-[#1b1713] text-[13px]">ooh perfect, does it come in sage green too?</span>
                    <span className="font-['General_Sans',_sans-serif] text-[#8a8177] text-[10px] whitespace-nowrap">30s</span>
                  </div>
                  <div className="self-end bg-white border border-[rgba(27,23,19,0.09)] rounded-tl-[15px] rounded-tr-[15px] rounded-br-[4px] rounded-bl-[15px] relative max-w-[65%] px-3 pt-[26px] pb-3">
                    <span className="absolute top-2.5 left-2 bg-[#faf7f0] rounded-full px-[7px] py-0.5 font-['General_Sans',_sans-serif] font-bold text-[#9d8d68] text-[8.5px] tracking-[0.17px] whitespace-nowrap">AI Agent</span>
                    <p className="font-['General_Sans',_sans-serif] text-[#1b1713] text-xs leading-[1.25]">Yes it does 🌿 I'll hold one in sage green for you — want me to send the checkout link now?</p>
                    <p className="font-['General_Sans',_sans-serif] text-[#969695] text-[10px] mt-2">now</p>
                  </div>
                </div>
                <div className="bg-white border-t border-[rgba(27,23,19,0.09)] flex gap-2.5 items-center px-5 py-3.5">
                  <div className="bg-white border border-[rgba(27,23,19,0.09)] rounded-full flex-1 min-w-0 px-[17px] py-[11px]">
                    <span className="font-['General_Sans',_sans-serif] text-[#8a8177] text-[12.5px] whitespace-nowrap">Type a reply…</span>
                  </div>
                  <div className="bg-[#ff5a38] rounded-full size-[34px] flex items-center justify-center shrink-0">
                    <img alt="" className="size-[15px]" src={imgSvg10} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* phone mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true, amount: 0.2 }}
          className="hero-phone absolute left-1/2 -translate-x-1/2 hidden md:flex top-[220px] w-[221px] h-[446px] items-center justify-center overflow-hidden"
          style={{ maskImage: "linear-gradient(to bottom, black 0%, black 78%, transparent 96%)", WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 78%, transparent 96%)" }}
        >
          <div className="scale-[0.72]">
            <div
              className="relative rounded-[50px] w-[307px] h-[620px] shadow-[-33px_4px_47.4px_0px_rgba(0,0,0,0.12),25px_93px_44.3px_0px_rgba(0,0,0,0.12),0px_2px_3px_0px_rgba(27,23,19,0.2),0px_24px_48px_0px_rgba(27,23,19,0.22)]"
              style={{
                backgroundImage:
                  "linear-gradient(148.5deg, rgb(85, 80, 74) 0%, rgb(40, 36, 31) 22%, rgb(18, 16, 14) 48%, rgb(28, 25, 22) 74%, rgb(70, 63, 56) 100%)",
              }}
            >
              <div className="absolute bg-black border-[5px] border-[#060505] flex flex-col items-center left-2 top-2 w-[292px] h-[600px] rounded-[42px] overflow-hidden p-[5px]">
                <div className="flex items-center justify-between pt-3.5 px-6 w-full">
                  <span className="font-['General_Sans',_sans-serif] font-semibold text-white text-xs tracking-[0.12px]">10:18</span>
                  <div className="flex gap-[5px] items-center">
                    <div className="flex gap-[1.5px] items-end">
                      <div className="bg-white h-1 w-[2.5px] rounded-[1px]" />
                      <div className="bg-white h-[5.5px] w-[2.5px] rounded-[1px]" />
                      <div className="bg-white h-[7px] w-[2.5px] rounded-[1px]" />
                      <div className="bg-white opacity-40 h-[8.5px] w-[2.5px] rounded-[1px]" />
                    </div>
                    <span className="font-['General_Sans',_sans-serif] font-bold text-white text-[9px]">LTE</span>
                    <div className="border border-white/50 h-[9.5px] w-[19px] rounded-[3px] relative">
                      <div className="absolute bg-white inset-[1.5px_5px_1.5px_1.5px] rounded-[1px]" />
                    </div>
                  </div>
                </div>
                <div className="h-[132px] w-[97px] rounded-[11px] shadow-[0px_4px_14px_0px_rgba(0,0,0,0.4)] mt-2 overflow-hidden bg-gradient-to-b from-[#4a3f38] to-[#0d0b0a]">
                  <img alt="" className="size-full object-cover" src={imgBackgroundShadow} />
                </div>
                <div className="bg-white flex-1 w-full rounded-t-[18px] mt-2 relative overflow-hidden">
                  <p className="text-center text-[#5c544b] font-['General_Sans',_sans-serif] text-xs pt-4 px-4">
                    Search:{" "}
                    <span className="font-semibold text-[#2a6fdb]">the everyday set price 🔍</span>
                  </p>
                  <div className="border-b border-[rgba(27,23,19,0.09)] flex items-center justify-center pb-3 px-4 mt-6 relative">
                    <span className="font-['General_Sans',_sans-serif] font-semibold text-[13px] text-[rgba(27,23,19,0.63)]">1,204 comments</span>
                    <span className="absolute right-4 top-0 text-[#5c544b] text-[15px] leading-none">✕</span>
                  </div>
                  <div className="flex gap-2.5 items-start px-4 mt-4">
                    <div className="bg-[#dad9db] rounded-full size-[30px] flex items-center justify-center shrink-0">
                      <span className="font-['General_Sans',_sans-serif] font-semibold text-white text-[11px]">MK</span>
                    </div>
                    <div className="min-w-0">
                      <p className="font-['General_Sans',_sans-serif] font-medium text-[#8a8177] text-[11.5px]">@mia.k</p>
                      <p className="font-['General_Sans',_sans-serif] font-medium text-[13.5px] text-[rgba(27,23,19,0.63)]">how much is this? 😍</p>
                      <div className="flex gap-4 items-center mt-1">
                        <span className="font-['General_Sans',_sans-serif] font-medium text-[#8a8177] text-[11px]">2s</span>
                        <span className="font-['General_Sans',_sans-serif] font-semibold text-[#8a8177] text-[11px]">Reply</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center shrink-0">
                      <img alt="" className="size-4" src={imgSvg11} />
                      <span className="font-['General_Sans',_sans-serif] font-medium text-[#8a8177] text-[10.5px]">12</span>
                    </div>
                  </div>
                  <div className="flex gap-2.5 items-start px-4 mt-4" style={{ paddingLeft: 40 }}>
                    <div className="bg-[#ff5a38] rounded-full size-[26px] flex items-center justify-center shrink-0">
                      <span className="font-['General_Sans',_sans-serif] font-semibold text-white text-[10px]">B</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-['General_Sans',_sans-serif] font-semibold text-[#2a6fdb] text-[11.5px] flex items-center gap-1.5 flex-wrap">
                        yourbrand
                        <span className="bg-[#ffede8] rounded-full px-[7px] py-0.5 font-['General_Sans',_sans-serif] font-bold text-[#e8492a] text-[8.5px] tracking-[0.17px]">AI Agent</span>
                        <span className="font-['General_Sans',_sans-serif] font-medium text-[#8a8177] text-[11.5px]">· Creator</span>
                      </p>
                      <p className="font-['General_Sans',_sans-serif] font-medium text-[13px] text-[rgba(27,23,19,0.63)] leading-[1.35] mt-1">
                        Hey Mia! It's $49 with free shipping this week — just slid into your DMs 🧡
                      </p>
                      <div className="flex gap-4 items-center mt-1">
                        <span className="font-['General_Sans',_sans-serif] font-medium text-[#8a8177] text-[11px]">now</span>
                        <span className="font-['General_Sans',_sans-serif] font-semibold text-[#8a8177] text-[11px]">Reply</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center shrink-0">
                      <img alt="" className="size-4" src={imgSvg12} />
                      <span className="font-['General_Sans',_sans-serif] font-medium text-[#8a8177] text-[10.5px]">31</span>
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 bg-[#f1efea] rounded-full flex gap-[9px] items-center px-[11px] py-2">
                    <div
                      className="rounded-full size-[26px] flex items-center justify-center shrink-0"
                      style={{ backgroundImage: "linear-gradient(135deg, rgb(87, 184, 148) 0%, rgb(47, 143, 107) 100%)" }}
                    >
                      <span className="font-['General_Sans',_sans-serif] font-semibold text-white text-[10px]">Y</span>
                    </div>
                    <span className="font-['General_Sans',_sans-serif] text-[#8a8177] text-xs">Add comment…</span>
                    <span className="ml-auto text-[#8a8177] text-[13px] tracking-[3px] opacity-50">🖼 😊 @</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* simplified mobile-only preview */}
        <div className="md:hidden w-full flex justify-center">
          <div className="bg-white border border-[rgba(27,23,19,0.08)] rounded-2xl shadow-[0px_20px_50px_rgba(27,23,19,0.12)] p-4 w-full max-w-sm">
            <p className="font-['General_Sans',_sans-serif] font-semibold text-[#1b1713] text-sm mb-2">Unified Inbox</p>
            <ConvoItem name="Mia K." time="now" text="how much is this? 😍" tag="AI replied · New lead" active />
            <ConvoItem name="@kofi.k" time="9m" text="do you ship to the UK?" />
          </div>
        </div>
      </div>

      {/* bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-[220px] bg-gradient-to-b from-transparent to-[#fffdfa]" />
    </div>
  );
}

function NavGroup({ label, children }) {
  return (
    <div className="mb-4">
      <p className="font-['General_Sans',_sans-serif] font-semibold text-[#8a8177] text-[10px] tracking-[0.9px] uppercase px-2.5 pt-3 pb-[9px]">
        {label}
      </p>
      <div className="flex flex-col gap-[9px]">{children}</div>
    </div>
  );
}

function NavItem({ icon, label, count, active, countBg = "bg-[rgba(27,23,19,0.06)]", countColor = "text-[#5c544b]" }) {
  return (
    <div
      className={`flex gap-2.5 items-center px-[11px] py-[7px] rounded-[10px] ${
        active ? "bg-white border border-[rgba(27,23,19,0.08)] shadow-[0px_1px_1px_rgba(27,23,19,0.04),0px_4px_5px_rgba(27,23,19,0.05)]" : ""
      }`}
    >
      <img alt="" className="size-4" src={icon} />
      <span
        className={`font-['General_Sans',_sans-serif] text-xs whitespace-nowrap ${
          active ? "font-semibold text-[#1b1713]" : "font-medium text-[#5c544b]"
        }`}
      >
        {label}
      </span>
      {count && (
        <span className={`ml-auto ${countBg} ${countColor} rounded-full size-[19px] flex items-center justify-center font-['General_Sans',_sans-serif] font-semibold text-[10px]`}>
          {count}
        </span>
      )}
    </div>
  );
}

function ConvoItem({ name, time, text, tag, active }) {
  return (
    <div
      className={`flex flex-col gap-0.5 px-4 py-3 border-l-[2.5px] ${
        active ? "bg-[#fffdf8] border-[#ff5a38]" : "border-transparent"
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="font-['General_Sans',_sans-serif] font-semibold text-[#1b1713] text-[13px]">{name}</span>
        <span className="font-['General_Sans',_sans-serif] font-medium text-[#8a8177] text-[10.5px]">{time}</span>
      </div>
      <p className="font-['General_Sans',_sans-serif] text-[#8a8177] text-xs truncate">{text}</p>
      {tag && (
        <span className="self-start bg-[#ffede8] text-[#e8492a] rounded-full px-2 py-[1.5px] font-['General_Sans',_sans-serif] font-semibold text-[9.5px] mt-0.5">
          {tag}
        </span>
      )}
    </div>
  );
}
