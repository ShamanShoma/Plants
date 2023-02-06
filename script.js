"use strict";

implementBurgerMenu();
setService();
setAccordion();
contacts();

function implementBurgerMenu() {
  let btnBurger = document.querySelector("#btnBurger");
  let menuBurger = document.querySelector("#menuBurger");
  let link = menuBurger.querySelector(".header_list");
  let over = document.querySelector("main");

  btnBurger.addEventListener("click", click);

  function click() {
    menuBurger.classList.toggle("active");
    btnBurger.classList.toggle("active");

    link.addEventListener("click", noClick);

    over.addEventListener("click", noClick);
  }

  function noClick() {
    menuBurger.classList.toggle("active");
    btnBurger.classList.toggle("active");

    link.removeEventListener("click", noClick);
    over.removeEventListener("click", noClick);
  }
}

function setService() {
  let serviceBTNs = document.querySelectorAll(".service__btn");
  let serviceItems = document.querySelectorAll(".service_item");

  for (let serviceBTN of serviceBTNs) {
    serviceBTN.disabled = false;

    serviceBTN.addEventListener("click", () => {
      if (serviceBTN.id == "btn_gardens") {
        for (let serviceItem of serviceItems) {
          if (serviceItem.classList.contains("activ")) {
            serviceItem.classList.toggle("activ");
          }
          if (
            serviceItem.id != "service_item1" &&
            serviceItem.id != "service_item5"
          ) {
            serviceItem.classList.toggle("activ");
          }
        }
      }
      if (serviceBTN.id == "btn_lawn") {
        for (let serviceItem of serviceItems) {
          if (serviceItem.classList.contains("activ")) {
            serviceItem.classList.remove("activ");
          }
          if (serviceItem.id != "service_item3") {
            serviceItem.classList.toggle("activ");
          }
        }
      }
      if (serviceBTN.id == "btn_planting") {
        for (let serviceItem of serviceItems) {
          if (serviceItem.classList.contains("activ")) {
            serviceItem.classList.remove("activ");
          }
          if (
            serviceItem.id != "service_item2" &&
            serviceItem.id != "service_item4" &&
            serviceItem.id != "service_item6"
          ) {
            serviceItem.classList.toggle("activ");
          }
        }
      }
    });
  }
}

function setAccordion() {
  let accordions = document.querySelectorAll(".prices_item__accordion");
  let i;

  for (i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener("click", function func() {
      let panelPrice = this.nextElementSibling;
      let descActive = document.querySelectorAll(
        ".prices_item__accordion.active"
      );

      this.classList.toggle("active");
      if (panelPrice.style.maxHeight) {
        panelPrice.style.maxHeight = null;
      } else {
        panelPrice.style.maxHeight = "154px";
      }

      panelPrice.addEventListener("click", function () {
        let btnPrice = this.previousElementSibling;
        if (btnPrice.classList.contains("active")) {
          btnPrice.classList.toggle("active");
          panelPrice.style.maxHeight = null;
        }
      });

      descActive.forEach(() => {
        panelPrice.style.maxHeight = null;
        this.classList.toggle("active");
      });
    });
  }
}

function contacts() {
  let contactsContainer = document.querySelector(".contacts-container");
  let infoDropdown = contactsContainer.querySelector(".info-dropdown");
  let arrow = contactsContainer.querySelector(".dropdown .arrow");
  let infoDropdownItem = document.querySelector(".info-dropdown_items");
  let infoDropdownItems = infoDropdownItem.querySelectorAll(
    ".info-dropdown_item"
  );
  let cityCards = document.querySelectorAll(".city-card");
  let cityCard;

  contactsContainer.addEventListener("click", function () {
    for (cityCard of cityCards) {
      if (cityCard.classList.contains("activ")) {
        cityCard.classList.toggle("activ");
      }
    }
    contactsContainer.classList.toggle("active");
    infoDropdownItem.classList.toggle("active");
    arrow.classList.toggle("activ");
  });

  for (let i = 0; i < infoDropdownItems.length; i++) {
    infoDropdownItems[i].addEventListener("mouseenter", () => {
      infoDropdownItems[i].classList.toggle("activ");
    });

    infoDropdownItems[i].addEventListener("mouseleave", () => {
      infoDropdownItems[i].classList.toggle("activ");
    });
  }

  infoDropdownItems.forEach((elem) => {
    elem.addEventListener("click", () => {
      infoDropdown.textContent = elem.textContent;
      contactsContainer.classList.toggle("active");
      infoDropdownItem.classList.toggle("active");
      arrow.classList.toggle("activ");

      if (infoDropdown.textContent == "Canandaigua, NY") {
        for (cityCard of cityCards) {
          if (cityCard.id == "canandaigua-card") {
            cityCard.classList.toggle("activ");
          }
        }
      }
      if (infoDropdown.textContent == "New York City") {
        for (cityCard of cityCards) {
          if (cityCard.id == "newYork-card") {
            cityCard.classList.toggle("activ");
          }
        }
      }
      if (infoDropdown.textContent == "Yonkers, NY") {
        for (cityCard of cityCards) {
          if (cityCard.id == "yonkers-card") {
            cityCard.classList.toggle("activ");
          }
        }
      }
      if (infoDropdown.textContent == "Sherrill, NY") {
        for (cityCard of cityCards) {
          if (cityCard.id == "sherrill-card") {
            cityCard.classList.toggle("activ");
          }
        }
      }
    });
  });
}
