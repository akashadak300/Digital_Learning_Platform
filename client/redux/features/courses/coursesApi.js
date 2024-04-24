import { apiSlice } from "../api/apiSlice";


export const coursesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createCourse: builder.mutation({
      query: (data) => ({
        url: "upload-course",
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
    getAllCourse: builder.query({
      query: (data) => ({
        url: "get-course",
        method: "GET",
        credentials: "include",
      }),
    }),
  }),
});

export const { useCreateCourseMutation, useGetAllCourseQuery } = coursesApi;