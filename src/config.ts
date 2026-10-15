export const siteConfig = {
  name: "Eun Jo",
  title: "Music Technologist & Composer",
  description: "Portfolio website of Eun Jo",
  accentColor: "#1d4ed8",
  social: {
    email: "joeun@ccrma.stanford.edu",
    linkedin: "https://www.linkedin.com/in/eun-jo-58a778433/",
    github: "https://github.com/Eun5077",
  },
  aboutMe:
    "I am a master's student in Music, Science, and Technology at Stanford University's CCRMA, with a background in composition from Seoul National University. My interests lie at the intersection of music and technology, including audio software development, digital signal processing, machine learning, and interactive music systems.",

  skills: [
    "C++",
    "Python",
    "JavaScript",
    "C",
    "JUCE",
    "Max/MSP",
    "Tone.js",
    "ChucK",
    "Git",
    "CMake",
  ],
  projects: [
    {
      name: "Audio Effects",
      date: "Oct 2026",
      description:
        "A real-time stereo VST3 audio effects plugin featuring modular C++ implementations of compression, biquad EQ, and feedback delay, with automated DSP validation.",
      link: "https://github.com/Eun5077/audio-effects",
      github: "https://github.com/Eun5077/audio-effects",
      skills: ["C++", "JUCE", "CMake", "VST3"],
      image: "/images/18.png",
    },
    {
      name: "JULTAGI",
      date: "Oct 2026",
      description:
        "An interactive audiovisual system inspired by Korean traditional tightrope walking. Built with ChucK and ChuGL, featuring real-time waveform and frequency-spectrum visualization, algorithmic percussion with randomized rhythmic patterns, and keyboard-controlled interactions with traditional Korean vocal samples.",
      link: "https://www.youtube.com/watch?v=yBSrb2m3r5o",
      github: "https://github.com/Eun5077/jultagi",
      skills: ["ChucK", "ChuGL", "Audio Visualization", "Algorithmic Composition"],
      image: "/images/19.png",
    },
    {
      name: "Sonic Playground",
      date: "Nov 2025",
      description:
        "A browser-based interactive audio system integrating real-time synthesis, physics-based sound generation, and spatial audio with 16-channel output. Implemented collision-driven audio events, polyphonic synthesis, ADSR envelopes, and gesture-controlled sound parameters.",
      link: "https://youtu.be/3JudBmLbCNg",
      github: "https://github.com/Eun5077/SonicPlayground",
      website: "https://eun5077.github.io/SonicPlayground/",
      demo: "https://youtu.be/3JudBmLbCNg",
      skills: ["JavaScript", "Tone.js", "HTML Canvas"],
      image: "/images/6.png",
    },
    {
      name: "The Maze",
      date: "May 2025",
      description:
        "A real-time interactive music system connecting Python/Pygame and Max/MSP via OSC. Uses DFS maze generation and BFS path analysis to drive adaptive synthesis, spatialization, and filtering.",
      link: "https://youtu.be/OmGykoyC1MI",
      demo: "https://youtu.be/OmGykoyC1MI",
      paper:
        "https://drive.google.com/file/d/1vT1TRV-AcJ_qaqXXKsmCVXUEbusOthq2/view?usp=sharing",
      skills: ["Python", "Pygame", "Max/MSP", "OSC"],
      image: "/images/12.png",
    },
    {
      name: "Bach Chorale Dictionary",
      date: "Nov 2025",
      description:
        "A web-based music analysis and practice platform integrating melodic search, harmonic analysis, score visualization, and interactive playback.",
      link: "https://github.com/Eun5077/Bach-Chorale-Dictionary",
      github: "https://github.com/Eun5077/Bach-Chorale-Dictionary",
      website: "https://eun5077.github.io/Bach-Chorale-Dictionary/",
      paper:
        "https://drive.google.com/file/d/1sXair440J1H-wyYZKkZFj-TC_onkD6DQ/view?usp=sharing",
      skills: ["JavaScript", "Python", "HTML/CSS", "music21", "Tone.js"],
      image: "/images/4.png",
    },
  ],
  
  compositions: [
  {
    name: "Duo for Geomungo and Guitar",
    year: "May 2026",
    instrumentation: "Geomungo and Guitar",
    duration: "",
    description:
      "A Sanjo-inspired composition for two plucked string instruments.",
    image: "/images/8.png",
    recording: "",
    score: "",
    video: "https://youtu.be/fmuFpygBH1A",
  },
  {
    name: "Variations of Voice",
    year: "Feb 2026",
    instrumentation: "Orchestra",
    duration: "",
    description:
      "An orchestral composition exploring the transformation of voice.",
    image: "/images/9.png",
    recording: "",
    score: "",
    video: "https://youtu.be/R7vpYEbD67s",
  },
  {
    name: "Sonic Playground",
    year: "Nov 2025",
    instrumentation: "Interactive Audiovisual System",
    duration: "",
    description:
      "An interactive music system using Tone.js and the Canvas API, combining visual interaction, sound synthesis, and spatial audio with 16-channel output.",
    image: "/images/5.png",
    recording: "",
    score:
      "https://drive.google.com/file/d/1o3kW79YkDb6TBMax31UgGYqBb4T9WUHv/view?usp=sharing",
    video: "https://youtu.be/3JudBmLbCNg",
    website: "https://eun5077.github.io/SonicPlayground/",
  },
  {
    name: "The Secret of Master Cornille",
    year: "Sep 2025",
    instrumentation: "Narrative Performance with Live Music",
    duration: "",
    description:
      "A narrative performance incorporating live music.",
    image: "/images/7.png",
    recording: "",
    score:
      "https://drive.google.com/file/d/1mAB3JGV0OfrB6fp42Y_L0ClfpSYenttd/view?usp=sharing",
    video: "https://youtu.be/JDxu3wYEuVY",
  },
  {
    name: "The Maze",
    year: "May 2025",
    instrumentation: "Real-Time Interactive Music System",
    duration: "",
    description:
      "An interactive music project connecting Python and Max/MSP, transforming maze navigation into musical responses.",
    image: "/images/12.png",
    recording: "",
    score: "",
    video: "https://youtu.be/OmGykoyC1MI",
    paper:
      "https://drive.google.com/file/d/1vT1TRV-AcJ_qaqXXKsmCVXUEbusOthq2/view?usp=sharing",
  },
  {
    name: "Soundtyping",
    year: "Aug 2024",
    instrumentation: "Interactive Audiovisual System",
    duration: "",
    description:
      "A collaborative project exploring the relationship between typing, sound generation, and generative graphic notation.",
    image: "",
    recording: "",
    score: "",
    video: "",
    website: "https://soundtyping.netlify.app/",
  },
  {
    name: "Chosim",
    year: "Oct 2023",
    instrumentation: "Korean Traditional Music",
    duration: "",
    description:
      "A work for Korean traditional music.",
    image: "/images/2.png",
    recording: "",
    score: "",
    video: "",
  },
  {
    name: "My Tempo",
    year: "Nov 2023",
    instrumentation: "Samulnori (Korean Traditional Percussion Ensemble)",
    duration: "",
    description:
      "A composition for Samulnori, a traditional Korean percussion ensemble.",
    image: "/images/10.png",
    recording: "",
    score:
      "https://drive.google.com/file/d/1CoSJklnUvPruU91BAYsYuDsuiMxqP-Y4/view?usp=sharing",
    video: "https://youtu.be/yYpm3m2nl6M",
  },
  {
    name: "Red Speedo",
    year: "Aug 2023",
    instrumentation: "Theater Sound Design",
    duration: "",
    description:
      "Sound design for a theatrical production of Red Speedo.",
    image: "/images/1.png",
    recording: "",
    score: "",
    video: "",
    website:
      "https://theater.arko.or.kr/product/performance/257939",
  },
  {
    name: "Grow",
    year: "May 2022",
    instrumentation: "Animation",
    duration: "",
    description:
      "Music for an animated film.",
    image: "/images/15.png",
    recording: "",
    score: "",
    video: "https://youtu.be/e_5N9J7vwgE",
  },
  {
    name: "Froth",
    year: "Apr 2022",
    instrumentation: "Mad Movie",
    duration: "",
    description:
      "Music for a mad movie titled Froth (거품).",
    image: "/images/16.png",
    recording: "",
    score: "",
    video: "https://youtu.be/sxKVO3h5ITM",
  },
  {
    name: "자취생과 양복남",
    year: "Feb 2022",
    instrumentation: "Short Film",
    duration: "",
    description:
      "Music for a short film.",
    image: "",
    recording: "",
    score: "",
    video: "",
  },
],
  experience: [
    {
      title: "Manifeste 2026 — Académie Auditrice",
      company: "IRCAM",
      location: "Paris, France",
      dateRange: "Jun 2026",
      bullets: [
        "Selected through Seoul National University's Student Abroad Program to participate in IRCAM's Manifeste 2026 Académie, attending lectures, workshops, and presentations on computer music, music technology, and contemporary music.",
      ],
    },
    {
      title: "Research Intern",
      company: "Music and Audio Research Group, Seoul National University",
      location: "Seoul, South Korea",
      dateRange: "Jan 2025 – Feb 2025",
      bullets: [
        "Explored LSTM-based melody generation using interval-based preprocessing of Bartók's Mikrokosmos.",
        "Investigated the effects of background music with and without lyrics on working memory in relation to absolute pitch ability.",
      ],
    },
    {
      title: "Unified Basketball Partner Athlete — Team Korea",
      company: "Special Olympics World Games Berlin 2023",
      location: "Berlin, Germany",
      dateRange: "Jun 2023",
      bullets: [
        "Represented South Korea as a partner athlete on the women's unified basketball team at the Special Olympics World Games Berlin 2023.",
      ],
    },
    {
      title: "International Summer University Participant",
      company: "Freie Universität Berlin (FUBiS)",
      location: "Berlin, Germany",
      dateRange: "Jul 2022 – Aug 2022",
      bullets: [
        "Studied contemporary and electronic music, with a focus on sound technologies.",
      ],
    },
  ],
  education: [
    {
      degree: "M.A. in Music, Science, and Technology",
      school: "Stanford University",
      dateRange: "Sep 2026 – Jun 2028 (Expected)",
      achievements: [
        "Center for Computer Research in Music and Acoustics (CCRMA)",
      ],
    },
    {
      degree: "M.M. in Composition",
      school: "Seoul National University",
      dateRange: "Sep 2024 – Aug 2026",
      achievements: [
        "Master’s Thesis: A Study on the Instrumental Transformation of Pansori in Shinuh Lee’s Jeokbyeok",
      ],
    },
    {
      degree: "B.M. in Composition",
      school: "Seoul National University",
      dateRange: "Mar 2021 – Aug 2024",
      achievements: [
        "Summa Cum Laude",
      ],
    },
  ],
  employment: [
    {
      title: "Department Administrator",
      company: "Seoul National University",
      location: "Seoul, South Korea",
      period: "Mar 2025 – Jun 2026",
      description:
        "Supported academic operations and administrative activities within the Department of Composition.",
    },
    {
      title: "Teaching & Research Assistant",
      company: "Seoul National University",
      location: "Seoul, South Korea",
      period: "Sep 2024 – Feb 2025",
      description:
        "Assisted faculty with teaching, research, and course-related activities.",
    },
    {
      title: "Ski Rental Technician",
      company: "Hoshino Resorts TOMAMU",
      location: "Hokkaido, Japan",
      period: "Dec 2023 – Feb 2024",
      description:
        "Assisted international guests with ski and snowboard equipment rentals during a working holiday in Japan.",
    },
  ],
  languages: [
    { language: "Korean", proficiency: "Native" },
    { language: "English", proficiency: "Professional Working Proficiency" },
    { language: "Japanese", proficiency: "JLPT N1" },
    { language: "German", proficiency: "Goethe-Zertifikat B2" },
  ],
};
