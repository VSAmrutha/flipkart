import React from "react";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import { Route, Switch } from "react-router-dom";
import Homepage from "./Components/Hompage/Homepage";
import Login from "./Components/Login/Login";
import Bookspage from "./Components/BooksPage/BooksPage";
import ProductPage from "./Components/ProductPage/ProductPage";
import CartPage from "./Components/CartPage/CartPage";
import { connect } from "react-redux";

function App({ showLogin }) {
  return (
    <div
      style={{
        width: "100 %",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      <Layout>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/books" exact component={Bookspage} />
          <Route path="/product" exact component={ProductPage} />
          <Route path="/cart" exact component={CartPage} />
        </Switch>
      </Layout>
      {showLogin && <Login />}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    showLogin: state.showLogin,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loginDetails: (data) => dispatch({ type: "LOGIN_DETAILS", data }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
