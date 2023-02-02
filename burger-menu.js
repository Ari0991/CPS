const swiper = new Swiper(".swiper", {
  enabled: true,
  observer: true,
  direction: "horizontal",
  slidesPerView: "auto",
  spaceBetween: 16,
  clickable: true,
  breakpoints: {
    768: {
      enabled: false,
    },
    1120: {
      enabled: false,
    },
  },

  pagination: {
    el: ".swiper__pagination",
    clickable: true,
  },
});

// Article button click

const article = document.querySelector(".article");
const readMoreArticle = article.querySelector(".button--read-more");
let readMoreArticleText = readMoreArticle.addEventListener(
  "click",
  function () {
    const articleText = article.querySelector(".article__text");
    let paragraph = document.createElement("p");
    paragraph.textContent =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quam a, officia similique unde deserunt. Pariatur, et adipisci in nisi, fuga assumenda nobis doloremque sint quod sequi voluptatum similique omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quam a, officia similique unde deserunt. Pariatur, et adipisci in nisi, fuga assumenda nobis doloremque sint quod sequi voluptatum similique omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quam a, officia similique unde deserunt. Pariatur, et adipisci in nisi, fuga assumenda nobis doloremque sint quod sequi voluptatum similique omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quam a, officia similique unde deserunt. Pariatur, et adipisci in nisi, fuga assumenda nobis doloremque sint quod sequi voluptatum similique omnis.";
    articleText.appendChild(paragraph);
    readMoreArticle.classList.add("hidden");
  }
);

// Swiper button click

const swiperBlock = document.querySelector(".swiper__block");
const swiperWrapper = swiperBlock.querySelector(".swiper-wrapper");
const readMore = swiperBlock.querySelector(".swiper__button--read-more");
const buttonIcon = readMore.querySelector(".button__icon");
const readMoreText = readMore.querySelector(".button__text");

let readMoreContent = readMore.addEventListener("click", function () {
  if (swiperWrapper.classList.contains("swiper-wrapper--hide-content")) {
    swiperWrapper.classList.remove("swiper-wrapper--hide-content");
    swiperWrapper.classList.add("swiper-wrapper--max-height");
    if (window.innerWidth >= 1120) {
      readMoreText.textContent = "Скрыть";
      buttonIcon.style.transform = "rotate(180deg)";
    } else {
      readMore.classList.add("hidden");
    }
  } else if (swiperWrapper.classList.contains("swiper-wrapper--max-height")) {
    swiperWrapper.classList.add("swiper-wrapper--hide-content");
    swiperWrapper.classList.remove("swiper-wrapper--max-height");
    readMoreText.textContent = "Показать все";
    buttonIcon.style.transform = "rotate(0deg)";
  }
});
