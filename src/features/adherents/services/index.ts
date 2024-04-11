import { ADHERENT_URL } from "@/utils/_constants";
import { getAccessToken } from "@/utils/_helper";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adherentApi = createApi({
  reducerPath: "api/adherents",
  baseQuery: fetchBaseQuery({
    baseUrl: ADHERENT_URL,
    prepareHeaders: (headers) => {
      const access_token = getAccessToken()
      if(access_token) {
        headers.set("Authorization", `Bearer ${access_token}`);
      }
      return headers
    }
  }),
  tagTypes: ["adherent"],

  endpoints: (build) => ({
    getAdherents: build.query<Adherent[], void>({
      query: () => "",
      providesTags: (result, error) => {
        return error ? [] : ["adherent"];
      },
      transformResponse: (response: Adherent[]) =>
        response.sort((a: Adherent, b: Adherent) => a.nom.localeCompare(b.nom)),
    }),

    getAdherentById: build.query<Adherent, string>({
      query: (id: string) => `/${id}`,
      providesTags: (result, error) => {
        return error ? [] : [{ type: "adherent", id: result?.id }];
      },
    }),

    createAdherent: build.mutation({
      query: (adherent: Adherent) => ({
        url: "",
        method: "POST",
        body: adherent,
      }),
      invalidatesTags: ["adherent"],
      transformResponse: (response: { data: Adherent }) => response.data,
    }),

    updateAdherent: build.mutation<Adherent, Adherent>({
      query: (adherent: Adherent) => ({
        url: `/${adherent.id}`,
        method: "PUT",
        body: adherent,
      }),
      invalidatesTags: (result, error) => {
        return error ? [] : [{ type: "adherent", id: result?.id }, "adherent"];
      },
    }),
  }),
});

export const {
  useGetAdherentsQuery,
  useCreateAdherentMutation,
  useGetAdherentByIdQuery,
  useUpdateAdherentMutation,
} = adherentApi;
