import { getBesUrl } from "@/lib/utils";

const baseUrl = getBesUrl();
const serverUrl = `${process.env.SERVER_LOCATION}/api`;

export const authEndpoints = {
  LOGIN_API: `${baseUrl}/auth/login`,
  LOGOUT_API: `${baseUrl}/auth/logout`,
  FETCH_USER_API: `${baseUrl}/protected/profile`,
};

export const serverAPIs = {
  GET_USER_API: `${serverUrl}/protected/profile`,
};
