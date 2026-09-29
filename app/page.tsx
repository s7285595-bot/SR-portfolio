"use client";

import { useEffect, useState } from "react";

const skills = [
  ["Java", "Backend"],
  ["Spring Boot", "Backend"],
  ["Microservices", "Backend"],
  ["REST APIs", "Backend"],
  ["Spring Security", "Backend"],
  ["JWT", "Backend"],
  ["React.js", "Frontend"],
  ["Next.js", "Frontend"],
  ["JavaScript", "Frontend"],
  ["HTML5 / CSS3", "Frontend"],
  ["MySQL", "Database"],
  ["SQL", "Database"],
  ["AWS", "Cloud"],
  ["Docker", "DevOps"],
  ["Jenkins", "DevOps"],
  ["GitHub Actions", "DevOps"],
  ["Maven", "DevOps"],
  ["Git / GitHub", "DevOps"],
];

const experience = [
  {
    company: "FE fundinfo",
    role: "Web Data Collection Analyst",
    date: "Sep 2025 — Feb 2026",
    project: "Asset Managers — Web Data Collection",
    points: [
      "Developed JavaScript automation workflows for collecting, processing, validating and structuring web data.",
      "Automated authentication, pagination and dynamic-content extraction for repeatable collection workflows.",
      "Performed SQL validation, reconciliation, transformation and data-quality checks.",
      "Investigated extraction failures, processing errors and inconsistencies to improve workflow reliability.",
    ],
  },
  {
    company: "People Tech Group",
    role: "Associate Software Engineer",
    date: "Sep 2023 — Nov 2024",
    project: "ABB",
    points: [
      "Developed enterprise web applications using Java, Spring Boot, REST APIs, Microservices, React.js, Next.js and MySQL.",
      "Built backend services implementing business logic, validations, exception handling and reusable components.",
      "Integrated React.js and Next.js interfaces with Spring Boot REST APIs for end-to-end workflows.",
      "Implemented authentication and authorization using Spring Security and JWT.",
      "Worked with AWS EC2, API Gateway, RDS and S3 for deployment, integration and storage.",
      "Used Git, Maven, Jenkins, GitHub Actions and Docker across build, CI/CD and deployment workflows.",
    ],
  },
  {
    company: "OSI Digital",
    role: "Project Software Engineer",
    date: "Jun 2022 — Sep 2023",
    project: "Pryme / OSI Digital In-house Applications",
    points: [
      "Developed and enhanced enterprise applications using Java, Spring Boot, REST APIs, Microservices, React.js and MySQL.",
      "Implemented backend services, business logic, validations, API integrations and reusable application components.",
      "Created and optimized SQL queries and database operations for efficient data retrieval.",
      "Performed debugging, defect resolution, API troubleshooting and production-support activities.",
      "Supported Git workflows, Maven builds, CI/CD pipelines, application deployments and release troubleshooting.",
    ],
  },
];

const projects = [
  {
    number: "01",
    type: "FULL STACK",
    title: "Enterprise Application Platform",
    description:
      "Enterprise full-stack architecture combining Spring Boot microservices, secure REST APIs, React / Next.js interfaces and MySQL persistence.",
    stack: [
      "Java",
      "Spring Boot",
      "Microservices",
      "React",
      "Next.js",
      "MySQL",
    ],
  },
  {
    number: "02",
    type: "PRODUCT",
    title: "AI Career Platform",
    description:
      "A modern career platform concept designed around intelligent career workflows, job discovery and AI-assisted user experiences.",
    stack: ["Next.js", "Python", "APIs", "AI", "UI / UX"],
  },
  {
    number: "03",
    type: "AUTOMATION",
    title: "Web Data Automation",
    description:
      "JavaScript automation workflows for dynamic websites covering authentication, pagination, extraction, validation and structured data preparation.",
    stack: ["JavaScript", "Automation", "SQL", "Data"],
  },
];

