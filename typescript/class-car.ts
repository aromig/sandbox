interface ICar {
  make: String;
  model: String;
  display(): void;
}

const Car: ICar = {
  make: "Nissan",
  model: "Sentra",
  display() {
    console.log("Whatwhat");
  }
};

Car.display();
