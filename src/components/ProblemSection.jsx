import { motion } from "framer-motion";
import imgTheMessIcon from "../assets/problem/imgSvg.svg";
import imgConnections from "../assets/problem/imgContainer.svg";
import imgInstagram from "../assets/problem/imgFfffff.svg";
import imgWhatsapp from "../assets/problem/imgFfffff1.svg";
import imgTiktok from "../assets/problem/imgFfffff2.svg";
import imgPhone from "../assets/problem/imgSvg1.svg";
import imgGmail from "../assets/problem/imgEa4335.svg";
import imgFacebook from "../assets/problem/imgFfffff3.svg";
import imgInstagramMini from "../assets/problem/imgFfffff4.svg";
import imgWhatsappMini from "../assets/problem/imgFfffff5.svg";
import imgTiktokMini from "../assets/problem/imgFfffff6.svg";
import imgPhoneMini from "../assets/problem/imgSvg2.svg";
import imgGmailMini from "../assets/problem/imgEa4336.svg";
import imgFacebookMini from "../assets/problem/imgFfffff7.svg";

const instagramGradientBig = {
  backgroundImage:
    "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 28 28' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%25' width='100%25' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(3.6508 0 0 3.6508 8.4 30.8)'><stop stop-color='rgba(253,203,82,1)' offset='0'/><stop stop-color='rgba(253,160,69,1)' offset='0.1375'/><stop stop-color='rgba(253,116,56,1)' offset='0.275'/><stop stop-color='rgba(253,73,42,1)' offset='0.4125'/><stop stop-color='rgba(253,51,36,1)' offset='0.48125'/><stop stop-color='rgba(253,29,29,1)' offset='0.55'/><stop stop-color='rgba(223,36,67,1)' offset='0.6625'/><stop stop-color='rgba(192,44,105,1)' offset='0.775'/><stop stop-color='rgba(162,51,142,1)' offset='0.8875'/><stop stop-color='rgba(131,58,180,1)' offset='1'/></radialGradient></defs></svg>\")",
};

const instagramGradientSmall = {
  backgroundImage:
    "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 22 22' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%25' width='100%25' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(2.8684 0 0 2.8684 6.6 24.2)'><stop stop-color='rgba(253,203,82,1)' offset='0'/><stop stop-color='rgba(253,160,69,1)' offset='0.1375'/><stop stop-color='rgba(253,116,56,1)' offset='0.275'/><stop stop-color='rgba(253,73,42,1)' offset='0.4125'/><stop stop-color='rgba(253,51,36,1)' offset='0.48125'/><stop stop-color='rgba(253,29,29,1)' offset='0.55'/><stop stop-color='rgba(223,36,67,1)' offset='0.6625'/><stop stop-color='rgba(192,44,105,1)' offset='0.775'/><stop stop-color='rgba(162,51,142,1)' offset='0.8875'/><stop stop-color='rgba(131,58,180,1)' offset='1'/></radialGradient></defs></svg>\")",
};

const CHANNELS = [
  {
    key: "instagram",
    icon: imgInstagram,
    iconMini: imgInstagramMini,
    swatchStyle: instagramGradientBig,
    swatchStyleMini: instagramGradientSmall,
    name: "@nina.styles",
    time: "2m",
    text: "“is this still available??”",
    textMini: "is this still available??",
    unread: true,
    top: "0.4%",
    bottom: "84.8%",
  },
  {
    key: "whatsapp",
    icon: imgWhatsapp,
    iconMini: imgWhatsappMini,
    swatchClass: "bg-[#25d366]",
    name: "Dana R.",
    time: "5m",
    text: "“hi, I ordered last week and…”",
    textMini: "hi, I ordered last week…",
    unread: true,
    top: "17.4%",
    bottom: "67.8%",
  },
  {
    key: "tiktok",
    icon: imgTiktok,
    iconMini: imgTiktokMini,
    swatchClass: "bg-[#010101]",
    name: "@kofi.k",
    time: "9m",
    text: "“do you ship to the UK?”",
    textMini: "do you ship to the UK?",
    unread: true,
    top: "34.3%",
    bottom: "50.9%",
  },
  {
    key: "phone",
    icon: imgPhone,
    iconMini: imgPhoneMini,
    swatchClass: "bg-[#3e3a36]",
    iconSize: "size-[14px]",
    iconSizeMini: "size-[11px]",
    name: "+44 7911 20…",
    time: "1h",
    text: "Missed call — no voicemail",
    textMini: "Missed · AI returned it",
    unread: false,
    top: "51.3%",
    bottom: "33.9%",
  },
  {
    key: "gmail",
    icon: imgGmail,
    iconMini: imgGmailMini,
    swatchClass: "bg-white border border-[rgba(27,23,19,0.1)]",
    name: "S. Okafor",
    time: "1h",
    text: "“Re: refund request #2216”",
    textMini: "Re: refund request #2216",
    unread: false,
    top: "68.3%",
    bottom: "16.9%",
  },
  {
    key: "facebook",
    icon: imgFacebook,
    iconMini: imgFacebookMini,
    swatchClass: "bg-[#0866ff]",
    name: "Tom H.",
    time: "2h",
    text: "“what colours do you have?”",
    textMini: "what colours do you have?",
    unread: false,
    top: "85.2%",
    bottom: "0%",
  },
];

