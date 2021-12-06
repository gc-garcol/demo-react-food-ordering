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

const reducers = (state: AuthenticationState = initialState, action: any): AuthenticationState => {
  return handlers[action.type]?.(state, action) ?? state;
};

export default reducers;