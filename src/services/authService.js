import jwt_decode from "jwt-decode";
import http from "./httpService";

const apiEndpoint = "/auth";

http.setJwt(getJwt());

export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndpoint, { email, password });
  localStorage.setItem("token", jwt);
}

export function logout() {
  localStorage.removeItem("token");
}

export function loginWithJwt(jwt) {
  localStorage.setItem("token", jwt);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem("token");
    return jwt_decode(jwt);
  } catch (error) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem("token");
}

export default {
  login,
  logout,
  loginWithJwt,
  getCurrentUser,
  getJwt
};
