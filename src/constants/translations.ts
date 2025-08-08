export const translations = {
  en: {
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact",
    hobbies: "Hobbies",
    homeSection: {
      welcome: "Hi, I'm Denis Kutepov",
      role: "Frontend Developer",
      description: "I build beautiful and functional web experiences.",
      resume: "Download Resume",
    },
    aboutSection: {
      title: "About Me",
      description: `
       I am a frontend developer with 3 years of commercial experience.
       
Since 2024, I have been developing a flowchart module for an integrated modeling system at LUKOIL Engineering — an internal counterpart to the tNavigator software suite.
My main focus is building a modern, intuitive, and high-performance interface for complex engineering processes. I work with a tech stack that includes React, TypeScript, and Tailwind CSS, with particular attention to UX, code readability, and performance.

Previously, I developed fullstack applications using Node.js, participated in hackathons, and continuously explore modern technologies and development practices.

In my free time, I enjoy making music and staying active through sports(chess, table-tennis, voleyball).
      `,
    },
    timeline: [
      {
        year: "2024–Present",
        title: "LUKIOL Engineering",
        role: "Frontend Developer",
        description:
          "Developed integrated modeling tools using React, TypeScript, Tailwind,  SVG, and advanced UI logic.",
      },
      {
        year: "2021–2023",
        title: "Freelance / Hackathons",
        role: "Fullstack Developer",
        description:
          "Built e-commerce and news apps using React, Redux, Node.js, MongoDB, Docker.",
      },
      {
        year: "2019–2021",
        title: "Self-Taught & Pet Projects",
        role: "Junior Developer",
        description:
          "Learned JavaScript, built first projects, and dove deep into the React ecosystem.",
      },
    ],
    projectsSection: {
      title: "Projects",
      view: "View project",
      items: [
        {
          id: "3d-shoe-shop",
          name: "3d-shoe-shop",
          description: {
            en: "3D Sneakers Store. 3D sneakers model with individual design of each part.",
            ru: "3D магазин кросовок. 3D-модель кросовок с кастомизацией каждый части.",
          },
          tech: [
            "React",
            "Three.js",
            "Tanstack Table",
            "Vite",
            "Redux",
            "TypeScript",
          ],
          link: "https://denkut.github.io/3D-shoe-customizer",
        },
        {
          id: "upfood",
          name: "UpFood",
          description: {
            en: "A healthy food e-commerce fullstack app built with React, Redux, Node.js, and MongoDB.",
            ru: "Фулстек онлайн-магазин здорового питания на React, Redux, Node.js и MongoDB.",
          },
          tech: [
            "React",
            "Redux",
            "TypeScript",
            "Node.js",
            "MongoDB",
            "Docker",
            "CSS-Module",
          ],
          link: "https://github.com/Denkut/UpFood",
        },

        {
          id: "news",
          name: "News",
          description: {
            en: "A news feed project using React and modern frontend tooling.",
            ru: "Новостной сервис на React с современным фронтендом.",
          },
          tech: ["React", "Vite", "Tailwind", "Redux"],
          link: "https://github.com/Denkut/news-reactify",
        },
        {
          id: "kutepova",
          name: "Doctor's personal website",
          description: {
            en: "A personal site for a gynecologist-sexologist built with React.",
            ru: "Персональный сайт для гинеколога-сексолога на React.",
          },
          tech: ["React", "Redux", "TypeScript", "Tailwind"],
          link: "https://github.com/Denkut/kutepova",
        },
      ],
    },
    hobbiesSection: {
      title: "Musical Side",
      description:
        "I compose various music — from ambient to rock and fusion. I take part in concerts and festivals. I enjoy live sound and rich arrangements. Music helps me stay focused and creative.",
      cta: "Listen on AudioJungle",
    },
    footerSection: {
      title: "Let's connect",
      email: "denix.ru@yandex.ru",
      resume: "Download Resume",
      github: "GitHub",
      telegram: "Telegram",
      copyright: "© 2025 Denis Kutepov. All rights reserved.",
    },
  },
  ru: {
    home: "Домой",
    about: "Обо мне",
    projects: "Проекты",
    contact: "Контакты",
    hobbies: "Хобби",
    homeSection: {
      welcome: "Привет, я Денис Кутепов",
      role: "Frontend-разработчик",
      description: "Я создаю красивые и функциональные веб-решения.",
      resume: "Скачать резюме",
    },
    aboutSection: {
      title: "Обо мне",
      description: `
        Я фронтенд-разработчик с 3-летним коммерческим опытом. 
        
        С 2024 года разрабатываю модуль схем для системы интегрированного моделирования в ЛУКОЙЛ-Инжиниринг — аналог программного комплекса tNavigator.
        Моя основная задача: создание современного, удобного и производительного интерфейса для сложных инженерных процессов. В своей работе использую стек: React, TypeScript, Tailwind CSS, уделяя особое внимание UX, читаемости кода и производительности.
       
        До этого разрабатывал fullstack-приложения с использованием Node.js, участвовал в хакатонах и постоянно изучаю современные технологии и подходы к разработке.
       
        В свободное от работы время занимаюсь музыкой и спортом(шахматы, настольный-теннис, волейбол).
      `,
    },
    timeline: [
      {
        year: "2024–настоящее время",
        title: "ЛУКОЙЛ-Инжиниринг",
        role: "Frontend-разработчик",
        description:
          "Разработка модуля интегрированного моделирования. React, TypeScript, Tailwind, SVG-графика, сложная логика интерфейса.",
      },
      {
        year: "2021–2023",
        title: "Фриланс / Хакатоны",
        role: "Fullstack-разработчик",
        description:
          "Создание e-commerce и новостных приложений. React, Redux, Node.js, MongoDB, Docker.",
      },
      {
        year: "2019–2021",
        title: "Самообучение и pet-проекты",
        role: "Junior-разработчик",
        description:
          "Изучение JavaScript, построение первых проектов, погружение в экосистему React.",
      },
    ],
    projectsSection: {
      title: "Проекты",
      view: "Посмотреть проект",
      items: [
        {
          id: "3d-shoe-shop",
          name: "3d-shoe-shop",
          description: {
            en: "3D Sneakers Store. 3D sneakers model with individual design of each part.",
            ru: "3D магазин кросовок. 3D-модель кросовок с кастомизацией каждый части.",
          },
          tech: [
            "React",
            "Three.js",
            "Tanstack Table",
            "Vite",
            "Redux",
            "TypeScript",
          ],
          link: "https://denkut.github.io/3D-shoe-customizer",
        },
        {
          id: "upfood",
          name: "UpFood",
          description: {
            en: "A healthy food e-commerce fullstack app built with React, Redux, Node.js, and MongoDB.",
            ru: "Фулстек онлайн-магазин здорового питания на React, Redux, Node.js и MongoDB.",
          },
          tech: [
            "React",
            "Redux",
            "TypeScript",
            "Node.js",
            "MongoDB",
            "Docker",
            "CSS-Module",
          ],
          link: "https://github.com/Denkut/UpFood",
        },

        {
          id: "news",
          name: "News",
          description: {
            en: "A news feed project using React and modern frontend tooling.",
            ru: "Новостной сервис на React с современным фронтендом.",
          },
          tech: ["React", "Vite", "Tailwind", "Redux"],
          link: "https://github.com/Denkut/news-reactify",
        },
        {
          id: "kutepova",
          name: "Личный сайт врача",
          description: {
            en: "A personal site for a gynecologist-sexologist built with React.",
            ru: "Персональный сайт для гинеколога-сексолога на React.",
          },
          tech: ["React", "Redux", "TypeScript", "Tailwind"],
          link: "https://github.com/Denkut/kutepova",
        },
      ],
    },
    hobbiesSection: {
      title: "Музыкальные увлечения",
      description:
        "Пишу разную музыку — от эмбиента до рока и фьюжна. Выступаю на концертах и фестивалях. Люблю живое звучание и глубокие аранжировки. Музыка помогает мне балансировать фокус и креативность.",
      cta: "Послушать на AudioJungle",
    },
    footerSection: {
      title: "Давайте свяжемся",
      email: "denix.ru@yandex.ru",
      resume: "Скачать резюме",
      github: "Гитхаб",
      telegram: "Телеграм",
      copyright: "© 2025 Денис Кутепов. Все права защищены.",
    },
  },
} as const;

export type SupportedLang = keyof typeof translations;
export type TranslationKey = keyof (typeof translations)["ru"];
