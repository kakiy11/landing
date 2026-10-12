import styles from "./News.module.css";

const stories = [
  { tag: "СОВЕТЫ", title: "Дом, в котором легко дышится", text: "Как естественный свет, спокойные оттенки и простые формы помогают создать ощущение гармонии.", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=700&q=80", date: "12.09.2024" },
  { tag: "МАТЕРИАЛЫ", title: "Честность натуральных фактур", text: "Дерево, камень и металл раскрывают характер пространства и красиво стареют со временем.", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=700&q=80", date: "28.08.2024" },
  { tag: "АРХИТЕКТУРА", title: "Новый взгляд на город", text: "Разбираемся, как продуманная архитектура делает городскую среду удобнее для человека.", image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=700&q=80", date: "04.08.2024" },
];

export default function News() {
  return (
    <section className={styles.section} id="news">
      <div className={styles.top}>
        <div>
          <p className={styles.eyebrow}>ЖУРНАЛ VERTEXBUILD <span>/ 02</span></p>
          <h2>Идеи для жизни<span>.</span></h2>
        </div>
        <p className={styles.note}>Мы делимся наблюдениями, находками и идеями, которые вдохновляют нас проектировать осмысленнее.</p>
      </div>
      <div className={styles.grid}>
        {stories.map((story) => (
          <article className={styles.card} key={story.title}>
            <a href="#contact" className={styles.image} aria-label={`Подробнее: ${story.title}`}>
              <img src={story.image} alt="" />
              <span>↗</span>
            </a>
            <div className={styles.meta}><span>{story.tag}</span><time>{story.date}</time></div>
            <h3>{story.title}</h3>
            <p>{story.text}</p>
            <a href="#contact" className={styles.read}>Читать статью <span>→</span></a>
          </article>
        ))}
      </div>
    </section>
  );
}
