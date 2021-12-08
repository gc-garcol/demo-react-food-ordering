import { LOGIN_TYPES } from "./login.action.type";

export const login = (username: string, password: string) => ({
  type: LOGIN_TYPES.LOGIN,
  payload: { username, password }
});
