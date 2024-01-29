import { apiSlice } from "../api/apiSlice";


// extende api slice
export const extendedApiSlice = apiSlice.injectEndpoints({
    // now put the endpoint here
    endpoints: (builder) => ({
        
    })
})