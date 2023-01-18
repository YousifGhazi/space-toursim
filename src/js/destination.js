// destination

const planets = document.querySelectorAll(".planets-list > li");

planets.forEach(function (planet) {
  planet.addEventListener("click", function () {
    planets.forEach((planet) => planet.classList.remove("active"));
    this.classList.add("active");
    getDestination(this.dataset.planet);
  });
});

async function getDestination(planetName) {
  let data = await fetch(`./data.json`).then((res) => res.json());
  let destinations = data.destinations;

  let destination = destinations.find(
    (destination) => destination.name === planetName
  );

  setPlantInfo(destination);
}

function setPlantInfo({
  name,
  images: { webp },
  description,
  distance,
  travel,
}) {
  const planetImg = document.querySelector(".planet-img");
  planetImg.src = webp;

  const planetName = document.querySelector(".planet .planet-name");
  const planetDescription = document.querySelector(".planet-description");
  const planetDistance = document.querySelector(".distance  .value");
  const travelDuration = document.querySelector(".travel-duration .value");

  planetName.innerText = name;
  planetDescription.innerText = description;
  planetDistance.innerText = distance;
  travelDuration.innerText = travel;
}
