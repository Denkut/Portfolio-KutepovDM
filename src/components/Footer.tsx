import { FaGithub, FaTelegramPlane } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { useLanguage } from "../context";
import { translations } from "../constants";

export const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language].footerSection;

  return (
    <footer className="w-full bg-white/90 dark:bg-background/90 backdrop-blur-md shadow-t px-6 py-4 z-50">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between text-center gap-4">
        <div className="flex-1">
          <a
            href={`mailto:${t.email}`}
            className="text-sm text-primary font-medium underline hover:opacity-80 transition"
          >
            {t.email}
          </a>
        </div>

        <div className="flex-1">
          <a
            href={import.meta.env.BASE_URL + "resume.pdf"}
            download
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary text-white dark:text-black text-sm font-medium rounded-full shadow-md hover:bg-opacity-90 transition"
          >
            <HiOutlineDownload />
            {t.resume}
          </a>
        </div>

        <div className="flex-1 flex justify-center items-center gap-4">
          <a
            href="https://github.com/Denkut"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:scale-110 р"
            aria-label="GitHub"
          >
            <FaGithub className="text-3xl text-primary " />
          </a>
          <a
            href="https://t.me/DenKutM"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:scale-110"
            aria-label="Telegram"
          >
            <FaTelegramPlane className="text-3xl text-primary" />
          </a>
        </div>
      </div>
    </footer>
  );
};
