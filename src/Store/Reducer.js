const INITIAL_STATE = {
  authType: null,
  cart: [],
  productDetail: null,
  totalAmount: 0,
  login: {},
  loggedIn: false,
  showLogin: false,
};
const applySetUserType = (state, action) => ({
  ...state,
  authType: action.payload,
});
const buyNow = (state, action) => ({
  ...state,
  cart: action.data,
});
const setProduct = (state, action) => ({
  ...state,
  productDetail: { ...action.data },
});
const addTotalAmount = (arr) => {
  let total = 0;
  arr.forEach((p) => {
    total = total + p.quantityPrice;
  });

  return total;
};
const addToCart = (state, action) => {
  let arr = [];
  let toadd = { ...action.data };
  let existingProduct = state.cart.filter((item) => item.id === action.data.id);
  if (existingProduct.length > 0) {
    let nonexistingProduct = state.cart.filter(
      (item) => item.id !== action.data.id
    );
    existingProduct[0].quantity++;
    existingProduct[0].quantityPrice =
      existingProduct[0].quantity * existingProduct[0].price;
    arr = [...nonexistingProduct, existingProduct[0]];
  } else {
    toadd.quantity = 1;
    toadd.quantityPrice = toadd.price;
    arr = [...state.cart, toadd];
  }
  let total = addTotalAmount(arr);
  return { ...state, cart: [...arr], totalAmount: total };
};
const removeFromCart = (state, action) => {
  let removeProduct = state.cart.filter((item) => item.id !== action.data.id);
  let total = addTotalAmount(removeProduct);
  return { ...state, cart: [...removeProduct], totalAmount: total };
};
const incrementCart = (state, action) => {
  let newItem = [...state.cart];
  newItem.forEach((p) => {
    if (p.id === action.data.id) {
      p.quantity++;
      p.quantityPrice = p.price * p.quantity;
      return p.quantity, p.quantityPrice;
    }
  });
  let total = addTotalAmount(newItem);
  return { ...state, cart: [...newItem], totalAmount: total };
};
const decrementCart = (state, action) => {
  let newItem = [...state.cart];
  newItem.forEach((p) => {
    if (p.id === action.data.id && p.quantity > 1) {
      p.quantity--;
      p.quantityPrice = p.price * p.quantity;
      return p.quantity, p.quantityPrice;
    }
  });
  let total = addTotalAmount(newItem);
  return { ...state, cart: [...newItem], totalAmount: total };
};
const loginDetails = (state, action) => {
  return { ...state, login: { ...action.data }, loggedIn: true };
};
const closeHandler = (state) => {
  let loginTobe = state.showLogin;
  loginTobe = !loginTobe;
  return { ...state, showLogin: loginTobe };
};
function authTypeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "AUTH_TYPE": {
      return applySetUserType(state, action);
    }
    case "BUY_NOW": {
      return buyNow(state, action);
    }
    case "SET_PRODUCT": {
      return setProduct(state, action);
    }
    case "ADD_TO_CART": {
      return addToCart(state, action);
    }
    case "REMOVE_FROM_CART": {
      return removeFromCart(state, action);
    }
    case "INCREMENT": {
      return incrementCart(state, action);
    }
    case "DECREMENT": {
      return decrementCart(state, action);
    }
    case "ADD_TOTAL_AMOUNT": {
      return addTotalAmount(state);
    }
    case "LOGIN_DETAILS": {
      return loginDetails(state, action);
    }
    case "SHOW_LOGIN": {
      return closeHandler(state);
    }
    case "RESET": {
      return (state = undefined);
    }
    default:
      return state;
  }
}
export default authTypeReducer;
