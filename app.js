

function resized() {
  if (window.innerWidth > 1000) {
    document.body.style.backgroundColor = "orange";
  } else if (window.innerWidth > 500 && window.innerWidth <= 900) {
    document.body.style.backgroundColor = "yellowgreen";
  } else {
    document.body.style.backgroundColor = "skyblue";
  }
}

window.addEventListener("resize", resized);
