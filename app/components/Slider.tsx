"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const imageList = [
  "/images/1 (2).png",
  "/images/2 (2).png",
  "/images/3 (2).png",
  "/images/4 (1).png",
];

export default function Slider() {
  const repeatedImages = [...imageList, ...imageList, ...imageList]; // loop infinitely

  return (
    <div className="overflow-hidden w-full h-[120px] bg-gradient-to-r from-black to-red-500 flex items-center py-4">
      <motion.div
        className="flex gap-14 w-max items-center"
        animate={{ x: ["0%", "-25%"] }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "linear",
        }}
      >
        {repeatedImages.map((src, index) => (
          <div key={index} className="flex items-center justify-center flex-shrink-0">
            <Image
              src={src}
              alt={`slide-${index}`}
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
