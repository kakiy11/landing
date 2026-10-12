import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.imageOverlay} />
      <div className={styles.content}>
        <p className={styles.eyebrow}><span /> ARCHITECTURE & INTERIORS</p>
        <h1>Build homes<br />create joy<span>.</span></h1>
        <p className={styles.description}>
          Пространства, в которых архитектура встречается с повседневной жизнью.
          Продумываем каждую деталь — от первого эскиза до последнего штриха.
        </p>
        <a className={styles.button} href="#projects">Смотреть проекты <span>↗</span></a>
      </div>
      <div className={styles.sideNote}>DESIGNED FOR LIVING <span>— 01 / 04</span></div>
      <a className={styles.scroll} href="#projects" aria-label="Прокрутить к проектам"><span /> SCROLL TO EXPLORE</a>
    </section>
  );
}
