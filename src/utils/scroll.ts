declare global {
  interface Window {
    __lenis?: {
      scrollTo: (
        target: number | HTMLElement,
        options?: { duration?: number; offset?: number },
      ) => void;
    };
  }
}

/** Smooth-scrolls to a section id, falling back to native scrolling (e.g. reduced motion). */
export function scrollToId(id: string) {
  const lenis = window.__lenis;
  if (id === "top") {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const el = document.getElementById(id);
  if (!el) return;

  if (lenis) {
    lenis.scrollTo(el, { duration: 1.2, offset: -72 });
    return;
  }

  el.scrollIntoView({ behavior: "smooth" });
}
