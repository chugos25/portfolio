const state = {
  lang: "es",
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function createTagList(items) {
  return items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function renderStats(stats) {
  $("#stats-grid").innerHTML = stats
    .map(
      (item) => `
        <article class="stat-card reveal">
          <p class="stat-value">${escapeHtml(item.value)}</p>
          <p class="stat-label">${escapeHtml(item.label)}</p>
          <p class="stat-detail">${escapeHtml(item.detail)}</p>
        </article>
      `,
    )
    .join("");
}

function renderProjects(items) {
  $("#projects-grid").innerHTML = items
    .map(
      (item, index) => `
        <article class="project-card reveal">
          <span class="project-index">${String(index + 1).padStart(2, "0")}</span>
          <div class="project-header">
            <h3 class="project-title">${escapeHtml(item.title)}</h3>
            <p class="project-role">${escapeHtml(item.role)}</p>
          </div>
          <p class="project-summary">${escapeHtml(item.summary)}</p>
          <ul class="project-highlights">
            ${createTagList(item.highlights)}
          </ul>
          <ul class="project-tags">
            ${createTagList(item.tags)}
          </ul>
        </article>
      `,
    )
    .join("");
}

function renderExperience(items) {
  $("#experience-timeline").innerHTML = items
    .map(
      (item) => `
        <article class="timeline-item reveal">
          <div class="timeline-meta">
            <span class="timeline-period">${escapeHtml(item.period)}</span>
            <span class="timeline-company">${escapeHtml(item.company)}</span>
          </div>
          <h3 class="timeline-title">${escapeHtml(item.title)}</h3>
          <p class="timeline-body">${escapeHtml(item.body)}</p>
        </article>
      `,
    )
    .join("");
}

function renderApproach(items) {
  $("#approach-grid").innerHTML = items
    .map(
      (item) => `
        <article class="approach-card reveal">
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.body)}</p>
        </article>
      `,
    )
    .join("");
}

function renderContact(contact) {
  const container = $("#contact-link-list");

  if (!contact.links.length) {
    container.innerHTML = `<div class="contact-empty">${escapeHtml(contact.empty)}</div>`;
    return;
  }

  container.innerHTML = contact.links
    .map(
      (link) => `
        <a class="contact-link" href="${escapeHtml(link.href)}" target="_blank" rel="noreferrer">
          <span>${escapeHtml(link.label)}</span>
          <span>${escapeHtml(link.meta)}</span>
        </a>
      `,
    )
    .join("");
}

function renderSnapshot(snapshot) {
  $("#snapshot-kicker").textContent = snapshot.kicker;
  $("#snapshot-title").textContent = snapshot.title;
  $("#snapshot-note").textContent = snapshot.note;

  const ids = [
    ["#snapshot-location-label", "#snapshot-location"],
    ["#snapshot-focus-label", "#snapshot-focus"],
    ["#snapshot-availability-label", "#snapshot-availability"],
  ];

  snapshot.items.forEach((item, index) => {
    const [labelSelector, valueSelector] = ids[index];
    if (!labelSelector || !valueSelector) {
      return;
    }

    $(labelSelector).textContent = item.label;
    $(valueSelector).textContent = item.value;
  });
}

function renderText(content) {
  document.documentElement.lang = state.lang;
  document.title = content.meta.title;
  $('meta[name="description"]').setAttribute("content", content.meta.description);
  $('meta[property="og:title"]').setAttribute("content", content.meta.title);
  $('meta[property="og:description"]').setAttribute("content", content.meta.description);

  $("#brand-name").textContent = content.brand.name;
  $("#brand-role").textContent = content.brand.role;

  $("#nav-work").textContent = content.nav.work;
  $("#nav-experience").textContent = content.nav.experience;
  $("#nav-approach").textContent = content.nav.approach;
  $("#nav-contact").textContent = content.nav.contact;

  $("#hero-eyebrow").textContent = content.hero.eyebrow;
  $("#hero-title").textContent = content.hero.title;
  $("#hero-intro").textContent = content.hero.intro;
  $("#hero-summary").textContent = content.hero.summary;
  $("#primary-cta").textContent = content.hero.primaryCta;
  $("#secondary-cta").textContent = content.hero.secondaryCta;

  $("#stats-label").textContent = content.statsLabel;

  $("#narrative-eyebrow").textContent = content.narrative.eyebrow;
  $("#narrative-title").textContent = content.narrative.title;
  $("#narrative-body").textContent = content.narrative.body;

  $("#projects-eyebrow").textContent = content.projects.eyebrow;
  $("#projects-title").textContent = content.projects.title;

  $("#experience-eyebrow").textContent = content.experience.eyebrow;
  $("#experience-title").textContent = content.experience.title;

  $("#approach-eyebrow").textContent = content.approach.eyebrow;
  $("#approach-title").textContent = content.approach.title;

  $("#contact-eyebrow").textContent = content.contact.eyebrow;
  $("#contact-title").textContent = content.contact.title;
  $("#contact-body").textContent = content.contact.body;

  $("#footer-copy").textContent = content.footer.copy;
  $("#footer-tag").textContent = content.footer.tag;

  renderSnapshot(content.snapshot);
  renderStats(content.stats);
  renderProjects(content.projects.items);
  renderExperience(content.experience.items);
  renderApproach(content.approach.items);
  renderContact(content.contact);

  activateReveal();
}

function activateReveal() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const elements = $$(".reveal");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.14,
    },
  );

  elements.forEach((element) => observer.observe(element));
}

function setLanguage(lang) {
  state.lang = lang;
  const content = window.portfolioContent?.[lang] ?? window.portfolioContent.es;
  renderText(content);

  $$(".lang-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.langSwitch === lang);
    button.setAttribute("aria-pressed", String(button.dataset.langSwitch === lang));
  });
}

function bindLanguageToggle() {
  $$(".lang-button").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.langSwitch));
  });
}

function initFooterYear() {
  $("#footer-year").textContent = new Date().getFullYear();
}

function init() {
  bindLanguageToggle();
  initFooterYear();
  setLanguage(state.lang);
}

init();
