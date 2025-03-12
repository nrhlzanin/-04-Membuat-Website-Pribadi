"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import profilePic from "../../public/images/profile.jpg";

export default function Home() {
  return (
    <div className="mt-16 px-8 flex flex-col items-center text-center">
      {/* Foto Profil dengan Animasi */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src={profilePic}
          alt="Foto Profil"
          width={180}
          height={180}
          className="rounded-full border-4 border-teal-500 shadow-lg"
        />
      </motion.div>

      {/* Nama & Deskripsi */}
      <motion.h1
        className="font-bold text-4xl text-zinc-800 mt-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        Nurhaliza Anindya Putri
      </motion.h1>
      <motion.p
        className="text-lg text-zinc-600 mt-4 max-w-lg leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        Mahasiswa Teknik Informatika dengan minat dalam IoT. 
        Berkomitmen untuk terus belajar dan meningkatkan keterampilan di dunia teknologi.
      </motion.p>

      {/* Tombol Media Sosial */}
      <motion.div
        className="mt-6 flex space-x-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
      >
        <a
          href="#"
          className="px-5 py-2.5 text-white bg-teal-500 rounded-lg shadow-md hover:bg-teal-600 transition duration-300 transform hover:scale-105"
        >
          LinkedIn
        </a>
        <a
          href="#"
          className="px-5 py-2.5 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 transform hover:scale-105"
        >
          GitHub
        </a>
      </motion.div>
    </div>
  );
}
