/*
  DAFTAR PROJECT
  --------------
  Untuk menambah project: salin satu blok { ... } di bawah, tempel di bawahnya
  (jangan lupa koma di antara blok), lalu ubah isinya.

  Field:
    id           nama unik tanpa spasi, dipakai juga sebagai nama folder gambar
    title        judul project
    category     kategori (muncul sebagai tombol filter otomatis), mis. "Web", "Game"
    year         tahun pembuatan
    status       mis. "Completed", "In progress"
    cover        gambar sampul yang muncul di daftar project
    screenshots  foto-foto scene/tampilan project (urutan = urutan tampil)
    description  deskripsi. Pisahkan paragraf dengan baris kosong (\n\n)
    tech         teknologi yang dipakai
    github       link repository GitHub
    demo         (opsional) link demo/live. Kosongkan "" jika tidak ada

  Gambar: taruh di folder images/projects/<id>/ lalu tulis path-nya di sini.
  Jika file gambar belum ada, website otomatis menampilkan kotak placeholder.
*/
window.PROJECTS = [
  {
    id: "guide-to-the-informatics",
    title: "Guide to the Informatics",
    category: "Web",
    year: "2025",
    status: "Completed",
    cover: "images/projects/guide-to-the-informatics/cover.jpg",
    screenshots: [
      "images/projects/guide-to-the-informatics/1.jpg",
      "images/projects/guide-to-the-informatics/2.jpg",
      "images/projects/guide-to-the-informatics/3.jpg"
    ],
    description:
      "An introductory web guide designed to help new students navigate the Informatics (Teknik Informatika) department, covering academic essentials, campus life, and foundational computing resources.\n\nBuilt with clean, accessible web standards to present structured information clearly for incoming freshmen.",
    tech: ["Renpy"],
    github: "https://github.com/xoaaa/Guide-Into-The-Informatics",
    demo: ""
  },
  {
    id: "the-cats-and-the-bunnies-riddle",
    title: "The Cats and The Bunnies Riddle",
    category: "Game",
    year: "2025",
    status: "Completed",
    cover: "images/projects/the-cats-and-the-bunnies-riddle/cover.jpg",
    screenshots: [
      "images/projects/the-cats-and-the-bunnies-riddle/1.png",
      "images/projects/the-cats-and-the-bunnies-riddle/2.png",
      "images/projects/the-cats-and-the-bunnies-riddle/3.png",
      "images/projects/the-cats-and-the-bunnies-riddle/4.png",
      "images/projects/the-cats-and-the-bunnies-riddle/5.png",
      "images/projects/the-cats-and-the-bunnies-riddle/6.png"
    ],
    description:
      "An interactive logic and puzzle game built in Python that challenges players to solve constraint-based riddles involving cats and bunnies.\n\nDesigned state transitions, rule validation, and interactive game loops to translate classic logical deduction problems into playable mechanics.",
    tech: ["C#"],
    github: "https://github.com/xoaaa/the-cat-and-the-bunnies-riddle-three",
    demo: ""
  },
  {
    id: "EquaLife",
    title: "EquaLife",
    category: "App",
    year: "2025",
    status: "Completed",
    cover: "images/projects/EquaLife/cover.jpg",
    screenshots: [
      "images/projects/EquaLife/1.png",
      "images/projects/EquaLife/2.jpg",
      "images/projects/EquaLife/3.jpg",
      "images/projects/EquaLife/4.jpg",
      "images/projects/EquaLife/5.jpg"
    ],
    description:
      "A personal productivity and life-balance web application built to help users organize daily routines, track habits, and maintain equilibrium across academic and personal commitments.\n\nCollaborated on front-end interface design and interactive client-side state management for a clean, low-friction user experience.",
    tech: ["Android Studio", "Java", "XML"],
    github: "https://github.com/fuhuavl/EquaLife_REV.git",
    demo: ""
  },
  {
    id: "MazeSolver",
    title: "Maze Solver",
    category: "Web",
    year: "2025",
    status: "Completed",
    cover: "images/projects/maze-solver/cover.jpg",
    screenshots: [
      "images/projects/maze-solver/1.png",
      "images/projects/maze-solver/2.png",
      "images/projects/maze-solver/3.png",
      "images/projects/maze-solver/4.png"
    ],
    description:
      "An interactive pathfinding and maze-solving visualizer that demonstrates how search algorithms explore grids and find optimal routes from start to finish.\n\nImplemented step-by-step grid rendering and path traversal animations to make algorithmic decision-making intuitive to observe.",
    tech: ["Python"],
    github: "https://github.com/xoaaa/MazeSolver",
    demo: ""
  },
  {
    id: "Knight-Tour-Visualizer",
    title: "Knight Tour Visualizer",
    category: "App",
    year: "2025",
    status: "Completed",
    cover: "images/projects/knight-tour-visualizer/cover.jpg",
    screenshots: [
      "images/projects/knight-tour-visualizer/1.png",
      "images/projects/knight-tour-visualizer/2.png",
      "images/projects/knight-tour-visualizer/3.png"
    ],
    description:
      "An interactive 8x8 chessboard visualization program solving the classic Knight's Tour problem using Warnsdorff's heuristic algorithm.\n\nAllows users to observe step-by-step knight movements across all 64 squares while tracking visited coordinates and heuristic degree calculations in real time.",
    tech: ["Python"],
    github: "https://github.com/xoaaa/Knight-Tour-Visualizer",
    demo: ""
  },
  {
    id: "Wishing-You",
    title: "Wishing You",
    category: "Web",
    year: "2025",
    status: "Completed",
    cover: "images/projects/wishing-you/cover.jpg",
    screenshots: [
      "images/projects/wishing-you/1.jpg",
      "images/projects/wishing-you/2.jpg",
      "images/projects/wishing-you/3.jpg",
      "images/projects/wishing-you/4.jpg"
    ],
    description:
      "An interactive digital greeting card and personalized message web experience crafted with custom animations and responsive layouts.\n\nFocused on expressive visual storytelling, smooth CSS transitions, and lightweight client-side interactivity.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/xoaaa/Wishing-You",
    demo: ""
  },
  {
    id: "Task-Manager",
    title: "Task Manager",
    category: "Web",
    year: "2026",
    status: "Completed",
    cover: "images/projects/task-manager/cover.jpg",
    screenshots: [
      "images/projects/task-manager/1.png",
      "images/projects/task-manager/2.png",
      "images/projects/task-manager/3.png",
      "images/projects/task-manager/4.png"
    ],
    description:
      "A web-based GPA (IPK) calculation and academic performance prediction tool developed.\n\nEnables students to simulate semester grades, calculate cumulative weighted scores across course credits (SKS), and plan academic targets.",
    tech: ["Python"],
    github: "https://github.com/fuhuavl/IPK-Predictor-FP-PBKK",
    demo: ""
  },
  {
    id: "Student-Performance-Predictor",
    title: "Student Performance Predictor",
    category: "Web",
    year: "2026",
    status: "Completed",
    cover: "images/projects/student-performance-predictor/cover.jpg",
    screenshots: [
      "images/projects/student-performance-predictor/1.png",
      "images/projects/student-performance-predictor/2.png",
      "images/projects/student-performance-predictor/3.png",
      "images/projects/student-performance-predictor/4.png"
    ],
    description:
      "A web application designed to predict student performance based on historical academic data and input parameters.\n\nUtilizes statistical modeling and machine learning techniques to provide insights into potential academic outcomes, assisting students in planning their study strategies.",
    tech: ["Python"],
    github: "https://github.com/fuhuavl/IPK-Predictor-FP-PBKK",
    demo: ""
  },
  {
    id: "Belajar-Mandarin",
    title: "Belajar Mandarin",
    category: "Web",
    year: "2026",
    status: "In Progress",
    cover: "images/projects/belajar-mandarin/cover.jpg",
    screenshots: [
      "images/projects/belajar-mandarin/1.png",
      "images/projects/belajar-mandarin/2.png",
      "images/projects/belajar-mandarin/3.png"
    ],
    description:
      "An interactive Mandarin Chinese flashcard and vocabulary learning web application featuring character recognition practice and custom audio pronunciation controls.\n\nBuilt as a collaborative software engineering project with a modern component-driven frontend architecture and responsive utility styling.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "DaisyUI"],
    github: "https://github.com/Ga2627-RPL-MA/Belajar-Mandarin",
    demo: ""
  }
];