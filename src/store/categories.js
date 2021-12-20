const categoryList = [
  { id: 1, name: "Food", description: "A list of a delicious food" },
  {
    id: 2,
    name: "Electronics",
    description: "A list of the best electronics in the world",
  },
  { id: 3, name: "Console", description: "A list of a ..." },
  {
    id: 4,
    name: "Phones",
    description: "A list of the best phones in the world",
  },
  {
    id: 5,
    name: "Games",
    description: "A list of the best games in the world",
  },
];

const productsList = [
  {
    id: 1,
    name: "Apple",
    category: "Food",
    price: "1JD",
    image: "https://www.collinsdictionary.com/images/full/apple_158989157.jpg",
  },
  {
    id: 2,
    name: "Orange",
    category: "Food",
    price: "1JD",
    image:
      "https://riviste.newbusinessmedia.it/wp-content/uploads/sites/27/2013/12/Fotolia_11313277_M.jpg",
  },
  {
    id: 3,
    name: "TV",
    category: "Electronics",
    price: "1JD",
    image:
      "https://cdn.webshopapp.com/shops/250788/files/339664175/rca-rca-rs32h2-eu-android-smart-led-tv.jpg",
  },
  {
    id: 4,
    name: "Laptop",
    category: "Electronics",
    price: "1JD",
    image: "https://m.media-amazon.com/images/I/71uOkXZyteL._AC_SS450_.jpg",
  },
  {
    id: 5,
    name: "Samsung",
    category: "Phones",
    price: "1JD",
    image:
      "https://images.samsung.com/is/image/samsung/assets/levant_ar/smartphones/galaxy-note20/buy/shop/001-note20series-productimage-mo-720.jpg",
  },
  {
    id: 6,
    name: "Huawei",
    category: "Phones",
    price: "1JD",
    image:
      "https://mobilesgate.com/wp-content/uploads/2021/07/49E21951DACDC91FB3FD6726B2A39B8E3C2A7BC9C8EE5E69.jpg",
  },
  {
    id: 7,
    name: "Need For Speed",
    category: "Games",
    price: "1JD",
    image: "https://i.ytimg.com/vi/dWSqqckKjVM/maxresdefault.jpg",
  },
  {
    id: 8,
    name: "Grand Theft Auto",
    category: "Games",
    price: "1JD",
    image:
      "https://www.thaqfny.com/wp-content/uploads/2021/11/Grand-Theft-Auto-San-Andreas-7.jpg",
  },
];

let initialState = {
  categories: categoryList,
  products: productsList,
};
// basically this is our reducer
const productReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOAD_CATEGORY":
      return {
        categories: state.categories,
        products: state.products,
      };

    case "SELECT_CATEGORY":
      return {
        categories: { ...state.categories, activeCategory: payload },
        products: productsList.filter((prod) => prod.category === payload),
      };

    default:
      return state;
  }
};

// this is the actions we can interact with our reducer function
export const loadCategory = () => {
  return {
    type: "LOAD_CATEGORY",
  };
};

export const handleCategory = (category) => {
  return {
    type: "SELECT_CATEGORY",
    payload: category,
  };
};

export default productReducer;
