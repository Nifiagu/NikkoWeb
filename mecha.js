function openModal(imgSrc) {
  document.getElementById('modal').style.display = 'block';
  document.getElementById('modal-img').src = imgSrc;
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

// Optional: Add slider scrolling
const albumTrack = document.querySelector('.album-track');
document.querySelector('.prev-btn').onclick = () => albumTrack.scrollBy({ left: -220, behavior: 'smooth' });
document.querySelector('.next-btn').onclick = () => albumTrack.scrollBy({ left: 220, behavior: 'smooth' });