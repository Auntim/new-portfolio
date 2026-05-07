

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

// ─── Your Project Data ────────────────────────────────────────────────────────
const projectsData = [
    {
        id: 1,
        title: "Ai-Fiesta",
        subtitle: "All Ai Tools In One",
        description:
            "Welcome to Ai-Fiesta — a suite of powerful features powered by cutting-edge AI technologies.",
        category: "Mobile",
        image: "https://i.ibb.co.com/LDw5jzVn/Screenshot-2025-10-20-222548.png",
        technologies: ["Next.js", "Clerk Auth", "Redux", "ShadcnUI", "Vercel", "Firebase"],
        liveLink: "https://ai-fiesta-v2.vercel.app/",
        githubLink: "https://github.com/Auntim/Ai-fiesta-v2",
        code: "# 01",
    },
    {
        id: 2,
        title: "K72",
        subtitle: "Agency Branding",
        description:
            "K72 is an agency that builds brands from every angle — today, tomorrow and years from now.",
        category: "Web App",
        image: "https://i.ibb.co.com/PvCZ6FNN/Screenshot-2025-10-20-223546.png",
        technologies: ["React", "GSAP", "Express", "Node.js", "Tailwind CSS"],
        liveLink: "https://k72-project-jet.vercel.app/",
        githubLink: "https://github.com/Auntim/k72-project",
        code: "# 02",
    },
    {
        id: 3,
        title: "Pet Adopt",
        subtitle: "Adoption Platform",
        description:
            "A full-featured pet adoption platform with product management, cart functionality, and payment processing.",
        category: "Web App",
        image: "https://i.ibb.co/gZqLNMxc/Screenshot-2025-05-18-214531.png",
        technologies: ["React", "Node.js", "MongoDB", "Stripe", "Firebase"],
        liveLink: "https://pet-adoption-f71aa.web.app/",
        githubLink: "https://github.com/Auntim/pet-adoption-A12-client",
        code: "# 03",
    },
    {
        id: 4,
        title: "Lewio",
        subtitle: "Lawyer Management",
        description:
            "An innovative service-sharing platform for lawyers and legal professionals to add, browse, book, and manage legal services.",
        category: "Web App",
        image: "https://i.ibb.co/23BfR7FK/Screenshot-84.png",
        technologies: ["React.js", "Firebase", "MongoDB", "Express JS"],
        liveLink: "https://laywer-service.web.app/",
        githubLink: "https://github.com/Auntim/assign-ment-11-client-side",
        code: "# 04",
    },
    {
        id: 5,
        title: "Gadget Heaven",
        subtitle: "E-Commerce",
        description:
            "An interactive e-commerce site for tech products — clean UI, dynamic data handling, and interactive features.",
        category: "UI/UX",
        image: "https://i.ibb.co/WWZttcDZ/gadget.png",
        technologies: ["JavaScript", "HTML", "daisyUI", "React"],
        liveLink: "https://helpful-crumble-73f4c4.netlify.app/",
        githubLink: "https://github.com/Auntim/Gadget-Heaven",
        code: "# 05",
    },
    {
        id: 6,
        title: "Dream11",
        subtitle: "Player Management",
        description:
            "Manage a roster of players — add, remove, and track selected players and available options.",
        category: "Web App",
        image: "https://i.ibb.co/1JQWxJFk/cricket.png",
        technologies: ["HTML/CSS", "Firebase", "JavaScript"],
        liveLink: "https://storied-biscuit-e04c76.netlify.app/",
        githubLink: "https://github.com/Auntim/assignment-7-dream11",
        code: "# 06",
    },
    {
        id: 7,
        title: "QuickShip",
        subtitle: "MERN Stack Project",
        description:
            "QuickShip helps you send and track parcels effortlessly across the country with real-time updates.",
        category: "Web App",
        image: "https://i.ibb.co.com/TDPPNSwF/Screenshot-2026-05-08-003313.png",
        technologies: ["HTML/CSS", "Firebase", "JavaScript"],
        liveLink: "https://quick-ship-fawn.vercel.app/",
        githubLink: "https://github.com/Auntim/QuickShip-MERN-Project",
        code: "# 07",
    }


];

