"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 px-6 pt-2"
    >
      {/* OUTER GLASS CONTAINER */}
      <nav className="flex w-full items-center justify-between px-6 py-2 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-lg">

        {/* LEFT: LOGO */}
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-[#233D4D] to-black flex items-center justify-center border border-white/10">
            <span className="text-[#EAECF0] font-bold text-xs">D</span>
          </div>

          <div className="leading-tight">
            <h1 className="text-white font-semibold tracking-wide text-xs">
              DANNY
            </h1>
            <p className="text-[9px] text-[#EAECF0]/60 tracking-widest">
              INSIGHTS
            </p>
          </div>
        </div>

        {/* CENTER LINKS */}
        <div className="hidden md:flex items-center gap-10 text-xs text-[#EAECF0]/70">
          <Link className="hover:text-white transition" href="#about">
            About
          </Link>
          <Link className="hover:text-white transition" href="#projects">
            Projects
          </Link>
          <Link className="hover:text-white transition" href="#services">
            Services
          </Link>
          <Link className="hover:text-white transition" href="#contact">
            Contact
          </Link>
        </div>

        {/* RIGHT CTA */}
        <Link
          href="#contact"
          className="group flex items-center gap-2 rounded-full border border-[#FE7F2D]/40 bg-transparent px-4 py-1 text-[#EAECF0] transition hover:border-[#FE7F2D]"
        >
          <span className="text-xs">Let's Talk</span>

          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FE7F2D]/10 border border-[#FE7F2D]/40 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <ArrowUpRight size={12} className="text-[#FE7F2D]" />
          </span>
        </Link>

      </nav>
    </motion.header>
  );
}