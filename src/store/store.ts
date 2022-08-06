import { createStore } from "redux";
import { AppReducer } from "./reducer";
import { IState } from "../interfaces/store";

const initialState: IState = {
  pokemons: [],
  team: [],
};

function configureStore(state: IState = initialState) {
  return createStore(AppReducer, state);
}

export default configureStore;
