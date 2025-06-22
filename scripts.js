function handleSearch() {
  const input = document.getElementById("search-input").value.toLowerCase();

/* Search Bar */

  const routes = {
    "game": "games.html",
    "games": "games.html",
    "portfolio": "portfolio.html",
    "e-portfolio": "portfolio.html",
    "template": "templates.html",
    "templates": "templates.html",
    "video": "videos.html",
    "videos": "videos.html",
    "profile": "myprofile.html"
  };

  for (const keyword in routes) {
    if (input.includes(keyword)) {
      window.location.href = routes[keyword];
      return;
    }
  }

  alert("No results found. Try 'game', 'portfolio', or 'video'.");
}

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") handleSearch();
    });
  }
});

/* Video Script */

const sliderPositions = {
  'idol-party-track': 0,
  'random-videos-track': 0,
};

function scrollSlider(trackId, direction) {
  const track = document.querySelector(`.${trackId}`);
  const totalSlides = track.children.length;

  sliderPositions[trackId] += direction;

  if (sliderPositions[trackId] < 0) {
    sliderPositions[trackId] = totalSlides - 1;
  } else if (sliderPositions[trackId] >= totalSlides) {
    sliderPositions[trackId] = 0;
  }

  const offset = -sliderPositions[trackId] * 100;
  track.style.transform = `translateX(${offset}%)`;
}

