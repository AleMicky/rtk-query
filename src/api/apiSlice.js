import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000'
    }),
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => '/tareas',
            providesTags: ["Tareas"],
            transformResponse: response => response.sort((a, b) => b.id - a.id)
        }),
        createTask: builder.mutation({
            query: (newTask) => ({
                url: '/tareas',
                method: 'POST',
                body: newTask
            }),
            invalidatesTags: ['Tareas']
        }),
        updateTask: builder.mutation({
            query: (updatedTask) => ({
                url: `/tareas/${updatedTask.id}`,
                method: "PATCH",
                body: updatedTask,
            }),
            invalidatesTags: ["Tareas"],
        }),
        deleteTask: builder.mutation({
            query: (id) => ({
                url: `/tareas/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Tareas']
        }),

    })
})

export const { useGetTasksQuery, useCreateTaskMutation, useDeleteTaskMutation, useUpdateTaskMutation } = apiSlice;