import { useLanguage } from "../context";
import { previews, translations } from "../constants";
import { motion } from "framer-motion";

export const Projects = () => {
  const { language } = useLanguage();
  const { title, items } = translations[language].projectsSection;

  return (
    <section
      id="projects"
      className="w-full min-h-screen px-4 py-20 flex flex-col items-center justify-center text-center bg-white dark:bg-background"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-primary mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((project, index) => {
            const matchedPreview = previews.find((p: { id: string }) => p.id === project.id)?.preview;

            return (
              <motion.a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-muted-foreground/20 dark:border-muted-foreground/10 p-6 rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white dark:bg-zinc-800"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {matchedPreview &&
                  (matchedPreview.endsWith(".mp4") ? (
                    <video
                      src={import.meta.env.BASE_URL + matchedPreview}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                  ) : (
                    <img
                      src={import.meta.env.BASE_URL + matchedPreview}
                      alt={project.name}
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                  ))}
                <h3 className="text-xl font-semibold text-primary mb-2 group-hover:underline">
                  {project.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {project.description[language]}
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-primary text-white px-2 py-1 rounded-full dark:bg-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
