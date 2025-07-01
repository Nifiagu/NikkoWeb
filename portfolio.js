const ecategoryData = [
  {
    title: "BS in Mechatronics",
    img: "images/mechatronics-animated-word-cloudanimation-kinetic-footage-247562689_iconl.webp",
    link: "portfolio-mechatronics.html"
  },
  {
    title: "Internship / OJT",
    img: "images/cf1cfeee102862cacfbce1acb63cbdb5.jpg",
    link: "#internship"
  }
];

function renderEcategory() {
  const track = document.getElementById('ecategoryTrack');
  track.innerHTML = '';
  ecategoryData.forEach((cat, i) => {
    track.innerHTML += `
      <a href="${cat.link}" class="ecategory-card">
        <img src="${cat.img}" alt="${cat.title}">
        <div class="ecategory-info">
          <span class="ecategory-num">0${i + 1}</span>
          <span class="ecategory-title-text">${cat.title}</span>
        </div>
      </a>
    `;
  });
}

document.addEventListener('DOMContentLoaded', renderEcategory);
