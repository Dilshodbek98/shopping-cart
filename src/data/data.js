import book from "../accets/book.jpg";
import laptop from "../accets/laptop.jpg";
import car from "../accets/car.jpg";
import banana from '../accets/banana.jpg'
export const data = [
  { id: 1, title: "book", price: 10.99, img: <img src={book} width={280} /> },
  {
    id: 2,
    title: "laptop",
    price: 1199,
    img: <img src={laptop} width={280} />,
  },
  {
    id: 3,
    title: "banana",
    price: 1.05,
    img: <img src={banana} width={280} />,
  },
  { id: 4, title: "car", price: 14000, img: <img src={car} width={280} /> },
];