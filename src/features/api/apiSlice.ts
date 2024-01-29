import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// export const apiSlice = createApi({
//     reducerPath: 'api',
//     baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
//     tagTypes: ['Todos'],
//     endpoints: (builder) => ({
//         getTodos: builder.query({
//             query: () => '/todos',
//             // transformErrorResponse: res => {
//             //     if (Array.isArray(res)) {
//             //       return res.sort((a, b) => b.id - a.id);
//             //     }
//             //     return res;
//             //   },
//             // transformResponse: res => res.sort((a, b) => b.id - a.id),
//             providesTags: ['Todos']
//         }),
//         addTodo: builder.mutation({
//             query: (todo) => ({
//                 url: '/todos',
//                 method: 'POST',
//                 body: todo
//             }),
//             invalidatesTags: ['Todos']
//         }),
//         updateTodo: builder.mutation({
//             query: (todo) => ({
//                 url: `/todos/${todo.id}`,
//                 method: 'PATCH',
//                 body: todo
//             }),
//             invalidatesTags: ['Todos']
//         }),
//         deleteTodo: builder.mutation({
//             query: ({ id }) => ({
//                 url: `/todos/${id}`,
//                 method: 'DELETE'
//             }),
//             invalidatesTags: ['Todos']
//         }),
//     })
// })

// export const {
//     useGetTodosQuery,
//     useAddTodoMutation,
//     useUpdateTodoMutation,
//     useDeleteTodoMutation
// } = apiSlice

export const apiSlice = createApi({
    reducerPath: 'api', //optional
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
    tagTypes: ['Posts'],
    endpoints: (builder) => ({})
})