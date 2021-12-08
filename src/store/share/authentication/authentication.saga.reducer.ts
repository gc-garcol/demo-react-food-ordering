import { FAILURE, REQUEST } from "store/share/action-type.util";
import { AUTHENTICATION_ACTION_TYPES as ACTION_TYPES } from "./authentication.action.type";

const initialState = {
  loading: false,
  account: {} as any
};

export type AuthenticationState = Readonly<typeof initialState>;

const handlers: any = {};

handlers[ACTION_TYPES.UPDATE_ATTRIBUTES] = (state: any, action: any) => {
  return {
    ...state,
    ...action.payload
  }
};

handlers[REQUEST(ACTION_TYPES.LOGIN)] = (state: any, action: any) => {
  return {
    ...state,
    loading: true
  }
};

handlers[FAILURE(ACTION_TYPES.LOGIN)] = (state: any, action: any) => {
  return {
    ...initialState
  }
};

const reducers = (state: AuthenticationState = initialState, action: any): AuthenticationState => {
  return handlers[action.type]?.(state, action) ?? state;
};

export default reducers;