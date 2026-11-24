import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import me from "@/assets/me.jpeg";

export const metadata: Metadata = {
  title: "Vitalii Khomenko — Digital things, made with curiosity",
  description:
    "I’m Vitalii Khomenko, a software developer who turns curiosity into useful digital products. Explore Date Dawn, TWRXA, and BiteBridge.",
};

const projects = [
  {
    name: "Date Dawn",
    category: "TIME WELL SPENT",
    description:
      "A thoughtful countdown for the moments you can’t wait for. Keep the date close, and enjoy the little milestones along the way.",
    url: "https://datedawn.khomenko.de",
    image: "/projects/date-dawn.jpg",
    imageAlt: "Date Dawn countdown landing page and mobile app preview",
    number: "01",
  },
  {
    name: "TWRXA",
    category: "A LITTLE MORE YOU",
    description:
      "Playful, expressive pieces for people who like their style sweet, personal, and just a little unexpected.",
    url: "https://twrxa.khomenko.de",
    image: "/projects/twrxa.png",
    imageAlt: "TWRXA dark storefront featuring a limited-run shirt",
    number: "02",
  },
  {
    name: "BiteBridge",
    category: "SHARED MEAL DECISIONS",
    description:
      "A group meal-planning app that brings people together to decide where to eat.",
    url: "https://bitebridge.khomenko.de",
    image: "/projects/bitebridge.png",
    imageAlt: "BiteBridge group meal decision dashboard",
    number: "03",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero page-width" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="availability-dot" />
            PERSONAL PORTFOLIO <span className="eyebrow-divider">/</span> 2026
          </p>
          <h1 id="hero-title">
            Curiosity,
            <br />
            <span className="hero-second-line">
              made <em>tangible.</em>
            </span>
          </h1>
          <p className="hero-intro">
            I’m Vitalii Khomenko — a software developer and lifelong
            experimenter. I turn ideas into useful digital products, playful
            brands, and things worth coming back to.
          </p>
          <div className="hero-actions">
            <Link className="button button-dark" href="#projects">
              Explore my work <ArrowDown size={16} aria-hidden="true" />
            </Link>
            <a className="text-link" href="mailto:vhomenko119@gmail.com">
              Get in touch <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
          <p className="hero-note">
            <Sparkles size={14} aria-hidden="true" />
            Always learning. Usually building.
          </p>
        </div>

        <div className="hero-portrait">
          <div className="portrait-frame">
            <Image
              src={me}
              alt="Vitalii Khomenko"
              priority
              sizes="(max-width: 760px) 78vw, 36vw"
            />
            <div className="portrait-caption">
              <span>VITALII KHOMENKO</span>
              <span>MAKER OF THINGS ↗</span>
            </div>
          </div>
          <div className="orbit-note" aria-hidden="true">
            <span>ideas</span>
            <span className="orbit-star">✳</span>
            <span>in motion</span>
          </div>
        </div>
        <a className="scroll-cue" href="#projects" aria-label="Scroll to projects">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={15} aria-hidden="true" />
        </a>
      </section>

      <section className="project-section" id="projects" aria-labelledby="projects-title">
        <div className="page-width">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A FEW THINGS I’VE MADE</p>
              <h2 id="projects-title">
                Small ideas.
                <br />
                <em>Real worlds.</em>
              </h2>
            </div>
            <p className="section-aside">
              Different curiosities, same approach: make it useful, make it
              feel good, and keep learning along the way.
            </p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <a
                  className="project-visual"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${project.name}`}
                >
                  <span className="project-number">{project.number} / 03</span>
                  <Image
                    className="project-screenshot"
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 680px) 100vw, (max-width: 900px) 33vw, 370px"
                  />
                  <span className="visual-arrow">
                    <ArrowUpRight size={20} aria-hidden="true" />
                  </span>
                </a>
                <div className="project-details">
                  <div className="project-title-line">
                    <div>
                      <p className="project-category">{project.category}</p>
                      <h3>{project.name}</h3>
                    </div>
                    <a
                      className="project-link"
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.name} website`}
                    >
                      <ArrowUpRight size={20} aria-hidden="true" />
                    </a>
                  </div>
                  <p className="project-description">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section page-width" id="about" aria-labelledby="about-title">
        <div className="about-index">
          <span className="index-mark">VK.</span>
          <span className="eyebrow">A LITTLE ABOUT ME</span>
        </div>
        <div className="about-copy">
          <h2 id="about-title">
            I learn by making —
            <br />
            and make to <em>keep learning.</em>
          </h2>
          <p>
            I’m a software developer and student from Ukraine. I got into
            programming as a teenager, and I still love following a new
            curiosity wherever it leads — from building apps to exploring
            design, Blender, and Unity.
          </p>
          <p>
            Outside of code, you’ll find me dancing, reading, or looking for
            the next idea that deserves to exist.
          </p>
          <a className="text-link about-link" href="https://github.com/Vitaliklisa" target="_blank" rel="noreferrer">
            More of what I’m making <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
        <div className="about-stamp" aria-hidden="true">
          <span>KEEP</span>
          <span>MAKING</span>
          <span className="stamp-star">✳</span>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="page-width contact-inner">
          <p className="eyebrow">HAVE A GOOD IDEA?</p>
          <h2 id="contact-title">
            Let’s make
            <br />
            <em>something matter.</em>
          </h2>
          <a className="contact-button" href="mailto:vhomenko119@gmail.com">
            Say hello <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <a className="contact-email" href="mailto:vhomenko119@gmail.com">
            vhomenko119@gmail.com
          </a>
          <div className="contact-decoration" aria-hidden="true">✳</div>
        </div>
      </section>
    </>
  );
}
