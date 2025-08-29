import bbq from "../assets/photo-1544025162-d76694265947.jpeg";
import karahi from "../assets/photo-1631515242808-497c3fbd3972.jpeg";
import chinese from "../assets/photo-1563245372-f21724e3856d (1).jpeg";
import pizza from "../assets/photo-1565299624946-b28f40a0ae38.jpeg";
import biryani from "../assets/photo-1589302168068-964664d93dc0 (1).jpeg";
import burger from "../assets/photo-1568901346375-23c9450c58cd.jpeg";
import desert from "../assets/photo-1551024601-bec78aea704b.jpeg";
import italian from "../assets/photo-1595295333158-4742f28fbd85.jpeg";
import mexican from "../assets/photo-1613514785940-daed07799d9b.jpeg";
import pakistani from "../assets/photo-1631515243349-e0cb75fb8d3a.jpeg"; 
import japani from "../assets/photo-1617196034183-421b4917c92d.jpeg"; 
import thai from "../assets/photo-1562565652-a0d8f0c59eb4.jpeg"; 
import american from "../assets/photo-1551782450-17144efb9c50.jpeg";
import mediterranean from "../assets/photo-1631515242808-497c3fbd3972.jpeg";

export const stories = [
  { title: "Biryani Festival", img: biryani, color: "warning" },
  { title: "BBQ Delights", img: bbq, color: "danger" },
  { title: "Karahi Special", img: karahi, color: "warning" },
  { title: "Biryani Festival", img: biryani, color: "warning" },
  { title: "BBQ Delights", img: bbq, color: "danger" },
  { title: "Fast Food Favorites", img: burger, color: "danger" },
  { title: "Chinese Cuisine", img: chinese, color: "info" },
  { title: "Pizza Specials", img: pizza, color: "success" },
  { title: "Desert Delight", img: desert, color: "primary" },
];

export const categories = [
    { name: "Italian", image: italian },
    { name: "Chinese", image: chinese },
    { name: "Mexican", image: mexican},
    { name: "Pakistani", image: pakistani },
    { name: "Japanese", image: japani },
    { name: "Thai", image: thai },
    { name: "American", image: american },
    { name: "Mediterranean", image: mediterranean }
  ];

export const restaurant = [
  // Pakistani
  {
    id: 1,
    name: "Kolachi Restaurant",
    address: "Karachi",
    image:
      "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    isOpen: true,
    rating: 4.8,
    reviews: 120,
    category: "Pakistani",
    price: 12.99,
    offers: { type: "discount", value: 20, label: "20% Off" },
  },
  {
    id: 2,
    name: "Haveli Restaurant",
    address: "Lahore",
    image:
      "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    isOpen: false,
    rating: 4.7,
    reviews: 98,
    category: "Pakistani",
    price: 14.5,
  },
  {
    id: 3,
    name: "Monal Restaurant",
    address: "Islamabad",
    image:
      "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    isOpen: true,
    rating: 4.9,
    reviews: 150,
    category: "Pakistani",
    price: 16.75,
    offers: { type: "combo", value: "Buy 1 Get 1", label: "Buy 1 Get 1 Free" },
  },

  // BBQ
  {
    id: 5,
    name: "Bundu Khan",
    address: "Lahore",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80",
    isOpen: true,
    rating: 4.5,
    reviews: 78,
    category: "BBQ",
    price: 15.0,
    offers: { type: "free", value: "Dessert", label: "Free Dessert" },
  },
  {
    id: 7,
    name: "Karachi BBQ",
    address: "Karachi",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80",
    isOpen: true,
    rating: 4.4,
    reviews: 65,
    category: "BBQ",
    price: 14.75,
    offers: { type: "free", value: "Drink", label: "Free Drink" },
  },

  // Biryani
  {
    id: 9,
    name: "Biryani Centre",
    address: "Lahore",
    image:
      "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    isOpen: true,
    rating: 4.5,
    reviews: 75,
    category: "Biryani",
    price: 12.0,
    offers: { type: "free", value: "Raita", label: "Free Raita" },
  },
  {
    id: 10,
    name: "Karachi Biryani House",
    address: "Islamabad",
    image:
      "https://images.unsplash.com/photo-1642821373181-696a54913e93?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80",
    isOpen: true,
    rating: 4.7,
    reviews: 95,
    category: "Biryani",
    price: 11.75,
    offers: { type: "discount", value: 20, label: "20% Off" },
  },

  // Fast Food
  {
    id: 13,
    name: "Burger O'Clock",
    address: "Islamabad",
    image:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=1472&q=80",
    isOpen: false,
    rating: 4.4,
    reviews: 70,
    category: "Fast Food",
    price: 7.75,
    offers: { type: "combo", value: "Buy 1 Get 1", label: "Buy 1 Get 1 Free" },
  },

  // Pizza
  {
    id: 20,
    name: "Broadway Pizza",
    address: "Lahore",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1481&q=80",
    isOpen: true,
    rating: 4.5,
    reviews: 80,
    category: "Pizza",
    price: 13.5,
    offers: { type: "discount", value: 20, label: "20% Off" },
  },
  {
    id: 22,
    name: "Pizza Point",
    address: "Islamabad",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1481&q=80",
    isOpen: true,
    rating: 4.4,
    reviews: 75,
    category: "Pizza",
    price: 12.75,
    offers: { type: "combo", value: "Buy 1 Get 1", label: "Buy 1 Get 1 Free" },
  },
];



