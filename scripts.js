function handleSearch() {
  const input = document.getElementById("search-input").value.toLowerCase();

  const routes = {
    "game": "games.html",
    "games": "games.html",
    "game zone": "games.html",
    "portfolio": "portfolio.html",
    "e-portfolio": "portfolio.html",
    "eportfolio": "portfolio.html",
    "projects": "portfolio.html#projects",
    "project": "portfolio.html#projects",
    "video": 'index.html#video',
    "videos": 'index.html#video',
    "idol": "#idol-party",
    "idol party": "#idol-party",
    "idol-party": "#idol-party",
    "profile": "profile.html",
    "about": "profile.html#about",
    "about me": "profile.html#about",
  };

  for (const keyword in routes) {
    if (input.includes(keyword)) {
      window.location.href = routes[keyword];
      return;
    }
  }

  alert("No results found. Try 'game', 'portfolio', 'profile' or 'video'.");
}

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") handleSearch();
    });
  }
});

/* Search Bar */
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.left === "0px") {
      sidebar.style.left = "-250px";
    } else {
      sidebar.style.left = "0px";
    }
  }

/* Sidebar Script */
  function openSidebar() {
    document.getElementById("Sidebar").classList.add("active");
  }

  function closeSidebar() {
    document.getElementById("Sidebar").classList.remove("active");
  }

/* Projects */
  function toggleDescription(id) {
    const desc = document.getElementById(`desc${id}`);
    desc.classList.toggle('show');
  }
