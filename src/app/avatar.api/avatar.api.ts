import React from "react";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAvatarFetch } from "./avatarFetch.type";

export const avatarApi = createApi({
  reducerPath: "avatarApi",
  baseQuery: fetchBaseQuery({baseUrl: "https://api.github.com/users/"}),
  endpoints: (builder) => ({
    getAvatarByLogin: builder.query<IAvatarFetch, string>({
      query: (login: string) => `${login}`
    })
  })
})

export const { useGetAvatarByLoginQuery } = avatarApi;