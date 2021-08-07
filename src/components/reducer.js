// Initial state of basket, empty
export const initialState = {
  basket: [],
  user: null
};

// Selector, adds basket total using reduce
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

// Action - add, remove from basket
const reducer = (state, action) => {
  console.log(action);
  console.log(state);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case 'EMPTY_BASKET':
      return {
        ...state,
        basket: []
      }

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      // Copies current basket into newBasket
      let newBasket = [...state.basket];

      // Removes item selected and leaves all other items in basket
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in the basket!`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

      case "SET_USER":
        return {
          ...state,
          user: action.user
        }

    default:
      return state;
  }
};

export default reducer;
