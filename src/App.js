// import './App.css';
// import Header from "./components/header/Header";
// import Footer from "./components/footer/Footer";
import Categories from "./components/storefront/categories";
// import Products from "./components/storefront/products";
// import { If } from "react-if";
// import { connect } from "react-redux";

function App(props) {
  return (
    <>
      {/* <Header /> */}
      <Categories />
      {/* <If condition={props.products.length > 0}>
        <Products />
      </If> */}
      {/* <Footer /> */}
    </>
  );
}

// const stateToProps = (state) => {
//   return state;
// };
// export default connect(stateToProps)(App);

export default App;
