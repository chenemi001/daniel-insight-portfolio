"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#000000]">
      {/* 🌍 BACKGROUND */}
      <Image
        src="/earth.png.jpg"
        alt="Earth background"
        fill
        priority
        className="object-cover opacity-70 scale-110"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* HERO */}
      <div className="relative z-10 flex min-h-screen items-start pt-24 px-6">
        <div className="grid w-full grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-[#EAECF0]/60 tracking-[0.3em] uppercase text-sm">
              DATA-DRIVEN • INSIGHT-LED • IMPACT-FOCUSED
            </p>

            <h1 className="mt-6 text-6xl font-bold leading-[1.05] text-[#EAECF0] md:text-7xl xl:text-8xl">
              Turning Data Into{" "}
              <span className="text-[#FE7F2D]">Impact</span>
            </h1>

            <p className="mt-8 max-w-xl text-xl leading-9 text-[#EAECF0]/75">
              I help businesses transform raw data into meaningful insights
              through dashboards, analytics, reporting, and business
              intelligence solutions that drive confident decision-making.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
  href="#projects"
  className="rounded-full bg-[#FE7F2D] px-8 py-4 font-semibold text-black transition hover:scale-105"
>
  View Projects
</Link>

             <a
  href="/Daniel-Alhassan-CV.pdf"
  download="Daniel-Alhassan-CV.pdf"
  className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3 text-[#EAECF0] transition duration-300 hover:border-[#FE7F2D]"
>
  Download CV
</a>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
         <motion.div
  initial={{ opacity: 0, x: 60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="flex justify-center lg:justify-end"
>
  <div className="relative w-[480px] h-[580px] rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-7">

    {/* Rotating Pie Chart */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute top-6 left-6 h-24 w-24 rounded-full border-[5px] border-[#FE7F2D] border-r-transparent border-t-transparent"
    />

    {/* Daniel Image */}
    <div className="mt-10 flex justify-center">
      <Image
        src="/daniel.png.jpeg"
        alt="Daniel"
        width={190}
        height={190}
        className="rounded-3xl border border-white/10 object-cover"
      />
    </div>

    {/* KPI Cards */}
    <div className="mt-8 flex justify-between gap-4">

      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="w-1/3 rounded-2xl border border-[#233D4D]/40 bg-black/70 py-4 text-center"
      >
        <p className="text-xs text-[#EAECF0]/60">
          Revenue
        </p>

        <p className="mt-1 text-lg font-semibold text-white">
          $24K
        </p>
      </motion.div>

      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 3.2, repeat: Infinity }}
        className="w-1/3 rounded-2xl border border-[#233D4D]/40 bg-black/70 py-4 text-center"
      >
        <p className="text-xs text-[#EAECF0]/60">
          Growth
        </p>

        <p className="mt-1 text-lg font-semibold text-[#FE7F2D]">
          +18%
        </p>
      </motion.div>

      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3.4, repeat: Infinity }}
        className="w-1/3 rounded-2xl border border-[#233D4D]/40 bg-black/70 py-4 text-center"
      >
        <p className="text-xs text-[#EAECF0]/60">
          Insights
        </p>

        <p className="mt-1 text-lg font-semibold text-white">
          98%
        </p>
      </motion.div>

    </div>

    {/* Bottom Charts */}
    <div className="mt-12 flex gap-5">

      {/* Performance */}
      <div className="flex-1">

        <p className="mb-3 text-xs text-[#EAECF0]/60">
          Performance
        </p>

        <div className="flex h-28 items-end gap-2">

          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 40 }}
            transition={{ duration: 1 }}
            className="w-3 rounded bg-[#233D4D]"
          />

          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 70 }}
            transition={{ duration: 1.2 }}
            className="w-3 rounded bg-[#233D4D]"
          />

          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 50 }}
            transition={{ duration: 1.4 }}
            className="w-3 rounded bg-[#233D4D]"
          />

          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 95 }}
            transition={{ duration: 1.6 }}
            className="w-3 rounded bg-[#FE7F2D]"
          />

          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 65 }}
            transition={{ duration: 1.8 }}
            className="w-3 rounded bg-[#233D4D]"
          />

        </div>

      </div>

      {/* Trend Graph */}
      <div className="flex-1">

        <p className="mb-3 text-xs text-[#EAECF0]/60">
          Trend
        </p>

        <svg
          viewBox="0 0 100 40"
          className="h-28 w-full"
        >
          <motion.polyline
            fill="none"
            stroke="#FE7F2D"
            strokeWidth="2.5"
            points="0,32 15,28 30,22 45,24 60,15 75,18 90,8 100,12"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.2 }}
          />
        </svg>

      </div>

    </div>

  </div>
</motion.div>
        </div>
      </div>
    </section>
  );
}