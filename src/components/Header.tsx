import { useState } from "react";
import { FaMoon, FaSun, FaGlobe, FaBars, FaTimes } from "react-icons/fa";
import { useTheme, useLanguage } from "../context";
import { translations } from "../constants";
import avatar from "../assets/Avatar.jpg";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const translation = translations[language];

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-background shadow-md text-black dark:text-foreground px-4 py-8 flex justify-between items-center">
      <a
        href="#home"
        className="flex items-center gap-3 text-lg font-bold text-primary transition duration-200 ease-in-out cursor-pointer"
      >
        <img
          src={avatar}
          alt="Denis Kutepov"
          className="w-16 h-16 rounded-full border border-primary object-cover"
        />
        <span className="hidden sm:inline">Denis Kutepov</span>
      </a>

      <nav className="hidden md:flex items-center gap-6">
        <a
          href="#home"
          className="hover:text-primary transition duration-200 ease-in-out cursor-pointer"
        >
          {translation.home}
        </a>
        <a
          href="#about"
          className="hover:text-primary transition duration-200 ease-in-out cursor-pointer"
        >
          {translation.about}
        </a>
        <a
          href="#projects"
          className="hover:text-primary transition duration-200 ease-in-out cursor-pointer"
        >
          {translation.projects}
        </a>
        <a
          href="#hobbies"
          className="hover:text-primary transition duration-200 ease-in-out cursor-pointer"
        >
          {translation.hobbies}
        </a>

        <button
          onClick={toggleTheme}
          className="text-xl hover:text-primary transition duration-200 ease-in-out cursor-pointer"
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
        <button
          onClick={toggleLanguage}
          className="text-xl flex items-center gap-1 hover:text-primary transition duration-200 ease-in-out cursor-pointer"
        >
          <FaGlobe /> <span className="text-sm uppercase">{language}</span>
        </button>
      </nav>

      <div className="md:hidden flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="text-xl hover:text-primary transition duration-200 ease-in-out cursor-pointer"
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
        <button
          onClick={toggleLanguage}
          className="text-xl hover:text-primary transition duration-200 ease-in-out cursor-pointer"
        >
          <FaGlobe />
        </button>
        <button
          className="text-2xl text-primary transition duration-200 ease-in-out cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-background shadow-md py-6 px-4 flex flex-col items-center gap-4 md:hidden animate-fade-in-down z-40">
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="hover:text-primary"
          >
            {translation.home}
          </a>
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-primary"
          >
            {translation.about}
          </a>
          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="hover:text-primary "
          >
            {translation.projects}
          </a>
          <a
            href="#hobbies"
            onClick={() => setMenuOpen(false)}
            className="hover:text-primary transition duration-200 ease-in-out cursor-pointer"
          >
            {translation.hobbies}
          </a>
        </div>
      )}
    </header>
  );
};
