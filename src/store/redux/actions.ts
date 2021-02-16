import { InferActionsTypes } from "./store";

export type calculationActionsType = InferActionsTypes<
  typeof calculationActions
>;

export const calculationActions = {
  addToCalcOperation: (item: string) =>
    ({ type: "calculation/ADD_T0_CALC_OPERATION", item } as const),
  removeSymbol: () => ({ type: "calculation/REMOVE_SYMBOL" } as const),
  clearAll: () => ({ type: "calculation/CLEAR_ALL" } as const),
  setMainSum: () => ({ type: "calculation/SET_MAIN_SUM" } as const),

};
