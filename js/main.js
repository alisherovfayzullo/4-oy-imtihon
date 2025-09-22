import { cars } from "./data.js";
import { elBtn, elContainer, elIcon, elModal } from "./html-el.js";

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

// function getModal() {
//   elModal.innerHTML = "";

//   cars.forEach((car, index) => {
//     const box_modal = document.createElement("div");
//     box_modal.className = "box w-[500px] h-[300px]";
//     box_modal.innerHTML = `
//       <h3 class="text-xl font-bold mb-2 ">
//         ${car.name}
//       </h3>
//       <p class="text-black-600"><strong>Trim :</strong> ${car.trim}</p>
//       <p class="text-black-600"><strong>Avlod:</strong> ${car.generation}</p>
//       <p class="text-black-600"><strong>Year</strong>: ${car.year}</p>
//       <p class="text-black-600 flex items-center"><strong>Rang:</strong>${car.colorName}
//       <span class="w-5 h-5 rounded-full ml-2 mr-1" style="background: ${car.color}"></span></p>
//       <p class="text-black-600"><strong>Eshiklar:</strong> ${car.doorCount}</p>
//       <p class="text-black-600"><strong>Orindiq:</strong> ${car.seatCount}</p>
//       <p class="text-black-600"><strong>Tezlik:</strong> ${car.maxSpeed}</p>
//       <p class="text-black-600"><strong>Soniyaviy Tezlik :</strong> ${car.acceleration}</p>
//       <p class="text-black-600"><strong>Motor:</strong> ${car.engine}</p>
//       <p class="text-black-600"><strong>Ot kuchi:</strong> ${car.horsepower}</p>
//       <p class="text-black-600"><strong>Yoqilga :</strong> ${car.fuelType}</p>
//       <p class="text-black-600"><strong>Country:</strong> ${car.country}</p>
//       <p class="text-black-600"><strong>Davlati :</strong> ${car.description}</p>
//       <p class="text-black-600"><strong>Idisi :</strong> ${car.id}</p>

//     `;
//     elModal.appendChild(box_modal);
//   });
// }
// getModal();
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
