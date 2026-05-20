"use client";

import type { CSSProperties } from "react";
import { useEffect } from "react";

import styles from "./weltbienentag.module.css";

export function WeltbienentagClient({ fontClassName }: { fontClassName: string }) {
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      cards.forEach((el) => {
        el.classList.add(styles.factCardVisible);
      });
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            entry.target.classList.add(styles.factCardVisible);
            io.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -40px 0px", threshold: 0.12 },
    );
    cards.forEach((el) => {
      io.observe(el);
    });
    return () => {
      io.disconnect();
    };
  }, []);

  return (
    <div className={`${fontClassName} ${styles.pageRoot}`}>
      <header className={`${styles.siteHeader} ${styles.bgCremeSolid}`}>
        <div className={styles.wrap}>
          <div className={styles.logoRow}>
            <span className={styles.logoText}>MentionBee 🐝</span>
            <span className={styles.badge}>20. Mai – Weltbienentag</span>
          </div>
          <h1 className={styles.heroTitle}>11 Fakten über Bienen, die dich sprachlos machen werden</h1>
          <p className={styles.intro}>
            Heute ist Weltbienentag – und ein guter Moment, um innezuhalten. Bienen sind für unser Ökosystem
            fundamental. Hier sind 11 Fakten, die zeigen, wie faszinierend diese kleinen Wesen wirklich sind.
          </p>
          <img
            className={styles.introHero}
            src="/bienen-fakten.png"
            alt="Bienen-Fakten: 1.000 Blüten pro Ausflug, 40.000 km für 1 kg Honig, 80% der Bestäubung, 5–8 Std. Schlaf"
          />
        </div>
      </header>

      <section className={`${styles.factsSection} ${styles.bgHoneycomb}`} aria-labelledby="facts-heading">
        <div className={styles.wrap}>
          <h2 id="facts-heading" className={styles.srOnly}>
            11 Fakten
          </h2>
          <div className={styles.factsGrid}>
            <article
              className={styles.factCard}
              style={{ "--delay": "0ms" } as CSSProperties}
              data-reveal
            >
              <span className={styles.factNum} aria-hidden="true">
                1
              </span>
              <p className={styles.factText}>
                🐝 Eine Biene besucht bis zu 1.000 Blüten pro Ausflug – und fliegt dabei bis zu 3 km weit.
              </p>
            </article>
            <article
              className={styles.factCard}
              style={{ "--delay": "50ms" } as CSSProperties}
              data-reveal
            >
              <span className={styles.factNum} aria-hidden="true">
                2
              </span>
              <p className={styles.factText}>
                🍯 Um 1 kg Honig zu produzieren, legen Bienen gemeinsam rund 40.000 km zurück – das entspricht
                einmal um die Erde.
              </p>
            </article>
            <article
              className={styles.factCard}
              style={{ "--delay": "100ms" } as CSSProperties}
              data-reveal
            >
              <span className={styles.factNum} aria-hidden="true">
                3
              </span>
              <p className={styles.factText}>
                📡 Bienen kommunizieren durch Tänze. Der «Schwänzeltanz» teilt Richtung, Distanz und Qualität
                einer Nahrungsquelle mit – mit erstaunlicher Präzision.
              </p>
            </article>
            <article
              className={styles.factCard}
              style={{ "--delay": "150ms" } as CSSProperties}
              data-reveal
            >
              <span className={styles.factNum} aria-hidden="true">
                4
              </span>
              <p className={styles.factText}>
                🧠 Trotz eines Gehirns von der Grösse eines Sesamkorns können Bienen menschliche Gesichter
                erkennen.
              </p>
            </article>
            <article
              className={styles.factCard}
              style={{ "--delay": "200ms" } as CSSProperties}
              data-reveal
            >
              <span className={styles.factNum} aria-hidden="true">
                5
              </span>
              <p className={styles.factText}>
                ⏱️ Eine Arbeiterin produziert in ihrem ganzen Leben (ca. 6 Wochen) nur etwa 1/12 Teelöffel Honig.
              </p>
            </article>
            <article
              className={styles.factCard}
              style={{ "--delay": "250ms" } as CSSProperties}
              data-reveal
            >
              <span className={styles.factNum} aria-hidden="true">
                6
              </span>
              <p className={styles.factText}>
                🌡️ Im Bienenstock herrscht konstant 35°C – die Bienen regulieren die Temperatur durch Fächeln mit
                ihren Flügeln.
              </p>
            </article>
            <article
              className={styles.factCard}
              style={{ "--delay": "300ms" } as CSSProperties}
              data-reveal
            >
              <span className={styles.factNum} aria-hidden="true">
                7
              </span>
              <p className={styles.factText}>
                🌍 Bienen sind für etwa 80% der Bestäubung von Nutzpflanzen weltweit verantwortlich – ein
                wirtschaftlicher Wert von über 150 Milliarden Euro jährlich.
              </p>
            </article>
            <article
              className={styles.factCard}
              style={{ "--delay": "350ms" } as CSSProperties}
              data-reveal
            >
              <span className={styles.factNum} aria-hidden="true">
                8
              </span>
              <p className={styles.factText}>
                💤 Bienen schlafen. Forschungen zeigen, dass sie zwischen 5 und 8 Stunden pro Nacht ruhen – oft
                sogar in der Blüte.
              </p>
            </article>
            <article
              className={styles.factCard}
              style={{ "--delay": "400ms" } as CSSProperties}
              data-reveal
            >
              <span className={styles.factNum} aria-hidden="true">
                9
              </span>
              <p className={styles.factText}>
                👃 Der Geruchssinn einer Biene ist 100x feiner als der eines Menschen. Bienenspürhunde gibt es
                nicht, weil Bienen schlicht besser riechen.
              </p>
            </article>
            <article
              className={styles.factCard}
              style={{ "--delay": "450ms" } as CSSProperties}
              data-reveal
            >
              <span className={styles.factNum} aria-hidden="true">
                10
              </span>
              <p className={styles.factText}>
                🕐 Bienen haben ein inneres GPS-System und finden dank Sonnenstand, Magnetfeld und Landmarken
                immer nach Hause.
              </p>
            </article>
            <article
              className={styles.factCard}
              style={{ "--delay": "500ms" } as CSSProperties}
              data-reveal
            >
              <span className={styles.factNum} aria-hidden="true">
                11
              </span>
              <p className={styles.factText}>
                ❌ Wenn eine Bienenkönigin stirbt und keine Nachfolgerin da ist, kann das gesamte Volk innerhalb
                weniger Wochen kollabieren.
              </p>
            </article>
          </div>
        </div>
      </section>

      <aside className={styles.pullQuote} aria-label="Zitat">
        <blockquote>
          „Wie Bienen wissen, wann und wo sie gefragt sind – so hilft MentionBee Unternehmen zu verstehen, ob sie
          in der Welt der KI-Suche sichtbar sind. Wer nicht erwähnt wird, existiert nicht.“
        </blockquote>
      </aside>

      <section className={styles.ctaSection} aria-labelledby="cta-heading">
        <div className={styles.wrap}>
          <h2 id="cta-heading" className={styles.srOnly}>
            MentionBee
          </h2>
          <p>
            MentionBee analysiert, ob dein Unternehmen von ChatGPT, Claude, Gemini und Perplexity empfohlen wird –
            oder ob die Konkurrenz das Feld übernimmt.
          </p>
          <a className={styles.ctaBtn} href="https://mentionbee.ai">
            Kostenlosen Report anfordern
          </a>
        </div>
      </section>

      <section className={styles.bienenSection} aria-labelledby="bienen-heading">
        <div className={styles.wrap}>
          <h2 id="bienen-heading" className={styles.srOnly}>
            Bienen.ch
          </h2>
          <div className={styles.bienenInner}>
            <span className={styles.bienenIcon} aria-hidden="true">
              🐝
            </span>
            <p>
              Und weil wir&apos;s ernst meinen: 1% aller MentionBee-Einnahmen gehen an Bienen.ch – das Zentrum zur
              Förderung der Bienengesundheit in der Schweiz.
              <br />
              <br />
              <a href="https://bienen.ch" rel="noopener noreferrer" target="_blank">
                https://bienen.ch
              </a>
            </p>
          </div>
        </div>
      </section>

      <footer className={styles.siteFooter}>
        <p>© 2025 MentionBee · mentionbee.ai</p>
        <p className={styles.fine}>Alles Gute zum Weltbienentag 🐝</p>
      </footer>
    </div>
  );
}
