import styles from "./Footer.module.css";

const columns = [
  { title: "Компания", links: ["О нас", "Наш подход", "Проекты"] },
  { title: "Журнал", links: ["Материалы", "Новости", "Вдохновение"] },
  { title: "Контакты", links: ["Написать нам", "Сотрудничество", "Вакансии"] },
];

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.main}>
        <div className={styles.contactBlock}>
          <a className={styles.brand} href="#home">VertexBuild<span>.</span></a>
          <p className={styles.smallLabel}>ДАВАЙТЕ СОЗДАДИМ ЧТО-ТО ВАЖНОЕ</p>
          <a className={styles.phone} href="tel:+16347638564">+1 634 763 8564</a>
          <a className={styles.email} href="mailto:hello@vertexbuild.example">hello@vertexbuild.example</a>
          <div className={styles.socials}>
            <a href="https://www.instagram.com/" aria-label="Instagram">ig</a>
            <a href="https://www.pinterest.com/" aria-label="Pinterest">p</a>
            <a href="https://www.linkedin.com/" aria-label="LinkedIn">in</a>
          </div>
        </div>
        <div className={styles.footerRight}>
          <div className={styles.columns}>
            {columns.map((column) => (
              <div key={column.title}>
                <h3>{column.title}</h3>
                {column.links.map((link) => <a href="#home" key={link}>{link}</a>)}
              </div>
            ))}
          </div>
          <div className={styles.bottom}>
            <span>© 2024 VertexBuild. Все права защищены.</span>
            <a href="#home">Наверх ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
