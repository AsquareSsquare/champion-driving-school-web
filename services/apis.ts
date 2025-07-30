import { getBesUrl } from "@/lib/utils";

const baseUrl = getBesUrl();
const serverUrl = `${process.env.SERVER_LOCATION}/api`;

export const authEndpoints = {
  LOGIN_API: `${baseUrl}/auth/login`,
  LOGOUT_API: `${baseUrl}/auth/logout`,
  FETCH_USER_API: `${baseUrl}/protected/profile`,
};

export const contactEndpoints = {
  UPDATE_CONTACTS_API: `${baseUrl}/admin/contacts`,
};

export const openEndpoints = {
  SUBMIT_CONTACT_API: `${baseUrl}/contact`,
};

export const serverAPIs = {
  GET_USER_API: `${serverUrl}/protected/profile`,

  // ADMIN
  GET_ALL_CONTACTS_API: `${serverUrl}/admin/contacts`,
};
