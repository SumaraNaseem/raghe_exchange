import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "../../config/axiosInstance";
import { apiRoutes } from "../../utils/api-routes";

export const providerApi = createApi({
  reducerPath: "providerApi", // Make sure the reducerPath is unique
  baseQuery: axiosBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    fetchProvider: builder.query({
      query: (url) => ({ url: url || apiRoutes.providerList, method: "GET" }),
      providesTags: (result, error, url) => [{ type: "Provider", url }],
      transformResponse: (response) => response, // If transformation is needed, adjust here
    }),
  }),
});

export const { useFetchProviderQuery } = providerApi;
