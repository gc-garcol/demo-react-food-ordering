import { AUTHENTICATION_ACTION_TYPES } from "./authentication.action.type";

export const updateAuthentication = (attributeName: string, value: any) => ({
  type: AUTHENTICATION_ACTION_TYPES.UPDATE_ATTRIBUTES,
  payload: { attributeName, value }
});