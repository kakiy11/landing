import styles from "./Projects.module.css";

const projects = [
  {
    number: "01",
    title: "Тихая геометрия",
    category: "Частная резиденция · 2024",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "02",
    title: "Свет внутри",
    category: "Современный дом · 2023",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "03",
    title: "Городской баланс",
    category: "Интерьер квартиры · 2024",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85",
  },
];

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.heading}>
        <div>
          <p className={styles.eyebrow}>ИЗБРАННЫЕ РАБОТЫ <span> / 01</span></p>
          <h2>Наши проекты<span>.</span></h2>
          <p className={styles.intro}>Каждый проект начинается с диалога. Мы создаём архитектуру, которая отвечает месту, людям и их образу жизни.</p>
        </div>
        <a className={styles.allLink} href="#contact">Все проекты <span>↗</span></a>
      </div>
      <div className={styles.grid}>
        {projects.map((project) => (
          <article className={styles.card} key={project.number}>
            <a className={styles.imageLink} href="#contact" aria-label={`Обсудить проект «${project.title}»`}>
              {/* Обычный img позволяет не настраивать домены в next.config. */}
              <img src={project.image} alt={project.title} />
              <span className={styles.number}>{project.number}</span>
              <span className={styles.arrow}>↗</span>
            </a>
            <div className={styles.cardText}>
              <div><h3>{project.title}</h3><p>{project.category}</p></div>
              <span className={styles.line} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
