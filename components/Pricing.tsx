import styles from "./Pricing.module.css";

const plans = [
  {
    name: "Консультация",
    price: "от $150",
    description:
      "Обсудим вашу идею, задачи и возможности будущего пространства.",
    features: [
      "Встреча с архитектором",
      "Обсуждение концепции",
      "Рекомендации по проекту",
    ],
    button: "Выбрать консультацию",
  },
  {
    name: "Дизайн-проект",
    price: "от $1 200",
    description:
      "Продуманный дизайн интерьера с учётом ваших пожеланий и образа жизни.",
    features: [
      "Планировочное решение",
      "Подбор материалов",
      "Визуальная концепция",
      "Рабочие чертежи",
    ],
    button: "Обсудить проект",
  },
  {
    name: "Полный проект",
    price: "По запросу",
    description:
      "Комплексная работа над пространством от первых идей до реализации.",
    features: [
      "Архитектурная концепция",
      "Дизайн интерьера",
      "Подбор материалов",
      "Сопровождение проекта",
    ],
    button: "Получить предложение",
  },
];

export default function Pricing() {
  return (
    <section className={styles.section} id="pricing">
      <div className={styles.heading}>
        <p className={styles.eyebrow}>НАШИ УСЛУГИ</p>

        <h2>
          Решения для вашего
          <br />
          будущего пространства<span>.</span>
        </h2>

        <p className={styles.description}>
          Выберите подходящий формат сотрудничества.
          Мы поможем определить объём работ и подобрать
          решение под ваши задачи.
        </p>
      </div>

      <div className={styles.grid}>
        {plans.map((plan) => (
          <article className={styles.card} key={plan.name}>
            <h3>{plan.name}</h3>

            <div className={styles.price}>{plan.price}</div>

            <p>{plan.description}</p>

            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <a className={styles.button} href="#contact">
              {plan.button}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}