import Gnome from "./gnome";

export default class Game {
  constructor() {
    this.field = document.getElementById("field");
    this.fieldSize = 4;
    this.fieldArr = [];
    this.startBtn = document.querySelector(".startBtn");
    this.gnome = new Gnome();
  }

  drawField() {
    for (let i = 0; i < Math.pow(this.fieldSize, 2); i += 1) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.addEventListener("click", this.onCellClick.bind(this));
      this.field.append(cell);
      this.fieldArr.push(cell);
    }
    this.startBtn.addEventListener("click", this.start.bind(this));
  }

  start() {
    this.gnome.add(this.fieldArr);
  }

  onCellClick(event) {
    event.preventDefault();
    if (!this.fieldArr.some((item) => item.querySelector("img"))) {
      return;
    }
  }
}
