import { FAILURE, REQUEST, SUCCESS } from "store/share/action-type.util";
import { LOGIN_TYPES as ACTION_TYPES } from "./login.action.type";

const initialState = {
  loading: false as boolean,
  username: "" as string,
  password: "" as string
}

const handlers: any = {};

handlers[REQUEST(ACTION_TYPES.LOGIN)] = (state: typeof initialState, action: any) => {
  return {
    ...state,
    loading: true
  }
};

handlers[FAILURE(ACTION_TYPES.LOGIN)] = (state: typeof initialState, action: any) => {
  return {
    ...state,
    ...action.payload,
    loading: true
  }
};

handlers[SUCCESS(ACTION_TYPES.LOGIN)] = (state: typeof initialState, action: any) => {
  return {
    ...initialState
  }
};

const reducers = (state: typeof initialState = initialState, action: any): any => {
  return handlers[action.type]?.(state, action) ?? state;
};

export default reducers;