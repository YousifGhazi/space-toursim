// crew

const crewList = document.querySelectorAll(".crew-list > li");

crewList.forEach((person) => {
  person.addEventListener("click", function () {
    crewList.forEach((person) => person.classList.remove("active"));
    this.classList.add("active");
    getThePerson(this.dataset.name);
  });
});

async function getThePerson(name) {
  const data = await fetch("./data.json").then((res) => res.json());
  const crew = data.crew;

  const person = crew.find((person) => person.name === name);

  setPersonInfo(person);
}

function setPersonInfo({ bio, images: { webp }, name, role }) {
  const img = document.querySelector(".person-img");
  img.src = webp;

  const personRole = document.querySelector(".person-role");
  const personName = document.querySelector(".person-name");
  const personBio = document.querySelector(".person-bio");

  personRole.innerText = role;
  personName.innerText = name;
  personBio.innerText = bio;
}
