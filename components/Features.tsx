import styles from "./Featers.module.css"

const features = [
  {
    number: "01",
    title: "Продуманная архитектура",
    description: "Создаём функциональные пространства, в которых каждая линия и каждый метр имеют значение.",
  },
  {
    number: "02",
    title: "Материалы с характером",
    description: "Сочетаем натуральные фактуры, спокойные оттенки и долговечные решения.",
  },
  {
    number: "03",
    title: "Внимание к деталям",
    description: "Продумываем освещение, планировку и отделку, чтобы дом был удобным каждый день.",
  },
];

export default function Features() {
  return (
    <section className={styles.section} id="features">
      <div className={styles.heading}>
        <p className={styles.eyebrow}>ЧТО НАС ОТЛИЧАЕТ <span>/ 02</span></p>
        <h2>Хороший дизайн —<br />это больше, чем красиво<span>.</span></h2>
        <p className={styles.intro}>
          Объединяем архитектуру, функциональность и эстетику, чтобы создавать
          пространства, которые действительно подходят людям.
        </p>
      </div>

      <div className={styles.grid}>
        {features.map((feature) => (
          <article className={styles.card} key={feature.number}>
            <span className={styles.number}>{feature.number}</span>
            <div className={styles.icon} aria-hidden="true">
              {feature.number === "01" ? "⌂" : feature.number === "02" ? "◈" : "＋"}
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <a href="#contact" aria-label={`Подробнее: ${feature.title}`}>Подробнее <span>↗</span></a>
          </article>
        ))}
      </div>
    </section>
  );
}
