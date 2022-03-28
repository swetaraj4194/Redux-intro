// src/store/balance/reducer.js
const initialState = {
  amount: 0,
  darkMode: false,
  displayName: "matias",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_BALANCE": {
      console.log("I'm activated!!");

      return {
        ...state, // { amount, darkMode, displayName }
        amount: state.amount + action.payload,
      };
    }

    case "SUBSTRACT_BALANCE": {
      return {
        ...state,
        amount: state.amount - action.payload,
      };
    }

    case "TOGGLE_DARKMODE": {
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    }

    case "SET_BALANCE": {
      return {
        ...state,
        amount: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
