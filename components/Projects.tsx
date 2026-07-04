"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Sales Analytics Dashboard",
    description:
      "This project represents a retail/manufacturing company (AdventureWorks) used to simulate real-world scenarios involving product sales, customer behavior, and regional performance. I created a sales analysis dashboard that shows trends over time, product and brand performance, and customer insights.",
    image: "/dashboard-1.png.jpeg",
    tech: ["Power BI", "SQL", "Excel"],
  },
  {
    title: "Business Performance Dashboard",
    description:
      "This project presents an interactive Power BI dashboard that analyzes global fuel prices and their relationship with inflation across multiple countries. The goal is to provide clear insights into how variations in fuel prices impact economic conditions over time.",
    image: "/dashboard-2.png.jpeg",
    tech: ["Power BI", "Excel", "Analytics"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-black py-32 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#233D4D]/20 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-[#FE7F2D]">
            Featured Projects
          </p>

          <h2 className="mt-6 text-5xl font-bold text-[#EAECF0] md:text-6xl">
            Analytics That Drive
            <span className="text-[#FE7F2D]"> Better Decisions</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#EAECF0]/70">
            A selection of dashboard solutions designed to simplify complex
            data, uncover trends and help organizations make informed business
            decisions.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="mt-24 space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
              }}
              className={`grid items-center gap-16 lg:grid-cols-2 ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Dashboard */}
              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="rounded-[30px] border border-white/10 bg-[#101214] p-6 backdrop-blur-xl shadow-[0_0_80px_rgba(35,61,77,0.25)]"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={800}
                  className="rounded-2xl"
                />
              </motion.div>

              {/* Content */}
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[#FE7F2D]">
                  Case Study {index + 1}
                </p>

                <h3 className="mt-5 text-4xl font-bold text-[#EAECF0]">
                  {project.title}
                </h3>

                <p className="mt-6 text-lg leading-8 text-[#EAECF0]/70">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[#233D4D] bg-[#233D4D]/20 px-5 py-2 text-sm text-[#EAECF0]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-10 flex flex-wrap gap-4">
                  <button className="group flex items-center gap-3 rounded-full bg-[#FE7F2D] px-7 py-3 font-semibold text-black transition duration-300 hover:scale-105">
                    View Project

                    <ArrowUpRight
                      size={18}
                      className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </button>

                  <button className="rounded-full border border-white/15 px-7 py-3 text-[#EAECF0] transition hover:border-[#FE7F2D]">
                    Live Demo
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}