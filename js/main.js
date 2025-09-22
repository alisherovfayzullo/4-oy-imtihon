import { cars } from "./data.js";
import { elBtn, elContainer, elIcon } from "./html-el.js";

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

function getUiCars() {
  elContainer.innerHTML = "";

  cars.forEach((car, index) => {
    const box = document.createElement("div");
    box.className =
      "box p-5  shadow-[1px_15px_7px_1px_rgba(0,0,0,0.40)] bg-red rounded-lg border";
    box.innerHTML = `
      <h3 class="text-xl font-bold mb-2 ">
        ${car.name} 
      </h3>
      <p class="text-black-600"><strong>Country:</strong> ${car.country}</p>
      <p class="text-black-600"><strong>Turkum:</strong> ${car.category}</p>
      <p class="text-black-600"><strong>Avlod:</strong> ${car.generation}</p>
      
      <p class="text-black-600 flex items-center"><strong>Rang:</strong>${car.colorName}  
      <span class="w-5 h-5 rounded-full ml-2 mr-1" style="background: ${car.color}"></span></p>
      <p class="text-black-600"><strong>Year</strong>: ${car.year}</p>
      <div class="mt-4 flex space-x-2">
        <button class="edit-btn px-3 py-1 bg-white text-white rounded hover:bg-blue-100"><img src="./img/edit.png" width="30px"/ ></button>
        <button class="delete-btn px-3 py-1 bg-white 
         text-black rounded hover:bg-red-100"><img src="./img/delete.png"/ width="30px"></button>
        <button class="info-btn px-3 py-1 bg-white text-white rounded hover:bg-green-100"><img src="./img/info.png" width="30px"/></button>
      </div>
    `;
    elContainer.appendChild(box);
  });
}
getUiCars();

function getModal() {}
const deleteBtns = document.querySelectorAll(".delete-btn");

deleteBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const box = this.closest(".box");
    if (confirm("Rostdan ham bu modelni o'chirmoqchimisiz?")) {
      if (box) {
        box.remove();
      }
    }
  });
});
// ustoz bu kodeni chatdan soradim lekin nma qlishni chundim va ozim bemalol ozim qila olaman .
// this bu u js dagi kalit soz ekan keyword if else ga oxshab a closest esam metod u ota oxtaradi agar siz yozgan otaga teng bosa toxtaydi bolmasa tepga koterilaverar ekan agar otasni topalmasa null qaytarar ekan.
