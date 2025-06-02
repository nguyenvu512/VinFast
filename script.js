function handleResizeDropdown() {
  const customDropdown = document.getElementById("customDropdown");
  const mobileDropdown = document.getElementById("mobileFullMenu");
  const overlay = document.getElementById("overlay");

  const isCustomDropdownOpen = !customDropdown.classList.contains("d-none");
  const isMobileDropdownOpen = !mobileDropdown.classList.contains("d-none");

  const iconOpen = document.querySelector(".iconOpen");
  const iconClose = document.querySelector(".iconClose");

  // Nếu cả hai đều đóng, thì không làm gì cả
  if (!isCustomDropdownOpen && !isMobileDropdownOpen) {
    return;
  }

  if (window.innerWidth < 900) {
    // Nếu đang ở màn hình nhỏ và dropdown desktop đang mở => ẩn desktop, cho phép mobile
    if (isCustomDropdownOpen) {
      customDropdown.classList.add("d-none");
      overlay.classList.add("d-none");
      mobileDropdown.classList.remove("d-none");

      iconOpen.classList.add("d-none"); // Ẩn icon 3 sọc
      iconClose.classList.remove("d-none"); // Hiện icon X

      // sửa menu
      const mobileManagerUser = document.querySelector(".mobile-manager-user");
      mobileManagerUser.classList.add("iconCloseOpen");
      const megaMainMenu_mobile = document.querySelector(
        ".mega-main-menu-mobile"
      );
      megaMainMenu_mobile.classList.add("iconCloseOpenPadding");

      const header_column_mobile = document.querySelectorAll(
        ".header-column-mobile"
      );
      header_column_mobile.forEach((element) => {
        element.classList.add("iconCloseOpen");
      });
    }
  } else {
    // Nếu đang ở màn hình lớn và dropdown mobile đang mở => ẩn mobile
    if (isMobileDropdownOpen) {
      mobileDropdown.classList.add("d-none");
      customDropdown.classList.remove("d-none");
      overlay.classList.remove("d-none");
    }
  }
}

window.addEventListener("resize", handleResizeDropdown);

document.addEventListener("DOMContentLoaded", function mobileMenuCar() {
  const carToggle = document.getElementById("carToggle");
  const carSubMenu = document.getElementById("carSubMenu");
  const carArrow = document.getElementById("carArrow");
  const carArroText = document.getElementById("carArrowText");

  carToggle.addEventListener("click", () => {
    const isOpen = !carSubMenu.classList.contains("d-none");

    // Toggle submenu
    carSubMenu.classList.toggle("d-none");

    // Toggle icon
    carArrow.classList.toggle("bi-chevron-down", isOpen); // nếu đang mở thì chuyển về "down"
    carArrow.classList.toggle("bi-chevron-up", !isOpen); // nếu đang đóng thì chuyển về "up"

    // Toggle text hiển thị khi mở
    carArrowText.classList.toggle("d-none", isOpen);
  });
});

document.addEventListener("DOMContentLoaded", function mobileMenuDv() {
  // dịch vụ
  const dvToggle = document.getElementById("dvToggle");
  const dvSubMenu = document.getElementById("dvSubMenu");
  const dvArrow = document.getElementById("dvArrow");
  const dvArroText = document.getElementById("dvArrowText");

  dvToggle.addEventListener("click", () => {
    const isOpen = !dvSubMenu.classList.contains("d-none");

    // Toggle submenu
    dvSubMenu.classList.toggle("d-none");

    // Toggle icon
    dvArrow.classList.toggle("bi-chevron-down", isOpen); // nếu đang mở thì chuyển về "down"
    dvArrow.classList.toggle("bi-chevron-up", !isOpen); // nếu đang đóng thì chuyển về "up"

    // Toggle text hiển thị khi mở
    dvArrowText.classList.toggle("d-none", isOpen);
  });
});

document.addEventListener("DOMContentLoaded", function mobileMenuDv() {
  // pin
  const pinToggle = document.getElementById("pinToggle");
  const pinSubMenu = document.getElementById("pinSubMenu");
  const pinArrow = document.getElementById("pinArrow");

  pinToggle.addEventListener("click", () => {
    const isOpen = !pinSubMenu.classList.contains("d-none");

    // Toggle submenu
    pinSubMenu.classList.toggle("d-none");

    // Toggle icon
    pinArrow.classList.toggle("bi-chevron-down", isOpen); // nếu đang mở thì chuyển về "down"
    pinArrow.classList.toggle("bi-chevron-up", !isOpen); // nếu đang đóng thì chuyển về "up"
  });
});

