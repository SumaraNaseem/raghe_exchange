import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "../../config/axiosInstance"; // Ensure this is correctly set up
import { apiRoutes } from "../../utils/api-routes";

export const liveCasinoApi = createApi({
  reducerPath: "casinoApi",
  baseQuery: axiosBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    fetchCasinoList: builder.query({
      query: ({ page = 1, provider = "", type = "" }) => {
        const url =
          provider || type
            ? `${apiRoutes.liveCasino}?provider=${provider}&type=${type}`
            : `${apiRoutes.liveCasino}?page=${page}&provider=${provider}&type=${type}`;
        return { url, method: "GET" };
      },
      providesTags: (result, error, { page, provider, type }) => [
        { page, provider, type },
      ],
      transformResponse: (response) => {
        return response;
      },
    }),
  }),
});

export const { useFetchCasinoListQuery } = liveCasinoApi;
