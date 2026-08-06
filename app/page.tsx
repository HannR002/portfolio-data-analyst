"use client";

import { motion, Variants } from "framer-motion";
import { FaLinkedin, FaWhatsapp, FaEnvelope, FaDatabase, FaPython, FaChartLine } from "react-icons/fa";
import { SiGoogleanalytics, SiUpwork } from "react-icons/si";
import { ThemeToggle } from "../components/ThemeToggle";

export default function Portfolio() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const glassClass = "bg-white/40 dark:bg-slate-900/50 backdrop-blur-2xl border border-white/50 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.5)]";

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 overflow-hidden relative font-sans transition-colors duration-500">
      {/* Ambient Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-purple-400/40 dark:bg-purple-600/40 rounded-full blur-[100px] dark:blur-[120px] mix-blend-multiply dark:mix-blend-screen pointer-events-none transition-all duration-700"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-300/50 dark:bg-blue-600/30 rounded-full blur-[100px] dark:blur-[120px] mix-blend-multiply dark:mix-blend-screen pointer-events-none transition-all duration-700"></div>

      <main className="max-w-6xl mx-auto px-6 py-12 relative z-10">

        {/* Header section with Title and Toggle */}
        <div className="flex justify-end items-center mb-8">
          <ThemeToggle />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]"
        >
          {/* HERO SECTION - Span 4 cols on desktop */}
          <motion.div
            variants={itemVariants}
            className={`md:col-span-4 col-span-1 rounded-3xl p-8 md:p-12 flex flex-col justify-center items-start relative overflow-hidden group transition-all duration-500 hover:-translate-y-1 ${glassClass}`}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/30 to-purple-500/30 dark:from-blue-400/20 dark:to-purple-500/20 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-500 dark:from-slate-100 dark:to-slate-400 relative z-10">
              Muhammad Farhan
            </h1>
            <h2 className="text-xl md:text-2xl font-light text-slate-700 dark:text-slate-300 mb-8 relative z-10">
              Transforming Data into Executive Strategy
            </h2>
            <button className="relative z-10 bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2">
              View My Work <FaChartLine />
            </button>
          </motion.div>

          {/* SKILL: SQL - Span 1 */}
          <motion.div variants={itemVariants} className={`rounded-3xl p-6 flex flex-col items-center justify-center group transition-all duration-500 hover:-translate-y-1 ${glassClass}`}>
            <FaDatabase className="text-4xl text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-lg">SQL & Database</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 text-center mt-2">Complex querying & optimization</p>
          </motion.div>

          {/* SKILL: Python - Span 1 */}
          <motion.div variants={itemVariants} className={`rounded-3xl p-6 flex flex-col items-center justify-center group transition-all duration-500 hover:-translate-y-1 ${glassClass}`}>
            <FaPython className="text-4xl text-yellow-600 dark:text-yellow-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-lg">Python</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 text-center mt-2">Pandas, NumPy, Scikit-learn</p>
          </motion.div>

          {/* SKILL: OJS System Architecture - Span 2 */}
          <motion.div variants={itemVariants} className={`md:col-span-2 rounded-3xl p-6 flex flex-col justify-center relative overflow-hidden group transition-all duration-500 hover:-translate-y-1 ${glassClass}`}>
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-orange-400/20 dark:bg-orange-500/20 rounded-full blur-2xl group-hover:bg-orange-400/30 dark:group-hover:bg-orange-500/30 transition-colors"></div>
            <h3 className="font-bold text-xl mb-2 relative z-10">OJS System Architecture</h3>
            <p className="text-slate-700 dark:text-slate-300 relative z-10 text-sm md:text-base">
              Expertise in Open Journal Systems, server deployment, metadata structure, and academic publishing workflows.
            </p>
          </motion.div>

          {/* SKILL: Google Analytics - Span 1 */}
          <motion.div variants={itemVariants} className={`rounded-3xl p-6 flex flex-col items-center justify-center group transition-all duration-500 hover:-translate-y-1 ${glassClass}`}>
            <SiGoogleanalytics className="text-4xl text-orange-600 dark:text-orange-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-lg">Google Analytics</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 text-center mt-2">Traffic insights & reporting</p>
          </motion.div>

          {/* CASE STUDY 1 - Span 3 */}
          <motion.div variants={itemVariants} className={`md:col-span-3 rounded-3xl p-8 flex flex-col justify-center transition-all group relative overflow-hidden duration-500 hover:-translate-y-1 ${glassClass}`}>
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-transparent to-blue-500/10 dark:to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex justify-between items-start mb-4 relative z-10">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded-full">Case Study</span>
              <span className="text-slate-600 dark:text-slate-400 text-sm">2026</span>
            </div>
            <h3 className="text-2xl font-bold mb-2 relative z-10">P4I Enterprise Journal Architecture</h3>
            <p className="text-slate-700 dark:text-slate-300 relative z-10 max-w-2xl">
              Architected and deployed a multi-journal platform supporting thousands of concurrent users, optimizing database queries and implementing robust caching strategies.
            </p>
          </motion.div>

          {/* OMNICHANNEL CONTACT - Span 4 */}
          <motion.div variants={itemVariants} className={`md:col-span-4 rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-500 hover:-translate-y-1 ${glassClass}`}>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-1">Let's Connect</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Open for freelance opportunities and collaborations.</p>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://upwork.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/50 dark:bg-white/10 hover:bg-white/80 dark:hover:bg-white/20 border border-white/40 dark:border-white/10 transition-all hover:scale-110 shadow-sm" aria-label="Upwork">
                <SiUpwork className="text-green-600 dark:text-green-400 text-xl" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/50 dark:bg-white/10 hover:bg-white/80 dark:hover:bg-white/20 border border-white/40 dark:border-white/10 transition-all hover:scale-110 shadow-sm" aria-label="LinkedIn">
                <FaLinkedin className="text-blue-700 dark:text-blue-500 text-xl" />
              </a>
              <a href="https://wa.me/6289699161526" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/50 dark:bg-white/10 hover:bg-white/80 dark:hover:bg-white/20 border border-white/40 dark:border-white/10 transition-all hover:scale-110 shadow-sm" aria-label="WhatsApp">
                <FaWhatsapp className="text-green-600 dark:text-green-500 text-xl" />
              </a>
              <a href="mailto:mf13132504@gmail.com" className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/50 dark:bg-white/10 hover:bg-white/80 dark:hover:bg-white/20 border border-white/40 dark:border-white/10 transition-all hover:scale-110 shadow-sm" aria-label="Email">
                <FaEnvelope className="text-red-500 dark:text-red-400 text-xl" />
              </a>
            </div>
          </motion.div>

          {/* CASE STUDY 2 - Span 4 */}
          <motion.div variants={itemVariants} className={`md:col-span-4 rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center relative overflow-hidden group transition-all duration-500 hover:-translate-y-1 ${glassClass}`}>
            <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-400/20 dark:bg-cyan-500/20 rounded-full blur-3xl group-hover:bg-cyan-400/30 dark:group-hover:bg-cyan-500/30 transition-colors duration-700"></div>

            {/* Giant Watermark Icon */}
            <FaChartLine className="absolute -right-10 -bottom-10 text-[15rem] text-cyan-600/5 dark:text-white/5 -rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-all duration-700 pointer-events-none" />

            <div className="flex-1 relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 text-xs font-semibold rounded-full">Case Study</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">RT Online Information System</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-6 max-w-3xl text-lg leading-relaxed">
                Developed a real-time data dashboard for local neighborhood governance. The system enables instantaneous incident reporting, deep demographic analysis, and resource allocation mapping through a streamlined mobile-first interface.
              </p>
              <button className="text-cyan-700 dark:text-cyan-400 font-bold hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors flex items-center gap-2">
                Read Full Case Study <span className="text-xl">&rarr;</span>
              </button>
            </div>
          </motion.div>

        </motion.div>
      </main>
    </div>
  );
}
