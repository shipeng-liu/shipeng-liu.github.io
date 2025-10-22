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

// Add event to all nav links with robust mapping (no index assumptions)
navigationLinks.forEach((navLink) => {
  navLink.addEventListener("click", function () {
    const target = this.textContent.trim().toLowerCase();

    // Toggle pages based on data-page match
    pages.forEach((page) => {
      page.classList.toggle("active", page.dataset.page === target);
    });

    // Highlight only the clicked nav link
    navigationLinks.forEach((lnk) => {
      lnk.classList.toggle("active", lnk === this);
    });

    window.scrollTo(0, 0);
  });
});

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

  // Update caption
  const captionEl = carousel.querySelector('.media-carousel-caption');
  if (captionEl) {
    const caption = slides[index]?.dataset.caption ||
      slides[index]?.querySelector('img')?.getAttribute('alt') ||
      (slides[index]?.querySelector('video')?.getAttribute('data-caption')) || '';
    captionEl.textContent = caption || '';
  }
});

// Initialize carousel captions and dot titles from slide data/alt/src
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.media-carousel').forEach((carousel) => {
    const slides = carousel.querySelectorAll('.media-carousel-slide');
    const dots = carousel.querySelectorAll('.media-carousel-dot');
    let captionEl = carousel.querySelector('.media-carousel-caption');
    if (!captionEl) {
      captionEl = document.createElement('div');
      captionEl.className = 'media-carousel-caption';
      const dotsBar = carousel.querySelector('.media-carousel-dots');
      if (dotsBar && dotsBar.parentNode === carousel) {
        carousel.appendChild(captionEl);
      } else {
        carousel.appendChild(captionEl);
      }
    }

    // Set titles on dots and compute initial caption
    const index = Number(carousel.dataset.index || 0);
    slides.forEach((slide, i) => {
      const img = slide.querySelector('img');
      const vid = slide.querySelector('video');
      const fallbackFromSrc = (node) => {
        if (!node) return '';
        try {
          const url = node.getAttribute('src') || '';
          return url.split('/').pop();
        } catch { return ''; }
      };
      const caption = slide.dataset.caption || (img && img.alt) || (vid && vid.getAttribute('data-caption')) || fallbackFromSrc(img || vid);
      if (dots[i]) dots[i].title = caption || '';
      if (i === index) captionEl.textContent = caption || '';
    });

    // Auto-swap functionality - change slide every 5 seconds
    if (slides.length > 1) {
      let autoSwapInterval = setInterval(() => {
        const track = carousel.querySelector('.media-carousel-track');
        const currentIndex = Number(carousel.dataset.index || 0);
        const nextIndex = (currentIndex + 1) % slides.length;

        // Pause current video
        const currentVideo = slides[currentIndex]?.querySelector('video');
        if (currentVideo) currentVideo.pause();

        // Update carousel
        carousel.dataset.index = nextIndex;
        track.style.transform = `translateX(-${nextIndex * 100}%)`;

        // Update dots
        dots.forEach((d, i) => d.classList.toggle('active', i === nextIndex));

        // Autoplay new video if present
        const newVideo = slides[nextIndex]?.querySelector('video');
        if (newVideo) { try { newVideo.play(); } catch (_) {} }

        // Update caption
        const caption = slides[nextIndex]?.dataset.caption ||
          slides[nextIndex]?.querySelector('img')?.getAttribute('alt') ||
          (slides[nextIndex]?.querySelector('video')?.getAttribute('data-caption')) || '';
        captionEl.textContent = caption || '';
      }, 5000);

      // Pause auto-swap when user interacts with carousel
      carousel.addEventListener('mouseenter', () => {
        clearInterval(autoSwapInterval);
      });

      // Resume auto-swap when mouse leaves
      carousel.addEventListener('mouseleave', () => {
        autoSwapInterval = setInterval(() => {
          const track = carousel.querySelector('.media-carousel-track');
          const currentIndex = Number(carousel.dataset.index || 0);
          const nextIndex = (currentIndex + 1) % slides.length;

          // Pause current video
          const currentVideo = slides[currentIndex]?.querySelector('video');
          if (currentVideo) currentVideo.pause();

          // Update carousel
          carousel.dataset.index = nextIndex;
          track.style.transform = `translateX(-${nextIndex * 100}%)`;

          // Update dots
          dots.forEach((d, i) => d.classList.toggle('active', i === nextIndex));

          // Autoplay new video if present
          const newVideo = slides[nextIndex]?.querySelector('video');
          if (newVideo) { try { newVideo.play(); } catch (_) {} }

          // Update caption
          const caption = slides[nextIndex]?.dataset.caption ||
            slides[nextIndex]?.querySelector('img')?.getAttribute('alt') ||
            (slides[nextIndex]?.querySelector('video')?.getAttribute('data-caption')) || '';
          captionEl.textContent = caption || '';
        }, 5000);
      });

      // Clear interval when user manually navigates
      const prevBtn = carousel.querySelector('.media-carousel-btn.prev');
      const nextBtn = carousel.querySelector('.media-carousel-btn.next');
      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          clearInterval(autoSwapInterval);
        });
      }
      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          clearInterval(autoSwapInterval);
        });
      }
    }
  });
});
