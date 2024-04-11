import { type ClassValue, clsx } from "clsx"
import { redirect } from "react-router-dom"
import { twMerge } from "tailwind-merge"
import { LS_TOKEN_KEY } from "./_constants"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function getAccessToken() {
  let tokens = localStorage.getItem(LS_TOKEN_KEY)
  if(tokens) {
    return JSON.parse(tokens)?.access_token
  }
  return null
}

export function checkAuth() {
  const token = getAccessToken();
  // If there is no token in
  if(!token) {
    return redirect( "/auth/login")
  }
  return null
}

export function checkUnAuth() {
  const token = getAccessToken();
  // If there is no token in
  if(token) {
    return redirect( "/adherents")
  }
  return null
}

export function logoutAction() {
  localStorage.removeItem(LS_TOKEN_KEY)
  return redirect("/auth/login")
}