import { motion } from "framer-motion";
import { useLanguage } from "../context";
import { translations } from "../constants";
import {
  SiReact,
  SiTypescript,
  SiRedux,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiDocker,
  SiJest,
} from "react-icons/si";

export const About = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const stack = [
    { icon: <SiReact />, label: "React" },
    { icon: <SiTypescript />, label: "TypeScript" },
    { icon: <SiRedux />, label: "Redux" },
    { icon: <SiNodedotjs />, label: "Node.js" },
    { icon: <SiMongodb />, label: "MongoDB" },
    { icon: <SiTailwindcss />, label: "Tailwind" },
    { icon: <SiDocker />, label: "Docker" },
    { icon: <SiJest />, label: "Jest" },
  ];

  const roadmap = t.timeline;

  return (
    <section
      id="about"
      className="w-full min-h-screen px-4 py-20 flex flex-col items-center justify-center text-center bg-white dark:bg-background"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
        {t.aboutSection.title}
      </h2>

      <p className="max-w-3xl text-base md:text-lg text-muted-foreground whitespace-pre-line mb-10">
        {t.aboutSection.description}
      </p>

      <h3 className="text-2xl font-semibold mb-6 text-primary">Stack I Use</h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-8 mb-16">
        {stack.map((tech, index) => (
          <motion.div
            key={tech.label}
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="text-4xl">{tech.icon}</div>
            <span className="mt-2 text-sm">{tech.label}</span>
          </motion.div>
        ))}
      </div>

      <h3 className="text-2xl font-semibold mb-6 text-primary">Roadmap</h3>
      <div className="relative pl-4 border-l-2 border-muted-foreground space-y-10 max-w-3xl w-full text-left">
        {roadmap.map((item, index) => (
          <motion.div
            key={item.title + index}
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="absolute -left-[10px] top-2 w-4 h-4 bg-primary rounded-full shadow" />
            <div className="ml-4">
              <h4 className="text-lg font-semibold text-muted-foreground">
                {item.role}
              </h4>
              {Array.isArray(item.description) ? (
                <ul className="list-disc list-inside text-sm text-muted-foreground italic mb-2 space-y-1">
                  {item.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm italic text-muted-foreground mb-2">
                  {item.description}
                </p>
              )}
              <p className="text-lg font-bold text-muted-foreground text-primary dark:text-blue-300">
                {item.year} — {item.title}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
