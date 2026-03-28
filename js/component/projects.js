import { projectsData } from "../data/projectsData.js";

export function renderProjects() {
  const container = document.getElementById("projectsContainer");

  if (!container) return;

  container.innerHTML = "";

  projectsData.forEach(project => {
    const tagsHTML = project.tags
      .map(tag => `<span class="tag">${tag}</span>`)
      .join("");

    const imageHTML = project.image
      ? `<img src="${project.image}" alt="${project.title} preview">`
      : "Project Preview";

    const linkHTML = project.link
      ? `<a class="link" href="${project.link}" target="_blank">${project.linkText}</a>`
      : `<span class="link">${project.linkText}</span>`;

    const card = `
      <article class="card" data-category="${project.category}">
        <div class="card-image">${imageHTML}</div>
        <h3 class="card-title">${project.title}</h3>
        <p class="card-text">${project.description}</p>
        <div class="tags">${tagsHTML}</div>
        <div class="card-actions">${linkHTML}</div>
      </article>
    `;

    container.insertAdjacentHTML("beforeend", card);
  });
}