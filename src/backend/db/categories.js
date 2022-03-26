import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "sneakers",
    description:
      "Shoes primarily designed for sports or other forms of physical exercise, but which are now also widely used for everyday casual wear.",
  },
  {
    _id: uuid(),
    categoryName: "formal-shoes",
    description:
      "Shoe to be worn at smart casual or more formal events.",
  },
  {
    _id: uuid(),
    categoryName: "slippers",
    description:
      "Slippers are light footwear that are easy to put on and off and are intended to be worn indoors, particularly at home.",
  },{
    _id: uuid(),
    categoryName: "cleats",
    description:
      "Cleats are protrusions on the sole of a shoe that provide additional traction on a soft or slippery surface.",
  }
];
