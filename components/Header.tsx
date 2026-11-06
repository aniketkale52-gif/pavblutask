"use client";

import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import styles from "./Header.module.css";
import { CloseIcon, MenuIcon, PatientsIcon } from "./icons";
import { MENUS, NavIcon, QUICK_LINKS } from "./navData";

const CLOSE_DELAY = 180; // ms of grace when the pointer leaves the header (lets it cross the gap to the card)

export default function Header() {
  // Desktop mega menu
  const [openId, setOpenId] = useState<string | null>(null);
  const [shownId, setShownId] = useState(MENUS[0].id); // stays set while the card animates closed
  const [cardHeight, setCardHeight] = useState(0);
  const closeTimer = useRef<number | undefined>(undefined);
  const panelRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // Mobile menu
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  const openMenu = (id: string) => {
    window.clearTimeout(closeTimer.current);
    setShownId(id);
    setOpenId(id);
  };
  const closeMenu = () => {
    window.clearTimeout(closeTimer.current);
    setOpenId(null);
  };
  const closeSoon = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpenId(null), CLOSE_DELAY);
  };
  const cancelClose = () => window.clearTimeout(closeTimer.current);

  // The card's height follows the visible section, so switching sections morphs smoothly.
  useLayoutEffect(() => {
    const el = panelRefs.current[shownId];
    if (!el) return;
    const update = () => setCardHeight(el.offsetHeight);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [shownId]);

  // Escape closes everything; switching between desktop and mobile layouts resets the menus.
  useEffect(() => {
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (openId) triggerRefs.current[openId]?.focus();
      setOpenId(null);
      setMobileOpen(false);
    };
    const mq = window.matchMedia("(min-width: 1024px)");
    const reset = () => {
      setOpenId(null);
      setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", reset);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", reset);
    };
  }, [openId]);

  // Keyboard on a nav trigger: Enter/Space toggles, ArrowDown opens and moves into the card,
  // ArrowLeft/Right move between triggers.
  const onTriggerKey = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const id = MENUS[index].id;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      openMenu(id);
      requestAnimationFrame(() => panelRefs.current[id]?.querySelector<HTMLAnchorElement>("a")?.focus());
    } else if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();
      const next = (index + (e.key === "ArrowRight" ? 1 : -1) + MENUS.length) % MENUS.length;
      triggerRefs.current[MENUS[next].id]?.focus();
      if (openId) openMenu(MENUS[next].id);
    }
  };

  const dimmed = !!openId || mobileOpen;

  return (
    <>
      <header
        className={styles.header}
        onMouseEnter={cancelClose}
        onMouseLeave={closeSoon}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node | null)) closeMenu();
        }}
      >
        <div className={`container ${styles.inner}`}>
          <a href="/" className={styles.logo} aria-label="PAVBLU home">
            <img src="/images/logo-pavblu.svg" alt="PAVBLU (aflibercept-ayyh) injection 2 mg" width={120} height={77} />
          </a>

          {/* Desktop navigation */}
          <nav className={styles.nav} aria-label="Main">
            <ul className={styles.triggers}>
              {MENUS.map((menu, i) => (
                <li key={menu.id}>
                  <button
                    type="button"
                    ref={(el) => {
                      triggerRefs.current[menu.id] = el;
                    }}
                    className={styles.trigger}
                    aria-expanded={openId === menu.id}
                    aria-controls={`menu-${menu.id}`}
                    onMouseEnter={() => openMenu(menu.id)}
                    onClick={() => (openId === menu.id ? closeMenu() : openMenu(menu.id))}
                    onKeyDown={(e) => onTriggerKey(e, i)}
                  >
                    {menu.label}
                    <NavIcon name="chevron" size={16} className={styles.chevron} />
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <a className={styles.cta} href="https://www.pavblu.com/for-patients">
            <PatientsIcon />
            For Patients
          </a>

          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
          </button>
        </div>

        {/* Desktop mega menu: a rounded card that drops down from the header */}
        <div className={`${styles.mega} ${openId ? styles.megaOpen : ""}`}>
          <div className="container">
            {/* Height always matches the visible section; it only animates when switching sections */}
            <div className={styles.card} style={cardHeight ? { height: cardHeight } : undefined}>
              {MENUS.map((menu) => {
                const visible = menu.id === shownId;
                return (
                  <div
                    key={menu.id}
                    id={`menu-${menu.id}`}
                    ref={(el) => {
                      panelRefs.current[menu.id] = el;
                    }}
                    className={`${styles.panel} ${visible ? styles.panelVisible : ""}`}
                    aria-hidden={!visible || !openId}
                    inert={!visible || !openId}
                  >
                    <div className={styles.main}>
                      <p className={styles.groupLabel}>{menu.label}</p>
                      <ul className={styles.items}>
                        {menu.items.map((item, i) => (
                          <li key={item.title} style={{ "--i": i } as CSSProperties}>
                            <a className={styles.item} href={item.href} onClick={closeMenu}>
                              <span className={styles.itemIcon}>
                                <NavIcon name={item.icon} />
                              </span>
                              <span className={styles.itemText}>
                                <span className={styles.itemTitle}>{item.title}</span>
                                <span className={styles.itemDesc}>{item.desc}</span>
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                      <a className={styles.explore} href={menu.href} onClick={closeMenu}>
                        Explore {menu.label}
                        <NavIcon name="arrow" size={16} />
                      </a>
                    </div>

                    <div className={styles.aside}>
                      <p className={styles.groupLabel}>Quick links</p>
                      <ul className={styles.items}>
                        {QUICK_LINKS.map((link, i) => (
                          <li key={link.title} style={{ "--i": i + menu.items.length } as CSSProperties}>
                            <a className={styles.item} href={link.href} onClick={closeMenu}>
                              <span className={`${styles.itemIcon} ${styles[link.tone]}`}>
                                <NavIcon name={link.icon} />
                              </span>
                              <span className={styles.itemText}>
                                <span className={styles.itemTitle}>{link.title}</span>
                                <span className={styles.itemDesc}>{link.desc}</span>
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile menu: the same rounded card, with expandable sections */}
        <div id="mobile-menu" className={`${styles.mobile} ${mobileOpen ? styles.mobileOpen : ""}`} inert={!mobileOpen}>
          <div className={styles.mobileClip}>
            <div className={styles.mobileCard}>
              {MENUS.map((menu) => {
                const expanded = mobileSection === menu.id;
                return (
                  <div key={menu.id} className={styles.mSection}>
                    <button
                      type="button"
                      className={styles.mTrigger}
                      aria-expanded={expanded}
                      onClick={() => setMobileSection(expanded ? null : menu.id)}
                    >
                      {menu.label}
                      <NavIcon name="chevron" size={18} className={styles.chevron} />
                    </button>
                    <div className={`${styles.mItemsWrap} ${expanded ? styles.mItemsOpen : ""}`}>
                      <ul className={styles.mItems}>
                        {menu.items.map((item) => (
                          <li key={item.title}>
                            <a className={styles.item} href={item.href} onClick={() => setMobileOpen(false)} tabIndex={expanded ? 0 : -1}>
                              <span className={styles.itemIcon}>
                                <NavIcon name={item.icon} />
                              </span>
                              <span className={styles.itemText}>
                                <span className={styles.itemTitle}>{item.title}</span>
                                <span className={styles.itemDesc}>{item.desc}</span>
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
              <a className={`${styles.cta} ${styles.mCta}`} href="https://www.pavblu.com/for-patients">
                <PatientsIcon />
                For Patients
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Dims the page behind an open menu; clicking it closes the menu */}
      <div
        className={`${styles.backdrop} ${dimmed ? styles.backdropOn : ""}`}
        aria-hidden="true"
        onClick={() => {
          closeMenu();
          setMobileOpen(false);
        }}
      />
    </>
  );
}
