function startAnimation() {
  const bar = document.getElementById("progressBar");
  let width = 0;

  const interval = setInterval(() => {
    if (width >= 100) {
      clearInterval(interval);
    } else {
      width++;
      bar.style.width = width + "%";
    }
  }, 20); // 20ms interval = ~2 seconds total
}
