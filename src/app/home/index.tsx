import React, { useState, useEffect } from "react";
import {
  TrendingUp,
  TrendingDown,
  Calculator,
  Bot,
  Trophy,
  Zap,
  ExternalLink,
  Copy,
  CheckCircle,
} from "lucide-react";

const wojaks = [
  {
    stage: "FOMO",
    emoji: "💎",
    text: `\"This time is different!\"`,
    mood: "confident",
  },
  {
    stage: "PANIC",
    emoji: "😰",
    text: `\"Maybe I should take profits...\"`,
    mood: "anxious",
  },
  {
    stage: "REGRET",
    emoji: "😭",
    text: `\"Why did I sell? I\'m ngmi...\"`,
    mood: "devastated",
  },
];

const IRSTokenWebsite = () => {
  const [copied, setCopied] = useState(false);
  const [currentRegret, setCurrentRegret] = useState(0);
  const [isVisible, setIsVisible] = useState<{ hero?: boolean }>({});

  const contractAddress = "Coming Soon...";

  useEffect(() => {
    // Animate regret counter
    const interval = setInterval(() => {
      setCurrentRegret((prev) => (prev + 1) % 100);
    }, 100);

    // Intersection observer for animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
        }
      });
    });

    document.querySelectorAll("[id]").forEach((el) => observer.observe(el));

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  const copyContract = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-purple-500/20 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-bounce delay-1000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 p-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="text-4xl font-black text-red-400">$IRS</div>
          <div className="text-sm text-gray-400">The Regret Token</div>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-red-400 transition-colors">
            About
          </a>
          <a href="#mechanics" className="hover:text-red-400 transition-colors">
            Mechanics
          </a>
          <a href="#wojak" className="hover:text-red-400 transition-colors">
            AI Agent
          </a>
          <a
            href="#calculator"
            className="hover:text-red-400 transition-colors"
          >
            Calculator
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20 text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-7xl md:text-9xl font-black mb-8 bg-gradient-to-r from-red-400 via-purple-400 to-red-400 bg-clip-text text-transparent animate-pulse">
            $IRS
          </h1>
          <p className="text-2xl md:text-4xl mb-4 font-bold text-gray-200">
            The Token That Weaponizes Your
          </p>
          <p className="text-3xl md:text-5xl mb-12 font-black text-red-400 animate-bounce">
            WORST TRADING INSTINCTS
          </p>

          <div className="flex flex-row md:flex-row items-center justify-center gap-4 mb-12">
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg p-4 border border-red-500/30">
              <div className="text-sm text-gray-400 mb-1">Contract Address</div>
              <div className="flex items-center space-x-2">
                <code className="text-red-400 font-mono">
                  {contractAddress}
                </code>
                <button
                  onClick={copyContract}
                  className="p-1 hover:bg-red-500/20 rounded transition-colors"
                >
                  {copied ? (
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {wojaks.map((wojak, idx) => (
              <div
                key={idx}
                className={`bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 transform transition-all duration-500 hover:scale-105 ${
                  isVisible.hero
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <div className="text-4xl mb-4">{wojak.emoji}</div>
                <div className="text-xl font-bold text-purple-400 mb-2">
                  {wojak.stage}
                </div>
                <div className="text-gray-300">"{wojak.text}"</div>
              </div>
            ))}
          </div>

          <div className="flex flex-row md:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 px-8 py-4 rounded-xl font-bold text-xl transition-all transform hover:scale-105 shadow-xl">
              <TrendingUp className="inline mr-2" />
              Buy $IRS (Soon)
            </button>
            <button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 px-8 py-4 rounded-xl font-bold text-xl transition-all transform hover:scale-105 shadow-xl">
              <Calculator className="inline mr-2" />
              Calculate Regret
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative z-10 px-6 py-20 bg-slate-800/30 backdrop-blur-sm"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-8 text-red-400">
            The Eternal Cycle
          </h2>
          <div className="text-xl text-gray-300 mb-12 leading-relaxed">
            You will buy this token. You will sell this token. You will regret
            selling this token.
            <br />
            <span className="text-purple-400 font-bold">
              The cycle of eternal regret begins now.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-black text-green-400 mb-2">70%</div>
              <div className="text-sm text-gray-400">LP Locked Forever</div>
              <div className="text-xs text-purple-400">"The Regret Pool"</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-red-400 mb-2">
                {currentRegret}%
              </div>
              <div className="text-sm text-gray-400">Current Regret Level</div>
              <div className="text-xs text-purple-400">Always Rising</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-yellow-400 mb-2">∞</div>
              <div className="text-sm text-gray-400">Paperhand Cycles</div>
              <div className="text-xs text-purple-400">Never Ending</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-blue-400 mb-2">5%</div>
              <div className="text-sm text-gray-400">Amnesty Rebate</div>
              <div className="text-xs text-purple-400">We Forgive You</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mechanics Section */}
      <section id="mechanics" className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-16 text-purple-400">
            Regret Mechanics
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-xl p-6 border border-red-500/30 backdrop-blur-sm">
              <TrendingDown className="w-12 h-12 text-red-400 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-red-400">
                Paperhand Amnesty
              </h3>
              <p className="text-gray-300 text-sm">
                Sold too early? We&apos;ll give you 5% back in $IRS after 24h.
                Because we forgive you... but you'll regret it again.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl p-6 border border-purple-500/30 backdrop-blur-sm">
              <Trophy className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-purple-400">
                Wall of Shame
              </h3>
              <p className="text-gray-300 text-sm">
                Daily leaderboard of the biggest paperhands. Your regret
                multiplier shows what you lost by selling early.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-xl p-6 border border-yellow-500/30 backdrop-blur-sm">
              <Zap className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-yellow-400">
                Regret Staking
              </h3>
              <p className="text-gray-300 text-sm">
                Lock your $IRS to earn &quot;Copium Rewards&quot;. The longer
                you hold, the more you earn. Diamond hands get 100% APR.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Agent Section */}
      <section
        id="wojak"
        className="relative z-10 px-6 py-20 bg-slate-800/30 backdrop-blur-sm"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-8 text-green-400">
            Meet Tax Therapist Wojak
          </h2>
          <div className="bg-slate-900/80 rounded-2xl p-8 border border-green-500/30 mb-8">
            <div className="text-6xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-green-400">
              Your AI Regret Counselor
            </h3>
            <p className="text-gray-300 mb-6">
              I&apos;m here to help you process your trading trauma, anon. Tell
              me about your relationship with the sell button...
            </p>

            <div className="bg-slate-800/60 rounded-lg p-4 mb-6 text-left">
              <div className="text-green-400 font-mono text-sm">
                wojak_therapist.exe
              </div>
              <div className="text-gray-300 mt-2">
                {`> I see you sold BONK at $0.000015... *sigh* we have a lot to work through, anon.`}
                <br />
                {`> Your portfolio shows clear signs of chronic paperhanding. Have you considered hodling?`}
                <br />
                {`> You're going to do it again, aren't you? 😔`}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-800/40 rounded-lg p-4">
                <Calculator className="w-8 h-8 text-blue-400 mb-2 mx-auto" />
                <div className="text-sm font-bold text-blue-400">
                  Regret Analysis
                </div>
                <div className="text-xs text-gray-400">
                  Calculate your trading trauma
                </div>
              </div>
              <div className="bg-slate-800/40 rounded-lg p-4">
                <Bot className="w-8 h-8 text-purple-400 mb-2 mx-auto" />
                <div className="text-sm font-bold text-purple-400">
                  Therapy Sessions
                </div>
                <div className="text-xs text-gray-400">
                  Process your losses with AI
                </div>
              </div>
              <div className="bg-slate-800/40 rounded-lg p-4">
                <ExternalLink className="w-8 h-8 text-red-400 mb-2 mx-auto" />
                <div className="text-sm font-bold text-red-400">
                  Fake Audits
                </div>
                <div className="text-xs text-gray-400">
                  Generate meme tax forms
                </div>
              </div>
            </div>
          </div>

          <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 px-8 py-4 rounded-xl font-bold text-xl transition-all transform hover:scale-105 shadow-xl">
            <Bot className="inline mr-2" />
            Start Therapy Session
          </button>
        </div>
      </section>

      {/* Paperhand Calculator */}
      <section id="calculator" className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-16 text-yellow-400">
            Paperhand Calculator
          </h2>

          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-bold text-yellow-400 mb-2">
                  Token Sold
                </label>
                <input
                  type="text"
                  placeholder="e.g., BONK, SOL, PEPE"
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-yellow-400 mb-2">
                  Amount Sold
                </label>
                <input
                  type="number"
                  placeholder="1000000"
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-yellow-400 mb-2">
                  Sell Price
                </label>
                <input
                  type="number"
                  placeholder="0.000015"
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-yellow-400 mb-2">
                  Current Price
                </label>
                <input
                  type="number"
                  placeholder="0.000045"
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none"
                />
              </div>
            </div>

            <button className="w-full mt-8 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 px-8 py-4 rounded-xl font-bold text-xl transition-all transform hover:scale-105 shadow-xl">
              Calculate My Regret 😭
            </button>

            <div className="mt-8 bg-red-500/20 border border-red-500/30 rounded-lg p-6 text-center">
              <div className="text-3xl mb-2">😭</div>
              <div className="text-xl font-bold text-red-400 mb-2">
                Your Regret Level: MAXIMUM
              </div>
              <div className="text-gray-300">
                You could have had $15,000 more if you didn't paperhand
              </div>
              <div className="text-sm text-purple-400 mt-2">
                Certificate of Regret #42069 issued
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 bg-slate-900/50 backdrop-blur-sm border-t border-slate-700">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-4xl font-black text-red-400 mb-4">$IRS</div>
          <p className="text-gray-400 mb-8">
            The token that weaponizes your worst trading instincts
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Telegram
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Discord
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              DexScreener
            </a>
          </div>

          <div className="text-xs text-gray-500">
            Disclaimer: This is satire. Trade responsibly. Regret not included
            (but guaranteed).
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IRSTokenWebsite;
