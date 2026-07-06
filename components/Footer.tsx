"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Code2,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10 pt-20 pb-8 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-[#233D4D]/20 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Top Section */}
        <div className="grid gap-12 lg:grid-cols-3">

          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              DANIEL
              <span className="text-[#FE7F2D]"> INSIGHTS</span>
            </h2>

            <p className="mt-5 leading-8 text-[#EAECF0]/70">
              Helping businesses transform raw data into meaningful
              insights through analytics, visualization and business
              intelligence.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4 text-[#EAECF0]/70">

              <Link href="#about" className="hover:text-[#FE7F2D] transition">
                About
              </Link>

              <Link href="#projects" className="hover:text-[#FE7F2D] transition">
                Projects
              </Link>

              <Link href="#services" className="hover:text-[#FE7F2D] transition">
                Services
              </Link>

              <Link href="#contact" className="hover:text-[#FE7F2D] transition">
                Contact
              </Link>

            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3 text-[#EAECF0]/70">
                <Mail size={18} className="text-[#FE7F2D]" />
                <span>danielalhassan7@gmail.com</span>
              </div>

              <div className="flex items-center gap-3 text-[#EAECF0]/70">
                <Phone size={18} className="text-[#FE7F2D]" />
                <span>+234 805 945 2255</span>
              </div>

              <div className="flex items-center gap-3 text-[#EAECF0]/70">
                <MapPin size={18} className="text-[#FE7F2D]" />
                <span>Abuja, Nigeria</span>
              </div>

              <div className="flex items-center gap-3 text-[#EAECF0]/70">
                <Code2 size={18} className="text-[#FE7F2D]" />

                <a
                  href="https://github.com/Dannyarab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FE7F2D] transition"
                >
                  github.com/Dannyarab
                </a>

              </div>

            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="my-10 border-t border-white/10" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          <p className="text-[#EAECF0]/50 text-center md:text-left">
            © {new Date().getFullYear()} Daniel Insights. All rights reserved.
          </p>

          <a
            href = "#"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#101214] transition hover:border-[#FE7F2D] hover:bg-[#FE7F2D] hover:text-black"
          >
            <ArrowUp size={20} />
          </a>

        </div>

      </div>
    </footer>
  );
}