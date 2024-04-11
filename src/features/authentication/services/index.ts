import { AUTH_URL } from "@/utils/_constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "api/auth",
  baseQuery: fetchBaseQuery({
    baseUrl: AUTH_URL,
  }),

  endpoints: (build) => ({
    registerUser: build.mutation({
      query: (user: RegisterType) => ({
        url: "/register",
        method: "POST",
        body: user,
      }),
    }),
    loginUser: build.mutation({
      query: (credentials: LoginType) => ({
        url: "/authenticate",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = authApi;
