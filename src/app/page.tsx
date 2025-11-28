"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const floatingImages = [
  "/woj1.png", "/woj2.png", "/bull.png", "/pete.png",
  "/casino.png", "/jak.png", "/polaroid.png",
  "/woj1.png", "/woj2.png", "/bull.png",
];

export default function WokejakWebsite() {
  const [copied, setCopied] = useState(false);
  const [cancelled, setCancelled] = useState(69420);
  const [mcap, setMcap] = useState(1337000);
  const [randomPositions, setRandomPositions] = useState<Array<{top: number, left: number, rotation: number, scale: number}>>([]);

  const contractAddress = "woke...JakSolana420";

  useEffect(() => {
    // Generate random positions for floating images
    setRandomPositions(
      floatingImages.map(() => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        rotation: Math.random() * 360,
        scale: 0.5 + Math.random() * 1,
      }))
    );

    const interval = setInterval(() => {
      setCancelled((prev) => prev + Math.floor(Math.random() * 10));
      setMcap((prev) => prev + Math.floor(Math.random() * 50000) - 20000);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const copyContract = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };


  return (
    <div className="min-h-screen text-white overflow-x-hidden cursor-crosshair" style={{background: 'linear-gradient(45deg, #000, #1a0a2e, #0a1a0a, #2e0a1a, #000)'}}>
      {/* Toned down CSS */}
      <style jsx global>{`
        @keyframes rainbow {
          0% { color: #ff00ff; text-shadow: 0 0 20px #ff00ff; }
          50% { color: #00ffff; text-shadow: 0 0 20px #00ffff; }
          100% { color: #ff00ff; text-shadow: 0 0 20px #ff00ff; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes wiggle { 0%, 100% { transform: rotate(-2deg); } 50% { transform: rotate(2deg); } }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px #ff00ff; }
          50% { box-shadow: 0 0 40px #00ffff; }
        }
        @keyframes gradient-move { 0% { background-position: 0% 50%; } 100% { background-position: 100% 50%; } }
        .rainbow-text { animation: rainbow 4s ease-in-out infinite; }
        .rainbow-bg { background: linear-gradient(90deg, #ff00ff, #00ffff, #ffff00, #ff00ff); background-size: 300% 100%; animation: gradient-move 8s linear infinite; }
        .float { animation: float 4s ease-in-out infinite; }
        .float-crazy { animation: float 3s ease-in-out infinite; }
        .spin { animation: spin 20s linear infinite; }
        .spin-fast { animation: spin 8s linear infinite; }
        .marquee { animation: marquee 20s linear infinite; }
        .bounce { animation: bounce 2s ease-in-out infinite; }
        .wiggle { animation: wiggle 2s ease-in-out infinite; }
        .pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .comic-sans { font-family: 'Comic Sans MS', cursive; }
        .impact { font-family: Impact, sans-serif; }
        .super-glow { text-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 40px currentColor; }
        .neon-border { box-shadow: 0 0 10px #ff00de, 0 0 20px #ff00de; }
        .crazy-gradient { background: linear-gradient(90deg, #ff00ff, #00ffff, #ffff00, #ff00ff); background-size: 300% 100%; animation: gradient-move 6s linear infinite; }
      `}</style>

      {/* Floating images - toned down */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {randomPositions.slice(0, 6).map((pos, idx) => (
          <div
            key={idx}
            className="float"
            style={{
              position: 'absolute',
              top: `${pos.top}%`,
              left: `${pos.left}%`,
              transform: `rotate(${pos.rotation}deg) scale(${pos.scale * 0.7})`,
              animationDelay: `${idx * 0.5}s`,
              opacity: 0.15,
            }}
          >
            <Image src={floatingImages[idx]} alt="" width={80 + idx * 5} height={80 + idx * 5} />
          </div>
        ))}
      </div>

      {/* Top marquee */}
      <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 py-2 overflow-hidden relative z-50">
        <div className="marquee whitespace-nowrap text-lg font-bold text-white flex">
          <span className="mr-8">🚀 $WOKEJAK NOW LIVE 🏳️‍🌈 GET WOKE OR GO BROKE 💀 1000X POTENTIAL 📈 NFA DYOR 🦍 WAGMI 🔥 </span>
          <span className="mr-8">🚀 $WOKEJAK NOW LIVE 🏳️‍🌈 GET WOKE OR GO BROKE 💀 1000X POTENTIAL 📈 NFA DYOR 🦍 WAGMI 🔥 </span>
        </div>
      </div>

      {/* Header */}
      <header className="relative z-40 p-4 flex flex-wrap justify-between items-center border-b-2 border-pink-500/50 bg-black/80 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <Image src="/irs.png" alt="WOKEJAK" width={60} height={60} className="rounded-full border-2 border-pink-500" />
          <div>
            <div className="text-4xl md:text-5xl font-black rainbow-text impact">$WOKEJAK</div>
            <div className="text-sm text-pink-400 comic-sans">💅 the consciousness token 💅</div>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-2 md:mt-0 flex-wrap">
          <a href="#" className="px-4 py-2 bg-pink-500/20 text-pink-400 font-bold rounded-full border border-pink-500/50 text-sm hover:bg-pink-500/30 transition-all">
            🐦 TWITTER
          </a>
          <a href="#" className="px-4 py-2 bg-blue-500/20 text-blue-400 font-bold rounded-full border border-blue-500/50 text-sm hover:bg-blue-500/30 transition-all">
            ✈️ TELEGRAM
          </a>
          <button className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-full text-sm hover:scale-105 transition-transform">
            🚀 BUY NOW
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left side */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-6xl md:text-8xl font-black mb-4 impact">
                <span className="rainbow-text">$WOKEJAK</span>
              </h1>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
                <span className="text-3xl md:text-5xl font-black text-white comic-sans">
                  GET WOKE 🏳️‍🌈
                </span>
                <span className="text-3xl md:text-5xl font-black text-pink-400 comic-sans">
                  OR GO BROKE 💀
                </span>
              </div>

              {/* Description */}
              <p className="text-xl text-gray-300 mb-6 max-w-lg mx-auto lg:mx-0 comic-sans">
                the only token that lets you <span className="text-pink-400 font-bold">monetize your moral superiority</span> 🧠
              </p>
              <p className="text-lg text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0">
                ratio ppl → get tokens → become more valid → repeat ♻️
              </p>

              {/* Contract Address */}
              <div className="inline-flex items-center gap-3 px-4 py-3 bg-black/60 border border-pink-500/50 rounded-xl mb-8">
                <span className="text-sm text-gray-400">CA:</span>
                <code className="text-lg font-mono font-bold text-pink-400">{contractAddress}</code>
                <button
                  onClick={copyContract}
                  className={`px-3 py-1 ${copied ? 'bg-green-500 text-white' : 'bg-pink-500 text-black'} font-bold rounded text-sm hover:scale-105 transition-all`}
                >
                  {copied ? '✓' : 'COPY'}
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8 max-w-md mx-auto lg:mx-0">
                <div className="p-4 rounded-xl border border-green-500/30 bg-green-500/10">
                  <div className="text-2xl font-black text-green-400">${mcap.toLocaleString()}</div>
                  <div className="text-sm text-gray-400">MCAP 📈</div>
                </div>
                <div className="p-4 rounded-xl border border-pink-500/30 bg-pink-500/10">
                  <div className="text-2xl font-black text-pink-400">{cancelled.toLocaleString()}</div>
                  <div className="text-sm text-gray-400">CANCELLED 💀</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-black text-xl rounded-xl hover:scale-105 transition-transform">
                  🚀 APE IN NOW
                </button>
                <button className="px-8 py-4 bg-white/10 border border-white/20 text-white font-bold text-xl rounded-xl hover:bg-white/20 transition-all">
                  📊 DEXSCREENER
                </button>
              </div>
            </div>

            {/* Right side - Big Wojak */}
            <div className="flex-shrink-0 relative z-50">
              <Image
                src="/wokejak.png"
                alt="Wokejak"
                width={450}
                height={450}
                className="float relative z-50"
                style={{filter: 'drop-shadow(0 0 30px rgba(255,0,255,0.5))'}}
                priority
              />
              {/* Speech bubble */}
              <div className="absolute -top-2 -right-2 bg-white text-black p-3 rounded-2xl border-2 border-black max-w-[160px]">
                <div className="font-bold comic-sans text-sm">&quot;im literally shaking rn&quot;</div>
                <div className="absolute -bottom-2 left-6 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics */}
      <section className="relative z-10 px-4 py-16 bg-gradient-to-b from-transparent via-pink-500/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12 impact">
            <span className="text-white">TOKENOMICS</span>
            <span className="text-3xl ml-3">🧮</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { emoji: "💰", value: "0%", label: "TAX", sublabel: "frfr no cap", color: "green" },
              { emoji: "🔥", value: "100%", label: "LP BURNED", sublabel: "safu ser", color: "orange" },
              { emoji: "✊", value: "69M", label: "SUPPLY", sublabel: "nice 😏", color: "pink" },
            ].map((item, idx) => (
              <div key={idx} className={`p-6 rounded-xl border border-${item.color}-500/30 bg-${item.color}-500/10 text-center hover:scale-105 transition-transform`}>
                <div className="text-5xl mb-3">{item.emoji}</div>
                <div className={`text-4xl font-black text-${item.color}-400`}>{item.value}</div>
                <div className="text-lg font-bold text-white">{item.label}</div>
                <div className="text-sm text-gray-400 mt-1">{item.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to buy */}
      <section className="relative z-10 px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12 impact">
            <span className="text-white">HOW 2 APE</span>
            <span className="text-3xl ml-3">🦍</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { step: "1", emoji: "👛", title: "GET WALLET", desc: "phantom" },
              { step: "2", emoji: "💵", title: "GET SOL", desc: "buy some" },
              { step: "3", emoji: "📋", title: "COPY CA", desc: "up there ☝️" },
              { step: "4", emoji: "🚀", title: "APE", desc: "WAGMI" },
            ].map((item) => (
              <div key={item.step} className="p-5 rounded-xl border border-white/10 bg-white/5 text-center hover:bg-white/10 transition-all">
                <div className="text-4xl mb-3">{item.emoji}</div>
                <div className="w-10 h-10 mx-auto rounded-full bg-pink-500 flex items-center justify-center text-xl font-black text-black mb-3">{item.step}</div>
                <div className="text-lg font-bold text-white">{item.title}</div>
                <div className="text-sm text-gray-400">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meme Gallery */}
      <section className="relative z-10 px-4 py-16 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12 impact">
            <span className="text-white">MEME GALLERY</span>
            <span className="text-3xl ml-3">🔥</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "/woj1.png", caption: "explaining why this is bullish" },
              { src: "/woj2.png", caption: "watching my portfolio" },
              { src: "/oyvey.png", caption: "wen moon ser" },
              { src: "/jak.png", caption: "just bought the top" },
              { src: "/pete.png", caption: "diamond hands activated" },
              { src: "/casino.png", caption: "its free money" },
              { src: "/thejews.png", caption: "who dumped" },
              { src: "/bull.png", caption: "we are so back" },
            ].map((meme, idx) => (
              <div key={idx} className="group hover:scale-105 transition-all">
                <div className="rounded-xl overflow-hidden border border-white/10 bg-black">
                  <Image src={meme.src} alt="" width={200} height={200} className="w-full aspect-square object-cover" />
                  <div className="p-2 text-center bg-white/5">
                    <span className="text-xs text-gray-400">{meme.caption}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="relative z-10 px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-10 impact">
            <span className="text-white">JOIN THE COMMUNITY</span>
            <span className="text-3xl ml-3">🏳️‍🌈</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              { value: "69,420+", label: "holders" },
              { value: "100K+", label: "telegram" },
              { value: "420K+", label: "twitter" },
            ].map((stat, idx) => (
              <div key={idx} className="px-6 py-3 rounded-full border border-white/20 bg-white/5">
                <span className="text-2xl font-black text-pink-400">{stat.value}</span>
                <span className="text-lg text-gray-400 ml-2">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-xl rounded-xl hover:scale-105 transition-transform">
              🐦 TWITTER
            </a>
            <a href="#" className="px-8 py-4 bg-blue-500 text-white font-bold text-xl rounded-xl hover:scale-105 transition-transform">
              ✈️ TELEGRAM
            </a>
          </div>
        </div>
      </section>

      {/* Bottom marquee */}
      <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 py-2 overflow-hidden">
        <div className="marquee whitespace-nowrap text-lg font-bold text-white flex">
          <span className="mr-8">🚀 STILL EARLY 📈 1000X POTENTIAL 💎 DIAMOND HANDS 🙌 WAGMI 🔥 LFG 🦍 </span>
          <span className="mr-8">🚀 STILL EARLY 📈 1000X POTENTIAL 💎 DIAMOND HANDS 🙌 WAGMI 🔥 LFG 🦍 </span>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 px-4 py-12 border-t border-white/10 bg-black/50">
        <div className="max-w-4xl mx-auto text-center">
          <Image src="/wokejak.png" alt="WOKEJAK" width={80} height={80} className="mx-auto mb-4" />
          <div className="text-3xl font-black text-pink-400 impact mb-4">$WOKEJAK</div>
          <p className="text-sm text-gray-500 mb-2">
            this is a meme coin. NFA. DYOR. touch grass occasionally.
          </p>
          <p className="text-xs text-gray-600">
            © 2024 $WOKEJAK | made with 💅 and questionable decisions
          </p>
        </div>
      </footer>

      {/* Fixed mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-black/95 border-t border-pink-500/50 md:hidden">
        <button className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-lg rounded-xl">
          🚀 BUY $WOKEJAK
        </button>
      </div>
    </div>
  );
}
