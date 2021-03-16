import * as actionTypes from "./shopTypes";
import { shop } from "../commercejs/shop";

export const addToCart = (itemID, qty = 1) => ({
  type: actionTypes.ADD_TO_CART,
  payload: {
    id: itemID,
    qty,
  },
});

export const removeFromCart = (itemID) => ({
  type: actionTypes.REMOVE_FROM_CART,
  payload: {
    id: itemID,
  },
});

export const changeQty = (itemID, value) => ({
  type: actionTypes.CHANGE_QTY,
  payload: {
    id: itemID,
    qty: value,
  },
});

export const loadCurrentItem = (item) => ({
  type: actionTypes.LOAD_CURRENT_ITEM,
  payload: item,
});

export const fetchProducts = () => async (dispatch, getState) => {
  dispatch({
    type: actionTypes.FETCH_PRODUCTS_REQUEST,
  });
  try {
    // @ts-ignore
    const response = await shop.products.list();
    dispatch({
      type: actionTypes.FETCH_PRODUCTS_SUCCES,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.FETCH_PRODUCTS_FAILURE,
      error: err,
    });
  }
};
