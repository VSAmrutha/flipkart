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
import bookslist from "./Components/Contants/bookslist.js";
import kidsWear from "./Components/Contants/kidsWear.js";
import mensTshirt from "./Components/Contants/mensTshirt.js";
import womenDress from "./Components/Contants/womenDress.js";
import womenSaare from "./Components/Contants/womenSaare.js";

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
          <Route
            path="/books"
            exact
            render={() => <Bookspage title="Books" bookslist={bookslist} />}
          />
          <Route
            path="/women/saare"
            exact
            render={() => <Bookspage title="Saares" bookslist={womenSaare} />}
          />
          <Route
            path="/women/dress"
            exact
            render={() => <Bookspage title="Dresses" bookslist={womenDress} />}
          />
          <Route
            path="/mens/t-shirt"
            exact
            render={() => <Bookspage title="T-Shirts" bookslist={mensTshirt} />}
          />
          <Route
            path="/kids/girls"
            exact
            render={() => <Bookspage title="Kids Wear" bookslist={kidsWear} />}
          />
          <Route path="/product" exact render={() => <ProductPage />} />
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
