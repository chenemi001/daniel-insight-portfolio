"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Business Manager",
    company: "Retail Company",
    review:
      "Daniel transformed our sales data into an intuitive dashboard that made decision-making much easier. His attention to detail and analytical skills were outstanding.",
  },
  {
    name: "Michael Adams",
    role: "Operations Lead",
    company: "Manufacturing Firm",
    review:
      "Working with Daniel was seamless. He delivered a clean Power BI dashboard that gave us valuable insights into our operational performance.",
  },
  {
    name: "Grace Williams",
    role: "Project Coordinator",
    company: "Consulting Agency",
    review:
      "Daniel has an excellent eye for data visualization. His dashboards are not only beautiful but also practical and insightful.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-black py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-[#FE7F2D]">
            Testimonials
          </p>

          <h2 className="mt-6 text-5xl font-bold text-[#EAECF0]">
            What Clients Say
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-[#EAECF0]/70">
            Here's what clients have to say about working with me.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .6,
                delay: index * .15,
              }}
              whileHover={{
                y: -8,
              }}
              className="rounded-3xl border border-white/10 bg-[#101214] p-8"
            >
              <Quote className="text-[#FE7F2D]" size={34} />

              <p className="mt-6 leading-8 text-[#EAECF0]/70">
                "{item.review}"
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-white">
                  {item.name}
                </h3>

                <p className="text-[#EAECF0]/60">
                  {item.role}
                </p>

                <p className="text-[#FE7F2D]">
                  {item.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}