(() => {
  const projects = Array.isArray(window.PROJECTS) ? window.PROJECTS : [];
  const grid = document.getElementById('project-grid');
  const filters = document.getElementById('project-filters');
  const dialog = document.getElementById('project-dialog');
  const body = document.getElementById('pd-body');
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lb-img');
  const lbCount = document.getElementById('lb-count');

  const TONES = ['mint', 'pink', 'yellow'];
  const tone = (i) => TONES[i % TONES.length];
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));
  const icon = (name, cls = '') =>
    `<svg class="icon ${cls}" aria-hidden="true"><use href="#i-${name}"/></svg>`;

  /* ---------- Images that may not exist yet ---------- */
  // If a file is missing, the image is removed and the placeholder underneath stays visible.
  function guardImages(root) {
    root.querySelectorAll('img[data-guard]').forEach((img) => {
      const fail = () => {
        console.warn('Image not found:', img.getAttribute('src'));
        const shot = img.closest('.shot');
        if (shot) shot.classList.add('is-empty');
        img.remove();
      };
      img.addEventListener('error', fail, { once: true });
      if (img.complete && img.naturalWidth === 0) fail();
    });
  }

  /* ---------- Category filter + tile grid ---------- */
  let activeCategory = 'All';
  const categories = ['All', ...new Set(projects.map((p) => p.category).filter(Boolean))];

  function renderFilters() {
    if (categories.length <= 2) { filters.hidden = true; return; }
    filters.innerHTML = categories.map((c) =>
      `<button type="button" class="chip" data-category="${esc(c)}" aria-pressed="${c === activeCategory}">${esc(c)}</button>`
    ).join('');
  }

  function renderGrid() {
    const visible = projects
      .map((p, i) => ({ p, i }))
      .filter(({ p }) => activeCategory === 'All' || p.category === activeCategory);

    if (!visible.length) {
      grid.innerHTML = '<li class="empty">No projects in this category yet.</li>';
      return;
    }

    grid.innerHTML = visible.map(({ p, i }) => `
      <li>
        <button type="button" class="tile" data-id="${esc(p.id)}" aria-label="Open ${esc(p.title)}">
          <span class="tile__cover tone-${tone(i)}">
            ${icon('folder', 'tile__ph')}
            ${p.cover ? `<img src="${esc(p.cover)}" alt="" loading="lazy" data-guard>` : ''}
          </span>
          <span class="tile__title">${esc(p.title)}</span>
          <span class="tile__meta">${icon('grid')}${esc(p.category || 'Project')}</span>
        </button>
      </li>`).join('');
    guardImages(grid);
  }

  filters.addEventListener('click', (e) => {
    const btn = e.target.closest('.chip');
    if (!btn) return;
    activeCategory = btn.dataset.category;
    filters.querySelectorAll('.chip').forEach((c) =>
      c.setAttribute('aria-pressed', String(c === btn)));
    renderGrid();
  });

  /* ---------- Project detail (Play Store style) ---------- */
  function paragraphs(text) {
    return String(text || '').split(/\n\s*\n/).map((t) => `<p>${esc(t.trim())}</p>`).join('');
  }

  function renderProject(p, index) {
    const shots = (p.screenshots || []).map((src, n) => `
      <button type="button" class="shot" data-n="${n}" aria-label="View scene ${n + 1} larger">
        <span class="shot__ph">${icon('image')}<span>Scene ${n + 1}</span></span>
        <img src="${esc(src)}" alt="${esc(p.title)}, scene ${n + 1}" data-guard>
      </button>`).join('');

    return `
      <div class="pd__head">
        <span class="appicon tone-${tone(index)}">
          ${icon('folder', 'tile__ph')}
          ${p.cover ? `<img src="${esc(p.cover)}" alt="" data-guard>` : ''}
        </span>
        <div class="pd__titles">
          <h3 id="pd-title">${esc(p.title)}</h3>
          <p class="pd__dev">Annisa Zahra Fitria</p>
          <p class="pd__cat">${esc(p.category || '')}</p>
        </div>
      </div>

      <dl class="pd__stats">
        <div><dt>Category</dt><dd>${esc(p.category || '-')}</dd></div>
        <div><dt>Year</dt><dd>${esc(p.year || '-')}</dd></div>
        <div><dt>Status</dt><dd>${esc(p.status || '-')}</dd></div>
      </dl>

      <div class="pd__actions">
        ${p.github ? `<a class="btn btn--primary" href="${esc(p.github)}" target="_blank" rel="noopener">${icon('github')}View on GitHub</a>` : ''}
        ${p.demo ? `<a class="btn btn--ghost" href="${esc(p.demo)}" target="_blank" rel="noopener">${icon('external')}Open demo</a>` : ''}
      </div>

      ${shots ? `
      <div class="shots-wrap">
        <button type="button" class="icon-btn shots__nav shots__nav--prev" aria-label="Scroll screenshots left">${icon('left')}</button>
        <div class="shots" tabindex="0" aria-label="Project screenshots">${shots}</div>
        <button type="button" class="icon-btn shots__nav shots__nav--next" aria-label="Scroll screenshots right">${icon('right')}</button>
      </div>` : ''}

      <div class="pd__section">
        <h4>About this project</h4>
        <div class="pd__text">${paragraphs(p.description)}</div>
      </div>

      ${(p.tech && p.tech.length) ? `
      <div class="pd__section">
        <h4>Built with</h4>
        <ul class="tags">${p.tech.map((t) => `<li>${icon('code')}${esc(t)}</li>`).join('')}</ul>
      </div>` : ''}
    `;
  }

  function lockScroll() { document.body.classList.add('is-locked'); }
  function unlockScroll() {
    if (!document.querySelector('dialog[open]')) document.body.classList.remove('is-locked');
  }

  function openProject(id) {
    const index = projects.findIndex((p) => p.id === id);
    if (index < 0) return;
    body.innerHTML = renderProject(projects[index], index);
    guardImages(body);
    body.scrollTop = 0;
    lockScroll();
    dialog.showModal();
    dialog.querySelector('.pd__close').focus({ preventScroll: true });
  }

  grid.addEventListener('click', (e) => {
    const tile = e.target.closest('.tile');
    if (tile) openProject(tile.dataset.id);
  });

  body.addEventListener('click', (e) => {
    const nav = e.target.closest('.shots__nav');
    if (nav) {
      const scroller = body.querySelector('.shots');
      const dir = nav.classList.contains('shots__nav--next') ? 1 : -1;
      scroller.scrollBy({ left: dir * scroller.clientWidth * 0.8, behavior: 'smooth' });
      return;
    }
    const shot = e.target.closest('.shot');
    if (shot && !shot.classList.contains('is-empty')) openLightbox(Number(shot.dataset.n));
  });

  /* ---------- Screenshot viewer ---------- */
  let gallery = [];
  let current = 0;

  function openLightbox(n) {
    gallery = [...body.querySelectorAll('.shot:not(.is-empty) img')].map((img) => ({
      src: img.getAttribute('src'), alt: img.alt
    }));
    const clicked = body.querySelectorAll('.shot')[n]?.querySelector('img')?.getAttribute('src');
    current = Math.max(0, gallery.findIndex((g) => g.src === clicked));
    showShot();
    lightbox.showModal();
  }

  function showShot() {
    const g = gallery[current];
    lbImg.src = g.src;
    lbImg.alt = g.alt;
    lbCount.textContent = `${current + 1} / ${gallery.length}`;
    const single = gallery.length < 2;
    lightbox.querySelector('.lb__prev').hidden = single;
    lightbox.querySelector('.lb__next').hidden = single;
  }

  function step(d) {
    current = (current + d + gallery.length) % gallery.length;
    showShot();
  }

  lightbox.querySelector('.lb__prev').addEventListener('click', () => step(-1));
  lightbox.querySelector('.lb__next').addEventListener('click', () => step(1));
  lightbox.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') step(-1);
    if (e.key === 'ArrowRight') step(1);
  });

  /* ---------- Shared dialog behaviour ---------- */
  [dialog, lightbox].forEach((d) => {
    d.addEventListener('click', (e) => {
      if (e.target === d || e.target.closest('[data-close]')) d.close();
    });
    d.addEventListener('close', unlockScroll);
  });

  renderFilters();
  renderGrid();
})();
