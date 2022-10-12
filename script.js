(() => {
  'use strict';
  const fsDisplay = document.querySelector(".fullscreen-display");
  const videoPreviewSuffix = "_preview.jpg", videoSuffix = ".mp4";

  const hideFsDisplay = () => fsDisplay.classList.remove("shown");
  fsDisplay.onclick = e => {
    if (e.target === fsDisplay || fsDisplay.getAttribute("mode") === "image")
      hideFsDisplay()
  };
  document.onkeydown = e => { if (e.code === "Escape") hideFsDisplay() };

  // add a listener on each icon that triggers fsDisplay being shown
  document.querySelectorAll(".display img").forEach(icon => icon.onclick = () => {
    fsDisplay.classList.add("shown");

    const videoMode = icon.src.endsWith(videoPreviewSuffix);
    fsDisplay.setAttribute("mode", videoMode ? "video" : "image");
    if (videoMode) {
      const srcBaseLen = icon.src.length - videoPreviewSuffix.length;
      const videoSrc = icon.src.substring(0, srcBaseLen) + videoSuffix;
      fsDisplay.querySelector("video").src = videoSrc;
    } else {
      fsDisplay.querySelector("img").src = icon.src;
    }
  });
})()
