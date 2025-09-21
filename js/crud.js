function editCar(index) {
  const newName = prompt("Mashina nomini o‘zgartiring:", cars[index].name);
  if (newName) {
    cars[index].name = newName;
    renderCars();
  }
}
