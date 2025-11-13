// Function to load each section
function loadHTML(id, file) {
  fetch(file)
    .then(response => {
      if (!response.ok) throw new Error(`Failed to load ${file}`);
      return response.text();
    })
    .then(data => document.getElementById(id).innerHTML = data)
    .catch(err => console.error(err));
}

// Load all sections
loadHTML("navbar", "navbar.html");
loadHTML("hero", "hero.html");
loadHTML("plan-trips", "plan-trips.html");
loadHTML("manage-expenses", "manage-expenses.html");
loadHTML("contact", "contact.html");
loadHTML("footer", "footer.html");


document.getElementById("darkModeBtn").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});