function SyncIcon({ className }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className}>
      <path
        d="M13 8a5 5 0 1 1-1.6-3.65M13 2.2v3.4h-3.4"
        stroke="white"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChannelCard({ channel, className }) {
  return (
    <div
      className={`bg-white border border-[rgba(27,23,19,0.07)] rounded-[14px] flex items-center gap-2.5 px-[15px] py-2.5 ${className || ""}`}
    >
      <div
        className={`relative rounded-[9px] shrink-0 size-7 flex items-center justify-center ${channel.swatchClass || ""}`}
        style={channel.swatchStyle}
      >
        <img alt="" className={channel.iconSize || "size-[15px]"} src={channel.icon} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <span className="font-semibold text-[#1b1713] text-[12.5px] truncate">{channel.name}</span>
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="text-[#8a8177] text-[9px]">{channel.time}</span>
            {channel.unread && <span className="bg-[#ff5a38] rounded-[3px] size-[6px]" />}
          </div>
        </div>
        <p className="text-[#5c544b] text-[12.5px] truncate">{channel.text}</p>
      </div>
    </div>
  );
}

function MiniRow({ channel }) {
  return (
    <div className="flex items-center gap-2.5 py-[9px] rounded-[10px] w-full">
      <div
        className={`flex items-center justify-center shrink-0 rounded-[6px] size-[22px] overflow-hidden ${channel.swatchClass || ""}`}
        style={channel.swatchStyleMini}
      >
        <img alt="" className={channel.iconSizeMini || "size-3"} src={channel.iconMini} />
      </div>
      <span className="font-semibold text-[#1b1713] text-[12.5px] whitespace-nowrap shrink-0">{channel.name}</span>
      <span className="text-[#8a8177] text-[12.5px] truncate flex-1 min-w-0">{channel.textMini}</span>
      {channel.unread && <span className="bg-[#ff5a38] rounded-[3.5px] size-[7px] shrink-0" />}
    </div>
  );
}

