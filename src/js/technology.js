// technology

const technologiesList = document.querySelectorAll(".technology-list > li");

technologiesList.forEach((technology) => {
  technology.addEventListener("click", function () {
    technologiesList.forEach((technology) =>
      technology.classList.remove("active")
    );
    this.classList.add("active");
    getTechnology(this.dataset.technology);
  });
});

async function getTechnology(name) {
  const data = await fetch(`./data.json`).then((res) => res.json());
  const technologies = data.technology;

  const technology = technologies.find(
    (technology) => technology.name === name
  );

  setTechnologyInfo(technology);
}

function setTechnologyInfo({
  images: { portrait, landscape },
  name,
  description,
}) {
  const portraitImg = document.querySelector(".portrait-img");
  const landscapeImg = document.querySelector(".landscape-img");

  portraitImg.srcset = portrait;
  landscapeImg.src = landscape;

  const technologyName = document.querySelector(".technology-name ");
  const technologyDescription = document.querySelector(
    ".technology-description"
  );

  technologyName.innerText = name;
  technologyDescription.innerText = description;
}
