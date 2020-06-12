import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./Reducer";
const persistConfig = {
  key: "authType",
  storage: storage,
  whitelist: [
    "authType",
    "productDetail",
    "cart",
    "totalAmount",
    "loggedIn",
    "showLogin",
    "login",
  ], // which reducer want to store
};
const pReducer = persistReducer(persistConfig, rootReducer);
const middleware = applyMiddleware(thunk, logger);
const store = createStore(pReducer, middleware);
const persistor = persistStore(store);
export { persistor, store };
