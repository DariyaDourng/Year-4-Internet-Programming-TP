import { defineStore } from "pinia";
import { ArrowLongRightIcon } from "@heroicons/vue/20/solid";
import img1 from "@/assets/cake_and_milk.png";
import img2 from "@/assets/peaches.png";
import img3 from "@/assets/kiwi.png";
import img4 from "@/assets/apple.png";
import img5 from "@/assets/snack.png";
import img6 from "@/assets/black_plum.png";
import img7 from "@/assets/vegetable.png";
import img8 from "@/assets/headphone.png";
import img9 from "@/assets/snack(2).png";
import img10 from "@/assets/orange.png";
import img11 from "@/assets/onion.png";
import img12 from "@/assets/milk.png";
import img13 from "@/assets/vegetables.png";
import prod1 from "@/assets/mangos.png";
import prod2 from "@/assets/corn.png";
import prod3 from "@/assets/oranges.png";
import prod4 from "@/assets/chilli.png";
import prod5 from "@/assets/lemon.png";
import prod6 from "@/assets/meat.png";
import prod7 from "@/assets/fish.png";
import prod8 from "@/assets/steak1.png";
import prod9 from "@/assets/slide.png";
import prod10 from "@/assets/16 1.png";

export const useEStore = defineStore("products", {
  state: () => ({
    promotions: [
      {
        name: "Everyday Fresh & Clean with Our Products",
        imageUrl: img11,
        description: "3 items",
        bg: "bg-[#F0E8D5]",
        button: "Shop Now",
        bgButton: "bg-[#3BB77E]",
        icon: ArrowLongRightIcon, // Include the icon component
      },
      {
        name: "Make your Breakfast Healthy and Easy",
        imageUrl: img12,
        description: "4 items",
        bg: "bg-[#F3E8E8]",
        button: "Shop Now",
        bgButton: "bg-[#3BB77E]",
        icon: ArrowLongRightIcon, // Include the icon component
      },
      {
        name: "The best Organic Products Online",
        imageUrl: img13,
        description: "4 items",
        bg: "bg-[#E7EAF3]",
        button: "Shop Now",
        bgButton: "bg-[#FDC040]",
        icon: ArrowLongRightIcon, // Include the icon component
      },
    ],
    categories: [
      {
        name: "Cake & Milk",
        imageUrl: img1,
        description: "3 items",
        bg: "bg-[#F2FCE4]",
      },
      {
        name: "Peach",
        imageUrl: img2,
        description: "4 items",
        bg: "bg-[#FFFCEB]",
      },
      {
        name: "Oganic Kiwi",
        imageUrl: img3,
        description: "4 items",
        bg: "bg-[#ECFFEC]",
      },
      {
        name: "Red Apple",
        imageUrl: img4,
        description: "4 items",
        bg: "bg-[#FEEFEA]",
      },
      {
        name: "Snack",
        imageUrl: img5,
        description: "4 items",
        bg: "bg-[#FFF3EB]",
      },
      {
        name: "Black Plum",
        imageUrl: img6,
        description: "4 items",
        bg: "bg-[#FFF3FF]",
      },
      {
        name: "Vegetables",
        imageUrl: img7,
        description: "4 items",
        bg: "bg-[#F2FCE4]",
      },
      {
        name: "Headphone",
        imageUrl: img8,
        description: "4 items",
        bg: "bg-[#FFFCEB]",
      },
      {
        name: "Cake & Milk",
        imageUrl: img9,
        description: "4 items",
        bg: "bg-[#F2FCE4]",
      },
      {
        name: "Orange",
        imageUrl: img10,
        description: "4 items",
        bg: "bg-[#FFF3FF]",
      },
    ],
    products: [
      {
        id: 1,
        tag: "-17%",
        image: prod1,
        category: 3,
        name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
        rate: 4,
        description: "500 gram",
        sellPrice: "2.51",
        discountPercentage: 17,
        discountPrice: 2.8,
        quantity: 0,
      },
      {
        id: 2,
        tag: "Hot",
        image: prod2,
        category: 3,
        name: "All Natural Italian-Style Chicken Meatballs",
        rate: 4,
        description: "500 gram",
        sellPrice: "2.51",
        discountPercentage: 17,
        discountPrice: 2.8,
        quantity: 0,
      },
      {
        id: 3,
        tag: "Sale",
        image: prod3,
        category: 3,
        name: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
        rate: 4,
        description: "500 gram",
        sellPrice: "2.51",
        discountPercentage: 17,
        discountPrice: 2.8,
        quantity: 0,
      },
      {
        id: 4,
        tag: null,
        image: prod4,
        category: 4,
        name: "Foster Farms Takeout Crispy Classic Buffalo Wings",
        rate: 4,
        description: "500 gram",
        sellPrice: "2.51",
        discountPercentage: 17,
        discountPrice: 2.8,
        quantity: 0,
      },
      {
        id: 5,
        tag: null,
        image: prod5,
        category: 3,
        name: "Blue Diamond Almonds Lightly Salted Vegetables",
        rate: 4,
        description: "500 gram",
        sellPrice: "2.51",
        discountPercentage: 17,
        discountPrice: 2.8,
        quantity: 0,
      },
      {
        id: 6,
        tag: null,
        image: prod6,
        category: 3,
        name: "Chobani Complete Vanilla Greek Yogurt",
        rate: 4,
        description: "500 gram",
        sellPrice: "2.51",
        discountPercentage: 17,
        discountPrice: 2.8,
        quantity: 0,
      },
      {
        id: 7,
        tag: "Sale",
        image: prod7,
        category: 3,
        name: "Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g",
        rate: 4,
        description: "500 gram",
        sellPrice: "2.51",
        discountPercentage: 17,
        discountPrice: 2.8,
        quantity: 0,
      },
      {
        id: 8,
        tag: null,
        image: prod8,
        category: 3,
        name: "Encore Seafoods Stuffed Alaskan Salmon",
        rate: 4,
        description: "500 gram",
        sellPrice: "2.51",
        discountPercentage: 17,
        discountPrice: 2.8,
        quantity: 0,
      },
      {
        id: 9,
        tag: null,
        image: prod9,
        category: 3,
        name: "Gorton’s Beer Battered Fish Fillets with soft paper",
        rate: 4,
        description: "500 gram",
        sellPrice: "2.51",
        discountPercentage: 17,
        discountPrice: 2.8,
        quantity: 0,
      },
      {
        id: 10,
        tag: "Hot",
        image: prod10,
        category: 3,
        name: "Haagen-Dazs Caramel Cone Ice Cream Ketchup",
        rate: 4,
        description: "500 gram",
        sellPrice: "2.51",
        discountPercentage: 17,
        discountPrice: 2.8,
        quantity: 0,
      },
    ],
    menus: [
      "Milks & Diaries",
      "Coffees & Teas",
      "Pet Foods",
      "Meats",
      "Vegetables",
      "Fruits",
    ],
  }),
});
