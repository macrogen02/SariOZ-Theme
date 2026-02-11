document.documentElement.classList.remove('no-js');

document.addEventListener('DOMContentLoaded', () => {
  const stickyAtc = document.querySelector('[data-sticky-atc]');
  const desktopAtc = document.querySelector('[data-sticky-atc-target]');

  if (stickyAtc && desktopAtc) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (window.matchMedia('(max-width: 749px)').matches) {
          stickyAtc.classList.toggle('is-visible', !entry.isIntersecting);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(desktopAtc);
  }

  document.querySelectorAll('[data-accordion-group] details').forEach((detail) => {
    detail.addEventListener('toggle', () => {
      if (detail.open) {
        document.querySelectorAll('[data-accordion-group] details').forEach((item) => {
          if (item !== detail) item.open = false;
        });
      }
    });
  });
});
