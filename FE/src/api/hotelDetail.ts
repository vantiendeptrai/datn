import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const HotelDetailApi = createApi({
  reducerPath: "hotel",
  tagTypes: ["HotelDetail"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/",
  }),
  endpoints: (builder) => ({
    getHotelDetailById: builder.query<any, number | string>({
      query: (id) => `/hotel/${id}`,
      providesTags: ["HotelDetail"],
    }),
  }),
});

export const { useGetHotelDetailByIdQuery } = HotelDetailApi;
