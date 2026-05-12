const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector("#main-nav");
const form = document.querySelector("#consult-form");
const statusNode = document.querySelector("#form-status");

if (navToggle && mainNav) {
  const closeMenu = () => {
    mainNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  };

  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    mainNav.classList.toggle("open");
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  document.addEventListener("click", (event) => {
    const isOpen = mainNav.classList.contains("open");
    if (!isOpen) return;
    const clickedInsideNav = mainNav.contains(event.target);
    const clickedToggle = navToggle.contains(event.target);
    if (!clickedInsideNav && !clickedToggle) {
      closeMenu();
    }
  });
}

if (form && statusNode) {
  const setStatus = (text, kind) => {
    statusNode.textContent = text;
    statusNode.className = kind || "";
  };

  const validate = () => {
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const task = String(formData.get("task") || "").trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (name.length < 2) {
      return "Укажите имя (минимум 2 символа).";
    }
    if (!emailOk) {
      return "Проверьте e-mail: нужен корректный адрес в формате name@company.ru.";
    }
    if (task.length < 10) {
      return "Опишите задачу подробнее (минимум 10 символов).";
    }
    return "";
  };

  form.querySelectorAll("input, textarea").forEach((field) => {
    field.addEventListener("input", () => {
      if (statusNode.classList.contains("error")) {
        setStatus("", "");
      }
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const errorMessage = validate();
    if (errorMessage) {
      setStatus(errorMessage, "error");
      return;
    }

    setStatus("Спасибо! Это демо-форма: данные не отправляются на сервер. Для рабочей отправки подключим endpoint отдельно.", "ok");
    form.reset();
  });
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
} else {
  document.querySelectorAll(".reveal").forEach((node) => node.classList.add("visible"));
}
