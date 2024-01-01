import { galleryItems } from "./gallery-items.js";
// Change code below this line

// ###############################################################
// Variable Declarations and Assignments
// ###############################################################
const imageGallery = document.querySelector(".gallery");
imageGallery.addEventListener("click", clickOnImage);

window.addEventListener("keydown", closeModalInstance);

var modalInstance = basicLightbox.create(``);

// ###############################################################
// Functions
// ###############################################################
function clickOnImage(event) {
  event.preventDefault();

  if (event.target.nodeName === "IMG") {
    modalInstance = basicLightbox.create(
      `<img src=${event.target.dataset.source}>`
    );
    modalInstance.show();
  }
}

// ~~~~~~~~~~
function closeModalInstance(event) {
  if (modalInstance.visible() === true && event.key === "Escape") {
    modalInstance.close();
  }
}

// ~~~~~~~~~~
function renderImages() {
  const elementsArray = [];

  for (const item of galleryItems) {
    const liInstance = document.createElement("li");
    const aInstance = document.createElement("a");
    const imgInstance = document.createElement("img");

    const largeImage = item.original;
    const smallImage = item.preview;
    const imageAlt = item.description;

    liInstance.classList.add("gallery__item");

    aInstance.classList.add("gallery__link");
    aInstance.setAttribute("href", largeImage);

    imgInstance.classList.add("gallery__image");
    imgInstance.setAttribute("src", smallImage);
    imgInstance.dataset.source = largeImage;
    imgInstance.setAttribute("alt", imageAlt);

    liInstance.append(aInstance);
    aInstance.append(imgInstance);
    elementsArray.push(liInstance);
  }

  imageGallery.append(...elementsArray);
}

// ###############################################################
// Initialization
// ###############################################################
renderImages();
