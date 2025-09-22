'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });


// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

// Open news images in a new tab
document.addEventListener('click', function (e) {
  const img = e.target.closest('.news-image img');
  if (!img) return;
  window.open(img.src, '_blank');
});

// Carousel logic for Additional Projects
document.addEventListener('click', function (e) {
  const prevBtn = e.target.closest('.media-carousel-btn.prev');
  const nextBtn = e.target.closest('.media-carousel-btn.next');
  const btn = prevBtn || nextBtn;
  if (!btn) return;

  const carousel = btn.closest('.media-carousel');
  const track = carousel.querySelector('.media-carousel-track');
  const slides = carousel.querySelectorAll('.media-carousel-slide');
  const dots = carousel.querySelectorAll('.media-carousel-dot');
  const total = slides.length;
  let index = Number(carousel.dataset.index || 0);

  // Pause any playing videos on current slide
  const currentVideo = slides[index]?.querySelector('video');
  if (currentVideo) currentVideo.pause();

  if (nextBtn) index = (index + 1) % total;
  else if (prevBtn) index = (index - 1 + total) % total;

  carousel.dataset.index = index;
  track.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach((d, i) => d.classList.toggle('active', i === index));

  // Autoplay video on new slide if present
  const newVideo = slides[index]?.querySelector('video');
  if (newVideo) { try { newVideo.play(); } catch (_) {} }
});

