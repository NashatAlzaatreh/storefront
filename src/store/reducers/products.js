const initialState = [];
// const productList = [
//   {
//     id: 1,
//     name: "Apple",
//     category: "Food",
//     price: "1JD",
//     image: "https://www.collinsdictionary.com/images/full/apple_158989157.jpg",
//     inStock: 120,
//     description: "Red apple from jordan",
//   },
//   {
//     id: 2,
//     name: "Orange",
//     category: "Food",
//     price: "1JD",
//     image:
//       "https://riviste.newbusinessmedia.it/wp-content/uploads/sites/27/2013/12/Fotolia_11313277_M.jpg",
//     inStock: 150,
//     description: "Orange from Yafa",
//   },
//   {
//     id: 3,
//     name: "TV",
//     category: "Electronics",
//     price: "500JD",
//     image:
//       "https://cdn.webshopapp.com/shops/250788/files/339664175/rca-rca-rs32h2-eu-android-smart-led-tv.jpg",
//     inStock: 19,
//     description: "Smart Samsung TV",
//   },
//   {
//     id: 4,
//     name: "Laptop",
//     category: "Electronics",
//     price: "800JD",
//     image: "https://m.media-amazon.com/images/I/71uOkXZyteL._AC_SS450_.jpg",
//     inStock: 15,
//     description: "intel core i7, ssd 1T",
//   },
//   {
//     id: 5,
//     name: "Samsung",
//     category: "Phones",
//     price: "600JD",
//     image:
//       "https://images.samsung.com/is/image/samsung/assets/levant_ar/smartphones/galaxy-note20/buy/shop/001-note20series-productimage-mo-720.jpg",
//     inStock: 12,
//     description: "Samsung Note 10, 260Gb",
//   },
//   {
//     id: 6,
//     name: "Huawei",
//     category: "Phones",
//     price: "250JD",
//     image:
//       "https://mobilesgate.com/wp-content/uploads/2021/07/49E21951DACDC91FB3FD6726B2A39B8E3C2A7BC9C8EE5E69.jpg",
//     inStock: 55,
//     description: "Huawei Nova 7i, 128Gb",
//   },
//   {
//     id: 7,
//     name: "Need For Speed",
//     category: "Games",
//     price: "30JD",
//     image: "https://i.ytimg.com/vi/dWSqqckKjVM/maxresdefault.jpg",
//     inStock: 256,
//     description: "Most wanted need for speed",
//   },
//   {
//     id: 8,
//     name: "Grand Theft Auto",
//     category: "Games",
//     price: "25JD",
//     image:
//       "https://www.thaqfny.com/wp-content/uploads/2021/11/Grand-Theft-Auto-San-Andreas-7.jpg",
//     inStock: 378,
//     description: "New Edition GTA 9",
//   },
// ];

const productReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOAD_CATEGORY":
      return state;

    case "SELECT_CATEGORY":
      return payload.data.filter((prod) => prod.category === payload.category);

    default:
      return state;
  }
};

export default productReducer;
