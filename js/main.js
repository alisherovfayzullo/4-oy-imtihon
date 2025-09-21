import { cars as importedCars } from "./data.js";
import { elBtn, elContainer, elIcon } from "./html-el.js";

let cars = [...importedCars]; // delete ishlamayatodi gptdan olidm bu nima qlishni organdim

elBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    elIcon.src = "./img/light.png";
    localStorage.setItem("theme", "dark");
  } else {
    elIcon.src = "./img/dark.png";
    localStorage.setItem("theme", "light");
  }
});

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  elIcon.src = "./img/light.png";
} else {
  document.body.classList.remove("dark");
  elIcon.src = "./img/dark.png";
}

function renderCars() {
  elContainer.innerHTML = "";

  cars.forEach((car) => {
    const box = document.createElement("div");
    box.className =
      "box p-5 shadow-[1px_15px_7px_1px_rgba(0,0,0,0.40)] bg-red rounded-lg border";
    box.innerHTML = `
      <h3 class="text-xl font-bold mb-2">${car.name}</h3>
      <p class="text-black-600"><strong>Country:</strong> ${car.country}</p>
      <p class="text-black-600"><strong>Turkum:</strong> ${car.category}</p>
      <p class="text-black-600"><strong>Avlod:</strong> ${car.generation}</p>
      <p class="text-black-600 flex items-center"><strong>Rang:</strong> ${car.colorName}  
        <span class="w-5 h-5 rounded-full ml-2 mr-1" style="background: ${car.color}"></span>
      </p>
      <p class="text-black-600"><strong>Year</strong>: ${car.year}</p>
      <div class="mt-4 flex space-x-2">
        <button class="edit-btn px-3 py-1 bg-white text-white rounded hover:bg-blue-100"><img src="./img/edit.png" width="30px"/></button>
        <button class="delete-btn px-3 py-1 bg-white text-black rounded hover:bg-red-100"><img src="./img/delete.png" width="30px"/></button>
        <button class="info-btn px-3 py-1 bg-white text-white rounded hover:bg-green-100"><img src="./img/info.png" width="30px"/></button>
      </div>
    `;

    box.querySelector(".delete-btn").addEventListener("click", () => {
      const answer = prompt("Haqiqatan ham ochirishni xohlaysizmi ? (yoq/xa)");
      if (answer === "ha") {
        cars = cars.filter((c) => c.id !== car.id);
        renderCars();
      }
    });

    elContainer.appendChild(box);
  });
}

renderCars();
