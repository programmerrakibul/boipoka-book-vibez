import { createEntityAdapter } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const booksAdapter = createEntityAdapter({
  selectId: (book) => book.id,
  sortComparer: (a, b) => a.name.localeCompare(b.name)
});

const booksInitialState = booksAdapter.getInitialState();

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

      transformResponse: (response) => {
        return booksAdapter.setAll(booksInitialState, response);
      },

      providesTags: (result) =>
        result
          ? [
              { type: "Books", id: "LIST" },
              ...result.ids.map((id) => ({ type: "Books", id })),
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
