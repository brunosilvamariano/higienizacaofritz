/** Toque nativo e paginação discreta, sem reprodução automática. */
export function initTestimonials() {
 const track = document.querySelector('#reviews-track');
 const controls = document.querySelector('.testimonials__controls');
 if (!track || !controls) return;
 const cards = [...track.querySelectorAll('.testimonial')];
 if (!cards.length) return;
 const prev = controls.querySelector('[data-review-prev]');
 const next = controls.querySelector('[data-review-next]');
 const dots = controls.querySelector('[data-review-pages]');
 let stops = [], active = 0;
 const go = index => track.scrollTo({left: stops[index], behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
 const sync = () => {
   active = stops.reduce((best, stop, i) => Math.abs(stop-track.scrollLeft) < Math.abs(stops[best]-track.scrollLeft) ? i : best, 0);
   prev.disabled = track.scrollLeft <= 2;
   next.disabled = track.scrollLeft >= track.scrollWidth-track.clientWidth-2;
   [...dots.children].forEach((dot,i) => dot.setAttribute('aria-current', String(i === active)));
 };
 const layout = () => {
   const max = Math.max(0, track.scrollWidth-track.clientWidth);
   const step = cards[0].getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap);
   const perPage = Math.max(1, Math.floor((track.clientWidth + parseFloat(getComputedStyle(track).columnGap)) / step));
   const updated = [0];
   for (let x = perPage * step; x < max-2; x += perPage * step) updated.push(x);
   if (max > 2) updated.push(max);
   controls.hidden = max <= 2;
   if (updated.length !== stops.length) {
     dots.replaceChildren(...updated.map((_,i) => {
       const button = document.createElement('button');
       button.type = 'button';
       button.className = 'testimonials__dot';
       button.setAttribute('aria-label', `Página ${i+1} de ${updated.length} de avaliações`);
       button.setAttribute('aria-controls', 'reviews-track');
       button.addEventListener('click', () => go(i));
       return button;
     }));
   }
   stops = updated;
   sync();
 };
 prev.addEventListener('click', () => go(Math.max(0,active-1)));
 next.addEventListener('click', () => go(Math.min(stops.length-1,active+1)));
 track.addEventListener('scroll', sync, {passive:true});
 new ResizeObserver(layout).observe(track);
 layout();
}
