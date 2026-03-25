import { Check, Copy, ExternalLink, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { SiTelegram, SiX } from "react-icons/si";

const CA = "0x381491960c37b65862819cEd0e35385f04B2C78B";

const goldGrad =
  "linear-gradient(135deg, oklch(0.75 0.12 75), oklch(0.65 0.14 70))";
const goldText = { color: "oklch(0.82 0.15 80)" };
const dimText = { color: "oklch(0.65 0.01 80)" };
const mutedText = { color: "oklch(0.55 0.01 80)" };
const cardStyle = {
  background: "oklch(0.14 0.008 240)",
  border: "1px solid oklch(0.75 0.12 75 / 0.2)",
};

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Legend", href: "#legend" },
    { label: "Tokenomics", href: "#tokenomics" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Community", href: "#community" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(11,15,18,0.93)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid oklch(0.75 0.12 75 / 0.15)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            className="flex items-center gap-3"
            data-ocid="header.link"
          >
            <img
              src="/assets/generated/hachiko-logo-transparent.dim_300x300.png"
              alt="Logo"
              className="w-10 h-10 rounded-full object-cover"
              style={{ boxShadow: "0 0 12px oklch(0.75 0.12 75 / 0.5)" }}
            />
            <span
              className="font-orbitron font-bold text-lg"
              style={{
                ...goldText,
                textShadow: "0 0 10px oklch(0.75 0.12 75 / 0.6)",
              }}
            >
              $HACHIKO OG
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-poppins text-sm transition-colors duration-200 hover:text-amber-300"
                style={mutedText}
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://app.uniswap.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-poppins font-semibold text-sm px-4 py-2 rounded-full transition-all hover:opacity-90"
              style={{
                background: goldGrad,
                color: "oklch(0.1 0.005 240)",
                boxShadow: "0 0 16px oklch(0.75 0.12 75 / 0.4)",
              }}
              data-ocid="header.primary_button"
            >
              BUY $HACHIKO
            </a>
            <a
              href="https://x.com/HachikoinuOg"
              target="_blank"
              rel="noopener noreferrer"
              className="font-poppins font-semibold text-sm px-4 py-2 rounded-full transition-all hover:opacity-90"
              style={{
                background: "oklch(0.14 0.008 240)",
                color: "oklch(0.9 0.01 80)",
                border: "1px solid oklch(0.75 0.12 75 / 0.3)",
              }}
              data-ocid="header.secondary_button"
            >
              Follow X
            </a>
          </div>

          <button
            type="button"
            className="md:hidden p-2"
            style={goldText}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
            style={{
              background: "rgba(11,15,18,0.98)",
              borderTop: "1px solid oklch(0.75 0.12 75 / 0.15)",
            }}
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-poppins text-sm py-1"
                  style={mutedText}
                  onClick={() => setMenuOpen(false)}
                  data-ocid="nav.link"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://app.uniswap.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-poppins font-semibold text-sm px-4 py-2 rounded-full inline-block w-fit mt-2"
                style={{ background: goldGrad, color: "oklch(0.1 0.005 240)" }}
                data-ocid="mobile.primary_button"
              >
                BUY $HACHIKO
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16"
      style={{
        background:
          "linear-gradient(180deg, #0b0f12 0%, #0d1117 60%, #0b0f12 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 70% 50%, oklch(0.75 0.12 75 / 0.08) 0%, transparent 60%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-poppins text-xs font-semibold tracking-widest mb-4"
              style={goldText}
            >
              🐕 THE ORIGINAL MEME LEGEND
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-orbitron font-black text-5xl sm:text-6xl lg:text-7xl leading-tight mb-4"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.88 0.15 80) 0%, oklch(0.75 0.12 75) 50%, oklch(0.6 0.10 70) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 20px oklch(0.75 0.12 75 / 0.4))",
              }}
            >
              $HACHIKO OG
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="font-orbitron font-medium text-xl sm:text-2xl mb-3"
              style={goldText}
            >
              Loyalty Never Dies 🐕🇯🇵
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="font-poppins text-lg mb-8 leading-relaxed"
              style={dimText}
            >
              The Original Symbol of Loyalty in Crypto. Born from the legend of
              Hachiko — the Akita who waited 10 years at Shibuya Station for his
              beloved owner.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="https://t.me/HachikoInuOG"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-poppins font-semibold px-6 py-3 rounded-full transition-all hover:scale-105"
                style={{
                  background: "oklch(0.14 0.008 240)",
                  color: "oklch(0.9 0.01 80)",
                  border: "1px solid oklch(0.75 0.12 75 / 0.3)",
                }}
                data-ocid="hero.secondary_button"
              >
                <SiTelegram size={18} />
                Join Telegram
              </a>
              <a
                href="https://app.uniswap.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-poppins font-semibold px-6 py-3 rounded-full transition-all hover:scale-105"
                style={{
                  background: goldGrad,
                  color: "oklch(0.1 0.005 240)",
                  boxShadow: "0 0 24px oklch(0.75 0.12 75 / 0.5)",
                }}
                data-ocid="hero.primary_button"
              >
                <ExternalLink size={18} />
                BUY $HACHIKO
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex justify-center lg:justify-end relative"
          >
            <div className="relative float-animation">
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: "oklch(0.75 0.12 75 / 0.08)",
                  filter: "blur(40px)",
                  transform: "scale(1.3)",
                }}
              />
              <img
                src="/assets/generated/hachiko-hero.dim_600x500.jpg"
                alt="Hachiko at Shibuya"
                className="relative rounded-2xl object-cover gold-glow"
                style={{
                  width: "100%",
                  maxWidth: "520px",
                  border: "1px solid oklch(0.75 0.12 75 / 0.3)",
                  boxShadow: "0 0 60px oklch(0.75 0.12 75 / 0.25)",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function LegendSection() {
  return (
    <section id="legend" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div
              className="relative rounded-2xl overflow-hidden gold-border-glow"
              style={{
                border: "2px solid oklch(0.75 0.12 75 / 0.5)",
                maxWidth: "420px",
                width: "100%",
              }}
            >
              <img
                src="/assets/generated/hachiko-logo-transparent.dim_300x300.png"
                alt="Hachiko Legend"
                className="w-full object-cover"
                style={{ background: "oklch(0.12 0.006 240)" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 60%, oklch(0.08 0.003 240 / 0.9) 100%)",
                }}
              />
              <div
                className="absolute bottom-4 left-4 font-orbitron text-sm font-medium"
                style={goldText}
              >
                Hachiko • 1923–1935
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div
              className="font-poppins text-xs font-semibold tracking-widest mb-3"
              style={goldText}
            >
              LEGEND STORY
            </div>
            <h2
              className="font-orbitron font-bold text-3xl sm:text-4xl mb-6 leading-tight"
              style={{ color: "oklch(0.95 0.01 80)" }}
            >
              The Wait That Moved a Nation
            </h2>
            <div
              className="space-y-4 font-poppins text-base leading-relaxed"
              style={dimText}
            >
              <p>
                In 1920s Tokyo, a loyal Akita named{" "}
                <strong style={goldText}>Hachiko</strong> accompanied his owner,
                Professor Hidesaburo Ueno, to Shibuya Station every morning and
                waited faithfully for his return each evening.
              </p>
              <p>
                When the professor died suddenly in 1925, Hachiko continued his
                vigil. For nearly <strong style={goldText}>10 years</strong> —
                every single day — he returned to Shibuya Station, waiting for
                someone who would never come back.
              </p>
              <p>
                His story became a national symbol of loyalty and devotion. A
                bronze statue stands at Shibuya Station to this day, where
                millions pay tribute to his unwavering spirit.
              </p>
              <p className="font-semibold text-lg" style={goldText}>
                $HACHIKO OG honors that unwavering loyalty — the strongest bond
                in crypto.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      type="button"
      onClick={handleCopy}
      className="flex items-center gap-1 font-poppins text-xs px-3 py-1 rounded-full transition-all"
      style={{
        background: copied
          ? "oklch(0.75 0.12 75 / 0.2)"
          : "oklch(0.18 0.01 240)",
        color: copied ? "oklch(0.82 0.15 80)" : "oklch(0.65 0.01 80)",
        border: "1px solid oklch(0.75 0.12 75 / 0.3)",
      }}
      data-ocid="tokenomics.button"
    >
      {copied ? <Check size={12} /> : <Copy size={12} />}
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

function TokenomicsSection() {
  const stats = [
    { label: "Name", value: "Hachiko OG" },
    { label: "Symbol", value: "$HACHIKO" },
    { label: "Chain", value: "Ethereum" },
    { label: "Total Supply", value: "1,000,000,000" },
  ];
  return (
    <section id="tokenomics" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2
            className="font-orbitron font-bold text-3xl sm:text-4xl"
            style={{ color: "oklch(0.95 0.01 80)" }}
          >
            📜 Token Information
          </h2>
          <div
            className="mt-3 h-px max-w-32 mx-auto"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.75 0.12 75), transparent)",
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid grid-cols-2 gap-4 mb-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="rounded-2xl p-6 text-center"
              style={cardStyle}
            >
              <div
                className="font-poppins text-xs font-semibold tracking-widest mb-2"
                style={goldText}
              >
                {stat.label.toUpperCase()}
              </div>
              <div
                className="font-orbitron font-bold text-xl"
                style={{ color: "oklch(0.9 0.01 80)" }}
              >
                {stat.value}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-2xl p-6 mb-10"
          style={{
            background: "oklch(0.14 0.008 240)",
            border: "1px solid oklch(0.75 0.12 75 / 0.25)",
          }}
        >
          <div
            className="font-poppins text-xs font-semibold tracking-widest mb-3"
            style={goldText}
          >
            CONTRACT ADDRESS
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <code
              className="font-poppins text-sm break-all flex-1"
              style={{ color: "oklch(0.8 0.01 80)" }}
            >
              {CA}
            </code>
            <CopyButton text={CA} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div
            className="font-poppins text-sm mb-4"
            style={{ color: "oklch(0.6 0.01 80)" }}
          >
            Join the Community
          </div>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://t.me/HachikoInuOG"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-poppins font-semibold text-sm px-5 py-2.5 rounded-full transition-all hover:scale-105"
              style={{
                background: "oklch(0.45 0.12 220 / 0.15)",
                color: "oklch(0.7 0.1 220)",
                border: "1px solid oklch(0.45 0.12 220 / 0.4)",
              }}
              data-ocid="tokenomics.secondary_button"
            >
              <SiTelegram size={16} /> Telegram
            </a>
            <a
              href="https://x.com/HachikoinuOg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-poppins font-semibold text-sm px-5 py-2.5 rounded-full transition-all hover:scale-105"
              style={{
                background: "oklch(0.2 0.005 240)",
                color: "oklch(0.9 0.01 80)",
                border: "1px solid oklch(0.4 0.01 240)",
              }}
              data-ocid="tokenomics.link"
            >
              <SiX size={14} /> Twitter / X
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const roadmapPhases = [
  {
    phase: "Phase 1",
    title: "The Wait Begins",
    status: "done",
    items: ["Launch token", "Build loyal community", "Deploy website"],
  },
  {
    phase: "Phase 2",
    title: "Loyalty Spreads",
    status: "active",
    items: ["Memes expansion", "Community growth", "Influencer partnerships"],
  },
  {
    phase: "Phase 3",
    title: "Shibuya Legacy",
    status: "upcoming",
    items: ["DEX listings", "Trending campaigns", "Major marketing push"],
  },
  {
    phase: "Phase 4",
    title: "Eternal Loyalty",
    status: "upcoming",
    items: ["CEX listings", "Global recognition", "Community-driven future"],
  },
];

function RoadmapSection() {
  return (
    <section id="roadmap" className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2
            className="font-orbitron font-bold text-3xl sm:text-4xl"
            style={{ color: "oklch(0.95 0.01 80)" }}
          >
            🗾 Roadmap
          </h2>
          <div
            className="mt-3 h-px max-w-32 mx-auto"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.75 0.12 75), transparent)",
            }}
          />
        </motion.div>

        <div className="relative">
          <div
            className="absolute top-0 bottom-0 w-px"
            style={{
              left: "23px",
              background:
                "linear-gradient(180deg, oklch(0.75 0.12 75 / 0.8) 0%, oklch(0.75 0.12 75 / 0.15) 100%)",
            }}
          />
          <div className="space-y-8">
            {roadmapPhases.map((phase, i) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative flex gap-6"
                data-ocid={`roadmap.item.${i + 1}`}
              >
                <div
                  className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    background:
                      phase.status === "done"
                        ? goldGrad
                        : "oklch(0.12 0.005 240)",
                    border:
                      phase.status === "upcoming"
                        ? "2px solid oklch(0.75 0.12 75 / 0.3)"
                        : "2px solid oklch(0.75 0.12 75)",
                    boxShadow:
                      phase.status === "done"
                        ? "0 0 16px oklch(0.75 0.12 75 / 0.6)"
                        : phase.status === "active"
                          ? "0 0 12px oklch(0.75 0.12 75 / 0.3)"
                          : "none",
                  }}
                >
                  <span
                    className="font-orbitron font-bold text-xs"
                    style={{
                      color:
                        phase.status === "done"
                          ? "oklch(0.1 0.005 240)"
                          : "oklch(0.75 0.12 75)",
                    }}
                  >
                    {i + 1}
                  </span>
                </div>

                <div
                  className="flex-1 rounded-2xl p-5 mb-2"
                  style={{
                    background: "oklch(0.14 0.008 240)",
                    border:
                      phase.status === "active"
                        ? "1px solid oklch(0.75 0.12 75 / 0.5)"
                        : "1px solid oklch(0.75 0.12 75 / 0.15)",
                    boxShadow:
                      phase.status === "active"
                        ? "0 0 20px oklch(0.75 0.12 75 / 0.1)"
                        : "none",
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="font-poppins text-xs font-semibold tracking-widest"
                      style={goldText}
                    >
                      {phase.phase}
                    </span>
                    {phase.status === "done" && (
                      <span
                        className="font-poppins text-xs px-2 py-0.5 rounded-full"
                        style={{
                          background: "oklch(0.75 0.12 75 / 0.2)",
                          color: "oklch(0.82 0.15 80)",
                        }}
                      >
                        ✓ DONE
                      </span>
                    )}
                    {phase.status === "active" && (
                      <span
                        className="font-poppins text-xs px-2 py-0.5 rounded-full"
                        style={{
                          background: "oklch(0.45 0.12 220 / 0.2)",
                          color: "oklch(0.7 0.1 220)",
                        }}
                      >
                        IN PROGRESS
                      </span>
                    )}
                  </div>
                  <h3
                    className="font-orbitron font-bold text-lg mb-3"
                    style={{ color: "oklch(0.9 0.01 80)" }}
                  >
                    {phase.title}
                  </h3>
                  <ul className="space-y-1.5">
                    {phase.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 font-poppins text-sm"
                        style={dimText}
                      >
                        <span style={goldText}>▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyHachikoSection() {
  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="font-orbitron font-bold text-3xl sm:text-4xl mb-8"
            style={{ color: "oklch(0.95 0.01 80)" }}
          >
            🐕 Why Hachiko?
          </h2>
          <div className="rounded-2xl p-8 space-y-5" style={cardStyle}>
            <p className="font-poppins text-lg leading-relaxed" style={dimText}>
              Hachiko represents loyalty beyond time. In the volatile world of
              crypto, the strongest asset is belief — and belief is loyalty. The
              holders who stay, who wait, who never abandon ship — they are the
              real Hachikos.
            </p>
            <p className="font-poppins text-lg leading-relaxed" style={dimText}>
              $HACHIKO OG is more than a meme coin — it&#39;s a tribute to the
              most loyal dog in history and a rallying call for a community that
              holds through every storm.
            </p>
            <p
              className="font-orbitron font-medium text-xl"
              style={{
                color: "oklch(0.82 0.15 80)",
                textShadow: "0 0 20px oklch(0.75 0.12 75 / 0.5)",
              }}
            >
              Loyalty Lives Forever. 🐕🇯🇵
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CommunitySection() {
  return (
    <section id="community" className="py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="font-orbitron font-bold text-3xl sm:text-4xl mb-4"
            style={{ color: "oklch(0.95 0.01 80)" }}
          >
            🔗 Join the Pack
          </h2>
          <p
            className="font-poppins text-lg mb-10"
            style={{ color: "oklch(0.6 0.01 80)" }}
          >
            Be part of the most loyal community in crypto. The pack grows
            stronger together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <motion.a
              href="https://t.me/HachikoInuOG"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-3 font-poppins font-semibold text-lg px-8 py-4 rounded-full"
              style={{
                background: goldGrad,
                color: "oklch(0.1 0.005 240)",
                boxShadow: "0 0 32px oklch(0.75 0.12 75 / 0.5)",
              }}
              data-ocid="community.primary_button"
            >
              <SiTelegram size={22} /> Join Telegram
            </motion.a>
            <motion.a
              href="https://x.com/HachikoinuOg"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-3 font-poppins font-semibold text-lg px-8 py-4 rounded-full"
              style={{
                background: "oklch(0.14 0.008 240)",
                color: "oklch(0.9 0.01 80)",
                border: "1px solid oklch(0.75 0.12 75 / 0.3)",
              }}
              data-ocid="community.secondary_button"
            >
              <SiX size={18} /> Twitter (X)
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  return (
    <footer
      className="py-12 text-center"
      style={{
        background: "oklch(0.08 0.003 240)",
        borderTop: "1px solid oklch(0.75 0.12 75 / 0.15)",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <img
          src="/assets/generated/hachiko-logo-transparent.dim_300x300.png"
          alt="Hachiko OG"
          className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
          style={{ boxShadow: "0 0 16px oklch(0.75 0.12 75 / 0.4)" }}
        />
        <div className="font-orbitron font-bold text-lg mb-2" style={goldText}>
          $HACHIKO OG
        </div>
        <p className="font-poppins text-sm mb-3" style={mutedText}>
          &copy; {year} $HACHIKO OG — Loyalty Lives Forever 🐕🇯🇵
        </p>
        <p
          className="font-poppins text-xs mb-6"
          style={{ color: "oklch(0.45 0.01 80)" }}
        >
          CA: {CA}
        </p>
        <div className="flex justify-center gap-6 mb-6 flex-wrap">
          {[
            { label: "Telegram", href: "https://t.me/HachikoInuOG" },
            { label: "Twitter / X", href: "https://x.com/HachikoinuOg" },
            { label: "Uniswap", href: "https://app.uniswap.org/" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-poppins text-sm transition-colors hover:text-amber-300"
              style={mutedText}
            >
              {link.label}
            </a>
          ))}
        </div>
        <p
          className="font-poppins text-xs"
          style={{ color: "oklch(0.4 0.005 240)" }}
        >
          &copy; {year}.{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            style={{ color: "oklch(0.55 0.08 75)" }}
          >
            Built with ❤️ using caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="font-poppins">
      <Header />
      <main>
        <HeroSection />
        <LegendSection />
        <TokenomicsSection />
        <RoadmapSection />
        <WhyHachikoSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
}