// ─── HoverExpand Card ─────────────────────────────────────────────────────────
const HoverExpandProjects = ({ projects, className = "" }) => {
    const [activeIndex, setActiveIndex] = useState(1);

    return (
        <motion.div
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className={`relative w-full max-w-7xl px-5 ${className}`}

        >
            <div className="flex  w-full items-center justify-center gap-1">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className="relative cursor-pointer overflow-hidden rounded-3xl border-2 border-white"
                        animate={{
                            width: activeIndex === index ? "24rem" : "5rem",
                            height: "24rem",
                        }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        onClick={() => setActiveIndex(index)}
                        onHoverStart={() => setActiveIndex(index)}
                    >
                        {/* Gradient overlay always present */}
                        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        {/* Project image */}
                        <img
                            src={project.image}
                            alt={project.title}
                            className="size-full object-cover"
                        />

                        {/* Collapsed label (rotated) */}
                        <AnimatePresence>
                            {activeIndex !== index && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 z-20 flex items-center justify-center"
                                >
                                    <p
                                        className="whitespace-nowrap text-[11px] font-medium uppercase tracking-widest text-white/60"
                                        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                                    >
                                        {project.title}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Expanded content */}
                        <AnimatePresence>
                            {activeIndex === index && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.25, delay: 0.1 }}
                                    className="absolute inset-0 z-20 flex flex-col justify-between p-5"
                                >
                                    {/* Top: category + code */}
                                    <div className="flex items-center justify-between">
                                        <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-white/70 backdrop-blur-sm">
                                            {project.category}
                                        </span>
                                        <span className="text-[10px] text-white/40">{project.code}</span>
                                    </div>

                                    {/* Bottom: title + desc + tech + links */}
                                    <div className="flex flex-col gap-3">
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-white/50">
                                                {project.subtitle}
                                            </p>
                                            <h3 className="text-xl font-bold leading-tight text-white">
                                                {project.title}
                                            </h3>
                                        </div>

                                        <p className="line-clamp-2 text-[11px] leading-relaxed text-white/60">
                                            {project.description}
                                        </p>

                                        {/* Tech stack */}
                                        <div className="flex flex-wrap gap-1">
                                            {project.technologies.slice(0, 4).map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="rounded-full bg-white/10 px-2 py-0.5 text-[9px] text-white/60 backdrop-blur-sm"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.technologies.length > 4 && (
                                                <span className="rounded-full bg-white/10 px-2 py-0.5 text-[9px] text-white/60 backdrop-blur-sm">
                                                    +{project.technologies.length - 4}
                                                </span>
                                            )}
                                        </div>

                                        {/* Links */}
                                        <div className="flex gap-2">
                                            <a
                                                href={project.liveLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-[16px] font-semibold text-black transition-opacity hover:opacity-80 cursor-target"
                                            >
                                                Live ↗
                                            </a>
                                            <a
                                                href={project.githubLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1 rounded-full bg-white/10 px-3 py-1.5 text-[16px] font-medium text-white/80 backdrop-blur-sm transition-opacity hover:opacity-80 cursor-target"
                                            >
                                                GitHub
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

// ─── Full Section Wrapper ─────────────────────────────────────────────────────
const Skiper = () => {
    return (
        <section className="flex min-h-screen w-full flex-col items-center justify-center gap-10 bg-[#f5f4f3] py-2"
            style={{
                background: "#000000",
                backgroundImage: `
        linear-gradient(to right, rgba(75, 85, 99, 0.4) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(75, 85, 99, 0.4) 1px, transparent 1px)
      `,
                backgroundSize: "40px 40px",
            }}
        >
            {/* Section heading */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center gap-2 text-center"
            >
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">Selected Work</p>
                <h2 className="text-4xl font-bold tracking-tight text-slate-200">Projects</h2>
            </motion.div>

            <HoverExpandProjects projects={projectsData} />
        </section>
    );
};

export default Skiper;
export { HoverExpandProjects, projectsData };