import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context";
import { translations } from "../constants";
import img1 from "../assets/slider/img1.jpg";
import img2 from "../assets/slider/img2.jpg";
import img3 from "../assets/slider/img3.jpg";
import img4 from "../assets/slider/img4.jpg";
import img5 from "../assets/slider/img5.jpg";

const avatarImages = [img1, img2];
const sliderImages = [img1, img2, img3, img4, img5];

export const Home = () => {
  const { language } = useLanguage();
  const t = translations[language].homeSection;

  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [avatarIndex, setAvatarIndex] = useState(0);
  const [sliderIndex, setSliderIndex] = useState(0);

  const next = () => setSliderIndex((prev) => (prev + 1) % sliderImages.length);
  const prev = () =>
    setSliderIndex(
      (prev) => (prev - 1 + sliderImages.length) % sliderImages.length
    );
  const closeSlider = () => setIsSliderOpen(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAvatarIndex((prev) => (prev + 1) % avatarImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="w-full min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-white via-primary/10 to-primary/5 dark:from-black dark:via-zinc-900 dark:to-zinc-800 relative"
    >
      <motion.img
        src={avatarImages[avatarIndex]}
        alt={`Avatar ${avatarIndex + 1}`}
        className="w-36 h-36 md:w-48 md:h-48 rounded-full border-4 border-primary shadow-lg object-cover mb-6 cursor-pointer transition-transform"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        onClick={() => {
          setIsSliderOpen(true);
          setSliderIndex(avatarIndex);
        }}
      />

      <motion.h1
        className="text-3xl md:text-5xl font-bold mb-2 text-primary"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {t.welcome}
      </motion.h1>

      <motion.h2
        className="text-xl md:text-3xl font-medium mb-4 text-muted-foreground"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {t.role}
      </motion.h2>

      <motion.p
        className="max-w-lg text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {t.description}
      </motion.p>

      <motion.a
        href={import.meta.env.BASE_URL + "resume.pdf"}
        download
        className="inline-block px-6 py-2 bg-primary text-white dark:text-black font-medium rounded-full shadow-md hover:bg-opacity-90 transition"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        {t.resume}
      </motion.a>

      <AnimatePresence>
        {isSliderOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative w-full max-w-3xl h-[75vh] flex items-center justify-center">
              {sliderImages.map((img, index) => (
                <motion.img
                  key={index}
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className={`absolute w-full h-full object-cover rounded-xl ${
                    index === sliderIndex ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-700`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === sliderIndex ? 1 : 0 }}
                />
              ))}

              {sliderIndex > 0 && (
                <button
                  onClick={prev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-zinc-800/80 p-3 rounded-full shadow text-xl"
                >
                  ‹
                </button>
              )}
              {sliderIndex < sliderImages.length - 1 && (
                <button
                  onClick={next}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-zinc-800/80 p-3 rounded-full shadow text-xl"
                >
                  ›
                </button>
              )}

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {sliderImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSliderIndex(idx)}
                    className={`w-3 h-3 rounded-full border transition ${
                      sliderIndex === idx
                        ? "bg-primary border-primary scale-110"
                        : "bg-white/50 border-white/50 hover:scale-105"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={closeSlider}
                className="absolute top-4 right-4 text-white text-xl bg-black/50 px-3 py-1 rounded hover:bg-black/70 transition"
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
