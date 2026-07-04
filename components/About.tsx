"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-[#000000] py-32 px-6"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center"
        >
          <p className="tracking-[0.35em] text-sm uppercase text-[#FE7F2D]">
            ABOUT ME
          </p>

          <h2 className="mt-6 text-5xl font-bold text-[#EAECF0]">
            Transforming Data Into
            <span className="text-[#FE7F2D]"> Business Decisions</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#EAECF0]/70">
          Hey there! I'm Daniel, and I'm a Data Analyst based in Abuja, Nigeria. I've always found myself drawn to analytical work. I started my career as a Data Science Intern at an agricultural firm. Since then, I've gone on to become a researcher and later a Data Analyst. I've been working as a freelance Data Analyst for over a year.
          </p>
        </motion.div>

        {/* Content */}
        <div className="mt-24 grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

            <div className="grid grid-cols-2 gap-5">

              <div className="rounded-3xl border border-white/10 bg-[#101214] p-8">
                <h3 className="text-5xl font-bold text-[#FE7F2D]">
                  3+
                </h3>

                <p className="mt-2 text-[#EAECF0]/70">
                  Years Experience
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-[#101214] p-8">
                <h3 className="text-5xl font-bold text-[#FE7F2D]">
                  20+
                </h3>

                <p className="mt-2 text-[#EAECF0]/70">
                  Projects
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-[#101214] p-8">
                <h3 className="text-5xl font-bold text-[#FE7F2D]">
                  10+
                </h3>

                <p className="mt-2 text-[#EAECF0]/70">
                  Dashboards
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-[#101214] p-8">
                <h3 className="text-5xl font-bold text-[#FE7F2D]">
                  99%
                </h3>

                <p className="mt-2 text-[#EAECF0]/70">
                  Client Satisfaction
                </p>
              </div>

            </div>

          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="relative"
          >

            <div className="rounded-[40px] border border-white/10 bg-[#101214] p-8">

              <Image
                src="/daniel.png.jpeg"
                alt="Daniel"
                width={450}
                height={500}
                className="mx-auto rounded-3xl"
              />

              <p className="mt-8 text-lg leading-8 text-[#EAECF0]/70">
                Passionate about business intelligence, analytics and
                visualization, I build dashboards that convert raw data
                into meaningful insights using modern BI tools and
                interactive reporting.
              </p>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}