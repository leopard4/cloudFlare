document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".mobile-nav-toggle");
  const navLinks = document.querySelector("#nav-links");

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      // 메뉴 링크 토글
      navLinks.classList.toggle("nav-active");

      // 버튼 아이콘 토글 (X자)
      navToggle.classList.toggle("is-active");

      // 접근성 속성 토글
      const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", !isExpanded);
    });
  }

  // (기존 갤러리 fetch 스크립트는 해당 페이지에서 계속 사용)
});
