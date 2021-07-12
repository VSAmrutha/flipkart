import React from "react";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import { Route, Switch } from "react-router-dom";
import Homepage from "./Pages/Hompage/Homepage";
import Login from "./Components/Login/Login";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";
import ProductDetailPage from "./Pages/ProductDetailPage/ProductDetailPage";
import CartPage from "./Pages/CartPage/CartPage";
import { connect } from "react-redux";
import bookslist from "./Contants/bookslist.js";
import kidsWear from "./Contants/kidsWear.js";
import mensTshirt from "./Contants/mensTshirt.js";
import womenDress from "./Contants/womenDress.js";
import womenSaare from "./Contants/womenSaare.js";

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
            render={() => <ProductsPage title="Books" bookslist={bookslist} />}
          />
          <Route
            path="/women/saare"
            exact
            render={() => <ProductsPage title="Saares" bookslist={womenSaare} />}
          />
          <Route
            path="/women/dress"
            exact
            render={() => <ProductsPage title="Dresses" bookslist={womenDress} />}
          />
          <Route
            path="/mens/t-shirt"
            exact
            render={() => <ProductsPage title="T-Shirts" bookslist={mensTshirt} />}
          />
          <Route
            path="/kids/girls"
            exact
            render={() => <ProductsPage title="Kids Wear" bookslist={kidsWear} />}
          />
          <Route path="/product" exact render={() => <ProductDetailPage />} />
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
