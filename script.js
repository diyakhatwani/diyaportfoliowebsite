// theme
const btn = document.getElementById("theme");
const icon = btn.querySelector("i");

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
  icon.classList.replace("fa-moon", "fa-sun");
}

btn.onclick = () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    localStorage.setItem("theme", "light");
    icon.classList.replace("fa-moon", "fa-sun");
  } else {
    localStorage.setItem("theme", "dark");
    icon.classList.replace("fa-sun", "fa-moon");
  }
};


// menubar
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
// cardsjs
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (cardTop < screenHeight - 100) {
      card.classList.add("show");
    }
  });
});

// servicejs
cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-12px) scale(1.04)";

    if (document.body.classList.contains("light")) {
      card.style.boxShadow = "0 25px 60px rgba(74,36,144,0.6)";
    } else {
      card.style.boxShadow = "0 20px 60px rgba(77,166,255,0.25)";
    }
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)";

    if (document.body.classList.contains("light")) {
      card.style.boxShadow = "0 12px 30px rgba(74,36,144,0.25)";
    } else {
      card.style.boxShadow = "0 15px 40px rgba(0,0,0,0.6)";
    }
  });
});
