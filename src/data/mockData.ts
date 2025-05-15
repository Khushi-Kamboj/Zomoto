
export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  image: string;
  featured?: boolean;
}

export const foodItems: FoodItem[] = [
  {
    id: "f1",
    name: "Chicken Biryani",
    description: "Fragrant rice dish with tender chicken pieces and aromatic spices",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Main Course"
  },
  {
    id: "f2",
    name: "Margherita Pizza",
    description: "Classic pizza with tomato sauce, mozzarella, and fresh basil",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Pizza"
  },
  {
    id: "f3",
    name: "Chocolate Brownie",
    description: "Rich and fudgy chocolate brownie with a scoop of vanilla ice cream",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Dessert"
  },
  {
    id: "f4",
    name: "Veggie Burger",
    description: "Plant-based patty with lettuce, tomato, and special sauce",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1550317138-10000687a72b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Burgers"
  },
  {
    id: "f5",
    name: "Caesar Salad",
    description: "Fresh romaine lettuce with Caesar dressing, croutons, and parmesan",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Salads"
  },
  {
    id: "f6",
    name: "Chicken Noodle Soup",
    description: "Hearty soup with chicken, vegetables, and noodles",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Soups"
  },
  {
    id: "f7",
    name: "French Fries",
    description: "Crispy golden fries with a sprinkle of salt",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Sides"
  },
  {
    id: "f8",
    name: "Iced Coffee",
    description: "Refreshing cold coffee with a hint of vanilla",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Beverages"
  }
];

export const restaurants: Restaurant[] = [
  {
    id: "r1",
    name: "Spice Garden",
    cuisine: "Indian",
    rating: 4.6,
    deliveryTime: "25-35 min",
    image: "https://ibb.co/gMzKDCv9",
    featured: true
  },
  {
    id: "r2",
    name: "Pizza Paradise",
    cuisine: "Italian",
    rating: 4.5,
    deliveryTime: "15-25 min",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    featured: true
  },
  {
    id: "r3",
    name: "Burger Barn",
    cuisine: "American",
    rating: 4.3,
    deliveryTime: "20-30 min",
    image: "https://images.unsplash.com/photo-1550259655-5d37a97a6407?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "r4",
    name: "Sushi Spot",
    cuisine: "Japanese",
    rating: 4.7,
    deliveryTime: "25-40 min",
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    featured: true
  }
];

export const categories = [
  "All", 
  "Main Course", 
  "Pizza", 
  "Burgers", 
  "Salads", 
  "Soups", 
  "Sides", 
  "Dessert", 
  "Beverages"
];
