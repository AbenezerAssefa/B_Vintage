function toggleVisibility(element) {
  const paragraph = element.querySelector(".hidden");
  const arrow = element.querySelector(".arrow_icon");

  paragraph.classList.toggle("visible");
  arrow.classList.toggle("rotated");
}
