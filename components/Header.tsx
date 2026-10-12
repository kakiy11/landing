"use client";

import { useState } from "react";
import styles from "./Header.module.css";

const links = [
  { label: "Главная", href: "#home" },
  { label: "О нас", href: "#about" },
  { label: "Новости", href: "#news" },
  { label: "Проекты", href: "#projects" },
  { label: "Контакты", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <a className={styles.logo} href="#home" aria-label="VertexBuild — на главную">
        <span className={styles.logoMark}>V<span>.</span></span>
        <span className={styles.logoText}>VertexBuild<small>ARCHITECTURE STUDIO</small></span>
      </a>

      <button
        className={styles.menuButton}
        type="button"
        aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span /><span />
      </button>

      <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
        <a className={styles.navCta} href="#contact" onClick={() => setMenuOpen(false)}>
          Обсудить проект <span>↗</span>
        </a>
      </nav>
    </header>
  );
}
