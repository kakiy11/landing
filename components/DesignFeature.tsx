import styles from "./DesignFeature.module.css";

const benefits = [
  "Планировка с учётом вашего ритма жизни",
  "Натуральные материалы и тактильные фактуры",
  "Световые сценарии для разных настроений",
  "Внимание к деталям на каждом этапе",
];

export default function DesignFeature() {
  return (
    <section className={styles.section}>
      <div className={styles.photo} role="img" aria-label="Современный архитектурный фасад" />
      <div className={styles.content}>
        <p className={styles.eyebrow}>НАШ ПОДХОД <span>/ 04</span></p>
        <h2>Интерьер,<br />в котором есть<br /><em>смысл.</em></h2>
        <p className={styles.description}>Хороший дизайн — не только то, как пространство выглядит. Это то, как вы чувствуете себя в нём каждый день.</p>
        <ul>
          {benefits.map((benefit) => <li key={benefit}><span>↗</span>{benefit}</li>)}
        </ul>
        <a href="#contact" className={styles.link}>Наш подход <span>→</span></a>
      </div>
    </section>
  );
}