document.addEventListener("DOMContentLoaded", function mobileMenuDv() {
  // tiện ích
  const tiToggle = document.getElementById("tiToggle");
  const tiSubMenu = document.getElementById("tiSubMenu");
  const tiArrow = document.getElementById("tiArrow");

  tiToggle.addEventListener("click", () => {
    const isOpen = !tiSubMenu.classList.contains("d-none");

    // Toggle submenu
    tiSubMenu.classList.toggle("d-none");

    // Toggle icon
    tiArrow.classList.toggle("bi-chevron-down", isOpen); // nếu đang mở thì chuyển về "down"
    tiArrow.classList.toggle("bi-chevron-up", !isOpen); // nếu đang đóng thì chuyển về "up"
  });
});

document.addEventListener("DOMContentLoaded", function mobileMenuDv() {
  // tiện ích
  const msToggle = document.getElementById("msToggle");
  const msSubMenu = document.getElementById("msSubMenu");
  const msArrow = document.getElementById("msArrow");

  msToggle.addEventListener("click", () => {
    const isOpen = !msSubMenu.classList.contains("d-none");

    // Toggle submenu
    msSubMenu.classList.toggle("d-none");

    // Toggle icon
    msArrow.classList.toggle("bi-chevron-down", isOpen); // nếu đang mở thì chuyển về "down"
    msArrow.classList.toggle("bi-chevron-up", !isOpen); // nếu đang đóng thì chuyển về "up"
  });
});

document.addEventListener("DOMContentLoaded", function mobileMenuDv() {
  // tin tức
  const ttToggle = document.getElementById("ttToggle");
  const ttSubMenu = document.getElementById("ttSubMenu");
  const ttArrow = document.getElementById("ttArrow");

  ttToggle.addEventListener("click", () => {
    const isOpen = !ttSubMenu.classList.contains("d-none");

    // Toggle submenu
    ttSubMenu.classList.toggle("d-none");

    // Toggle icon
    ttArrow.classList.toggle("bi-chevron-down", isOpen); // nếu đang mở thì chuyển về "down"
    ttArrow.classList.toggle("bi-chevron-up", !isOpen); // nếu đang đóng thì chuyển về "up"
  });
});

document.addEventListener("DOMContentLoaded", function mobileMenuDv() {
  // tin tức
  const htToggle = document.getElementById("htToggle");
  const htSubMenu = document.getElementById("htSubMenu");
  const htArrow = document.getElementById("htArrow");

  htToggle.addEventListener("click", () => {
    const isOpen = !htSubMenu.classList.contains("d-none");

    // Toggle submenu
    htSubMenu.classList.toggle("d-none");

    // Toggle icon
    htArrow.classList.toggle("bi-chevron-down", isOpen); // nếu đang mở thì chuyển về "down"
    htArrow.classList.toggle("bi-chevron-up", !isOpen); // nếu đang đóng thì chuyển về "up"
  });
});

document.addEventListener("DOMContentLoaded", function mobileMenuDv() {
  // tiện ích
  const tlToggle = document.getElementById("tlToggle");
  const tlSubMenu = document.getElementById("tlSubMenu");
  const tlArrow = document.getElementById("tlArrow");

  tlToggle.addEventListener("click", () => {
    const isOpen = !tlSubMenu.classList.contains("d-none");

    // Toggle submenu
    tlSubMenu.classList.toggle("d-none");

    // Toggle icon
    tlArrow.classList.toggle("bi-chevron-down", isOpen); // nếu đang mở thì chuyển về "down"
    tlArrow.classList.toggle("bi-chevron-up", !isOpen); // nếu đang đóng thì chuyển về "up"
  });
});

function moveCard() {
  const card = document.getElementById("serviceCard");
  const mobileContainer = document.getElementById("mobileCardContainer");
  const desktopContainer = document.querySelector(".container-service");

  if (!card || !mobileContainer || !desktopContainer) return;

  if (window.innerWidth <= 768) {
    // Nếu đang ở mobile, thì chuyển card qua container mobile
    if (desktopContainer.contains(card)) {
      desktopContainer.removeChild(card); // remove khỏi desktop container nếu còn
    }
    if (!mobileContainer.contains(card)) {
      mobileContainer.appendChild(card); // thêm vào mobile container
    }
  } else {
    // Nếu đang ở desktop, thì chuyển card về desktop container
    if (mobileContainer.contains(card)) {
      mobileContainer.removeChild(card); // remove khỏi mobile container nếu còn
    }
    if (!desktopContainer.contains(card)) {
      desktopContainer.appendChild(card); // thêm vào desktop container
    }
  }
}

window.addEventListener("DOMContentLoaded", moveCard);
window.addEventListener("resize", moveCard);
