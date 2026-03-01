import { v4 } from "uuid";
import { Homework06wrapper, Carcard, Carinfo } from "./styles"
import { type Car } from "./types";

function Homework_06() {
  const cars: Car[] = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
    { brand: "Audi", price: 50000, isDiesel: true },
  ];

  const carCards = cars.map((car: Car) => {
    return (
      <Carcard key={v4()} >
        <Carinfo>Brand: {car.brand}</Carinfo>
        <Carinfo>Price: {car.price}</Carinfo>
        <Carinfo>
          Is Diesel: {car.isDiesel ? "Diesel" : "Non-diesel"}
        </Carinfo>
      </Carcard>
    );
  });

  return <Homework06wrapper>{carCards}</Homework06wrapper>;
}

export default Homework_06;




