const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const serverUrl = `${process.env.SERVER_LOCATION}${baseUrl}`;

export const authEndpoints = {
  LOGIN_API: `${baseUrl}/auth/login`,
  LOGOUT_API: `${baseUrl}/auth/logout`,
  FETCH_USER_API: `${baseUrl}/protected/profile`,
};

export const serverAPIs = {
  GET_USER_API: `${serverUrl}/protected/profile`,
};
