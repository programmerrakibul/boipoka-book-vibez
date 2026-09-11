import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksAPI = createApi({
  reducerPath: "booksAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/books",
  }),

  tagTypes: ["Books"],

  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => ({
        url: "/",
      }),

      providesTags: (result) =>
        result
          ? [
              { type: "Books", id: "LIST" },
              ...result.map(({ id }) => ({ type: "Books", id })),
            ]
          : { type: "Books", id: "LIST" },
    }),

    getBookById: builder.query({
      query: (id) => ({
        url: `/${id}`,
      }),

      providesTags: (_result, _error, id) => [{ type: "Books", id }],
    }),
  }),
});

export const { useGetBooksQuery, useGetBookByIdQuery } = booksAPI;