function InboxCard({ className, style }) {
  return (
    <div
      className={`bg-[#faf7f0] border border-[rgba(27,23,19,0.16)] rounded-[18px] p-[15px] flex flex-col ${className || ""}`}
      style={style}
    >
      <div className="flex items-center gap-2 pb-3 px-1">
        <div className="bg-[#ff5a38] rounded-[7px] size-[22px] flex items-center justify-center shrink-0">
          <SyncIcon className="size-[10px]" />
        </div>
        <span className="font-bold text-[#1b1713] text-[13.5px] tracking-[-0.135px]">Dupci</span>
        <span className="font-medium text-[#8a8177] text-[12px] tracking-[-0.135px]">&middot; one platform</span>
      </div>
      <div className="bg-white border border-[rgba(27,23,19,0.09)] rounded-[12px] shadow-[0px_1px_1.5px_rgba(27,23,19,0.05)] p-[15px] flex flex-col flex-1">
        <div className="flex items-center justify-between pb-1">
          <span className="font-semibold text-[#1b1713] text-[14.5px]">Inbox</span>
          <span className="font-medium text-[#8a8177] text-[9px] tracking-[1.26px] uppercase">All channels</span>
        </div>
        <div className="flex flex-col">
          {CHANNELS.map((channel) => (
            <MiniRow key={channel.key} channel={channel} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProblemSection() {
  return (
    <section className="w-full bg-[#f3eee3] border-y border-[rgba(27,23,19,0.09)] flex flex-col items-center px-6 sm:px-10 md:px-[60px] lg:px-[120px] py-16 sm:py-20 lg:py-[131px]">
      <div className="w-full max-w-[1200px] flex flex-col gap-10 sm:gap-12 lg:gap-16 items-center">
        <motion.div
          className="flex flex-col gap-3 items-center w-full text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}
            className="flex gap-1.5 items-center bg-[rgba(27,23,19,0.03)] border border-[rgba(27,23,19,0.16)] rounded-[100px] pl-[11px] pr-[14px] py-[7px] shadow-[0px_1px_2px_0px_rgba(27,23,19,0.03),0px_3px_8px_0px_rgba(27,23,19,0.04)]"
          >
            <img alt="" className="size-[13px]" src={imgTheMessIcon} />
            <span className="font-medium text-[#5c544b] text-[12.5px] leading-5">The mess</span>
          </motion.div>
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}
            className="max-w-[705px] font-semibold text-[#1b1713] text-[32px] sm:text-[42px] lg:text-[54px] leading-[1.1] tracking-[-1.15px]"
          >
            Your customers are talking in seven places at once
          </motion.h2>
          <motion.div
            variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}
            className="max-w-[480px] pt-0.5"
          >
            <p className="text-[#5c544b] text-[16px] sm:text-[18px] leading-[1.6]">
              Comments go unanswered, leads slip through, and nobody has a single view of the
              customer. Dupci catches every one of them before they slip through
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-[#fffdfa] border border-[rgba(27,23,19,0.09)] rounded-[24px] w-full p-6 sm:p-8 lg:px-[41px] lg:py-[45px]"
        >
          <div className="hidden md:block relative w-full aspect-[1120/460]">
            <motion.img
              alt=""
              className="absolute inset-0 w-full h-full"
              src={imgConnections}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
              viewport={{ once: true, amount: 0.2 }}
            />

            {CHANNELS.map((channel, i) => (
              <motion.div
                key={channel.key}
                className="absolute left-0 w-[24.5%]"
                style={{ top: channel.top, bottom: channel.bottom }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 + i * 0.08 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <ChannelCard channel={channel} className="h-full" />
              </motion.div>
            ))}

            <motion.div
              className="absolute"
              style={{ top: "6.5%", right: 0, bottom: "6.9%", left: "64.5%" }}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.75 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <InboxCard className="h-full" />
            </motion.div>

            <motion.div
              className="absolute left-1/2 -translate-x-1/2 bg-white border border-[rgba(27,23,19,0.16)] rounded-[36px] flex items-center justify-center p-px shadow-[0px_2px_6px_0px_rgba(27,23,19,0.06),0px_14px_34px_0px_rgba(255,90,56,0.16)] w-[72px]"
              style={{ top: "41.35%", bottom: "41.76%" }}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div
                className="bg-[#ff5a38] rounded-[11px] size-9 flex items-center justify-center shadow-[0px_4px_6px_rgba(255,90,56,0.3)] shrink-0"
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <SyncIcon className="size-4" />
              </motion.div>
            </motion.div>
          </div>

          <div className="md:hidden flex flex-col gap-3">
            {CHANNELS.map((channel, i) => (
              <motion.div
                key={channel.key}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.06 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <ChannelCard channel={channel} />
              </motion.div>
            ))}
            <div className="flex justify-center py-1">
              <div className="bg-white border border-[rgba(27,23,19,0.16)] rounded-full flex items-center justify-center shadow-[0px_2px_6px_0px_rgba(27,23,19,0.06),0px_14px_34px_0px_rgba(255,90,56,0.16)] p-1.5">
                <motion.div
                  className="bg-[#ff5a38] rounded-[11px] size-9 flex items-center justify-center shadow-[0px_4px_6px_rgba(255,90,56,0.3)]"
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <SyncIcon className="size-4" />
                </motion.div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <InboxCard />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
