const initialState = {
  activeCategory: "",
  categoryList: [],
};
const categoryList = [
  { id: 1, name: "Food", description: "A list of a delicious food" },
  {
    id: 2,
    name: "Electronics",
    description: "A list of the best electronics in the world",
  },
  // { id: 3, name: "Console", description: "A list of a ..." },
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

const categoriesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOAD_CATEGORY":
      return { ...state, categoryList: categoryList };

    case "SELECT_CATEGORY":
      return { ...state, activeCategory: payload };

    default:
      return state;
  }
};

export default categoriesReducer;