export default function Home() {
  const [active, setActive] = useState("All");
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const categories = [
    "All",
    "Backend",
    "Frontend",
    "Database",
    "Cloud",
    "DevOps",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const filteredSkills = skills.filter(
    ([, category]) => active === "All" || category === active
  );

  return (
    <main>
      {/* NAVBAR */}
      <nav className={`nav ${scrolled ? "navScrolled" : ""}`}>
        <a href="#" className="logo">
          SAI RAM PONNALA<span>.</span>
        </a>

        <div className={`links ${menu ? "open" : ""}`}>
          <a href="#about" onClick={() => setMenu(false)}>
            About
          </a>

          <a href="#experience" onClick={() => setMenu(false)}>
            Experience
          </a>

          <a href="#projects" onClick={() => setMenu(false)}>
            Projects
          </a>

          <a href="#skills" onClick={() => setMenu(false)}>
            Stack
          </a>

          <a href="#contact" onClick={() => setMenu(false)}>
            Contact
          </a>
        </div>

        <a
          className="navCta"
          href="mailto:sairamponnala7@gmail.com"
        >
          Hire me <span>↗</span>
        </a>

        <button
          className="hamburger"
          onClick={() => setMenu(!menu)}
          aria-label="Menu"
        >
          {menu ? "×" : "☰"}
        </button>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="heroGrid" />
        <div className="heroOrb" />

        <div className="heroContent">
          <div className="status">
            <i />
            OPEN TO SOFTWARE ENGINEERING OPPORTUNITIES
          </div>

          <h1>
            Java developer.
            <br />
            <span>Full-stack mindset.</span>
          </h1>

          <p className="heroLead">
            I build reliable enterprise applications, scalable backend
            services and polished web experiences with Java, Spring Boot,
            React, Next.js and AWS.
          </p>

          <div className="actions">
            <a href="#projects" className="btnPrimary">
              View selected work <b>↗</b>
            </a>

            {/* DOWNLOAD RESUME */}
            <a
              href="/Sai_Ram_SP.pdf"
              download
              className="btnGhost"
            >
              Download Resume <b>↓</b>
            </a>

            <a href="#contact" className="btnGhost">
              Let&apos;s talk
            </a>
          </div>

          <div className="stats">
            <div>
              <strong>2.10</strong>
              <small>YEARS EXPERIENCE</small>
            </div>

            <div>
              <strong>Java</strong>
              <small>CORE SPECIALIZATION</small>
            </div>

            <div>
              <strong>AWS</strong>
              <small>CERTIFIED ASSOCIATE</small>
            </div>
          </div>
        </div>

        <div className="heroSide">
          HYDERABAD, INDIA
          <br />
          <span>SOFTWARE ENGINEERING</span>
        </div>

        <div className="scroll">
          SCROLL <span>↓</span>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="light section">
        <div className="label">01 / PROFILE</div>

        <div className="twoCol">
          <div>
            <h2>
              Engineering
              <br />
              <em>with intent.</em>
            </h2>
          </div>

          <div className="copy">
            <p className="large">
              Java Developer / Java Full Stack Developer with 2 years 10
              months of professional experience developing, enhancing,
              debugging and supporting enterprise web applications.
            </p>

            <p>
              Experienced across backend development, business logic, API
              integration, relational databases, authentication, frontend
              integration, CI/CD, cloud deployment and production support.
            </p>

            <div className="cert">
              <div className="certIcon">AWS</div>

              <div>
                <b>AWS Certified Solutions Architect — Associate</b>

                <small>
                  Cloud architecture · Infrastructure · Deployment
                </small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="dark section">
        <div className="label">02 / EXPERIENCE</div>

        <div className="sectionIntro">
          <h2>
            Professional
            <br />
            <em>experience.</em>
          </h2>

          <p>
            Enterprise software, full-stack engineering, automation and
            production support across multiple environments.
          </p>
        </div>

        <div className="experience">
          {experience.map((item, index) => (
            <article
              className="experienceItem"
              key={item.company}
            >
              <div className="number">
                0{index + 1}
              </div>

              <div>
                <div className="jobHead">
                  <div>
                    <div className="role">
                      {item.role}
                    </div>

                    <div className="company">
                      {item.company}
                      <span> · </span>
                      {item.project}
                    </div>
                  </div>

                  <time>{item.date}</time>
                </div>

                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="light section">
        <div className="label">03 / SELECTED WORK</div>

        <div className="sectionIntro">
          <h2>
            Selected
            <br />
            <em>work.</em>
          </h2>

          <p>
            Engineering work and product concepts reflecting my full-stack
            and automation experience.
          </p>
        </div>

        <div className="projectGrid">
          {projects.map((project) => (
            <article
              className="project"
              key={project.number}
            >
              <div className="projectTop">
                <span>{project.number}</span>

                <small>{project.type}</small>

                <b>↗</b>
              </div>

              <div className="projectBody">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tags">
                  {project.stack.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="dark section">
        <div className="label">04 / TECHNOLOGY</div>

        <div className="stackGrid">
          <div>
            <h2>
              Technology
              <br />
              <em>stack.</em>
            </h2>

            <p>
              Tools and technologies I use to build, ship and maintain
              modern applications.
            </p>
          </div>

          <div>
            <div className="filters">
              {categories.map((category) => (
                <button
                  key={category}
                  className={
                    active === category ? "selected" : ""
                  }
                  onClick={() => setActive(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="skills">
              {filteredSkills.map(([name]) => (
                <div className="skill" key={name}>
                  <span>{name}</span>
                  <i>↗</i>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <div className="contactGlow" />

        <div className="label">05 / CONTACT</div>

        <h2>
          Have a project,
          <br />
          <em>role or idea?</em>
        </h2>

        <p>
          Let&apos;s connect and talk about what we can build.
        </p>

        <a
          className="email"
          href="mailto:sairamponnala7@gmail.com"
        >
          sairamponnala7@gmail.com <span>↗</span>
        </a>

        <div className="contactMeta">
          <a href="tel:+919705147071">
            +91 97051 47071
          </a>

          <span>Hyderabad, India</span>

          <a
            href="https://github.com/s7285595-bot"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="http://www.linkedin.com/in/sairam-ponnala-066a75145"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <b>
          SAI RAM PONNALA<span>.</span>
        </b>

        <small>
          JAVA · FULL STACK · CLOUD
        </small>

        <small>
          © 2026
        </small>
      </footer>
    </main>
  );
}
