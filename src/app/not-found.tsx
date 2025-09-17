"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";

export default function NotFoundPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-50 via-amber-100 to-amber-50 p-6">
      <div className="container max-w-4xl mx-auto">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 16 }}
            className="w-full md:w-1/2 flex items-center justify-center"
          >
            <div className="relative w-64 h-64 md:w-72 md:h-72">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <defs>
                  <linearGradient id="g" x1="0" x2="1">
                    <stop offset="0%" stopColor="#FDE68A" />
                    <stop offset="100%" stopColor="#FCA5A5" />
                  </linearGradient>
                </defs>
                <circle
                  cx="100"
                  cy="100"
                  r="76"
                  fill="#fff7ed"
                  stroke="#fbbf24"
                  strokeWidth="3"
                />
                <ellipse
                  cx="100"
                  cy="110"
                  rx="60"
                  ry="26"
                  fill="#fff"
                  opacity="0.9"
                />
                <motion.g
                  initial={{ y: 6 }}
                  animate={{ y: [6, -6, 6] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <path
                    d="M60 110 q40 -40 80 0 q-40 40 -80 0"
                    fill="url(#g)"
                    opacity="0.95"
                  />
                </motion.g>
                <motion.path
                  d="M140 86 q12 -18 28 -8 q-14 10 -28 8 z"
                  fill="#86efac"
                  initial={{ x: 0, rotate: -6 }}
                  animate={{ x: [0, -6, 0, 6, 0], rotate: [-6, 6, -6] }}
                  transition={{ duration: 6, repeat: Infinity }}
                />
                <motion.circle
                  cx="70"
                  cy="78"
                  r="8"
                  fill="#fb7185"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: [0.95, 1.05, 0.95] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <g transform="translate(138,132) rotate(18)">
                  <rect
                    x="0"
                    y="0"
                    width="30"
                    height="6"
                    rx="2"
                    fill="#cbd5e1"
                  />
                  <rect
                    x="20"
                    y="-10"
                    width="6"
                    height="18"
                    rx="1"
                    fill="#cbd5e1"
                  />
                </g>
              </svg>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 110, damping: 14 }}
            className="w-full md:w-1/2"
          >
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter text-rose-600">
              404
            </h1>
            <p className="mt-2 text-xl md:text-2xl font-semibold text-slate-700">
              Stranica nije pronađena
            </p>
            <p className="mt-4 text-slate-600">
              Izgleda da je recept koji tražite pobegao iz šerpe. Ali mi ćemo
              vam pomoći da ga ponovo pronađete.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link href="/">
                <Button size="lg" className="w-full sm:w-auto">
                  Glavna strana
                </Button>
              </Link>
              <Link href="/recipes">
                <Button variant="light" size="lg" className="w-full sm:w-auto">
                  Svi recepti
                </Button>
              </Link>
            </div>

            <motion.div
              className="mt-6 text-xs text-slate-500 flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M12 8v4l3 3"
                  stroke="#94a3b8"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="#cbd5e1"
                  strokeWidth="1.2"
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-8 flex justify-center">
          <motion.div
            className="w-80 h-2 rounded-full bg-gradient-to-r from-amber-300 via-rose-300 to-emerald-200 shadow-inner"
            animate={{ x: [0, 12, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </main>
  );
}
