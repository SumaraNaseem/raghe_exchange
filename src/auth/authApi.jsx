// services/authApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jdda5hq5pl.execute-api.eu-north-1.amazonaws.com/Stage' }), // Replace with your API base URL
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userData) => ({
        url: '/user-register', // Adjust the endpoint as necessary
        method: 'POST',
        body: userData,
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: '/user-login', // Adjust the endpoint as necessary
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

// Export hooks for usage in functional components
export const { useRegisterMutation, useLoginMutation } = authApi;
