import React from "react";
import { connect } from "react-redux";
import { loadCategory, handleCategory } from "../../store/categories";

const Categories = (props) => {
  console.log(props);
  return (
    <div>
      <ul>
        {props.categories.categories.map((category) => {
          return (
            <li>
              <button>{category.name}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// We only care about one little bit of state in this component, for display only
const mapStateToProps = (state) => ({
  categories: state.productReducer,
});

const mapDispatchToProps = { loadCategory, handleCategory };

// Not doing any actions, so we'll not have to "mapDispatchToProps" here
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
// export default Categories;
