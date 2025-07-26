const tourismItem = document.querySelector('.tourism');
const video = tourismItem.querySelector('.bg-video');

tourismItem.addEventListener('mouseenter', () => {
  video.play();
});

tourismItem.addEventListener('mouseleave', () => {
  video.pause();
  video.currentTime = 0;
});
