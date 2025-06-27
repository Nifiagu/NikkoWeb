const ecategoryData = [
  {
    title: "BS in Mechatronics",
    img: "images/mechatronics-animated-word-cloudanimation-kinetic-footage-247562689_iconl.webp",
    link: "#mechatronics"
  },
  {
    title: "Internship / OJT",
    img: "images/cf1cfeee102862cacfbce1acb63cbdb5.jpg",
    link: "#sworddemon"
  },
  {
    title: "On-Doing Projects",
    img: "images/istockphoto-1666926741-612x612.jpg",
    link: "#Closed"
  },
];

let ecategoryIndex = 0;

function renderEcategory() {
  const track = document.getElementById('ecategoryTrack');
  track.innerHTML = '';
  for (let i = ecategoryIndex; i < ecategoryIndex + 3 && i < ecategoryData.length; i++) {
    const cat = ecategoryData[i];
    track.innerHTML += `
      <a href="${cat.link}" class="ecategory-card">
        <img src="${cat.img}" alt="${cat.title}">
        <div class="ecategory-info">
          <span class="ecategory-num">0${i + 1}</span>
          <span class="ecategory-title-text">${cat.title}</span>
        </div>
      </a>
    `;
  }
}

function slideEcategory(dir) {
  ecategoryIndex += dir;
  if (ecategoryIndex < 0) ecategoryIndex = 0;
  if (ecategoryIndex > ecategoryData.length - 3) ecategoryIndex = ecategoryData.length - 3;
  renderEcategory();
}

document.addEventListener('DOMContentLoaded', renderEcategory);