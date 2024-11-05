import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "../../config/axiosInstance";
import { apiRoutes } from "../../utils/api-routes";

export const sportsApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    fetchItems: builder.query({
      query: (url) => ({ url: url || apiRoutes.sports, method: "GET" }),
      providesTags: (result, error, url) => [{ type: "Items", url }],
      transformResponse: (response) => {
        if (response?.data?.length > 0) {
          const data = response.data.map((match) => ({
            ...match,
            isSelected: false,
          }));
          return { ...response, data };
        }
        return response;
      },
    }),

    createItem: builder.mutation({
      query: (newItem) => ({
        url: "/items",
        method: "POST",
        data: newItem,
      }),
    }),

    updateItem: builder.mutation({
      async onQueryStarted(
        { matchId, queryKey, ...updatedItem },
        { dispatch }
      ) {
        try {
          dispatch(
            sportsApi.util.updateQueryData("fetchItems", queryKey, (draft) => {
              if (draft?.data) {
                const item = draft.data.find(
                  (item) => item.matchId === matchId
                );
                if (item) {
                  Object.assign(item, updatedItem);
                  item.isSelected = !item.isSelected;
                }
              }
            })
          );
        } catch (error) {
          console.error("Failed to update cache:", error);
        }
      },
    }),

    deleteItem: builder.mutation({
      query: (id) => ({
        url: `/items/${id}`,
        method: "DELETE",
      }),
      // Optionally add tags if needed
    }),
  }),
});

export const {
  useFetchItemsQuery,
  useCreateItemMutation,
  useUpdateItemMutation,
  useDeleteItemMutation,
} = sportsApi;
