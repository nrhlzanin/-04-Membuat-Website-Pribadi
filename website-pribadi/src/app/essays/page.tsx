"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

const essays = [
  { title: 'Belajar Next.js', url: '#' },
  { title: 'Pengenalan Tailwind CSS', url: '#' },
  { title: 'React Hooks yang Wajib Diketahui', url: '#' },
  { title: 'Optimasi Website dengan SEO', url: '#' },
];

export default function Essays() {
  return (
    <div className="mt-16 px-6 max-w-6xl mx-auto">
      {/* Header */}
      <header className="text-center">
        <motion.h1 
          className="font-extrabold text-5xl text-zinc-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Esai Saya
        </motion.h1>
        <motion.p 
          className="text-lg mt-4 text-zinc-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Berikut adalah beberapa artikel yang telah saya tulis.
        </motion.p>
      </header>

      {/* Grid Cards */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {essays.map((essay, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Link href={essay.url}>
              <div className="p-6 border border-gray-300 rounded-2xl shadow-md bg-white transition-transform transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
                <h2 className="text-2xl font-semibold text-zinc-800">{essay.title}</h2>
                <p className="mt-2 text-zinc-600 text-sm">Baca artikel ini untuk memperdalam pengetahuanmu.</p>
                <div className="mt-4 text-blue-600 font-medium">Baca Selengkapnya →</div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
