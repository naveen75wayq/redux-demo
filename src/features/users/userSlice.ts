import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import type { User } from "../../interfaces/interfaces";

const usersAdapter = createEntityAdapter();
const initialState = usersAdapter.getInitialState();

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUsers: builder.query({
            query: () => `/users`,
            transformResponse: (responseData:User[]) => {
                    // normalize the state
                    usersAdapter.setAll(initialState,responseData)
            },
            providesTags: (result: any, error, arg) => [
                { type: 'User', id: 'LIST' },
                ...(result ? result.ids.map((id: any) => ({ type: 'User', id })) : [])
            ]
        })
    })

    
})
export const {useGetUsersQuery} = userApiSlice
// returns the query result object
export const selectUsersResult = userApiSlice.endpoints.getUsers.select({})

// Creates memoized selector
const selectUsersData = createSelector(
    selectUsersResult,
    usersResult => usersResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllUsers,
    selectById: selectUserById,
    selectIds: selectUserIds
    // Pass in a selector that returns the posts slice of state
} = usersAdapter.getSelectors((state:any) => selectUsersData(state) ?? initialState)