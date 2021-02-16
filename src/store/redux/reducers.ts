import { calculationActionsType } from "./actions";
import { mainSum, prevCalcMinus, prevCalcPlus } from "./utils";

export interface IState {
  calcOperation: string;
  prevCalculation: number | undefined;
}

const initialState = {
  calcOperation: "",
  prevCalculation: 0,
};

export const calculationReducer = (
  state = initialState,
  action: calculationActionsType
): IState => {
  switch (action.type) {
    case "calculation/ADD_T0_CALC_OPERATION":
      return {
        ...state,
        calcOperation: state.calcOperation + action.item,
        prevCalculation: prevCalcPlus(action.item, state.calcOperation),
      };
    case "calculation/REMOVE_SYMBOL":
      return {
        ...state,
        calcOperation: state.calcOperation.substring(
          0,
          state.calcOperation.length - 1
        ),
        prevCalculation: prevCalcMinus(
          state.calcOperation.slice(-1),
          state.calcOperation
        ),
      };
    case "calculation/CLEAR_ALL":
      return {
        ...state,
        prevCalculation: 0,
        calcOperation: "",
      };
    case "calculation/SET_MAIN_SUM":
      return {
        ...state,
        calcOperation: mainSum(state.calcOperation),
        prevCalculation: undefined,
      };
  }
  return state;
};
