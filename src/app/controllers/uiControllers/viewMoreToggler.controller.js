import updateListener from "../../utils/uiUtils/updateListener.js";

function toggleViewMore() {
  const viewMoreBtn = document.querySelectorAll(".todo-view-more-btn");
  const viewLessBtn = document.querySelectorAll(".todo-view-less-btn");

  viewMoreBtn.forEach((btn) => {
    updateListener(
      btn,
      () => {
        const parentDiv = btn.parentNode;
        const viewMoreToggleElements =
          parentDiv.querySelectorAll(".more-toggle");
        viewMoreToggleElements.forEach((el) => {
          el.classList.toggle("more-hidden");
        });
        btn.classList.toggle("more-hidden");
      },
      "noupdate",
    );
  });

  viewLessBtn.forEach((btn) => {
    updateListener(
      btn,
      () => {
        const parentDiv = btn.parentNode;
        const viewMoreToggleElements =
          parentDiv.querySelectorAll(".more-toggle");
        viewMoreToggleElements.forEach((el) => {
          el.classList.toggle("more-hidden");
        });

        const moreBtn = parentDiv.querySelector(".todo-view-more-btn");
        moreBtn.classList.toggle("more-hidden");
      },
      "noupdate",
    );
  });
}

export default toggleViewMore;
