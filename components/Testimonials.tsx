import styles from "./Testimonials.module.css";

const reviews = [
  { initials: "АК", name: "Анна Крылова", role: "Владелица дома", quote: "Команда очень внимательно отнеслась к нашим привычкам и пожеланиям. В результате получилось пространство, в котором комфортно всей семье." },
  { initials: "МВ", name: "Михаил Волков", role: "Частный клиент", quote: "От первого разговора до финальных деталей всё было понятно и спокойно. Архитекторы нашли решения, о которых мы сами даже не подумали." },
];

export default function Testimonials() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.heading}>
        <p className={styles.eyebrow}>СЛОВА КЛИЕНТОВ <span>/ 03</span></p>
        <h2>Доверие — основа<br />хорошего проекта<span>.</span></h2>
      </div>
      <div className={styles.grid}>
        {reviews.map((review) => (
          <article className={styles.review} key={review.name}>
            <div className={styles.person}>
              <span className={styles.avatar}>{review.initials}</span>
              <div><h3>{review.name}</h3><p>{review.role}</p></div>
            </div>
            <div className={styles.quoteMark}>“</div>
            <blockquote>{review.quote}</blockquote>
            <div className={styles.bottom}><span /> <small>ОТЗЫВ КЛИЕНТА</small></div>
          </article>
        ))}
      </div>
      <div className={styles.pagination}><span /><span /><span /></div>
    </section>
  );
}
