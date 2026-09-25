/** Controla estados, foco, navegação ativa e responsividade da sidebar. */
const DESKTOP_QUERY = "(min-width: 64rem)";
const STORAGE_KEY = "premium-sidebar-state";

type SidebarState = "expanded" | "collapsed";
type NavigationRecord = { item: HTMLAnchorElement; target: HTMLElement };

export function initSidebar() {
  const shell = document.querySelector<HTMLElement>(".app-shell");
  const sidebar = document.querySelector<HTMLElement>("#sidebar");
  if (!shell || !sidebar) return;

  const desktopToggle = document.querySelector<HTMLButtonElement>("[data-sidebar-toggle]");
  const mobileToggle = document.querySelector<HTMLButtonElement>("[data-mobile-menu]");
  const backdrop = document.querySelector<HTMLElement>("[data-sidebar-backdrop]");
  const background = Array.from(shell.children).filter(
    (element): element is HTMLElement => element instanceof HTMLElement && element !== sidebar && element !== backdrop,
  );
  const navItems = Array.from(document.querySelectorAll<HTMLAnchorElement>('.nav-item[href^="#"]'));
  const desktopMedia = window.matchMedia(DESKTOP_QUERY);
  const collapsedOptionalItems = Array.from(document.querySelectorAll<HTMLElement>("[data-sidebar-optional]"));

  const getSavedState = (): SidebarState => {
    try {
      return window.localStorage.getItem(STORAGE_KEY) === "collapsed" ? "collapsed" : "expanded";
    } catch {
      return "expanded";
    }
  };

  const saveState = (state: SidebarState) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, state);
    } catch {
      // O layout continua funcional quando storage não está disponível.
    }
  };

  const isDesktop = () => desktopMedia.matches;

  const setCurrentNav = (item: HTMLAnchorElement | null) => {
    if (!item) return;
    navItems.forEach((link) => {
      const isCurrent = link === item;
      link.classList.toggle("is-active", isCurrent);
      if (isCurrent) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  };

  const setDesktopState = (state: SidebarState, persist = true) => {
    shell.dataset.sidebarState = state;
    const isExpanded = state === "expanded";

    collapsedOptionalItems.forEach((item) => {
      item.style.display = isExpanded ? "" : "none";
      item.inert = !isExpanded;
      item.setAttribute("aria-hidden", String(!isExpanded));
    });

    desktopToggle?.setAttribute("aria-expanded", String(isExpanded));
    desktopToggle?.setAttribute("aria-label", isExpanded ? "Recolher menu lateral" : "Expandir menu lateral");
    if (persist) saveState(state);
  };

  const toggleDesktopState = () => {
    setDesktopState(shell.dataset.sidebarState === "expanded" ? "collapsed" : "expanded");
  };

  const setMobileOpen = (open: boolean, options: { restoreFocus?: boolean } = {}) => {
    const { restoreFocus = false } = options;
    shell.classList.toggle("is-mobile-open", open);
    document.body.style.overflow = open ? "hidden" : "";
    background.forEach((element) => { element.inert = open && !isDesktop(); });

    sidebar.setAttribute("role", open && !isDesktop() ? "dialog" : "complementary");
    if (open && !isDesktop()) sidebar.setAttribute("aria-modal", "true");
    else sidebar.removeAttribute("aria-modal");

    if (!isDesktop()) {
      sidebar.inert = !open;
      sidebar.setAttribute("aria-hidden", String(!open));
    } else {
      sidebar.inert = false;
      sidebar.removeAttribute("aria-hidden");
    }

    mobileToggle?.setAttribute("aria-expanded", String(open));
    mobileToggle?.setAttribute("aria-label", open ? "Fechar menu lateral" : "Abrir menu lateral");

    if (!isDesktop() && desktopToggle) {
      desktopToggle.setAttribute("aria-expanded", String(open));
      desktopToggle.setAttribute("aria-label", "Fechar menu lateral");
    }

    if (open) requestAnimationFrame(() => desktopToggle?.focus());
    else if (restoreFocus && !isDesktop()) requestAnimationFrame(() => mobileToggle?.focus());
  };

  const syncViewportMode = () => {
    if (isDesktop()) {
      setMobileOpen(false);
      setDesktopState(getSavedState(), false);
      sidebar.inert = false;
      sidebar.removeAttribute("aria-hidden");
    } else {
      setMobileOpen(false);
    }
  };

  setDesktopState(getSavedState(), false);
  syncViewportMode();

  desktopToggle?.addEventListener("click", () => {
    if (isDesktop()) toggleDesktopState();
    else setMobileOpen(false, { restoreFocus: true });
  });

  mobileToggle?.addEventListener("click", () => {
    const willOpen = !shell.classList.contains("is-mobile-open");
    setMobileOpen(willOpen, { restoreFocus: !willOpen });
  });

  backdrop?.addEventListener("click", () => setMobileOpen(false, { restoreFocus: true }));

  document.addEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === "Tab" && shell.classList.contains("is-mobile-open")) {
      const focusable = Array.from(
        sidebar.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'),
      ).filter((element) => element.getClientRects().length > 0 && !element.closest("[inert]"));
      const first = focusable[0];
      const last = focusable.at(-1);
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    }

    if (event.key === "Escape" && shell.classList.contains("is-mobile-open")) {
      setMobileOpen(false, { restoreFocus: true });
      return;
    }

    if (isDesktop() && event.ctrlKey && event.key.toLowerCase() === "b") {
      event.preventDefault();
      toggleDesktopState();
    }
  });

  let navigationTarget: NavigationRecord | null = null;
  let navigationTimeout = 0;

  const finishNavigation = (item: HTMLAnchorElement | null) => {
    if (!item) return;
    navigationTarget = null;
    window.clearTimeout(navigationTimeout);
    navigationTimeout = 0;
    setCurrentNav(item);
  };

  const getTarget = (item: HTMLAnchorElement): HTMLElement | null => {
    const href = item.getAttribute("href");
    if (!href) return null;
    const target = document.querySelector<HTMLElement>(href);
    return target?.matches("section") ? target : null;
  };

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      const target = getTarget(item);
      if (target) {
        navigationTarget = { item, target };
        window.clearTimeout(navigationTimeout);
        navigationTimeout = window.setTimeout(() => finishNavigation(item), 1800);
      }
      if (!isDesktop()) setMobileOpen(false, { restoreFocus: true });
    });
  });

  const observableSections = navItems
    .map((item): NavigationRecord | null => {
      const target = getTarget(item);
      return target ? { item, target } : null;
    })
    .filter((record): record is NavigationRecord => record !== null);

  if ("IntersectionObserver" in window && observableSections.length) {
    const visibility = new Map<Element, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => visibility.set(entry.target, entry.intersectionRatio));

        if (navigationTarget) {
          const targetRatio = visibility.get(navigationTarget.target) ?? 0;
          const targetRect = navigationTarget.target.getBoundingClientRect();
          const focusLine = window.innerHeight * 0.34;
          const reachedTarget = targetRatio >= 0.2 || (targetRect.top <= focusLine && targetRect.bottom > focusLine);
          if (reachedTarget) finishNavigation(navigationTarget.item);
          return;
        }

        const mostVisible = observableSections
          .map((record) => ({ ...record, ratio: visibility.get(record.target) ?? 0 }))
          .filter((record) => record.ratio > 0)
          .sort((a, b) => b.ratio - a.ratio)[0];

        if (mostVisible) setCurrentNav(mostVisible.item);
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.05, 0.2, 0.45, 0.7],
      },
    );

    observableSections.forEach(({ target }) => observer.observe(target));
  }

  desktopMedia.addEventListener("change", syncViewportMode);
}
