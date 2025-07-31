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

export const learnerEndpoints = {
  SUBMIT_LEARNER_DETAILS_API: `${baseUrl}/protected/students`,
};

export const licenseEndpoints = {
  SUBMIT_LICENSE_DETAILS_API: `${baseUrl}/protected/license-documents`,
};

export const paymentEndpoints = {
  SUBMIT_PAYMENT_DETAILS_API: `${baseUrl}/protected/payments`,
};

export const branchEndpoints = {
  CREATE_BRANCH_API: `${baseUrl}/protected/branches`,
};

export const staffEndpoints = {
  ADD_STAFF_API: `${baseUrl}/auth/signup`,
};

export const openEndpoints = {
  SUBMIT_CONTACT_API: `${baseUrl}/contact`,
};

export const serverAPIs = {
  GET_USER_API: `${serverUrl}/protected/profile`,

  // Branch
  GET_ALL_BRANCHES_API: `${serverUrl}/protected/branches`,

  // ADMIN
  GET_ALL_CONTACTS_API: `${serverUrl}/admin/contacts`,
};
