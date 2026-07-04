"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Database,
  PieChart,
  Briefcase,
  Palette,
  LineChart,
} from "lucide-react";

const services = [
  {
    icon: <BarChart3 size={34} />,
    title: "Data Analysis",
    description:
      "Transform raw data into actionable insights through exploration, cleaning, and statistical analysis.",
  },
  {
    icon: <PieChart size={34} />,
    title: "Data Visualization",
    description:
      "Create interactive dashboards and reports that simplify complex information for better decision-making.",
  },
  {
    icon: <LineChart size={34} />,
    title: "Business Intelligence",
    description:
      "Design KPI dashboards and business reports that help organizations monitor performance and growth.",
  },
  {
    icon: <Database size={34} />,
    title: "Data Management",
    description:
      "Organize, manage and query structured datasets efficiently using modern database solutions.",
  },
  {
    icon: <Briefcase size={34} />,
    title: "Business Analysis",
    description:
      "Analyze business processes, identify opportunities, and provide data-driven recommendations.",
  },
  {
    icon: <Palette size={34} />,
    title: "Graphic Design",
    description:
      "Design professional presentations, visual assets and business graphics that communicate ideas effectively.",
  },
];

const tools = [
  "Power BI",
  "MySQL",
  "Microsoft Excel",
  "Analytics",
  "Business Intelligence",
  "Data Visualization",
  "Data Analysis",
  "Data Management",
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-black py-32 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute right-0 top-32 h-[450px] w-[450px] rounded-full bg-[#233D4D]/20 blur-[170px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.35em] text-sm text-[#FE7F2D]">
            SERVICES
          </p>

          <h2 className="mt-6 text-5xl md:text-6xl font-bold text-[#EAECF0]">
            Helping Businesses
            <span className="text-[#FE7F2D]"> Make Smarter Decisions</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#EAECF0]/70">
            I provide data-driven solutions that help businesses understand
            their performance, uncover opportunities and make informed
            decisions through analytics and business intelligence.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="rounded-3xl border border-white/10 bg-[#101214] p-8 backdrop-blur-xl transition-all"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#233D4D]/30 text-[#FE7F2D]">
                {service.icon}
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-[#EAECF0]">
                {service.title}
              </h3>

              <p className="mt-4 leading-8 text-[#EAECF0]/70">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-24 text-center"
        >
          <h3 className="text-3xl font-bold text-[#EAECF0]">
            Tools & Technologies
          </h3>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-[#233D4D] bg-[#233D4D]/20 px-6 py-3 text-[#EAECF0] transition hover:border-[#FE7F2D] hover:text-[#FE7F2D]"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}