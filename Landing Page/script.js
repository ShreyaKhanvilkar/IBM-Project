document.querySelectorAll('.grid-item').forEach(item => {
  const video = item.querySelector('video');
  if (video) {
    item.addEventListener('mouseenter', () => {
      video.play();
    });

    item.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
    });
  }
});
