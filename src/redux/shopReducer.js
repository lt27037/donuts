// @ts-nocheck
import * as actionTypes from './shopTypes';


const INITIAL_STATE = {
   products: [],
   cart: [],
   currentItem: null,
   error: null,
   loading: false,
}

const shopReducer = (state = INITIAL_STATE, action) => {
   switch(action.type){
      case actionTypes.ADD_TO_CART:
         let item = state.products.find(product => product.id === action.payload.id);
         let isInCart = state.cart.find(product => product.id === action.payload.id ? true : false);
         return {
            ...state,
            cart: isInCart 
               ? state.cart.map(item => item.id === action.payload.id 
                  ? {...item, qty: item.qty + 1} 
                  : item)
               : [...state.cart, {...item, qty: 1}]
         }
      case actionTypes.REMOVE_FROM_CART:
         return {
            ...state,
            cart: state.cart.filter(item => item.id !== action.payload.id)
         }
      case actionTypes.CHANGE_QTY:
         return {
            ...state,
            cart: state.cart.map(item => item.id === action.payload.id 
               ? {...item, qty: item.qty + 1} 
               : item
            )
         }
      case actionTypes.LOAD_CURRENT_ITEM:
         return {
            ...state,
            currentItem: action.payload,
         }
      case actionTypes.FETCH_PRODUCTS_REQUEST:
         return {
            ...state,
            loading: true,
            error: null,
         }
      case actionTypes.FETCH_PRODUCTS_SUCCES:
         return {
            ...state,
            products: action.payload,
            loading: false,
         }
      case actionTypes.FETCH_PRODUCTS_FAILURE:
         return {
            ...state,
            products: [],
            error: action.error,
            loading: false,
         }
      default:
         return state;
   };
};

export default shopReducer;