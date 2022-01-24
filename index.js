const BUY_CAKE = "BUY_CAKE";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

// (previousState, action) => newState;

const initialState = {
  numOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.Type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfStates - 1,
      };

    default:
      return state;
  }
};
