const INITIAL_STATE = {
  authType: null,
  cart: [],
  productDetail: null,
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
  return { ...state, cart: [...arr] };
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
  console.log("newitem", newItem);
  return { ...state, cart: [...newItem] };
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
  return { ...state, cart: [...newItem] };
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
    case "INCREMENT": {
      return incrementCart(state, action);
    }
    case "DECREMENT": {
      return decrementCart(state, action);
    }
    case "RESET": {
      return (state = undefined);
    }
    default:
      return state;
  }
}
export default authTypeReducer;
