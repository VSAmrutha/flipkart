import React from "react";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./Components/Hompage/Homepage";
import Bookspage from "./Components/BooksPage/BooksPage";
import ProductPage from "./Components/ProductPage/ProductPage";
import CartPage from "./Components/CartPage/CartPage";
import { Provider } from "react-redux";
import { store, persistor } from "./Store/Store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  console.log(store);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <div
            style={{
              width: "100 %",
              overflowX: "hidden",
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
          </div>
        </PersistGate>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
