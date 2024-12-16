export const initDrag = (el: HTMLElement) => {
  // if (!el) return; // Проверяем, что элемент существует
  let isDragging = false,
    prevPageX = 0,
    prevScrollLeft = 0;

  const dragStart = (e: MouseEvent) => {
    // el.scrollLeft = 0;
    isDragging = true;
    e.preventDefault();
    prevPageX = e.pageX;
    if (el != null) {
      prevScrollLeft = el.scrollLeft;
    }
  };

  const drag = (e: MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    el.scrollLeft = prevScrollLeft - (e.pageX - prevPageX);
  };

  const dragStop = () => (isDragging = false);

  document.addEventListener("mousedown", dragStart);
  document.addEventListener("mousemove", drag);
  document.addEventListener("mouseup", dragStop);
  document.addEventListener("mouseleave", dragStop);
};
