const distanceBar = document.querySelector('.distance-bar');

window.addEventListener('scroll', () => {
  const distance = window.scrollY;
  const maxDistance = document.body.offsetHeight - window.innerHeight;
  const percentage = (distance / maxDistance) * 100;
  distanceBar.style.width = `${percentage}%`;
});

window.onload = () => {
    const distance = window.scrollY;
    const maxDistance = document.body.offsetHeight - window.innerHeight;
    const percentage = (distance / maxDistance) * 100;
    distanceBar.style.width = `${percentage}%`;
}