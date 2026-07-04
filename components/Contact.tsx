"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  GitBranch,
  ArrowUpRight,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black py-32 px-6"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-40 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#233D4D]/20 blur-[180px]" />

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
            CONTACT
          </p>

          <h2 className="mt-6 text-5xl font-bold text-[#EAECF0] md:text-6xl">
            Let's Build Something
            <span className="text-[#FE7F2D]"> Amazing Together</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#EAECF0]/70">
            Interested in working together? I'd love to hear about your project.
            Feel free to call, text, or email me, and let's discuss how data can
            drive better decisions for your business.
          </p>
        </motion.div>

        {/* Content */}
        <div className="mt-24 grid gap-12 lg:grid-cols-2">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >

            {/* Email */}
            <div className="rounded-3xl border border-white/10 bg-[#101214] p-7">
              <div className="flex items-center gap-5">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#233D4D]/30">
                  <Mail className="text-[#FE7F2D]" />
                </div>

                <div>
                  <p className="text-sm text-[#EAECF0]/60">
                    Email
                  </p>

                  <p className="text-lg text-[#EAECF0]">
                    danielalhassan7@gmail.com
                  </p>
                </div>

              </div>
            </div>

            {/* Phone */}
            <div className="rounded-3xl border border-white/10 bg-[#101214] p-7">
              <div className="flex items-center gap-5">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#233D4D]/30">
                  <Phone className="text-[#FE7F2D]" />
                </div>

                <div>
                  <p className="text-sm text-[#EAECF0]/60">
                    Phone
                  </p>

                  <p className="text-lg text-[#EAECF0]">
                    +234 805 945 2255
                  </p>
                </div>

              </div>
            </div>

            {/* Location */}
            <div className="rounded-3xl border border-white/10 bg-[#101214] p-7">
              <div className="flex items-center gap-5">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#233D4D]/30">
                  <MapPin className="text-[#FE7F2D]" />
                </div>

                <div>
                  <p className="text-sm text-[#EAECF0]/60">
                    Location
                  </p>

                  <p className="text-lg text-[#EAECF0]">
                    Abuja, Nigeria
                  </p>
                </div>

              </div>
            </div>

            {/* GitHub */}
            <div className="rounded-3xl border border-white/10 bg-[#101214] p-7">
              <div className="flex items-center gap-5">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#233D4D]/30">
                  <GitBranch className="text-[#FE7F2D]" />
                </div>

                <div>
                  <p className="text-sm text-[#EAECF0]/60">
                    GitHub
                  </p>

                  <p className="text-lg text-[#EAECF0]">
                    github.com/Dannyarab
                  </p>
                </div>

              </div>
            </div>

          </motion.div>
                    {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[32px] border border-white/10 bg-[#101214] p-8"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="mb-5 w-full rounded-xl border border-white/10 bg-black px-5 py-4 text-white outline-none transition focus:border-[#FE7F2D]"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="mb-5 w-full rounded-xl border border-white/10 bg-black px-5 py-4 text-white outline-none transition focus:border-[#FE7F2D]"
            />

            <input
              type="text"
              placeholder="Subject"
              className="mb-5 w-full rounded-xl border border-white/10 bg-black px-5 py-4 text-white outline-none transition focus:border-[#FE7F2D]"
            />

            <textarea
              rows={6}
              placeholder="Tell me about your project..."
              className="mb-6 w-full resize-none rounded-xl border border-white/10 bg-black px-5 py-4 text-white outline-none transition focus:border-[#FE7F2D]"
            />

            <button
              type="submit"
              className="group flex items-center gap-3 rounded-full bg-[#FE7F2D] px-8 py-4 font-semibold text-black transition duration-300 hover:scale-105"
            >
              Send Message

              <ArrowUpRight
                size={18}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}